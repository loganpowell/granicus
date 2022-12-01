import { mapKeys, partial, renameKeysWQMarks, pruneKVPairs } from "./clean"

export const GD_PAYLOADS = {
    light_days_ago: {
        "2815121": {
            detail: {
                _links: {
                    self: {
                        href: "/api/v2/accounts/11723/reports/bulletins/2815121",
                    },
                    topics: {
                        href: "/api/v2/bulletins/2815121/topics",
                    },
                },
                addresses_count: 228,
                click_rate: 1.762114537444933921,
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
                percent_opened: 10.132158590308370044,
                percent_success: 99.561403508771929825,
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
                percent_emails_delivered: NaN,
            },
        },
    },
    light_days_ago_bubbled: {
        "2815121": {
            detail: {
                id: "2815121",
                addresses_count: 228,
                click_rate: 1.762114537444933921,
                clicks_count: 4,
                created_at: "2010-03-01T15:21:06.000Z",
                delivery_status_name: "Succeeded",
                digest_email_recipients: 0,
                emails_delivered: 227,
                emails_failed: 1,
                failed_count: 1,
                immediate_email_recipients: 0,
                links_count: 11,
                nonunique_clicks_count: 5,
                nonunique_opens_count: 0,
                opens_count: 23,
                percent_opened: 10.132158590308370044,
                percent_success: 99.561403508771929825,
                sender_email: "pagewatcher@govdelivery.com",
                subject: "Take 10: We love a parade!",
                success_count: 227,
                to_text: "Subscribers of Road Tour blog (228 recipients)",
                total_click_count: 0,
                unique_click_count: 0,
                unsubscribes: 0,
                utm_campaign: "",
                percent_emails_delivered: NaN,
                // added by fetchTopicsForBulletinByID:
            },
            topics: [],
            //links: [],
        },
    },
}

const testObj = {
    key: "val",
    one: "two",
    three: 4,
    _links: [],
    "something?": "oh yeah",
    "another_?thing": "indeed",
}

const hello = partial((greeter, name) => `${greeter} ${name}!`, "Hello")

test("partial", () => {
    expect(hello("world")).toBe("Hello world!")
})

test("mapKeys", () => {
    expect(mapKeys((v, k) => v + k, testObj)).toEqual({
        keyval: "val",
        onetwo: "two",
        three4: 4,
        _links: [],
        "something?oh yeah": "oh yeah",
        "another_?thingindeed": "indeed",
    })
})

test("mapKeys", () => {
    expect(renameKeysWQMarks(testObj)).toEqual({
        key: "val",
        one: "two",
        three: 4,
        _links: [],
        something: "oh yeah",
        another_: "indeed",
    })
})

test("pruneKVPairs", () => {
    const target = GD_PAYLOADS.light_days_ago["2815121"]["detail"]
    expect(
        pruneKVPairs(
            target,
            "_links",
            "wireless_delivered",
            "wireless_failed_count",
            "wireless_nonunique_clicks",
            "wireless_recipients",
            "wireless_unique_clicks",
            "twitter_nonunique_clicks",
            "publish_to_facebook",
            "publish_to_rss?",
            "facebook_nonunique_clicks"
        )
    ).toEqual({
        addresses_count: 228,
        clicks_count: 4,
        created_at: "2010-03-01T15:21:06.000Z",
        delivery_status_name: "Succeeded",
        digest_email_recipients: 0,
        emails_delivered: 227,
        emails_failed: 1,
        failed_count: 1,
        immediate_email_recipients: 0,
        links_count: 11,
        nonunique_clicks_count: 5,
        nonunique_opens_count: 0,
        opens_count: 23,
        click_rate: 1.762114537444933921,
        percent_opened: 10.132158590308370044,
        percent_success: 99.561403508771929825,
        publish_to_twitter: "No",
        sender_email: "pagewatcher@govdelivery.com",
        subject: "Take 10: We love a parade!",
        success_count: 227,
        to_text: "Subscribers of Road Tour blog (228 recipients)",
        percent_emails_delivered: NaN,
    })
})
