export const partial = (fn, first) => (...rest) => fn(first, ...rest);
export const mapKeys = (fn, obj) => {
    let out = {};
    Object.entries(obj).forEach(([k, v]) => (out[fn(k, v)] = v));
    return out;
};
export const renameKeysWQMarks = obj => {
    const cleaned = mapKeys((k, v) => {
        let [clean, x] = k.split("?");
        return clean;
    }, obj);
    return cleaned;
};
export const pruneKVPairs = (obj, ...keys) => {
    let out = {};
    Object.entries(obj).forEach(([k, v]) => {
        if (keys.some(x => x === k))
            return;
        else
            return (out[k] = v);
    });
    return out;
};
export const keys2prune_detail = [
    "wireless_recipients",
    "wireless_delivered",
    "wireless_failed_count",
    "publish_to_facebook",
    "publish_to_twitter",
    "publish_to_rss?",
    "bulletin_visibility?",
    "wireless_unique_clicks",
    "wireless_nonunique_clicks",
    "facebook_nonunique_clicks",
    "twitter_nonunique_clicks",
    "_links",
];
export const keys2prune_link = ["subject", "sent_at", "sender_email", "_links"];
