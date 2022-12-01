import { trace$ } from "@-0/utils"
import { command$, out$, registerCMD, run$, task$ } from "@-0/spool"

import { days_ago__govdetailinks, days_ago__govdetailinks_pruned } from "./clusterfork"
import {
    light_days_ago,
    medium_days_ago,
    heavy_days_ago,
    shallow_merge,
    pruneKVPairs,
    log,
} from "../utils"

//trace$("command ->", command$)

// details + links ///////////////////////////////////////////////
//
//    88~\                 888   _
//  _888__  e88~-_  888-~\ 888 e~ ~
//   888   d888   i 888    888d8b
//   888   8888   | 888    888Y88b
//   888   Y888   ' 888    888 Y88b
//   888    "88_-~  888    888  Y88b
//
////////////////////////////////////////////////// details + links

const [AGE__GD_DETAILSnLINKS, _OUT_] = days_ago__govdetailinks(light_days_ago)

const GD_PAYLOADS = {
    light_days_ago_bubbled: {
        "2815121": {
            detail: {
                addresses_count: 228,
                click_rate: 1.7621145374449338,
                clicks_count: 4,
                created_at: "2010-03-01T15:21:06.000Z",
                delivery_status_name: "Succeeded",
                digest_email_recipients: 0,
                emails_delivered: 227,
                emails_failed: 1,
                failed_count: 1,
                id: "2815121",
                immediate_email_recipients: 0,
                links_count: 11,
                nonunique_clicks_count: 5,
                nonunique_opens_count: 0,
                opens_count: 23,
                percent_emails_delivered: NaN,
                percent_opened: 10.13215859030837,
                percent_success: 99.56140350877193,
                sender_email: "pagewatcher@govdelivery.com",
                subject: "Take 10: We love a parade!",
                success_count: 227,
                to_text: "Subscribers of Road Tour blog (228 recipients)",
                total_click_count: 0,
                unique_click_count: 0,
                unsubscribes: 0,
                utm_campaign: "",
            },
            links: [],
            topics: [],
        },
    },
}

test("Task: AGE__GD_DETAILSnLINKS -> 'details'", async () => {
    run$.next(AGE__GD_DETAILSnLINKS)
    // @ts-ignore

    const result = await _OUT_.read()
    //log("details:", result)

    //console.log("RESULT:", JSON.stringify(result, null, 2))
    // single payload
    expect(Object.keys(result)).toEqual([
        "2815121",
        "2815122",
        "2815124",
        "2815125",
        "2815126",
        "2815127",
        "2815128",
        "2815129",
        "2815130",
        "2815131",
        "2815132",
        "2815133",
        "2815134",
        "2815135",
        "2815136",
        "days_ago", // these will be removed in PRUNE
        "subssummary",
        "details", // these will be removed in PRUNE
        "links", // these will be removed in PRUNE
        "portions",
        "summary",
    ])

    // merged payload
    expect(result["2815121"]).toEqual(GD_PAYLOADS.light_days_ago_bubbled["2815121"])
    // custom timeout = 15 seconds (for the fetches)
}, 1200000)

// prune ex-post ///////////////////////////////////////////////
//
//
//  888-~88e  888-~\ 888  888 888-~88e  e88~~8e
//  888  888b 888    888  888 888  888 d888  88b
//  888  8888 888    888  888 888  888 8888__888
//  888  888P 888    888  888 888  888 Y888    ,
//  888-_88"  888    "88_-888 888  888  "88___/
//  888
//
////////////////////////////////////////////////// prune ex-post

const [AGE__GD_DETAILSnLINKS_PRUNED, _PRUNE_] = days_ago__govdetailinks_pruned(light_days_ago)

test("Task: AGE__GD_DETAILSnLINKS_PRUNED: Merged and Pruned", async () => {
    run$.next(AGE__GD_DETAILSnLINKS_PRUNED)
    // @ts-ignore
    const result = await _PRUNE_.read()
    //log("merged and pruned:", result)
    // pruned
    expect(Object.keys(result)).toEqual([
        "2815121",
        "2815122",
        "2815124",
        "2815125",
        "2815126",
        "2815127",
        "2815128",
        "2815129",
        "2815130",
        "2815131",
        "2815132",
        "2815133",
        "2815134",
        "2815135",
        "2815136",
        "subssummary",
        "portions",
        "summary",
        //"days_ago", // voila!
        //"details",  // voila!
        //"links",    // voila!
    ])
}, 1200000)

// inlcude topics ///////////////////////////////////////////////
//
//    d8                      ,e,
//  _d88__  e88~-_  888-~88e   "   e88~~\  d88~\
//   888   d888   i 888  888b 888 d888    C888
//   888   8888   | 888  8888 888 8888     Y88b
//   888   Y888   ' 888  888P 888 Y888      888D
//   "88_/  "88_-~  888-_88"  888  "88__/ \_88P
//                  888
//
////////////////////////////////////////////////// inlcude topics
const [AGE_MD__GD_DETAILSnLINKS, _MEDIUM_] = days_ago__govdetailinks_pruned(medium_days_ago)

test("Task: AGE_MD__GD_DETAILSnLINKS: Topics injected", async () => {
    run$.next(AGE_MD__GD_DETAILSnLINKS)
    //@ts-ignore
    const result = await _MEDIUM_.read()
    expect(result["37098561"]["topics"][0]).toEqual({
        id: 452958,
        code: "USCENSUS_11960",
        name: "Stats for Stories",
        description:
            "Stats for Stories provides links to timely story ideas highlighting the Census Bureau's newsworthy statistics that relate to current events, observances, holidays, and anniversaries. The story ideas are intended to assist the media in story mining and producing content for their respective audiences.",
        visibility: "Listed",
        this_period: {
            allocated: {
                all_network: 212,
                direct: 86,
                other: 0,
                overlay: 11,
                signup: 0,
                upload: 0,
            },
            bulletins_sent: 1,
            deleted_subscriptions: 102,
            new_subscriptions: 310,
        },
        to_date: {
            bulletins_sent: 702,
            deleted_subscriptions: 7306,
            new_subscriptions: 53394,
            total_subscriptions: 46088,
        },
    })
}, 120000)
