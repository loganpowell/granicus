import fetch from "node-fetch"
import dotenv from "dotenv"
import { getInUnsafe, mutInUnsafe, exists } from "@thi.ng/paths"

import { genDateFromDateMinusDays, getDaysDiffFromDates, firstEmailDate } from "../utils"

dotenv.config()

export const GD_ROOT_URL = "https://api.govdelivery.com"
export const GD_BASE_URL = (account = 11723) =>
    `${GD_ROOT_URL}/api/v2${(account && `/accounts/${account}`) || ""}`

export const genGranicusCall = ({
    endpoint = "reports/bulletins",
    account = 11723,
    timewindow = [],
    page = 0,
    topics = [],
    days_prior = 0,
    months_prior = 0,
}) => {
    const [beg, end] = timewindow
    const params =
        (!!(page || topics.length || days_prior || timewindow.length || months_prior) && "?") || ""
    const root = `${GD_BASE_URL(account)}/${endpoint}${params}`
    const inWindow = end ? `start_date=${beg}&end_date=${end}` : ""
    const forTopics = topics.length ? topics.map(t => `topic%5B%5D=${t}`).join("&") : ""
    const days = days_prior ? `&days=${days_prior}` : ""
    const pages = page ? `&page=${page}` : ""
    return root + inWindow + forTopics + days + pages
}

export const fetch_opts_GD = {
    method: "GET",
    headers: {
        "x-auth-token": process.env.GD_KEY,
    },
}

//////// GOVDELIVERY BULLETINS ////////////

export const fetchGDBulletinsInWindow = (beg, end) =>
    fetch(
        genGranicusCall({
            timewindow: [beg, end],
        }),
        fetch_opts_GD
    )
        .then(r => r.json())
        //.then(console.log)
        .catch(console.error)

/**
 * recurring fetcher
 * if res.length === page_limit (e.g., 20)
 *  - recur with accumulator
 */
export const fetchReducer = acc => async (URL, page_limit = 20) => {
    const result = await fetch(URL)
}

export const GD_age_days = getDaysDiffFromDates(firstEmailDate, new Date())

export const GD_date = days_ago => genDateFromDateMinusDays(new Date(), days_ago)

export const gen_args = (endpoint, days_ago = GD_age_days, page = 0) => ({
    account: 11723,
    endpoint,
    page,
    timewindow: [GD_date(days_ago), GD_date(days_ago)],
    topics: [],
    days_prior: 0,
    months_prior: 0,
})

/**
 * a path into the payload wherein the bulletin ID resides
 * as part of a string (further processed in `compute_prop`)
 */
export const GD_ID_path = ["_links", "self", "href"]

/**
 *
 * targets a one part of the path within a string within an
 * object that's part of the overall payload (collection),
 * which becomes the key under which the item is gathered
 */
export const snip_id = (obj, str_target, id_path = GD_ID_path) =>
    getInUnsafe(obj, id_path).split("/").slice(str_target)[0].split(".")[0]

// getting an error at age = 1000

const log = console.log
/**
 * MUTATING Accumulator Updating 'reducing' (processing)
 * function. Takes a key to construct the lens/path into the
 * target object (accumulator), where mutations will need to
 * occur and returns a mutative function that is provided
 * every element of the collection (forEaches over the
 * items) to allow for pushing into the accumulator
 */
export const reducer = (a, key, snip_idx, mutate) => async (c, i, d) => {
    const ID = snip_id(c, snip_idx)
    const lens = [ID, key]
    const mutator = () => mutate(a, lens, c)
    // full path exists
    if (exists(a, lens)) {
        return await mutator()
    }
    // ID is present, but full lens/path needs be established
    if (exists(a, ID)) {
        a[ID] = { ...a[ID], [key]: [] }
        return await mutator()
    }
    // virgin/no elements of path established
    a[ID] = { [key]: [] }
    return await mutator()
}

/**
 * function that constructs a fetch call (Granicus URL),
 * pulls the payload, counts the number of items in the
 * collection (targed via `coll_path`) and applies a
 * reduction function on the collection - mutating an
 * accumulator that's shared between stacks (recursive). If
 * the collection contains 20 items, it is assumed to be
 * paginated and - therefore - a recurrence of the function
 * is called with the page parameter of the fetch call
 * incremented until 'exhaustion' (collection contains < 20
 * items -> no more pages of results)
 */
export const exhaustPagesGvD = async ({
    endpoint = "reports/bulletins",
    coll_path = "bulletin_activity_details" || ["bulletin_activity_details"],
    days_ago = GD_age_days,
    page = 1,
    acc = {},
    key = "detail",
    snip_idx = -1,
    // default = set a new value at the lens
    mutation = (a, lens, c) => mutInUnsafe(a, lens, c),
    log = false,
    // derivative fetch config (initially for topics of
    // bulletins by id, can be a recursive call ;)
    augment = x => x,
}) => {
    const URL = genGranicusCall(gen_args(endpoint, days_ago, page))

    if (log) console.log("fetching page", page, "for", coll_path)

    const result = await fetch(URL, fetch_opts_GD)
        .then(r => r.json())
        .catch(console.error)

    const collection = getInUnsafe(result, coll_path) || []

    const length = collection.length || 0

    const mutate_acc = reducer(acc, key, snip_idx, mutation)

    // process each item in the collection
    collection.forEach(mutate_acc)

    if (length < 20) return acc
    else
        return await exhaustPagesGvD({
            endpoint,
            coll_path,
            days_ago,
            page: page + 1,
            acc,
            key,
            snip_idx,
            mutation,
            log,
            augment,
        })
}

export const fetchTopicsForBulletinByID = async (id, days_ago = 0) => {
    const T_URL = genGranicusCall({
        endpoint: `bulletins/${id}/topics`,
        account: 0,
    })

    //console.log("fetching:", T_URL)

    const S_URL = t_id => genGranicusCall(gen_args(`reports/topics/${t_id}`, days_ago))

    const topics = await fetch(T_URL, fetch_opts_GD)
        .then(r => r.json() || [])
        .catch(console.error)

    const summary =
        topics.items.map(async topic => {
            const subscriber_report = await fetch(S_URL(topic.id), fetch_opts_GD)
                .then(r => r.json() || {})
                .catch(console.error)
            const { ["_links"]: __links, ...subs } = subscriber_report
            const { _links, ...rest } = topic
            // ID COULD BE ALTERED HERE
            return { ...rest, ...subs }
        }) || []

    const results = await Promise.all(summary)
    //console.log("RESULTS:", results)
    return results
}

//topics_endpoint(40865745) //?

////export const spinoff = id => {}

//fetch(topics_endpoint(40865745), fetch_opts_GD)
//  .then(r => r.json())
//  .catch(console.error) //?
