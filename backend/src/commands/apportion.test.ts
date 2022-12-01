import { apportion_subs, key_partition, subs_proportions } from "./apportion"

export const dec_4_2019_subsummary = {
    direct_subscribers: 521,
    direct_subscriptions: 7015,
    overlay_subscribers: 277,
    overlay_subscriptions: 292,
    signup_subscribers: 0,
    signup_subscriptions: 0,
    upload_subscribers: 9761,
    upload_subscriptions: 13220,
    other_subscribers: 0,
    other_subscriptions: 0,
    total_subscribers: 1350491,
    total_subscriptions: 6175151,
    deleted_subscribers: 3274,
    deleted_subscriptions: 30442,
    all_network_subscribers: 3843,
    all_network_subscriptions: 31902,
    net_subscribers: 11128,
    net_subscriptions: 21987,
    _links: {
        self: {
            href:
                "/api/v2/accounts/11723/reports/subscriber_activity/summary?end_date=2019-12-04&start_date=2019-12-04",
        },
        find: {
            templated: true,
            href:
                "/api/v2/accounts/11723/reports/subscriber_activity/summary?start_date={start_date}&end_date={end_date}",
        },
    },
}

test("key_partition: summary", () => {
    expect(key_partition(dec_4_2019_subsummary)).toEqual({
        links: {
            find: {
                href:
                    "/api/v2/accounts/11723/reports/subscriber_activity/summary?start_date={start_date}&end_date={end_date}",
                templated: true,
            },
            self: {
                href:
                    "/api/v2/accounts/11723/reports/subscriber_activity/summary?end_date=2019-12-04&start_date=2019-12-04",
            },
        },
        subscribers: {
            all_network: 3843,
            deleted: 3274,
            direct: 521,
            net: 11128,
            other: 0,
            overlay: 277,
            signup: 0,
            total: 1350491,
            upload: 9761,
        },
        subscriptions: {
            all_network: 31902,
            deleted: 30442,
            direct: 7015,
            net: 21987,
            other: 0,
            overlay: 292,
            signup: 0,
            total: 6175151,
            upload: 13220,
        },
    })
})

const dec_4_2019_clusterfork_single_entry = {
    40867304: {
        detail: {
            id: "40867304",
            created_at: "2019-12-04T19:30:16.000Z",
            subject: "Webinar: Enhance Your Lessons With Real-World Census Data",
            to_text: 'Subscribers of Statistics in Schools where email contains "@"',
            delivery_status_name: "Delivered",
            addresses_count: 181942,
            success_count: 176269,
            failed_count: 5673,
            percent_success: 96.88197337613086,
            immediate_email_recipients: 179282,
            emails_delivered: 176269,
            emails_failed: 5673,
            percent_emails_delivered: 96.88197337613086,
            opens_count: 14042,
            percent_opened: 7.966233427318474,
            nonunique_opens_count: 23937,
            links_count: 14,
            click_rate: 1.6304625316987105,
            clicks_count: 2874,
            nonunique_clicks_count: 3777,
            sender_email: "matthew.e.tompkins@census.gov",
            digest_email_recipients: 2660,
            unique_click_count: 2888,
            total_click_count: 3802,
            utm_campaign: "",
            unsubscribes: 161,
        },
        links: [
            {
                id: "140444009",
                link_url: "https://content.govdelivery.com/accounts/USCENSUS/bulletins/26f95e8",
                unique_click_count: 73,
                total_click_count: 93,
            },
            {
                id: "140444019",
                link_url:
                    "https://www.youtube.com/user/uscensusbureau/?utm_campaign=&utm_medium=email&utm_source=govdelivery",
                unique_click_count: 282,
                total_click_count: 297,
            },
            {
                id: "140444032",
                link_url:
                    "https://www.facebook.com/uscensusbureau/?utm_campaign=&utm_medium=email&utm_source=govdelivery",
                unique_click_count: 12,
                total_click_count: 16,
            },
            {
                id: "140444011",
                link_url: "http://www.census.gov/about/contact-us.html",
                unique_click_count: 5,
                total_click_count: 8,
            },
            {
                id: "140444018",
                link_url:
                    "https://public.govdelivery.com/accounts/USCENSUS/subscriber/one_click_unsubscribe?verification=%5B%5BVERIFICATION%5D%5D&destination=%5B%5BEMAIL_ADDRESS%5D%5D",
                unique_click_count: 161,
                total_click_count: 185,
            },
            {
                id: "140444027",
                link_url:
                    "https://www.linkedin.com/company/us-census-bureau/?utm_campaign=&utm_medium=email&utm_source=govdelivery",
                unique_click_count: 282,
                total_click_count: 295,
            },
            {
                id: "140444024",
                link_url:
                    "https://twitter.com/uscensusbureau/?utm_campaign=&utm_medium=email&utm_source=govdelivery",
                unique_click_count: 284,
                total_click_count: 299,
            },
            {
                id: "140444021",
                link_url:
                    "https://www.instagram.com/uscensusbureau/?utm_campaign=&utm_medium=email&utm_source=govdelivery",
                unique_click_count: 285,
                total_click_count: 299,
            },
            {
                id: "140444006",
                link_url:
                    "https://www.eventbrite.com/e/webinar-enhance-your-lessons-with-real-world-census-data-registration-82642296333",
                unique_click_count: 642,
                total_click_count: 1402,
            },
            {
                id: "140444029",
                link_url: "https://www.census.gov/programs-surveys/sis.html",
                unique_click_count: 286,
                total_click_count: 300,
            },
            {
                id: "140444013",
                link_url: "https://subscriberhelp.govdelivery.com/",
                unique_click_count: 283,
                total_click_count: 296,
            },
            {
                id: "140444014",
                link_url:
                    "https://public.govdelivery.com/accounts/USCENSUS/subscriber/edit?preferences=true#tab1",
                unique_click_count: 293,
                total_click_count: 312,
            },
        ],
        topics: [
            {
                id: 449124,
                code: "USCENSUS_11940",
                name: "Statistics in Schools",
                description:
                    "Get the Stats: Start Here.  Statistics in Schools offers K-12 teachers free resources using real life data. Sign up here to get important updates, news, and data from the Census Bureau. Get Started!",
                visibility: "Listed",
                total_subscriptions_to_date: 191045,
                new_subscriptions_to_date: 268844,
                new_subscriptions_this_period: 3758,
                deleted_subscriptions_to_date: 77799,
                deleted_subscriptions_this_period: 2674,
                bulletins_sent_this_period: 5,
                bulletins_sent_to_date: 1012,
            },
        ],
    },
}
test("key_partition: clusterfork payload", () => {
    expect(
        key_partition(dec_4_2019_clusterfork_single_entry[40867304]["topics"][0], [-2, 2])
    ).toEqual({
        code: "USCENSUS_11940",
        name: "Statistics in Schools",
        description:
            "Get the Stats: Start Here.  Statistics in Schools offers K-12 teachers free resources using real life data. Sign up here to get important updates, news, and data from the Census Bureau. Get Started!",
        this_period: {
            bulletins_sent: 5,
            deleted_subscriptions: 2674,
            new_subscriptions: 3758,
        },
        to_date: {
            bulletins_sent: 1012,
            deleted_subscriptions: 77799,
            new_subscriptions: 268844,
            total_subscriptions: 191045,
        },
        id: 449124,
        visibility: "Listed",
    })
})

const example_report = {
    direct: 7015,
    overlay: 292,
    signup: 0,
    upload: 13220,
    other: 0,
    total: 6175151,
    deleted: 30442,
    all_network: 31902,
    net: 21987,
}

test("subs_proportions", () => {
    expect(subs_proportions(example_report)).toEqual({
        all_network: 0.6084800396727003,
        direct: 0.1337999961853173,
        other: 0,
        overlay: 0.005569436762097313,
        signup: 0,
        upload: 0.2521505273798852,
    })
})

const { ["40867304"]: target, ...unused } = dec_4_2019_clusterfork_single_entry

test("apportion_subs: parse single bulletin", () => {
    let res = apportion_subs(dec_4_2019_subsummary, dec_4_2019_clusterfork_single_entry)
    expect(res["40867304"]["topics"]).toEqual([
        {
            code: "USCENSUS_11940",
            name: "Statistics in Schools",
            description:
                "Get the Stats: Start Here.  Statistics in Schools offers K-12 teachers free resources using real life data. Sign up here to get important updates, news, and data from the Census Bureau. Get Started!",
            this_period: {
                allocated: {
                    all_network: 2286,
                    direct: 502,
                    other: 0,
                    overlay: 20,
                    signup: 0,
                    upload: 947,
                },
                bulletins_sent: 5,
                deleted_subscriptions: 2674,
                new_subscriptions: 3758,
            },
            to_date: {
                bulletins_sent: 1012,
                deleted_subscriptions: 77799,
                new_subscriptions: 268844,
                total_subscriptions: 191045,
            },
            id: 449124,
            visibility: "Listed",
        },
    ])
})
