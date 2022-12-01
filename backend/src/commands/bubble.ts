import { mutInUnsafe } from "@thi.ng/paths"

import { registerCMD } from "@-0/spool"

import { gather } from "../utils"

export const bubble = (daily_payload = { 333: { detail: {}, links: [], topics: [] } }) => {
    // prettier-ignore
    // @ts-ignore
    // clip out root keys of objects that are not numbered (id'd) entries:
    const { portions, summary, days_ago, days_todo, details, subssummary, links, ...entries } = daily_payload
    let res = {}
    Object.entries(entries).forEach(([ID, { detail, links, topics }]) => {
        //res["detail"] = detail || {}
        mutInUnsafe(res, [ID], { detail: {}, links: [], topics: [] })
        mutInUnsafe(res, [ID, "detail"], { ...(detail || {}), ...gather(links || []) })
        mutInUnsafe(res, [ID, "links"], links)
        mutInUnsafe(res, [ID, "topics"], topics)
    })
    return res
}

export const BUBBLE_CMD = registerCMD({
    sub$: "BUBBLE_CMD",
    args: daily_payload => bubble(daily_payload),
})
