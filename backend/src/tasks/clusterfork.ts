import { Channel } from "@thi.ng/csp"
import { map } from "@thi.ng/transducers"
import {
    LOG_CMD,
    csp_put_cmd,
    merge_props_cmd,
    BUBBLE_CMD,
    EXHAUST_PAGES_DETAILS_CMD,
    EXHAUST_PAGES_LINKS_CMD,
    GET_SUBSSUMMARY_CMD,
    APPORTION_CMD,
    save_daily_payload_CMD,
} from "../commands"
import { pruneKVPairs } from "../utils"
import { run$ } from "@-0/spool"

/**
 * This task takes a single input (number of days ago to collect data from). The
 * day is used to formulate calls to the GovDelivery API to pull a selection of
 * data for that day. Further, the task contains functions to gather the results
 * into a single - cleaned - collection
 */
const days_ago__merge_clean = ({ days_ago, days_todo }) => {
    const MERGE_PROPS_DETAILSnLINKS_CMD = merge_props_cmd("details", "links")
    return [
        {
            args: { days_ago, days_todo },
        },
        GET_SUBSSUMMARY_CMD,
        EXHAUST_PAGES_DETAILS_CMD,
        EXHAUST_PAGES_LINKS_CMD,
        MERGE_PROPS_DETAILSnLINKS_CMD,
        APPORTION_CMD,
        BUBBLE_CMD,
    ]
}

/**
 *
 *   e88~~\    ,88~-_   888
 *  d888      d888   \  888
 *  8888 __  88888    | 888
 *  8888   | 88888    | 888
 *  Y888   |  Y888 \ /  888
 *   "88__/    `88__X   888____
 *                   \
 *
 * Task: takes a number of days in the past and returns a Task that:
 * 1) retrieves the daily payload from the Granicus API
 * 2) stores the daily payload into DynamoDB
 * 3) upon completion of each day, recursively calls the same Task, but at the
 *    next day
 */
export const days_ago__save_GQL = ({ days_ago, days_todo }) => {
    //const MERGE_PROPS_DETAILSnLINKS_CMD = merge_props_cmd("details", "links")

    return [
        ...days_ago__merge_clean({ days_ago, days_todo }),
        SAVE_DAILY_PAYLOAD_CMD, // recur
    ]
}

/**
 *
 *   e88~-_  ,d88~~\ 888~-_
 *  d888   \ 8888    888   \
 *  8888     `Y88b   888    |
 *  8888      `Y88b, 888   /
 *  Y888   /    8888 888_-~
 *   "88_-~  \__88P' 888         OUT
 *
 * Reified Command. Needs a Task and the @-0/spool dispatcher (`run$`) to become
 * a registered Command. This Command will be called recursively for a given
 * number of days (starting at "days ago").
 */
export const [_OUT_, SDPCMD] = save_daily_payload_CMD(new Channel())
export const SAVE_DAILY_PAYLOAD_CMD = SDPCMD(run$, days_ago__save_GQL)

//run$.next(days_ago__save_GQL({ days_ago: 14 })) //?

/**

Removing object entries from the accumulator in a Command will not remove
them from the source object (even if done mutatively) in the Task because the
result of the Command is spread back into the source accumulator (available
between intra-Task Commands) it was passed, effectively undoing the prune.
You might also mutate the inter-command accumulator, but that could be
dangerous

🔥 understand the inter-Command accumulator 🔥

In order to "prune" entries from the accumulator, you must do so at the
receiving end of the Task. In this case as a transducer function on the
output Channel

**/
