import { grafetch, log } from "../utils"
//import json from "../../misc/dummy_payload.json"

import dotenv from "dotenv"

dotenv.config()

// MUTATIONS ///////////////////////////////////////////////
// PRIORITY: Can't use queries provided by amplify (due to protection of destination field)

const createTopicFollower = /* GraphQL */ `
    mutation CreateTopicFollower(
        $input: CreateTopicFollowerInput!
        $condition: ModelTopicFollowerConditionInput
    ) {
        createTopicFollower(input: $input, condition: $condition) {
            id
        }
    }
`

const createFollower = /* GraphQL */ `
    mutation CreateFollower($input: CreateFollowerInput!, $condition: ModelFollowerConditionInput) {
        createFollower(input: $input, condition: $condition) {
            id
        }
    }
`

const createSub = /* GraphQL */ `
    mutation CreateSub($input: CreateSubInput!, $condition: ModelSubConditionInput) {
        createSub(input: $input, condition: $condition) {
            id
        }
    }
`

const getSub = /* GraphQL */ `
    query GetSub($id: ID!) {
        getSub(id: $id) {
            id
            deleted_at
        }
    }
`

const updateSub = /* GraphQL */ `
    mutation UpdateSub($input: UpdateSubInput!, $condition: ModelSubConditionInput) {
        updateSub(input: $input, condition: $condition) {
            id
        }
    }
`
/////////////////////////////////////////////// MUTATIONS //

/**
 * Pseudo:
 * - take dummy payload
 * - split into various gql queries
 * - test in mock api
 */

const lowercase = str => String(str).toLowerCase()

/**
 * reconfigures granicus payload (k:v's) into better alignment with
 * graphql schema
 */
const LC_keys = (obj = {}) =>
    Object.entries(obj).reduce((a, [k, v]) => {
        const ending = k.split("_").slice(-1)[0]
        a[lowercase(k)] =
            ending === "AT" && v
                ? new Date(Number(v) * 1000).toISOString()
                : ending !== "ID" && Number(v)
                ? Number(v)
                : v
        return a
    }, {})

//log(json.map(LC_keys)) //?

//Number("add") //?

//const test = "3122376590"
//const test = "13122376590"
//const test = "someone5@gmail.com"
//const bloop = !Number(test) ? test.split("@").slice(-1)[0] : "phone" //?
/**
 * Takes an item (object) from the JSON payload and returns three -> graphql ops:
 * 1. createFollower input
 * 2. createSub input
 * 3. creatTopicFollower input
 * 4. generate and deploy fetch (graphql mutations) for each type
 * 5. wrap them up in a Promise.all
 * 6. after all fetches resolve, return done
 */
const partition = async ({
    subscriber_id = "",
    destination = "",
    latitude = 0,
    longitude = 0,
    referrer_url = "",
    subscriber_created_at = "",
    subscriber_source = "",
    subscription_created_at = "",
    //subscription_deleted_at = "",
    subscription_added,
    subscription_source = "",
    topic_id = "",
}) => {
    // INPUTS ///////////////////////////////////////////////

    const is_deletion = subscription_added === 1 ? false : true

    const domain = !Number(destination) ? destination.split("@").slice(-1)[0] : "phone"

    const createFollowerInput = {
        id: subscriber_id,
        destination,
        domain, // PRIORITY: new
        latitude,
        longitude,
        created_at: subscriber_created_at,
        source: subscriber_source,
    }

    const topic_follower_id = `${topic_id}_${subscriber_id}`

    const createTopicFollowerInput = {
        id: topic_follower_id,
        topic_id,
        follower_id: subscriber_id,
    }

    const subInput = {
        id: topic_follower_id,
        referrer_url,
        ...(!is_deletion && { created_at: subscription_created_at }),
        ...(is_deletion && { deleted_at: subscription_created_at }),
        source: subscription_source,
        topic_id,
        follower_id: subscriber_id,
    }

    /////////////////////////////////////////////// INPUTS //

    //
    //        888                     888
    //   e88~\888  e88~~8e  888-~88e  888  e88~-_  Y88b  /
    //  d888  888 d888  88b 888  888b 888 d888   i  Y888/
    //  8888  888 8888__888 888  8888 888 8888   |   Y8/
    //  Y888  888 Y888    , 888  888P 888 Y888   '    Y
    //   "88_/888  "88___/  888-_88"  888  "88_-~    /
    //                      888                    _/
    //

    // VOLLEY ///////////////////////////////////////////////

    const followerDone = await grafetch({
        operation: createFollower, // createFollower
        vars_obj: { input: createFollowerInput },
    }).then(r => {
        if (r.errors) {
            // already created
            log(`${subscriber_id} createFollower: assumed existing in DB`)
            return
        }
        log(`${subscriber_id} createFollower: SAVED TO DB`)
        return
    })

    const subDone = await grafetch({
        operation: createSub, // createSub
        vars_obj: { input: subInput },
    }).then(r => {
        if (r.errors) {
            //log(JSON.stringify(r, null, 4))

            log(`${topic_follower_id} createSub: assumed existing... checking record props`)

            return grafetch({
                operation: getSub, // getSub
                vars_obj: { id: topic_follower_id },
            }).then(r => {
                if (
                    (r.data && r.data.getSub && !r.data.getSub.deleted_at && is_deletion) || // if deleted_at needed and provided
                    (r.data && r.data.getSub && !r.data.getSub.created_at && !is_deletion) // if created_at needed and provided
                ) {
                    // need to update record
                    log(
                        `${r.data.getSub.id || "no 'getSub' property..."} getSub: updating ${
                            is_deletion ? "deleted_at" : "created_at"
                        }`
                    )

                    return grafetch({
                        operation: updateSub, // updateSub
                        vars_obj: { input: subInput },
                    }).then(r => {
                        log(
                            `${(r.data && r.data.updateSub.id) || "no data:"} updateSub: ${
                                is_deletion ? "deleted_at" : "created_at"
                            } UPDATED`
                        )
                        return
                    })
                }
                // no need to update
                log(
                    `${topic_follower_id} getSub: not updated... ${
                        is_deletion ? "deleted_at" : "created_at"
                    } unchanged`
                )
                return
            })
        }
        log(`${topic_follower_id} createSub: SAVED TO DB`)
        return
    })

    const topicFollowerDone = await grafetch({
        operation: createTopicFollower, // create followerTopic
        vars_obj: { input: createTopicFollowerInput },
    }).then(r => {
        if (r.errors) {
            log(`${topic_follower_id} createTopicFollower: assumed existing`)
            return
        }
        log(`${topic_follower_id} createTopicFollower: SAVED TO DB`)
        return
    })

    /////////////////////////////////////////////// VOLLEY //

    const done = [followerDone, subDone, topicFollowerDone]

    return Promise.all(done)
        .then(r => {
            log(`${topic_follower_id} done parsing for ${destination} from ${subscription_source}`)
            return `${topic_follower_id} uploaded for ${destination} from ${subscription_source}`
        })
        .catch(console.error)
}

//grafetch({ operation: op }).then(r => log(JSON.stringify(r, null, 2))) //?

//const test = Promise.resolve()
//const tests = [test, test, test]
//Promise.all(tests).then(r => {
//    log("DONE: " + JSON.stringify(tests, null, 2))
//}) //?

// @ts-ignore
export const upload = async json => await Promise.all(json.map(ob => partition(LC_keys(ob))))

// PRIORITY: Updated REST API with auth as per: https://github.com/aws-amplify/amplify-cli/issues/1016#issuecomment-605535948
