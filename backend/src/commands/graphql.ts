import { registerCMD } from "@-0/spool"
import { getIn } from "@thi.ng/paths"
//import { Channel } from "@thi.ng/csp"

import { genGranicusDate, grafetch, log } from "../utils"

import {
    createBulletin,
    createBulletinTopic,
    createCampaign,
    createTopic,
    createSender,
    createAccumulator,
    createSubsSummary,
    updateAccumulator,
    updateSubsSummary,
    updateBulletinTopic,
    updateBulletin,
} from "../graphql/mutations"

import {
    listCampaigns,
    getAccumulator,
    getCampaign,
    getSender,
    getTopic,
    getSubsSummary,
} from "../graphql/queries"

/**
 * checks to see if the campaign is already stored in the DB in a speedier
 * (hackier) manner by checking against a dedicated DB entry for tracking the
 * existing entries. If it doesn't exist, it saves it
 */
const saveCampaign = async (acc_update_sets, entry) => {
    const { all_campaigns } = acc_update_sets
    const { detail } = entry // aka `v` from [k, v]
    const { utm_campaign } = detail
    const campaign_id = utm_campaign || "NA"

    let updated_campaigns = [...all_campaigns]

    if (!all_campaigns.has(campaign_id)) {
        log(`Campaign ${campaign_id} not in Accumulator. Checking DB...`)

        // Step 2: Check if it's in the DB, but not in the accumulator
        return grafetch({
            operation: getCampaign,
            vars_obj: { id: campaign_id },
        }).then(c => {
            const id = getIn(c, ["data", "getCampaign", "id"])
            if (!id) {
                log(`Campaign ${campaign_id} not in DB. Creating ...`)
                return grafetch({
                    operation: createCampaign,
                    vars_obj: { input: { id: campaign_id } },
                }).then(c => {
                    updated_campaigns.push(campaign_id)
                    log(`Campaign ${campaign_id} added to DB. Accumulator Updated`)
                    return updated_campaigns
                })
            }
            updated_campaigns.push(campaign_id)
            log("Campaign already in DB:", campaign_id, ". Accumulator Updated")
            return updated_campaigns
        })
    }
    log("✔ Campaign alread in Accumulator:", campaign_id)
    return updated_campaigns
}

/**
 * like saveCampaign, but for senders
 */
const saveSender = async (acc_update_sets, entry) => {
    const { all_senders } = acc_update_sets
    const { detail } = entry // aka `v` from [k, v]
    const { sender_email = "unavailable" } = detail

    let updated_senders = [...all_senders]

    if (!all_senders.has(sender_email)) {
        log(`Sender ${sender_email} not in Accumulator. Checking DB...`)

        return grafetch({
            operation: getSender,
            vars_obj: { id: sender_email },
        }).then(s => {
            const id = getIn(s, ["data", "getSender", "id"])
            if (!id) {
                log(`Sender ${sender_email} not in DB. Creating...`)
                return grafetch({
                    operation: createSender,
                    vars_obj: { input: { id: sender_email } },
                }).then(s => {
                    const id = getIn(s, ["data", "createSender", "id"])
                    log("Sender Created", id)
                    updated_senders.push(id)

                    log("Sender added to Accumulator:", id)
                    return updated_senders
                })
            }
            updated_senders.push(sender_email)
            log("Sender in DB:", sender_email, ". Accumulator Updated")
            return updated_senders
        })
    }

    // Step 1: Else return the acc without any alterations

    log("✔ Sender already in Accumulator:", sender_email)
    return updated_senders
}

/**
 * for each day, save the subscribers/subscriptions summary. Allow updates for
 * the sliding window
 */
const saveSummary = async (created_at, summary) => {
    const day = genGranicusDate(new Date(created_at))
    return grafetch({
        operation: getSubsSummary,
        vars_obj: { id: day },
    }).then(s => {
        const id = getIn(s, ["data", "getSubsSummary", "id"])
        if (!id) {
            // no summary for the day, create it
            return grafetch({
                operation: createSubsSummary,
                vars_obj: { input: { id: day, ...summary } },
            }).then(sum => {
                log("summary created:", sum)
            })
        } else {
            // summary for the day exists, update it
            return grafetch({
                operation: updateSubsSummary,
                vars_obj: { inputs: { id, ...summary } },
            }).then(sum => {
                log("summary updated:", sum)
            })
        }
    })
}

/**
 * Similar to saveSender/campaign, but for all_topics (and thus part of the
 * topic parsing routine rather than the entry parsing routine). I.e., this will
 * be run many times for each entry in the daily payload, whereas the
 * saveSender/campaign function will only be run once per entry
 */
const saveTopic = async (acc_update_sets, topic) => {
    const { all_topics } = acc_update_sets
    const { id = null, code, name, description } = topic

    if (!id) {
        // if the topic has no id, it's not real 🤔
        log("Topic is not legitimate, skipping")
        return
    }

    let updated_topics = [...all_topics]

    //log({ topic_id: id })

    // if the topic isn't in the accumulator, check the DB
    if (!all_topics.has(id)) {
        log(`Topic ${id} not in Accumulator, checking DB...`)
        return grafetch({
            operation: getTopic,
            vars_obj: { id },
        }).then(t => {
            const topic_id = getIn(t, ["data", "getTopic", "id"])
            // if not in the DB, create it
            if (!topic_id) {
                log(`Topic ${id} not present in DB, creating...`)
                return grafetch({
                    operation: createTopic,
                    vars_obj: {
                        input: {
                            id,
                            code,
                            name,
                            description,
                        },
                    },
                }).then(t => {
                    log(`Created Topic ${id} in DB.`)
                    log(`Pushing Topic: ${id} to Accumulator`)
                    updated_topics.push(id)
                    return updated_topics
                })
            }
            // if in the DB, but not in the accumulator, push to accumulator and
            // return
            log(`Topic ${id} already in DB, Updating Accumulator...`)
            updated_topics.push(id)
            return updated_topics
        })
    }
    // if in the accumulator, save to assume it's in the DB, return
    log(`✔ Topic ${id} already in Accumulator `)
    return updated_topics
}

/**
 * Sliding 2-week window cron job updater for "BulletinTopics"
 */
const saveBulletinTopics = ({ acc_update_sets, bulletin_id, created_at, topics }) =>
    topics.map(async topic => {
        const { id = null, to_date, this_period } = topic

        if (!id) {
            // if the topic has no id, it's not real 🤔
            log("BulletinTopic is not legitimate, skipping")
            return
        }

        const BT_ID = `${bulletin_id}_${id}`

        const input = {
            id: BT_ID, // ensure dups are thrown
            bulletin_id: bulletin_id,
            topic_id: id,
            created_at,
            this_period,
            to_date,
        }

        /**
         * if the topic doesn't exist on the accumulator, create it in the DB then
         * push the val into the accumulatora
         */
        const updated_topics = await saveTopic(acc_update_sets, topic)
        updated_topics.forEach(t => acc_update_sets.all_topics.add(t))

        // FIXME: Can't currently query this to check for existence and thus must
        // rely on returned error payloads from the graphql api rather than checks
        // via `get`.
        // TODO: Consider removing `type BulletinTopic @model (queries: null)`
        return grafetch({
            operation: createBulletinTopic,
            vars_obj: {
                input,
            },
        }).then(bt => {
            log("Creating BulletinTopic:", BT_ID)
            const id = getIn(bt, ["data", "createBulletinTopic", "id"])

            if (!id) {
                // already in DB, update it.
                log(`BulltinTopic ${BT_ID} already in DB, Updating...`)
                return grafetch({
                    operation: updateBulletinTopic,
                    vars_obj: { input },
                }).then(BT => {
                    log(`Updated BulletinTopic ${BT_ID}.`)
                    return BT
                })
            }

            log("✔ Created BulletinTopic:", BT_ID)
            return bt
        })

        /////////////////////////////////////////////// BulletinTopic //
    })

/**
 *
 * final consumer. Takes the daily payload that we've worked so hard to generate
 * thus far and _attempts_ to save it to the DB via graphql API
 *
 * Psuedo:
 * - accumulator (updated every day/fetch)
 * - list of topic ids
 * - list of senders
 * - list of campaigns Task:
 * 1. get daily payload
 * 2. setup mutations (scan payload entries)
 *    - check against accumulator
 *      - existing
 *        - campaigns
 *        - topics
 *        - senders
 *      - generate todos (don't recreate existing entries)
 *        - campaigns
 *        - topics
 *        - senders
 *        - bulletins
 *        - etc...
 *      - exec mutations and update accummulator
 *
 * FIXME: THIS SHOULD HAVE BEEN A SERIES OF TASKS/NESTED COMMANDS
 */
export const saveDailyPayload = async daily_payload => {
    const { subssummary, portions, summary, days_ago, days_todo, ...entries } = daily_payload
    /**
     * If there are no bulletins for the day, just return the payload (i.e., don't
     * engage the graphql api)
     */
    if (!Object.keys(entries).length) {
        log("no entries for the day")
        return daily_payload
    }
    /**
     * fetch the inter-Task accumulator (daily)
     */
    const {
        data: {
            getAccumulator: { all_campaigns, all_senders, all_topics },
        },
    } = await grafetch({
        operation: getAccumulator,
        vars_obj: { id: "ACCUMULATOR" },
    }).then(acc => {
        const id = getIn(acc, ["data", "getAccumulator", "id"])
        // if the accumulator doesn't exist, create it first, then try again
        if (!id) {
            log("Accumulator non-existent. Creating...")
            return grafetch({
                operation: createAccumulator,
                vars_obj: { input: { id: "ACCUMULATOR" } },
            }).then(ACC => {
                const {
                    data: { createAccumulator },
                } = ACC
                log("Accumulator created")
                return { data: { getAccumulator: createAccumulator } }
            })
        }
        log("returning Accumulator...")
        return acc
    })

    const acc_update_sets = {
        all_campaigns: new Set(all_campaigns),
        all_senders: new Set(all_senders),
        all_topics: new Set(all_topics),
    }

    /**
     * iterate through entries...
     */
    const promised_entries = Object.entries(entries).map(async ([k, v]) => {
        //log("CHECKING ENTRY FOR BAD ID:", JSON.stringify([k, v], null, 2))
        //log("I BET IT'S HERE...")
        // @ts-ignore
        const { detail, links, topics } = v
        if (!detail) {
            log("invalid/empty entry, bailing...")
            return
        }
        const {
            id = null,
            created_at,
            sender_email = "unavailable",
            utm_campaign,
            ...rest_details
        } = detail

        // if the detail has no id, it's not real 🤔
        if (!id) {
            log("detail doesn't exist, bailing...")
            return
        }

        const campaign_id = utm_campaign || "NA"

        const input_bulletin = {
            id,
            campaign_id,
            created_at,
            sender_email,
            detail: rest_details,
            links,
        }

        // accumulate senders/campaigns if not yet saved to accumulator
        const updated_senders = await saveSender(acc_update_sets, v)
        const updated_capaigns = await saveCampaign(acc_update_sets, v)
        updated_senders.forEach(s => acc_update_sets.all_senders.add(s))
        updated_capaigns.forEach(c => acc_update_sets.all_campaigns.add(c))

        /**
         * Save the bulletin and use the TODO_BULLETIN id to wait for resolution
         */
        return await grafetch({
            operation: createBulletin,
            vars_obj: { input: input_bulletin },
        }).then(b => {
            const bulletin_id = getIn(b, ["data", "createBulletin", "id"])

            if (!bulletin_id) {
                // bulletin already exists in DB, update it...
                log(`Bulletin ${id} already in DB, updating...`)
                return grafetch({
                    operation: updateBulletin,
                    vars_obj: { input: input_bulletin },
                }).then(B => {
                    const B_ID = getIn(B, ["data", "updateBulletin", "id"])
                    log(`Updated Bulletin ${B_ID}. Saving BulletinTopics...`)
                    return Promise.all(
                        saveBulletinTopics({
                            acc_update_sets,
                            bulletin_id: B_ID,
                            created_at,
                            topics,
                        })
                    )
                })
            }

            log(`Created Bulletin ${bulletin_id}. Saving BulletinTopics...`)

            /**
             * For each entry, iterate through its topics
             *
             * wait for all bulletinTopics to be established...
             */
            return Promise.all(
                saveBulletinTopics({
                    acc_update_sets,
                    bulletin_id,
                    created_at,
                    topics,
                })
            )
        })
    })

    // for every bulletin entry in the payload...
    return await Promise.all(promised_entries).then(x => {
        /**
         * After all entries have been processed, update the accumulator in the DB
         */
        const input = {
            id: "ACCUMULATOR",
            all_campaigns: [...acc_update_sets.all_campaigns],
            all_senders: [...acc_update_sets.all_senders],
            all_topics: [...acc_update_sets.all_topics],
        }

        return grafetch({
            operation: updateAccumulator,
            vars_obj: {
                input,
            },
        }).then(acc => {
            const print = {
                updateAccumulator: {
                    all_campaigns: input.all_campaigns.length,
                    all_senders: input.all_senders.length,
                    all_topics: input.all_topics.length,
                },
            }
            log("updated accumulator:", JSON.stringify(print, null, 2))
            //
            //        888
            //   e88~\888   /~~~8e  Y88b  /  d88~\
            //  d888  888       88b  Y888/  C888
            //  8888  888  e88~-888   Y8/    Y88b
            //  Y888  888 C888  888    Y      888D
            //   "88_/888  "88_-888   /     \_88P
            //                      _/
            //
            return { days_ago, days_todo }
        })
    })
}

/**
 * Takes an input `@thi.ng/csp` Channel and returns a tuple of the named channel
 * and a function that takes an rstream channel to run a Task on and the Task to
 * run. This function - once applied - registers the Task as a side effect
 * ("work"). If the `days_ago > days_ago - days_todo`, the Task is finished at
 * which point the payload is put into the channel for reading later (used for
 * actually triggering the completion of the function). Otherwise, the Task is
 * run again with a decremented number of `days_ago` until the condition above
 * is met.
 */
export const save_daily_payload_CMD = chan => [
    chan,
    (run, TASK) =>
        registerCMD({
            sub$: "SAVE_DAILY_PAYLOAD_CMD",
            args: saveDailyPayload,
            work: x => {
                log(x)

                if (x.days_ago === x.days_todo) {
                    log(" !!!!!!!!!!!!!!! FINISHED !!!!!!!!!!!!!!!")
                    // lambda waits for this:
                    return chan.write("finished")
                }

                log("================= DONE =================")
                log(`for days_ago: ${x.days_ago}, minus 1...`)
                log(`days left todo: ${x.days_ago - x.days_todo}`)

                return run.next(TASK({ days_ago: --x.days_ago, days_todo: x.days_todo }))
            },
        }),
]
