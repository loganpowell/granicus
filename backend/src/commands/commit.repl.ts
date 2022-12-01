import { registerCMD } from "@-0/spool"
import {
    mutInUnsafe,
    getInUnsafe,
    setInManyUnsafe,
    updateInUnsafe,
    setInUnsafe,
} from "@thi.ng/paths"
import { EquivMap } from "@thi.ng/associative"

import gql from "nanographql"

import {
    createBulletin,
    createBulletinTopic,
    createCampaign,
    createSubsSummary,
    createTopic,
} from "../graphql/mutations"

import {
    getBulletin,
    getCampaign,
    getSubsSummary,
    getTopic,
    listBulletins,
    listCampaigns,
    listSubsSummarys,
    listTopics,
} from "../graphql/queries"

import {} from "../granicus"

createCampaign //?
const testicle = gql(createCampaign)({ input: { id: "bloop" } })
console.log(JSON.stringify(testicle, null, 2)) //?

const example_GQL_input_vars = {
    inputCreateCampaign: { id: "20181204msacos1ccstors" },
    inputCreateTopic: {
        id: "452958",
        code: "USCENSUS_11960",
        name: "Stats for Stories",
        description: "TBD",
    },
    inputCreateBulletin: {
        id: "40878965",
        campaign_id: "20181204msacos1ccstors",
        created_at: "2019-12-04T21:00:22.000Z",
        detail: {
            created_at: "2019-12-04T21:00:22.000Z",
            subject: "2020 Census Count Guides Funding of New Roads and Bridges",
            to_text: "bloop topic 0",
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
            unique_click_count: 8238,
            total_click_count: 12303,
            unsubscribes: 265,
        },
        links: [
            {
                id: "140451799",
                link_url:
                    "https://public.govdelivery.com/accounts/USCENSUS/subscriber/one_click_unsubscribe?verification=%5B%5BVERIFICATION%5D%5D&destination=%5B%5BEMAIL_ADDRESS%5D%5D",
                unique_click_count: 265,
                total_click_count: 313,
            },
        ],
    },
    inputCreateBulletinTopic: {
        bulletin_id: "40878965",
        topic_id: "452958",
        created_at: "2019-12-04T21:00:22.000Z",
        subscriptions_this_period: {
            new_subscriptions: 3618,
            deleted_subscriptions: 2563,
            bulletins_sent: 1,
            allocation: {
                direct: 481,
                overlay: 18,
                signup: 0,
                upload: 911,
                other: 0,
                all_network: 2199,
            },
        },
        subscriptions_to_date: {
            total_subscriptions: 135485,
            new_subscriptions: 203342,
            deleted_subscriptions: 67857,
            bulletins_sent: 920,
        },
    },
}

const default_daily_payload = {
    b0: {
        detail: {
            id: "b0",
            created_at: "2009-12-00T00:0:00.000Z",
            subject: "default subject line",
            to_text: "default topic",
            delivery_status_name: "Succeeded",
            addresses_count: 1,
            success_count: 1,
            failed_count: 0,
            percent_success: 100,
            immediate_email_recipients: 1,
            emails_delivered: 1,
            emails_failed: 0,
            percent_emails_delivered: 100,
            opens_count: 1,
            percent_opened: 100,
            nonunique_opens_count: 1,
            links_count: 1,
            click_rate: 0,
            clicks_count: 0,
            nonunique_clicks_count: 0,
            sender_email: "shira.k.cavanaugh@census.gov",
            digest_email_recipients: 0,
            unique_click_count: 0,
            total_click_count: 0,
            utm_campaign: "20191204msprts1ccpupnl",
            unsubscribes: 0,
        },
        links: [
            {
                id: "l0",
                link_url:
                    "https://www.youtube.com/user/uscensusbureau/?utm_campaign=20191204msprts1ccpupnl",
                unique_click_count: 0,
                total_click_count: 0,
            },
        ],
        topics: [
            {
                id: "t0",
                code: "USCENSUS_0",
                name: "Default Topic Name",
                visibility: "Unlisted",
                total_subscriptions_to_date: 1,
                new_subscriptions_to_date: 1,
                new_subscriptions_this_period: 0,
                deleted_subscriptions_to_date: 1,
                deleted_subscriptions_this_period: 0,
                bulletins_sent_this_period: 1,
                bulletins_sent_to_date: 1,
            },
        ],
    },
}

const xforms = new EquivMap([
    ["detail", (obj, val) => mutInUnsafe(obj, ["inputCreateCampaign"], val)],
    ["inputCreateTopic", obj => getInUnsafe(obj, ["topics"])],
    ["inputCreateBulletin", obj => getInUnsafe(obj, ["detail"])],
    ["inputCreateBulletinTopic", obj => getInUnsafe(obj, ["detail", "utm_campaign"])],
])

export const payload_entry_GQL_xform = (entry_obj = default_daily_payload, xform_map = xforms) =>
    Object.entries(entry_obj).reduce((a, [k, v]) => {}, {})

export const commit = (daily_payload = default_daily_payload) => {}
