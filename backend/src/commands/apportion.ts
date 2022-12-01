import { registerCMD } from "@-0/spool"
import { setInUnsafe, getInUnsafe, setInManyUnsafe } from "@thi.ng/paths"
import fromEntries from "object.fromentries"
import { pruneKVPairs } from "../utils"

// @ts-ignore
if (!Object.fromEntries) fromEntries.shim()

/**
 *
 * @example
 * key_partition({ some_key: 1, another_key: 2})
 * //? { key: { some: 1, another: 2} }
 *
 * @example
 * key_partition({ "he-has-a-key": 1, "she-has-a-boat": 2 }, [-3, 2], "-")
 * //? { "has-a": { "he-key": 1, "she-boat": 2 } }
 *
 */
export const key_partition = (obj, splicer = [-1], sep = "_") => {
    let out = {}
    Object.entries(obj).forEach(([k, v]) => {
        let full_path = k.split(sep)
        // @ts-ignore
        let primary_key = full_path.splice(...splicer).join(sep)
        let secondary_key = full_path.join(sep)
        let lens = secondary_key ? [primary_key, secondary_key] : primary_key
        out = setInUnsafe(out, lens, v)
    })
    return out
}

const subs_default = {
    direct: 0,
    overlay: 0,
    signup: 0,
    upload: 0,
    other: 0,
    total: 0,
    deleted: 0,
    all_network: 0,
    net: 0,
}

/**
 * takes the subscriber report payload for a given period
 * and converts into normalized components
 *
 * @example
 * subs_proportions({
 *   direct: 7015,
 *   overlay: 292,
 *   signup: 0,
 *   upload: 13220,
 *   other: 0,
 *   total: 6175151,
 *   deleted: 30442,
 *   all_network: 31901,
 *   net: 21987,
 * })
 * //?
 * { direct: 0.133,
 *   overlay: 0.005,
 *   signup: 0,
 *   upload: 0.252,
 *   other: 0,
 *   all_network: 0.608 }
 */
export const subs_proportions = (subs_obj = subs_default) => {
    let { direct, overlay, signup, upload, other, total, deleted, all_network, net } = subs_obj
    // sum together for total
    const components = [direct, overlay, signup, upload, other, all_network]
    const sum = (...xs) => {
        let res = 0
        xs.forEach(x => (res += x))
        return res
    }
    const denom = sum(...components)
    let proportions = {}
    Object.entries(subs_obj).forEach(([k, v]) => {
        // @ts-ignore
        return (proportions[k] = v / denom)
    })
    return pruneKVPairs(proportions, "total", "deleted", "net")
}

/**
 * takes the subscriber report payload for a given period _and_ the same
 * period's bulletin detail report and apportions each bulletins new subscribers
 * (via their collection of topics activity for that period) based on the
 * proportions represented by the subscriber report.
 */
export const apportion_subs = ({ _links, ...subsummary }, daily_report) =>
    Object.entries(daily_report).reduce(
        (a, [k, v], i) => {
            const { portions = {} } = a
            // @ts-ignore
            const { topics = [], detail = {}, links = [] } = v
            // reconstruct object from { k, { v } }
            const altered = setInManyUnsafe(
                a,
                [k, "detail"],
                detail,
                [k, "topics"],
                topics.map(topic => {
                    // @ts-ignore
                    let { this_period = { new_subscriptions: 0 }, ...rest } = key_partition(topic, [
                        -2,
                        2,
                    ])
                    //log("this_period", this_period)
                    const has_any = getInUnsafe(this_period, ["new_subscriptions"])
                    this_period = setInUnsafe(
                        this_period,
                        ["allocated"],
                        // @ts-ignore
                        Object.fromEntries(
                            Object.entries(portions).map(([origin, percent]) => {
                                // @ts-ignore round to nearest int (~~)
                                return [origin, ~~(percent * this_period.new_subscriptions)]
                            })
                        )
                    )
                    return { ...rest, this_period }
                }),
                [k, "links"],
                links.sort((_old, _new) => _new["unique_click_count"] - _new["unique_click_count"])
            )
            return { ...a, ...altered }
        },
        // init the accumulator with the initial subscriber report payload
        {
            portions: subs_proportions(key_partition(subsummary)["subscriptions"]),
            summary: subsummary,
        }
    )

export const APPORTION_CMD = registerCMD({
    sub$: "APPORTION_CMD",
    args: daily_payload => {
        const { subssummary, days_ago, days_todo, details, links, ...entries } = daily_payload
        //console.log("subssummary:", subssummary)

        const res = apportion_subs(subssummary, entries)
        //console.log("result:", res)
        return { days_ago, days_todo, ...res }
    },
})
