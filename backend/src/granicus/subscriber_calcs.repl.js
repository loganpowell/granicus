import { getIn } from "@thi.ng/paths"
import { access } from "fs"
import fetch from "node-fetch"
import dotenv from "dotenv"
dotenv.config()
//import { fetch_opts_GD } from "./fetching"

const topic1 = {
    url:
        "https://api.govdelivery.com/api/v2/accounts/11723/reports/topics/449122?start_date=2019-12-04&end_date=2019-12-04",
    values: {
        name: "America Counts: Stories Behind the Numbers",
        code: "USCENSUS_11939",
        visibility: "Listed",
        total_subscriptions_to_date: 159568,
        new_subscriptions_to_date: 240681,
        new_subscriptions_this_period: 3669,
        deleted_subscriptions_to_date: 81113,
        deleted_subscriptions_this_period: 2614,
        bulletins_sent_this_period: 1,
        bulletins_sent_to_date: 1226,
    },
}

const subs1 = {
    url:
        "https://api.govdelivery.com/api/v2/accounts/11723/reports/subscriber_activity/summary?start_date=2019-12-04&end_date=2019-12-04",
    values: {
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
    },
}

const detail1 = {
    id: "40878965",
    created_at: "2019-12-04T21:00:22.000Z",
    subject: "2020 Census Count Guides Funding of New Roads and Bridges",
    to_text:
        'Subscribers of 2020 Census Conferences, Webinars, and Workshops, 2020 Census Tests, America Counts : Alpha Launch Audience (Internal), America Counts: Beta Launch Audience (External and Internal), America Counts: Stories Behind the Numbers, Census Updates, Census Updates for Business, Communications En Espanol, Directors Blog, Facts for Features, General 2020 Census Updates, Governments Data, News about American Indian/Alaska Native Statistics, News about Business, Industry and Government Statistics, News about Housing Statistics, News about People Statistics, Press Kits, Random Samplings blog, Research Matters Blog, Stats for Stories, or Tip Sheets, where email contains "@"',
    delivery_status_name: "Delivered",
    addresses_count: 393345,
    success_count: 382340,
    failed_count: 11005,
    percent_success: 97.20220162961269,
    immediate_email_recipients: 384496,
    emails_delivered: 382340,
    emails_failed: 11005,
    percent_emails_delivered: 97.20220162961269,
    opens_count: 46803,
    percent_opened: 12.24119893288696,
    nonunique_opens_count: 71442,
    links_count: 20,
    click_rate: 2.133702986870325,
    clicks_count: 8158,
    nonunique_clicks_count: 12078,
    sender_email: "mary.w.leisenring@census.gov",
    digest_email_recipients: 8849,
    // bubbled up (derived)
    unique_click_count: 8238,
    total_click_count: 12303,
    utm_campaign: "20191204msacos1ccstors",
    unsubscribes: 265,
}

const one_detail_for_topics_2019_12_04 = {
    "40875715": {
        detail: {
            id: "40875715",
            created_at: "2019-12-04T16:45:14.000Z",
            subject: "Webinar Today: New Updates to Job-to-Job Flows Explorer",
            to_text:
                'Subscribers of Census Academy, Census Updates for Business, LEHD-General Information, LEHD-Job-to-Job Flows (J2J), News about Business, Industry and Government Statistics, or Training Opportunities, where email contains "@"',
            delivery_status_name: "Delivered",
            addresses_count: 217964,
            success_count: 211165,
            failed_count: 6799,
            percent_success: 96.88067754308051,
            immediate_email_recipients: 213298,
            emails_delivered: 211165,
            emails_failed: 6799,
            percent_emails_delivered: 96.88067754308051,
            opens_count: 17911,
            percent_opened: 8.481992754481093,
            nonunique_opens_count: 25534,
            links_count: 15,
            click_rate: 2.823858120427154,
            clicks_count: 5963,
            nonunique_clicks_count: 6556,
            sender_email: "anthony.j.calabrese@census.gov",
            digest_email_recipients: 4666,
            unique_click_count: 5970,
            total_click_count: 6566,
            utm_campaign: "20191204mscacs1ccstars",
            unsubscribes: 662,
        },
        links: [
            {
                id: "140430726",
                link_url:
                    "http://www.census.gov/about/contact-us.html?utm_campaign=20191204mscacs1ccstars&utm_medium=email&utm_source=govdelivery",
                unique_click_count: 525,
                total_click_count: 561,
            },
            {
                id: "140430730",
                link_url:
                    "https://public.govdelivery.com/accounts/USCENSUS/subscriber/one_click_unsubscribe?verification=%5B%5BVERIFICATION%5D%5D&destination=%5B%5BEMAIL_ADDRESS%5D%5D",
                unique_click_count: 662,
                total_click_count: 706,
            },
            {
                id: "140430732",
                link_url:
                    "https://www.instagram.com/uscensusbureau/?utm_campaign=20191204mscacs1ccstars&utm_medium=email&utm_source=govdelivery",
                unique_click_count: 523,
                total_click_count: 552,
            },
            {
                id: "140430728",
                link_url: "https://subscriberhelp.govdelivery.com/",
                unique_click_count: 522,
                total_click_count: 552,
            },
            {
                id: "140430724",
                link_url:
                    "https://www.census.gov/data/academy/webinars/2019/job-flows-explorer.html?utm_campaign=20191204mscacs1ccstars&utm_medium=email&utm_source=govdelivery",
                unique_click_count: 931,
                total_click_count: 1149,
            },
            {
                id: "140430722",
                link_url: "https://content.govdelivery.com/accounts/USCENSUS/bulletins/26fb6c3",
                unique_click_count: 548,
                total_click_count: 583,
            },
            {
                id: "140430719",
                link_url:
                    "https://censusevent.webex.com/censusevent/onstage/g.php?MTID=efff7052eb24c7d29d6d91af08417e02a&utm_campaign=20191204mscacs1ccstars&utm_medium=email&utm_source=govdelivery",
                unique_click_count: 668,
                total_click_count: 763,
            },
            {
                id: "140430734",
                link_url:
                    "https://www.linkedin.com/company/us-census-bureau/?utm_campaign=20191204mscacs1ccstars&utm_medium=email&utm_source=govdelivery",
                unique_click_count: 522,
                total_click_count: 553,
            },
            {
                id: "140430736",
                link_url:
                    "https://www.facebook.com/uscensusbureau/?utm_campaign=20191204mscacs1ccstars&utm_medium=email&utm_source=govdelivery",
                unique_click_count: 526,
                total_click_count: 562,
            },
            {
                id: "140430733",
                link_url:
                    "https://public.govdelivery.com/accounts/USCENSUS/subscriber/edit?preferences=true#tab1",
                unique_click_count: 13,
                total_click_count: 16,
            },
            {
                id: "140430735",
                link_url:
                    "https://www.youtube.com/user/uscensusbureau/?utm_campaign=20191204mscacs1ccstars&utm_medium=email&utm_source=govdelivery",
                unique_click_count: 6,
                total_click_count: 7,
            },
            {
                id: "140430737",
                link_url:
                    "https://twitter.com/uscensusbureau/?utm_campaign=20191204mscacs1ccstars&utm_medium=email&utm_source=govdelivery",
                unique_click_count: 524,
                total_click_count: 562,
            },
        ],
        topics: [
            {
                id: 503853,
                code: "USCENSUS_12079",
            },
            {
                id: 454831,
                code: "USCENSUS_11971",
            },
            {
                id: 444992,
                code: "USCENSUS_11927",
            },
            {
                id: 299424,
                code: "USCENSUS_11782",
            },
            {
                id: 69353,
                code: "USCENSUS_238",
            },
            {
                id: 42189,
                code: "USCENSUS_215",
            },
        ],
    },
}

const topics_for_the_day = [
    {
        name: "LEHD-Job-to-Job Flows (J2J)",
        code: "USCENSUS_12079",
        visibility: "Listed",
        total_subscriptions_to_date: 7440,
        new_subscriptions_to_date: 18766,
        new_subscriptions_this_period: 208,
        deleted_subscriptions_to_date: 11326,
        deleted_subscriptions_this_period: 97,
        bulletins_sent_this_period: 1,
        bulletins_sent_to_date: 7,
        _links: {
            self: {
                href: "/api/v2/accounts/11723/reports/topics/503853",
            },
            topic: {
                href: "/api/v2/topics/503853",
            },
        },
    },
    {
        name: "Census Academy",
        code: "USCENSUS_11971",
        visibility: "Listed",
        total_subscriptions_to_date: 139742,
        new_subscriptions_to_date: 213664,
        new_subscriptions_this_period: 3626,
        deleted_subscriptions_to_date: 73922,
        deleted_subscriptions_this_period: 2594,
        bulletins_sent_this_period: 2,
        bulletins_sent_to_date: 830,
        _links: {
            self: {
                href: "/api/v2/accounts/11723/reports/topics/454831",
            },
            topic: {
                href: "/api/v2/topics/454831",
            },
        },
    },
    {
        name: "Census Updates for Business",
        code: "USCENSUS_11927",
        visibility: "Listed",
        total_subscriptions_to_date: 151974,
        new_subscriptions_to_date: 230744,
        new_subscriptions_this_period: 3677,
        deleted_subscriptions_to_date: 78770,
        deleted_subscriptions_this_period: 2628,
        bulletins_sent_this_period: 8,
        bulletins_sent_to_date: 1596,
        _links: {
            self: {
                href: "/api/v2/accounts/11723/reports/topics/444992",
            },
            topic: {
                href: "/api/v2/topics/444992",
            },
        },
    },
    {
        name: "LEHD-General Information",
        code: "USCENSUS_11782",
        visibility: "Listed",
        total_subscriptions_to_date: 4793,
        new_subscriptions_to_date: 49431,
        new_subscriptions_this_period: 141,
        deleted_subscriptions_to_date: 44638,
        deleted_subscriptions_this_period: 67,
        bulletins_sent_this_period: 1,
        bulletins_sent_to_date: 568,
        _links: {
            self: {
                href: "/api/v2/accounts/11723/reports/topics/299424",
            },
            topic: {
                href: "/api/v2/topics/299424",
            },
        },
    },
    {
        name: "News about Business, Industry and Government Statistics",
        code: "USCENSUS_238",
        visibility: "Listed",
        total_subscriptions_to_date: 43093,
        new_subscriptions_to_date: 74651,
        new_subscriptions_this_period: 145,
        deleted_subscriptions_to_date: 31558,
        deleted_subscriptions_this_period: 85,
        bulletins_sent_this_period: 3,
        bulletins_sent_to_date: 2887,
        _links: {
            self: {
                href: "/api/v2/accounts/11723/reports/topics/69353",
            },
            topic: {
                href: "/api/v2/topics/69353",
            },
        },
    },
    {
        name: "Training Opportunities",
        code: "USCENSUS_215",
        visibility: "Listed",
        total_subscriptions_to_date: 29596,
        new_subscriptions_to_date: 43320,
        new_subscriptions_this_period: 8,
        deleted_subscriptions_to_date: 13721,
        deleted_subscriptions_this_period: 16,
        bulletins_sent_this_period: 2,
        bulletins_sent_to_date: 808,
        _links: {
            self: {
                href: "/api/v2/accounts/11723/reports/topics/42189",
            },
            topic: {
                href: "/api/v2/topics/42189",
            },
        },
    },
]

const calc_diff = (lens1, lens2) => (obj1, ...objs) => {
    const total = getIn(obj1, lens1)
    let less = 0
    let resObj = {}
    objs.forEach(obj => {
        let val = getIn(obj, lens2)
        resObj[obj.code] = val
        return (less += val)
    })
    const remainder = total - less

    return {
        [lens1.slice(-1)[0]]: total,
        ...resObj,
        remainder,
    }
}

const calc_diff_total = calc_diff(["values", "net_subscribers"], ["new_subscriptions_this_period"])

//calc_diff_total(subs1, topic1) //?
calc_diff_total(subs1, ...topics_for_the_day) //?

export const fetch_opts_GD = {
    method: "GET",
    headers: {
        "x-auth-token": process.env.GD_KEY,
    },
}

let pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

/*

const topics = pages.reduce(async (a, c, i) => {
  const acc = await a
  // https://api.govdelivery.com/api/v2/topics?page=11
  const res = await fetch(`https://api.govdelivery.com/api/v2/topics?page=${c}`, fetch_opts_GD)
    .then(r => r.json())
    .catch(console.error)
  console.log(res)
  return acc.concat(res.items)
}, Promise.resolve([]))

*/
