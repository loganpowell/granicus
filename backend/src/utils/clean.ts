/**
 * simple partial applicator that takes a function and its
 * `first` argument, returning a new function that takes the
 * `rest` of the arguments and applies the function to the
 * `first` and `rest`
 */
export const partial = (fn, first) => (...rest) => fn(first, ...rest)

/**
 * takes transformation function: fn(key, value) and an
 * input object. Returns a new object with the the
 * transformation applied to the keys of the input object
 */
export const mapKeys = (fn, obj) => {
    let out = {}
    Object.entries(obj).forEach(([k, v]) => (out[fn(k, v)] = v))
    return out
}

/**
 * removes any question marks from object keys (for Tableau)
 * ~~also removes _links entry~~
 */
export const renameKeysWQMarks = obj => {
    const cleaned = mapKeys((k, v) => {
        let [clean, x] = k.split("?")
        return clean
    }, obj)
    // @ts-ignore
    //const { _links, ...out } = cleaned
    //return out
    return cleaned
}

/**
 * takes a source object and a variable number of keys to be
 * pruned out of the source object
 */
export const pruneKVPairs = (obj, ...keys) => {
    let out = {}
    Object.entries(obj).forEach(([k, v]) => {
        if (keys.some(x => x === k)) return
        else return (out[k] = v)
    })
    return out
}

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
]

export const keys2prune_link = ["subject", "sent_at", "sender_email", "_links"]
