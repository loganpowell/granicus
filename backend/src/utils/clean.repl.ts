import { pruneKVPairs } from "./clean"

// prune ///////////////////////////////////////////////

const target = {
    _links: {
        self: {
            href: "/api/v2/accounts/11723/reports/bulletins/2815121",
        },
        topics: {
            href: "/api/v2/bulletins/2815121/topics",
        },
    },
    addresses_count: 228,
    click_rate: "1.762114537444933921",
    clicks_count: 4,
    created_at: "2010-03-01T15:21:06.000Z",
    delivery_status_name: "Succeeded",
    digest_email_recipients: 0,
    emails_delivered: 227,
    emails_failed: 1,
    facebook_nonunique_clicks: 0,
    failed_count: 1,
    immediate_email_recipients: 0,
    links_count: 11,
    nonunique_clicks_count: 5,
    nonunique_opens_count: 0,
    opens_count: 23,
    percent_opened: "10.132158590308370044",
    percent_success: "99.561403508771929825",
    publish_to_facebook: "No",
    "publish_to_rss?": "Yes",
    publish_to_twitter: "No",
    sender_email: "pagewatcher@govdelivery.com",
    subject: "Take 10: We love a parade!",
    success_count: 227,
    to_text: "Subscribers of Road Tour blog (228 recipients)",
    twitter_nonunique_clicks: 0,
    wireless_delivered: 0,
    wireless_failed_count: 0,
    wireless_nonunique_clicks: 0,
    wireless_recipients: 0,
    wireless_unique_clicks: 0,
}

pruneKVPairs(
    target,
    "wireless_delivered",
    "wireless_failed_count",
    "wireless_nonunique_clicks",
    "wireless_recipients",
    "wireless_unique_clicks",
    "twitter_nonunique_clicks",
    "publish_to_facebook",
    "publish_to_rss?",
    "facebook_nonunique_clicks",
    "_links"
) //?

const bloop = {
    a: { detail: [1, "bleep 1"], links: [1, "blop 1"] },
    b: { detail: [2, "bleep 2"], links: [2, "blop 2"] },
    c: { detail: [3, "bleep 3"], links: [3, "blop 3"] },
    i_dont_belong: "Get me out of here",
    d: ["x", "y", "z", "a", "b", "c"],
    omit: "PLEASE DELETE ME",
}

pruneKVPairs(bloop, "omit", "i_dont_belong")
//?
