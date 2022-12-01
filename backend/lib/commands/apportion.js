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
import { registerCMD } from "@-0/spool";
import { setInUnsafe, getInUnsafe, setInManyUnsafe } from "@thi.ng/paths";
import fromEntries from "object.fromentries";
import { pruneKVPairs } from "../utils";
if (!Object.fromEntries)
    fromEntries.shim();
export const key_partition = (obj, splicer = [-1], sep = "_") => {
    let out = {};
    Object.entries(obj).forEach(([k, v]) => {
        let full_path = k.split(sep);
        let primary_key = full_path.splice(...splicer).join(sep);
        let secondary_key = full_path.join(sep);
        let lens = secondary_key ? [primary_key, secondary_key] : primary_key;
        out = setInUnsafe(out, lens, v);
    });
    return out;
};
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
};
export const subs_proportions = (subs_obj = subs_default) => {
    let { direct, overlay, signup, upload, other, total, deleted, all_network, net } = subs_obj;
    const components = [direct, overlay, signup, upload, other, all_network];
    const sum = (...xs) => {
        let res = 0;
        xs.forEach(x => (res += x));
        return res;
    };
    const denom = sum(...components);
    let proportions = {};
    Object.entries(subs_obj).forEach(([k, v]) => {
        return (proportions[k] = v / denom);
    });
    return pruneKVPairs(proportions, "total", "deleted", "net");
};
export const apportion_subs = (_a, daily_report) => {
    var { _links } = _a, subsummary = __rest(_a, ["_links"]);
    return Object.entries(daily_report).reduce((a, [k, v], i) => {
        const { portions = {} } = a;
        const { topics = [], detail = {}, links = [] } = v;
        const altered = setInManyUnsafe(a, [k, "detail"], detail, [k, "topics"], topics.map(topic => {
            let _a = key_partition(topic, [
                -2,
                2,
            ]), { this_period = { new_subscriptions: 0 } } = _a, rest = __rest(_a, ["this_period"]);
            const has_any = getInUnsafe(this_period, ["new_subscriptions"]);
            this_period = setInUnsafe(this_period, ["allocated"], Object.fromEntries(Object.entries(portions).map(([origin, percent]) => {
                return [origin, ~~(percent * this_period.new_subscriptions)];
            })));
            return Object.assign(Object.assign({}, rest), { this_period });
        }), [k, "links"], links.sort((_old, _new) => _new["unique_click_count"] - _new["unique_click_count"]));
        return Object.assign(Object.assign({}, a), altered);
    }, {
        portions: subs_proportions(key_partition(subsummary)["subscriptions"]),
        summary: subsummary,
    });
};
export const APPORTION_CMD = registerCMD({
    sub$: "APPORTION_CMD",
    args: daily_payload => {
        const { subssummary, days_ago, days_todo, details, links } = daily_payload, entries = __rest(daily_payload, ["subssummary", "days_ago", "days_todo", "details", "links"]);
        const res = apportion_subs(subssummary, entries);
        return Object.assign({ days_ago, days_todo }, res);
    },
});
