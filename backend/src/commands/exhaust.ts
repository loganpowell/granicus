import { registerCMD } from "@-0/spool"
import fetch from "node-fetch"
import { getInUnsafe, exists, mutInUnsafe } from "@thi.ng/paths"

import {
    genGranicusCall,
    fetch_opts_GD,
    GD_ID_path,
    snip_id,
    gen_args,
    fetchTopicsForBulletinByID,
} from "../granicus/fetching"

import { pruneKVPairs, keys2prune_detail, keys2prune_link } from "../utils"

/*
() => todos[id]["links"].push({
    id: snip_id(_links, -1, ["self", "href"]),
    ...pruneKVPairs(link, ...keys2prune_link),
  })

  */

/**
 * Takes in
 * - fetch arguments (url and options object)
 * - a predicated function evaluated on the response
 *   (.json()'ed) to test if exhaustFetch should be called
 *   again with some alterations to the arguments
 * - a function that alters the recursive args if predicate
 *   returns truthy
 * - an initial accumulator
 * - a reduction function that is applied (akin to array
 *   reducer) over payloads from the recursive fetching loop
 *   (instead of the elements from an array)
 * - a logging function that - if supplied - can be called
 *   on every iteration
 */
export const exhaustFetch = async ({
    url = "",
    fetch_opts = {},
    // prettier-ignore
    recur_cond = (res) => (true || false),
    re_args_xf = (res, itr, { url, fetch_opts, recur_cond }) => ({ url, fetch_opts, recur_cond }),
    reduction = (acc, res, itr) => ({ ...acc, ...res }),
    acc = {} || [],
    log = false,
    itr = 1,
}) => {
    const result = await fetch(url, fetch_opts)
        .then(r => r.json() || {})
        .catch(console.error)

    //@ts-ignore
    if (log) log(acc, result, itr)

    if (recur_cond(result)) {
        const resolved = await exhaustFetch({
            ...re_args_xf(result, itr, {
                url,
                fetch_opts,
                recur_cond,
            }),
            log,
            re_args_xf,
            reduction,
            acc: await reduction(acc, result, itr),
            itr: itr + 1,
        })
        return resolved
    } else {
        return await reduction(acc, result, itr)
    }
}

/**
 * beats a path for the injection of data into an
 * accumulator so undefined sections of a path don't cause
 * bail-out of insertion
 */
export const inject = (acc, lens, thunk) => {
    const [id, path] = lens
    if (exists(acc, lens)) {
        //log("lens exists", link)
        thunk()
        return
    } else if (!exists(acc, lens) && exists(acc, id)) {
        //log("id exiss", link)
        acc[id] = { ...acc[id], [path]: null }
        thunk()
        return
    } else {
        //log("establishing lens", link)
        acc[id] = { [path]: null }
        thunk()
        return
    }
}

export const exhaustFetchGD_details = async days_ago => {
    const resolved = await exhaustFetch({
        url: genGranicusCall(gen_args("reports/bulletins", days_ago)),
        fetch_opts: fetch_opts_GD,
        reduction: async (acc, res) => {
            //const _acc = await acc
            const targets = res["bulletin_activity_details"] || []
            //let todos = { ..._acc } // FIXME: overwriting promises?
            //console.log("todos", todos)
            const results = await targets.reduce(async (_acc, detail) => {
                const todos = await _acc
                const href = getInUnsafe(detail, GD_ID_path)
                const id = href.split("/").slice(-1)[0].split(".")[0]
                const topics = await fetchTopicsForBulletinByID(id, days_ago)
                //console.log("TOPICS:", topics, "for bulletin:", id)
                const todo1 = () => {
                    const _detail = {
                        id,
                        ...pruneKVPairs(detail, ...keys2prune_detail),
                        percent_success: parseFloat(detail.percent_success),
                        percent_emails_delivered: parseFloat(detail.percent_emails_delivered),
                        percent_opened: parseFloat(detail.percent_opened),
                        click_rate: parseFloat(detail.click_rate),
                    }
                    //log("detail", _detail)
                    //todos[id]["detail"] = _detail
                    mutInUnsafe(todos, [id, "detail"], _detail)
                }
                const todo2 = () => {
                    //console.log("topics:", topics)
                    //todos[id]["topics"] = topics
                    mutInUnsafe(todos, [id, "topics"], topics)
                }

                inject(todos, [id, "detail"], todo1)
                inject(todos, [id, "topics"], todo2)
                // smear into the nested accumulator
                return { ..._acc, ...todos }
            }, Promise.resolve({}))
            // smear into higher-order accumulator (inter-exhaust fetch)
            return { ...acc, ...results }
        },
        recur_cond: res => {
            const length = (res["bulletin_activity_details"] || []).length
            //console.log("length:", length)
            if (length === 20) return true
            else return false
        },
        re_args_xf: (res, itr, args) => ({
            ...args,
            url: genGranicusCall(gen_args("reports/bulletins", days_ago, itr + 1)),
        }),
        // @ts-ignore
        //log: (acc, cur, itr) => console.log("iteration:", itr, "length", cur.length),
    })
    return resolved
}

const log = console.log

export const exhaustFetchGD_links = async days_ago => {
    const resolved = await exhaustFetch({
        url: genGranicusCall(gen_args("reports/bulletins/links", days_ago)),
        fetch_opts: fetch_opts_GD,
        reduction: async (acc, res, itr) => {
            const links = res["bulletins_links_details"] || []
            let todos = { ...acc }
            links.forEach(link => {
                const { _links } = link
                const href = getInUnsafe(link, GD_ID_path)
                //               SNIP INDEX = -3 🔎
                const id = href.split("/").slice(-3)[0].split(".")[0]
                const todo = () => {
                    if (!todos[id]["links"]) todos[id]["links"] = []

                    todos[id]["links"].push({
                        id: snip_id(_links, -1, ["self", "href"]),
                        ...pruneKVPairs(link, ...keys2prune_link),
                    })
                }
                inject(todos, [id, "links"], todo)
            })
            return todos
        },
        recur_cond: res => {
            const length = (res["bulletins_links_details"] || []).length
            //console.log("length:", length)

            if (length === 20) return true
            else return false
        },
        re_args_xf: (res, itr, args) => ({
            ...args,
            url: genGranicusCall(gen_args("reports/bulletins/links", days_ago, itr + 1)),
        }),
        //log: (...xs) => console.log("iteration:", ...xs),
    })
    return resolved
}

// details ///////////////////////////////////////////////
//
//        888             d8             ,e, 888
//   e88~\888  e88~~8e  _d88__   /~~~8e   "  888  d88~\
//  d888  888 d888  88b  888         88b 888 888 C888
//  8888  888 8888__888  888    e88~-888 888 888  Y88b
//  Y888  888 Y888    ,  888   C888  888 888 888   888D
//   "88_/888  "88___/   "88_/  "88_-888 888 888 \_88P
//
//
////////////////////////////////////////////////// details

export const EXHAUST_PAGES_DETAILS_CMD = registerCMD({
    sub$: "EXHAUST_PAGES_DETAILS_CMD",
    args: ({ days_ago }) => exhaustFetchGD_details(days_ago),
    erro: (acc, err) => (console.error(err), acc),
    reso: (acc, res) => ({ ...acc, details: res }),
})

// links ///////////////////////////////////////////////
//
//  888 ,e,          888   _
//  888  "  888-~88e 888 e~ ~   d88~\
//  888 888 888  888 888d8b    C888
//  888 888 888  888 888Y88b    Y88b
//  888 888 888  888 888 Y88b    888D
//  888 888 888  888 888  Y88b \_88P
//
//
////////////////////////////////////////////////// links

export const EXHAUST_PAGES_LINKS_CMD = registerCMD({
    sub$: "EXHAUST_PAGES_LINKS_CMD",
    args: ({ days_ago }) => exhaustFetchGD_links(days_ago),
    erro: (acc, err) => (console.error(err), acc),
    reso: (acc, res) => ({ ...acc, links: res }),
})

/**
 * href:
        "/api/v2/accounts/11723/reports/subscriber_activity/summary?end_date=2019-12-04&start_date=2019-12-04",
 */
export const GET_SUBSSUMMARY_CMD = registerCMD({
    sub$: "GET_SUBSSUMMARY_CMD",
    args: ({ days_ago }) =>
        fetch(
            genGranicusCall(gen_args("reports/subscriber_activity/summary", days_ago)),
            fetch_opts_GD
        )
            .then(r => r.json())
            .catch(console.error),
    erro: (acc, err) => (console.error(err), acc),
    reso: (acc, res) => ({ ...acc, subssummary: res }),
})
