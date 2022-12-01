import { getInUnsafe, exists, mutInUnsafe } from "@thi.ng/paths"

import { fetchGDBulletinsInWindow, genGranicusCall, exhaustPagesGvD, snip_id } from "./fetching"
import { genGranicusDate, getDaysDiffFromDates, firstEmailDate } from "../utils"
import { GD_dates } from "../utils/dates.test"

const base_URL = "https://api.govdelivery.com/api/v2/accounts/11723/"

test("genGranicusCall: no params no querystring", () => {
    expect(
        genGranicusCall({
            endpoint: "reports/bulletins",
        })
    ).toBe(base_URL + "reports/bulletins")
})

test("genGranicusCall: time window", () => {
    expect(
        genGranicusCall({
            account: 11723,
            endpoint: "reports/bulletins",
            timewindow: [GD_dates.erl0, GD_dates.erl1],
        })
    ).toBe(base_URL + "reports/bulletins?start_date=2009-12-03&end_date=2009-12-04")
})

//
//     ,d             888
//  ,d888        e88~\888   /~~~8e  Y88b  /
//    888       d888  888       88b  Y888/
//    888       8888  888  e88~-888   Y8/
//    888       Y888  888 C888  888    Y
//    888        "88_/888  "88_-888   /
//                                  _/
//

test("genGranicusCall: time window", () => {
    expect(
        genGranicusCall({
            account: 11723,
            endpoint: "reports/bulletins",
            timewindow: [GD_dates.erl0, GD_dates.erl0],
        })
    ).toBe(base_URL + "reports/bulletins?start_date=2009-12-03&end_date=2009-12-03")
})

const payload = {
    bulletin_activity_details: [
        {
            created_at: "2009-12-03T19:53:05.000Z",
            subject: "U.S. Census Bureau Test item Update",
            to_text: "Subscribers of Test item (2 recipients)",
            delivery_status_name: "Succeeded",
            addresses_count: 2,
            success_count: 2,
            failed_count: 0,
            percent_success: "100.0",
            immediate_email_recipients: 0,
            emails_delivered: 2,
            emails_failed: 0,
            opens_count: 4,
            percent_opened: "200.0",
            nonunique_opens_count: 0,
            links_count: 10,
            click_rate: "0.0",
            clicks_count: 0,
            nonunique_clicks_count: 0,
            sender_email: "techsupport@info.govdelivery.com",
            digest_email_recipients: 0,
            wireless_recipients: 0,
            wireless_delivered: 0,
            wireless_failed_count: 0,
            "bulletin_visibility?": "Public",
            publish_to_facebook: "No",
            publish_to_twitter: "No",
            "publish_to_rss?": "Yes",
            wireless_unique_clicks: 0,
            wireless_nonunique_clicks: 0,
            facebook_nonunique_clicks: 0,
            twitter_nonunique_clicks: 0,
            _links: {
                self: {
                    href: "/api/v2/accounts/11723/reports/bulletins/2814660",
                },
                topics: {
                    href: "/api/v2/bulletins/2814660/topics",
                },
            },
        },
    ],
    _links: {
        self: {
            href:
                "/api/v2/accounts/11723/reports/bulletins?end_date=2009-12-04&start_date=2009-12-03",
        },
        find: {
            templated: true,
            href:
                "/api/v2/accounts/11723/reports/bulletins?start_date={start_date}&end_date={end_date}",
        },
        next: {
            href:
                "/api/v2/accounts/11723/reports/bulletins?end_date=2009-12-04&page=2&start_date=2009-12-03",
        },
    },
}

test("fetchGDBulletinsInWindow:", async () => {
    const results = await fetchGDBulletinsInWindow(GD_dates.erl0, GD_dates.erl1)
    expect(results).toEqual(payload)
})

//
//  888 ,e,          888   _
//  888  "  888-~88e 888 e~ ~   d88~\
//  888 888 888  888 888d8b    C888
//  888 888 888  888 888Y88b    Y88b
//  888 888 888  888 888 Y88b    888D
//  888 888 888  888 888  Y88b \_88P
//
//

//test("zipBulletinsWithLinks: recursive hydration", async () => {
//  const results = await zipBulletinsWithLinks("")

//  expect(results).toEqual({
//    ...payload,
//    bulletin_activity_details: [
//      { ...payload.bulletin_activity_details[0], links: [] },
//    ],
//  })
//})

//
//    d8                      ,e,
//  _d88__  e88~-_  888-~88e   "   e88~~\  d88~\
//   888   d888   i 888  888b 888 d888    C888
//   888   8888   | 888  8888 888 8888     Y88b
//   888   Y888   ' 888  888P 888 Y888      888D
//   "88_/  "88_-~  888-_88"  888  "88__/ \_88P
//                  888
//

test("genGranicusCall: topic array", () => {
    expect(
        genGranicusCall({
            account: 11723,
            endpoint: "reports/bulletins",
            timewindow: [],
            topics: [1234, 2345, 3456, 4567],
        })
    ).toBe(
        base_URL +
            "reports/bulletins?topic%5B%5D=1234&topic%5B%5D=2345&topic%5B%5D=3456&topic%5B%5D=4567"
    )
})

//
//                            /
//  888-~88e    /~~~8e  e88~88e  e88~~8e   d88~\
//  888  888b       88b 888 888 d888  88b C888
//  888  8888  e88~-888 "88_88" 8888__888  Y88b
//  888  888P C888  888  /      Y888    ,   888D
//  888-_88"   "88_-888 Cb       "88___/  \_88P
//  888                  Y8""8D
//

test("exhaustPages: reports/bulletins between two dates", async () => {
    const days_ago = getDaysDiffFromDates(new Date("March 1, 2010"), new Date())
    const results = await exhaustPagesGvD({
        endpoint: "reports/bulletins",
        coll_path: "bulletin_activity_details",
        days_ago,
        key: "detail",
        snip_idx: -1,
        //mutation: (a, lens, c) => mutInUnsafe(a, lens, c), // default setting
    })
    expect(Object.keys(results)).toEqual([
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
    ])
    // custom timout = 15 seconds
}, 15000)
