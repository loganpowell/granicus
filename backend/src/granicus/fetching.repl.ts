import fetch from "node-fetch"
import { genGranicusCall, fetch_opts_GD, fetchTopicsForBulletinByID } from "."

// fetching ///////////////////////////////////////////////

// example: https://api.govdelivery.com/api/v2/bulletins/40865745/topics

export const topics_endpoint = id =>
    genGranicusCall({
        endpoint: `bulletins/${id}/topics`,
        account: 0,
        timewindow: [],
        page: 0,
    })

topics_endpoint(40865745)
//?

fetch(topics_endpoint(40865745), fetch_opts_GD)
    .then(r => r.json())
    .catch(console.error)
//?

/////////////////////////////////////////////// fetching //
