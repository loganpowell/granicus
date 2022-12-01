import gql from "nanographql"
import fetch from "node-fetch"
/**
 * in AWS lambda "EMFILE" limits cause
 * errors without some form of concurrent socket governance...
 * async-sema to the rescue
 */
import { Sema } from "async-sema"

import dotenv from "dotenv"

dotenv.config()

export const GQL_URL = process.env.API_GRANICUS_GRAPHQLAPIENDPOINTOUTPUT
export const GQL_KEY = process.env.API_GRANICUS_GRAPHQLAPIKEYOUTPUT

const s = new Sema(500)

/**
 * convenience fetch function that is connected to the graphql API
 */
export const grafetch = async ({ operation, api = GQL_URL, key = GQL_KEY, vars_obj = {} }) => {
    let op = gql(operation)

    await s.acquire()

    //console.log(op(vars_obj))
    return await fetch(api, {
        method: "POST",
        headers: {
            "x-api-key": key,
        },
        body: op(vars_obj),
    })
        .then(r => r.json())
        //.then(j => JSON.stringify(j, null, 2))
        //.then(console.log)
        .catch(console.error)
        .finally(() => s.release())
}
