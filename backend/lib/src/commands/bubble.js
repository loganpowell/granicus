var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { mutInUnsafe } from "@thi.ng/paths";
import { registerCMD } from "@-0/spool";
import { gather } from "../utils";
export const bubble = (daily_payload = { 333: { detail: {}, links: [], topics: [] } }) => {
    const { portions, summary, days_ago, days_todo, details, subssummary, links } = daily_payload, entries = __rest(daily_payload, ["portions", "summary", "days_ago", "days_todo", "details", "subssummary", "links"]);
    let res = {};
    Object.entries(entries).forEach(([ID, { detail, links, topics }]) => {
        mutInUnsafe(res, [ID], { detail: {}, links: [], topics: [] });
        mutInUnsafe(res, [ID, "detail"], Object.assign(Object.assign({}, (detail || {})), gather(links || [])));
        mutInUnsafe(res, [ID, "links"], links);
        mutInUnsafe(res, [ID, "topics"], topics);
    });
    return res;
};
export const BUBBLE_CMD = registerCMD({
    sub$: "BUBBLE_CMD",
    args: daily_payload => bubble(daily_payload),
});
