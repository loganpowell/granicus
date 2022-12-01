import { saveDailyPayload } from "./graphql"

//
//                             ,d
//   e88~~8e  Y88b  /       ,d888
//  d888  88b  Y88b/          888
//  8888__888   Y88b          888
//  Y888    ,   /Y88b         888
//   "88___/   /  Y88b        888
//                     ----
//

const ex_payload = {
  "40807060": {
    detail: {
      id: "40807060",
      created_at: "2019-12-04T14:10:13.000Z",
      subject: "SC TEST 2: Who will Receive a 2020 Census Paper Questionnaire First?",
      to_text: "Subscribers of Census Email Team TESTING",
      delivery_status_name: "Succeeded",
      addresses_count: 46,
      success_count: 46,
      failed_count: 0,
      percent_success: 100,
      immediate_email_recipients: 46,
      emails_delivered: 46,
      emails_failed: 0,
      percent_emails_delivered: 100,
      opens_count: 14,
      percent_opened: 30.434782608695652,
      nonunique_opens_count: 44,
      links_count: 35,
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
        id: "140415414",
        link_url:
          "https://www.youtube.com/user/uscensusbureau/?utm_campaign=20191204msprts1ccpupnl&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140415416",
        link_url:
          "https://www.linkedin.com/company/us-census-bureau/?utm_campaign=20191204msprts1ccpupnl&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140415417",
        link_url:
          "https://public.govdelivery.com/accounts/USCENSUS/subscriber/edit?preferences=true#tab1",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140415418",
        link_url:
          "https://www.instagram.com/uscensusbureau/?utm_campaign=20191204msprts1ccpupnl&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140415419",
        link_url: "https://subscriberhelp.govdelivery.com/",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140415420",
        link_url:
          "https://public.govdelivery.com/accounts/USCENSUS/subscriber/one_click_unsubscribe?verification=%5B%5BVERIFICATION%5D%5D&destination=%5B%5BEMAIL_ADDRESS%5D%5D",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140415421",
        link_url:
          "http://www.census.gov/about/contact-us.html?utm_campaign=20191204msprts1ccpupnl&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140415423",
        link_url:
          "https://2020census.gov/en/jobs/job-details.html?utm_campaign=20191204msprts1ccpupnl&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140415424",
        link_url:
          "https://2020census.gov/?utm_campaign=20191204msprts1ccpupnl&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140415425",
        link_url:
          "https://www.census.gov/library/video/2019/2020-census-psa-all-videos.html?utm_campaign=20191204msprts1ccpupnl&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140415426",
        link_url:
          "https://www.census.gov/library/video/2019/2020-census-jobs-recruiting.html?utm_campaign=20191204msprts1ccpupnl&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140415427",
        link_url:
          "https://2020census.gov/en/who-to-count/young-children.html?utm_campaign=20191204msprts1ccpupnl&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140415428",
        link_url:
          "https://www.census.gov/library/stories/2019/11/big-push-to-count-every-newborn-young-child-2020-census.html?utm_campaign=20191204msprts1ccpupnl&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140415429",
        link_url:
          "https://www.census.gov/newsroom/press-releases/2019/contact-strategies-viewer.html?utm_campaign=20191204msprts1ccpupnl&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140415430",
        link_url:
          "https://gis-portal.data.census.gov/arcgis/apps/webappviewer/index.html?id=7ef5c37c68a64ef3b2f1b17eb9287427&utm_campaign=20191204msprts1ccpupnl&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140415431",
        link_url:
          "https://www.census.gov/newsroom/press-releases/2019/2020-psa.html?utm_campaign=20191204msprts1ccpupnl&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140415432",
        link_url:
          "https://www.census.gov/newsroom/press-releases/2019/same-sex-households.html?utm_campaign=20191204msprts1ccpupnl&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140415433",
        link_url:
          "https://www.census.gov/newsroom/press-releases/2019/2017-cbp.html?utm_campaign=20191204msprts1ccpupnl&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140415434",
        link_url:
          "https://www.census.gov/library/video/2019/actress-producer-kellie-shanygne-williams-supports-2020-census.html?utm_campaign=20191204msprts1ccpupnl&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140415435",
        link_url:
          "https://2020census.gov/en/conducting-the-count/tl.html?utm_campaign=20191204msprts1ccpupnl&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140415436",
        link_url:
          "https://2020census.gov/en/conducting-the-count/gq.html?utm_campaign=20191204msprts1ccpupnl&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140415437",
        link_url:
          "https://2020census.gov/en/conducting-the-count/island-areas.html?utm_campaign=20191204msprts1ccpupnl&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140415438",
        link_url:
          "https://www.census.gov/programs-surveys/decennial-census/2020-census/planning-management/memo-series/2020-memo-2018_13.html?utm_campaign=20191204msprts1ccpupnl&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140415439",
        link_url:
          "https://twitter.com/uscensusbureau/?utm_campaign=20191204msprts1ccpupnl&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140415440",
        link_url:
          "https://www.facebook.com/uscensusbureau/?utm_campaign=20191204msprts1ccpupnl&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140415441",
        link_url:
          "https://www.census.gov/newsroom/press-releases/2019/technology-demo-day.html?utm_campaign=20191204msprts1ccpupnl&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140415442",
        link_url:
          "https://www.census.gov/newsroom/facts-for-features/2019/veterans-day.html?utm_campaign=20191204msprts1ccpupnl&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140415443",
        link_url:
          "https://www.census.gov/newsroom/facts-for-features/2019/holiday-season.html?utm_campaign=20191204msprts1ccpupnl&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140415444",
        link_url:
          "https://www.census.gov/newsroom/press-releases/2019/geographic-mobility-place-birth.html?utm_campaign=20191204msprts1ccpupnl&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140415445",
        link_url:
          "https://www.census.gov/newsroom/press-releases/2019/2019-test-preliminary-results.html?utm_campaign=20191204msprts1ccpupnl&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140415446",
        link_url:
          "https://www.census.gov/newsroom/press-releases/2019/pseo-explorer.html?utm_campaign=20191204msprts1ccpupnl&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140415422",
        link_url:
          "https://2020census.gov/content/dam/2020census/materials/partners/2019-10/2020-recruitment-toolkit-101519.pdf?utm_campaign=20191204msprts1ccpupnl&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 0,
        total_click_count: 0,
      },
    ],
    topics: [
      {
        id: 447861,
        code: "USCENSUS_11933",
        name: "Census Email Team TESTING",
        visibility: "Unlisted",
        to_date: {
          total_subscriptions: 46,
          new_subscriptions: 68,
          deleted_subscriptions: 22,
          bulletins_sent: 1595,
        },
        this_period: {
          new_subscriptions: 0,
          deleted_subscriptions: 0,
          bulletins_sent: 7,
          allocated: {
            direct: 0,
            overlay: 0,
            signup: 0,
            upload: 0,
            other: 0,
            all_network: 0,
          },
        },
      },
    ],
  },
  "40826660": {
    detail: {
      id: "40826660",
      created_at: "2019-12-04T13:57:08.000Z",
      subject: "GA Test: Webinar Today: Get Informed About data.census.gov",
      to_text: "Subscribers of Census Email Team TESTING",
      delivery_status_name: "Succeeded",
      addresses_count: 46,
      success_count: 46,
      failed_count: 0,
      percent_success: 100,
      immediate_email_recipients: 46,
      emails_delivered: 46,
      emails_failed: 0,
      percent_emails_delivered: 100,
      opens_count: 14,
      percent_opened: 30.434782608695652,
      nonunique_opens_count: 38,
      links_count: 18,
      click_rate: 8.695652173913043,
      clicks_count: 4,
      nonunique_clicks_count: 5,
      digest_email_recipients: 0,
      unique_click_count: 4,
      total_click_count: 5,
      utm_campaign: "20191204mscacs2ccstars",
      unsubscribes: 0,
    },
    links: [
      {
        id: "140413761",
        link_url: "https://data.census.gov/cedsci/",
        unique_click_count: 1,
        total_click_count: 1,
      },
      {
        id: "140413789",
        link_url:
          "https://censusevent.webex.com/mw3300/mywebex/default.do?nomenu=true&siteurl=censusevent&service=6&rnd=0.1620542611528043&main_url=https%3A%2F%2Fcensusevent.webex.com%2Fec3300%2Feventcenter%2Fevent%2FeventAction.do%3FtheAction%3Ddetail%26%26%26EMK%3D4832534b00000004e8c68ec9767d8f0e909972b65df1bea85ddcd13d54b6bc49a39c0f3e6e4301f5%26siteurl%3Dcensusevent%26confViewID%3D145373207688431443%26encryptTicket%3DSDJTSwAAAAQUwOe0PR35MjqVFfhlmPPCdLJegnZIz49Pd1rPGahvHg2%26",
        unique_click_count: 1,
        total_click_count: 1,
      },
      {
        id: "140413771",
        link_url:
          "https://www.census.gov/data/academy/webinars/2019/data-census-q-a.html?utm_campaign=20191204mscacs2ccstars&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 1,
        total_click_count: 2,
      },
      {
        id: "140413790",
        link_url: "https://content.govdelivery.com/accounts/USCENSUS/bulletins/26ef724",
        unique_click_count: 1,
        total_click_count: 1,
      },
      {
        id: "140413766",
        link_url:
          "https://censusevent.webex.com/censusevent/onstage/g.php?MTID=efea666d01e4760b2b8437584a53677bf",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140413776",
        link_url:
          "https://twitter.com/uscensusbureau/?utm_campaign=&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140413780",
        link_url:
          "https://www.linkedin.com/company/us-census-bureau/?utm_campaign=&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140413784",
        link_url: "https://www.census.gov/academy",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140413788",
        link_url:
          "https://www.facebook.com/uscensusbureau/?utm_campaign=&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140413791",
        link_url: "http://www.census.gov/about/contact-us.html",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140413792",
        link_url: "https://subscriberhelp.govdelivery.com/",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140413793",
        link_url:
          "https://public.govdelivery.com/accounts/USCENSUS/subscriber/one_click_unsubscribe?verification=%5B%5BVERIFICATION%5D%5D&destination=%5B%5BEMAIL_ADDRESS%5D%5D",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140413794",
        link_url:
          "https://public.govdelivery.com/accounts/USCENSUS/subscriber/edit?preferences=true#tab1",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140413795",
        link_url:
          "https://www.instagram.com/uscensusbureau/?utm_campaign=&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140413796",
        link_url:
          "https://www.youtube.com/user/uscensusbureau/?utm_campaign=&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 0,
        total_click_count: 0,
      },
    ],
    topics: [
      {
        id: 447861,
        code: "USCENSUS_11933",
        name: "Census Email Team TESTING",
        visibility: "Unlisted",
        to_date: {
          total_subscriptions: 46,
          new_subscriptions: 68,
          deleted_subscriptions: 22,
          bulletins_sent: 1595,
        },
        this_period: {
          new_subscriptions: 0,
          deleted_subscriptions: 0,
          bulletins_sent: 7,
          allocated: {
            direct: 0,
            overlay: 0,
            signup: 0,
            upload: 0,
            other: 0,
            all_network: 0,
          },
        },
      },
    ],
  },
  "40852950": {
    detail: {
      id: "40852950",
      created_at: "2019-12-04T15:40:38.000Z",
      subject: "MT TEST 3 Don’t Miss Out! Enhance Your Lessons With Real-World Census Data",
      to_text: "Subscribers of Census Email Team TESTING",
      delivery_status_name: "Succeeded",
      addresses_count: 46,
      success_count: 46,
      failed_count: 0,
      percent_success: 100,
      immediate_email_recipients: 46,
      emails_delivered: 46,
      emails_failed: 0,
      percent_emails_delivered: 100,
      opens_count: 15,
      percent_opened: 32.608695652173914,
      nonunique_opens_count: 71,
      links_count: 14,
      click_rate: 4.3478260869565215,
      clicks_count: 2,
      nonunique_clicks_count: 5,
      sender_email: "matthew.e.tompkins@census.gov",
      digest_email_recipients: 0,
      unique_click_count: 2,
      total_click_count: 5,
      utm_campaign: "",
      unsubscribes: 0,
    },
    links: [
      {
        id: "140424325",
        link_url:
          "https://www.eventbrite.com/e/webinar-enhance-your-lessons-with-real-world-census-data-registration-82642296333",
        unique_click_count: 1,
        total_click_count: 4,
      },
      {
        id: "140424336",
        link_url: "https://content.govdelivery.com/accounts/USCENSUS/bulletins/26f5dd6",
        unique_click_count: 1,
        total_click_count: 1,
      },
      {
        id: "140424341",
        link_url: "https://www.census.gov/programs-surveys/sis.html",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140424350",
        link_url: "http://www.census.gov/about/contact-us.html",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140424359",
        link_url: "https://subscriberhelp.govdelivery.com/",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140424364",
        link_url:
          "https://public.govdelivery.com/accounts/USCENSUS/subscriber/edit?preferences=true#tab1",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140424374",
        link_url:
          "https://public.govdelivery.com/accounts/USCENSUS/subscriber/one_click_unsubscribe?verification=%5B%5BVERIFICATION%5D%5D&destination=%5B%5BEMAIL_ADDRESS%5D%5D",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140424382",
        link_url:
          "https://www.youtube.com/user/uscensusbureau/?utm_campaign=&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140424388",
        link_url:
          "https://www.instagram.com/uscensusbureau/?utm_campaign=&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140424394",
        link_url:
          "https://twitter.com/uscensusbureau/?utm_campaign=&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140424402",
        link_url:
          "https://www.linkedin.com/company/us-census-bureau/?utm_campaign=&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140424407",
        link_url:
          "https://www.facebook.com/uscensusbureau/?utm_campaign=&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 0,
        total_click_count: 0,
      },
    ],
    topics: [
      {
        id: 447861,
        code: "USCENSUS_11933",
        name: "Census Email Team TESTING",
        visibility: "Unlisted",
        to_date: {
          total_subscriptions: 46,
          new_subscriptions: 68,
          deleted_subscriptions: 22,
          bulletins_sent: 1595,
        },
        this_period: {
          new_subscriptions: 0,
          deleted_subscriptions: 0,
          bulletins_sent: 7,
          allocated: {
            direct: 0,
            overlay: 0,
            signup: 0,
            upload: 0,
            other: 0,
            all_network: 0,
          },
        },
      },
    ],
  },
  "40852998": {
    detail: {
      id: "40852998",
      created_at: "2019-12-04T15:44:36.000Z",
      subject: "MT TEST 3 Get Ready. The Statistics in Schools Webinar Starts in ONE HOUR!",
      to_text: "Subscribers of Census Email Team TESTING",
      delivery_status_name: "Succeeded",
      addresses_count: 46,
      success_count: 46,
      failed_count: 0,
      percent_success: 100,
      immediate_email_recipients: 46,
      emails_delivered: 46,
      emails_failed: 0,
      percent_emails_delivered: 100,
      opens_count: 16,
      percent_opened: 34.78260869565217,
      nonunique_opens_count: 45,
      links_count: 17,
      click_rate: 2.1739130434782608,
      clicks_count: 1,
      nonunique_clicks_count: 1,
      sender_email: "matthew.e.tompkins@census.gov",
      digest_email_recipients: 0,
      unique_click_count: 1,
      total_click_count: 1,
      utm_campaign: "",
      unsubscribes: 0,
    },
    links: [
      {
        id: "140424568",
        link_url:
          "https://censusevent.webex.com/mw3300/mywebex/default.do?nomenu=true&siteurl=censusevent&service=6&rnd=0.20321905323977252&main_url=https%3A%2F%2Fcensusevent.webex.com%2Fec3300%2Feventcenter%2Fevent%2FeventAction.do%3FtheAction%3Ddetail%26%26%26EMK%3D4832534b0000000480396d174227b4cbe982c6d5e36ef362eba2e375ffefd0129e9af53cf30cda7b%26siteurl%3Dcensusevent%26confViewID%3D144828147827787517%26encryptTicket%3DSDJTSwAAAATu9MpoNyHwCszzVbS_PHfimShvqQMHFy8xoaXpEwX0pQ2%26",
        unique_click_count: 1,
        total_click_count: 1,
      },
      {
        id: "140424569",
        link_url:
          "https://www.linkedin.com/company/us-census-bureau/?utm_campaign=&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140424570",
        link_url:
          "https://www.youtube.com/user/uscensusbureau/?utm_campaign=&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140424571",
        link_url:
          "https://www.facebook.com/uscensusbureau/?utm_campaign=&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140424572",
        link_url:
          "https://twitter.com/uscensusbureau/?utm_campaign=&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140424573",
        link_url: "https://content.govdelivery.com/accounts/USCENSUS/bulletins/26f5e06",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140424574",
        link_url:
          "https://www.census.gov/programs-surveys/sis/2020census/2020-resources/ell-adult-esl.html",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140424575",
        link_url: "http://www.census.gov/about/contact-us.html",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140424576",
        link_url: "https://subscriberhelp.govdelivery.com/",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140424577",
        link_url:
          "https://public.govdelivery.com/accounts/USCENSUS/subscriber/one_click_unsubscribe?verification=%5B%5BVERIFICATION%5D%5D&destination=%5B%5BEMAIL_ADDRESS%5D%5D",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140424578",
        link_url:
          "https://public.govdelivery.com/accounts/USCENSUS/subscriber/edit?preferences=true#tab1",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140424579",
        link_url:
          "https://www.instagram.com/uscensusbureau/?utm_campaign=&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140424565",
        link_url: "https://census.gov/programs-surveys/sis/2020census/2020-resources/k-12.html",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140424566",
        link_url:
          "https://www.census.gov/programs-surveys/sis/2020census/2020-resources/pre-k.html",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140424567",
        link_url: "https://www.census.gov/programs-surveys/sis.html",
        unique_click_count: 0,
        total_click_count: 0,
      },
    ],
    topics: [
      {
        id: 447861,
        code: "USCENSUS_11933",
        name: "Census Email Team TESTING",
        visibility: "Unlisted",
        to_date: {
          total_subscriptions: 46,
          new_subscriptions: 68,
          deleted_subscriptions: 22,
          bulletins_sent: 1595,
        },
        this_period: {
          new_subscriptions: 0,
          deleted_subscriptions: 0,
          bulletins_sent: 7,
          allocated: {
            direct: 0,
            overlay: 0,
            signup: 0,
            upload: 0,
            other: 0,
            all_network: 0,
          },
        },
      },
    ],
  },
  "40867304": {
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
        id: "140444014",
        link_url:
          "https://public.govdelivery.com/accounts/USCENSUS/subscriber/edit?preferences=true#tab1",
        unique_click_count: 293,
        total_click_count: 312,
      },
      {
        id: "140444032",
        link_url:
          "https://www.facebook.com/uscensusbureau/?utm_campaign=&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 12,
        total_click_count: 16,
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
        id: "140444011",
        link_url: "http://www.census.gov/about/contact-us.html",
        unique_click_count: 5,
        total_click_count: 8,
      },
      {
        id: "140444013",
        link_url: "https://subscriberhelp.govdelivery.com/",
        unique_click_count: 283,
        total_click_count: 296,
      },
      {
        id: "140444029",
        link_url: "https://www.census.gov/programs-surveys/sis.html",
        unique_click_count: 286,
        total_click_count: 300,
      },
      {
        id: "140444024",
        link_url:
          "https://twitter.com/uscensusbureau/?utm_campaign=&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 284,
        total_click_count: 299,
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
        to_date: {
          total_subscriptions: 191045,
          new_subscriptions: 268844,
          deleted_subscriptions: 77799,
          bulletins_sent: 1012,
        },
        this_period: {
          new_subscriptions: 3758,
          deleted_subscriptions: 2674,
          bulletins_sent: 5,
          allocated: {
            direct: 502,
            overlay: 20,
            signup: 0,
            upload: 947,
            other: 0,
            all_network: 2286,
          },
        },
      },
    ],
  },
  "40874368": {
    detail: {
      id: "40874368",
      created_at: "2019-12-04T14:00:22.000Z",
      subject: "JL Test Webinar Today: New Updates to Job-to-Job Flows Explorer",
      to_text: 'Subscribers of Census Email Team TESTING where email contains "@"',
      delivery_status_name: "Succeeded",
      addresses_count: 46,
      success_count: 46,
      failed_count: 0,
      percent_success: 100,
      immediate_email_recipients: 46,
      emails_delivered: 46,
      emails_failed: 0,
      percent_emails_delivered: 100,
      opens_count: 15,
      percent_opened: 32.608695652173914,
      nonunique_opens_count: 26,
      links_count: 15,
      click_rate: 0,
      clicks_count: 0,
      nonunique_clicks_count: 0,
      sender_email: "jessica.luckey@census.gov",
      digest_email_recipients: 0,
      unique_click_count: 2,
      total_click_count: 4,
      utm_campaign: "20191204mscacs1ccstars",
      unsubscribes: 0,
    },
    links: [
      {
        id: "140413941",
        link_url:
          "https://censusevent.webex.com/censusevent/onstage/g.php?MTID=efff7052eb24c7d29d6d91af08417e02a&utm_campaign=20191204mscacs1ccstars&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 1,
        total_click_count: 1,
      },
      {
        id: "140413961",
        link_url:
          "https://www.census.gov/data/academy/webinars/2019/job-flows-explorer.html?utm_campaign=20191204mscacs1ccstars&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 1,
        total_click_count: 3,
      },
      {
        id: "140413954",
        link_url: "https://content.govdelivery.com/accounts/USCENSUS/bulletins/26fb180",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140413976",
        link_url:
          "http://www.census.gov/about/contact-us.html?utm_campaign=20191204mscacs1ccstars&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140413985",
        link_url: "https://subscriberhelp.govdelivery.com/",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140413988",
        link_url:
          "https://public.govdelivery.com/accounts/USCENSUS/subscriber/one_click_unsubscribe?verification=%5B%5BVERIFICATION%5D%5D&destination=%5B%5BEMAIL_ADDRESS%5D%5D",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140413990",
        link_url:
          "https://www.instagram.com/uscensusbureau/?utm_campaign=20191204mscacs1ccstars&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140413993",
        link_url:
          "https://public.govdelivery.com/accounts/USCENSUS/subscriber/edit?preferences=true#tab1",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140413995",
        link_url:
          "https://www.linkedin.com/company/us-census-bureau/?utm_campaign=20191204mscacs1ccstars&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140413998",
        link_url:
          "https://www.youtube.com/user/uscensusbureau/?utm_campaign=20191204mscacs1ccstars&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140414000",
        link_url:
          "https://www.facebook.com/uscensusbureau/?utm_campaign=20191204mscacs1ccstars&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140414005",
        link_url:
          "https://twitter.com/uscensusbureau/?utm_campaign=20191204mscacs1ccstars&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 0,
        total_click_count: 0,
      },
    ],
    topics: [
      {
        id: 447861,
        code: "USCENSUS_11933",
        name: "Census Email Team TESTING",
        visibility: "Unlisted",
        to_date: {
          total_subscriptions: 46,
          new_subscriptions: 68,
          deleted_subscriptions: 22,
          bulletins_sent: 1595,
        },
        this_period: {
          new_subscriptions: 0,
          deleted_subscriptions: 0,
          bulletins_sent: 7,
          allocated: {
            direct: 0,
            overlay: 0,
            signup: 0,
            upload: 0,
            other: 0,
            all_network: 0,
          },
        },
      },
    ],
  },
  "40874861": {
    detail: {
      id: "40874861",
      created_at: "2019-12-04T14:27:47.000Z",
      subject: "Census News Report - Wednesday, 12.04.19",
      to_text: "Subscribers of News Clips",
      delivery_status_name: "Succeeded",
      addresses_count: 479,
      success_count: 479,
      failed_count: 0,
      percent_success: 100,
      immediate_email_recipients: 476,
      emails_delivered: 479,
      emails_failed: 0,
      percent_emails_delivered: 100,
      opens_count: 129,
      percent_opened: 26.931106471816285,
      nonunique_opens_count: 238,
      links_count: 9,
      click_rate: 13.987473903966597,
      clicks_count: 67,
      nonunique_clicks_count: 87,
      sender_email: "jasmine.n.pridgen@census.gov",
      digest_email_recipients: 3,
      unique_click_count: 68,
      total_click_count: 89,
      utm_campaign: "",
      unsubscribes: 1,
    },
    links: [
      {
        id: "140416406",
        link_url: "https://subscriberhelp.govdelivery.com/",
        unique_click_count: 2,
        total_click_count: 2,
      },
      {
        id: "140416397",
        link_url:
          "http://us.vocuspr.com/Publish/518008/Forward_518008_2257056.htm?utm_campaign=&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 57,
        total_click_count: 70,
      },
      {
        id: "140416395",
        link_url:
          "https://twitter.com/uscensusbureau?utm_campaign=&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 1,
        total_click_count: 1,
      },
      {
        id: "140416403",
        link_url:
          "https://public.govdelivery.com/accounts/USCENSUS/subscriber/one_click_unsubscribe?verification=%5B%5BVERIFICATION%5D%5D&destination=%5B%5BEMAIL_ADDRESS%5D%5D",
        unique_click_count: 1,
        total_click_count: 3,
      },
      {
        id: "140416392",
        link_url:
          "https://www.facebook.com/uscensusbureau?utm_campaign=&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 1,
        total_click_count: 2,
      },
      {
        id: "140416400",
        link_url:
          "https://collab.ecm.census.gov/div/pio/intranet/Pages/Daily-News-Digest.aspx?utm_campaign=&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 2,
        total_click_count: 2,
      },
      {
        id: "140416407",
        link_url:
          "https://www.youtube.com/user/uscensusbureau?utm_campaign=&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 1,
        total_click_count: 3,
      },
      {
        id: "140416408",
        link_url:
          "https://public.govdelivery.com/accounts/USCENSUS/subscriber/edit?preferences=true#tab1",
        unique_click_count: 2,
        total_click_count: 4,
      },
      {
        id: "140416402",
        link_url:
          "http://www.census.gov/about/contact-us.html?utm_campaign=&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 1,
        total_click_count: 2,
      },
    ],
    topics: [
      {
        id: 42331,
        code: "USCENSUS_192",
        name: "News Clips",
        visibility: "Unlisted",
        to_date: {
          total_subscriptions: 485,
          new_subscriptions: 1291,
          deleted_subscriptions: 806,
          bulletins_sent: 3076,
        },
        this_period: {
          new_subscriptions: 6,
          deleted_subscriptions: 0,
          bulletins_sent: 1,
          allocated: {
            direct: 0,
            overlay: 0,
            signup: 0,
            upload: 1,
            other: 0,
            all_network: 3,
          },
        },
      },
    ],
  },
  "40874862": {
    detail: {
      id: "40874862",
      created_at: "2019-12-04T19:00:17.000Z",
      subject: "Webinar Tomorrow: Get Informed About data.census.gov",
      to_text:
        'Subscribers of ACS Data Products on American FactFinder, ACS Data Releases and Notes, ACS Program Updates, Census Academy, Census Updates, Census Updates for Business, Data Visualization Newsletter, News about Business, Industry and Government Statistics, News about Housing Statistics, News about People Statistics, or Training Opportunities, where email contains "@"',
      delivery_status_name: "Delivered",
      addresses_count: 420174,
      success_count: 406880,
      failed_count: 13294,
      percent_success: 96.83607267465383,
      immediate_email_recipients: 413221,
      emails_delivered: 406880,
      emails_failed: 13294,
      percent_emails_delivered: 96.83607267465383,
      opens_count: 45707,
      percent_opened: 11.23353322847031,
      nonunique_opens_count: 68820,
      links_count: 18,
      click_rate: 2.1632913881242626,
      clicks_count: 8802,
      nonunique_clicks_count: 13219,
      sender_email: "anthony.j.calabrese@census.gov",
      digest_email_recipients: 6953,
      unique_click_count: 8849,
      total_click_count: 13328,
      utm_campaign: "20191204mscacs1ccstars",
      unsubscribes: 1221,
    },
    links: [
      {
        id: "140442181",
        link_url:
          "https://public.govdelivery.com/accounts/USCENSUS/subscriber/one_click_unsubscribe?verification=%5B%5BVERIFICATION%5D%5D&destination=%5B%5BEMAIL_ADDRESS%5D%5D",
        unique_click_count: 1221,
        total_click_count: 1306,
      },
      {
        id: "140442176",
        link_url:
          "https://www.facebook.com/uscensusbureau/?utm_campaign=&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 36,
        total_click_count: 51,
      },
      {
        id: "140442180",
        link_url: "https://subscriberhelp.govdelivery.com/",
        unique_click_count: 25,
        total_click_count: 38,
      },
      {
        id: "140442172",
        link_url:
          "https://www.census.gov/data/academy/webinars/2019/data-census-q-a.html?utm_campaign=20191204mscacs1ccstars&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 1727,
        total_click_count: 4300,
      },
      {
        id: "140442177",
        link_url:
          "https://censusevent.webex.com/mw3300/mywebex/default.do?nomenu=true&siteurl=censusevent&service=6&rnd=0.1620542611528043&main_url=https%3A%2F%2Fcensusevent.webex.com%2Fec3300%2Feventcenter%2Fevent%2FeventAction.do%3FtheAction%3Ddetail%26%26%26EMK%3D4832534b00000004e8c68ec9767d8f0e909972b65df1bea85ddcd13d54b6bc49a39c0f3e6e4301f5%26siteurl%3Dcensusevent%26confViewID%3D145373207688431443%26encryptTicket%3DSDJTSwAAAAQUwOe0PR35MjqVFfhlmPPCdLJegnZIz49Pd1rPGahvHg2%26",
        unique_click_count: 202,
        total_click_count: 270,
      },
      {
        id: "140442184",
        link_url:
          "https://www.youtube.com/user/uscensusbureau/?utm_campaign=&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 27,
        total_click_count: 58,
      },
      {
        id: "140442179",
        link_url: "http://www.census.gov/about/contact-us.html",
        unique_click_count: 30,
        total_click_count: 44,
      },
      {
        id: "140442174",
        link_url:
          "https://www.linkedin.com/company/us-census-bureau/?utm_campaign=&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 1004,
        total_click_count: 1079,
      },
      {
        id: "140442182",
        link_url:
          "https://public.govdelivery.com/accounts/USCENSUS/subscriber/edit?preferences=true#tab1",
        unique_click_count: 50,
        total_click_count: 62,
      },
      {
        id: "140442178",
        link_url: "https://content.govdelivery.com/accounts/USCENSUS/bulletins/26fb36e",
        unique_click_count: 76,
        total_click_count: 104,
      },
      {
        id: "140442175",
        link_url: "https://www.census.gov/academy",
        unique_click_count: 1021,
        total_click_count: 1099,
      },
      {
        id: "140442170",
        link_url: "https://data.census.gov/cedsci/",
        unique_click_count: 1199,
        total_click_count: 2411,
      },
      {
        id: "140442171",
        link_url:
          "https://censusevent.webex.com/censusevent/onstage/g.php?MTID=efea666d01e4760b2b8437584a53677bf",
        unique_click_count: 1202,
        total_click_count: 1378,
      },
      {
        id: "140442183",
        link_url:
          "https://www.instagram.com/uscensusbureau/?utm_campaign=&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 27,
        total_click_count: 37,
      },
      {
        id: "140442173",
        link_url:
          "https://twitter.com/uscensusbureau/?utm_campaign=&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 1002,
        total_click_count: 1091,
      },
    ],
    topics: [
      {
        id: 454831,
        code: "USCENSUS_11971",
        name: "Census Academy",
        description:
          "Census Academy is your virtual hub for learning data skills. Sign up to receive the latest Data Gems and more!",
        visibility: "Listed",
        to_date: {
          total_subscriptions: 139742,
          new_subscriptions: 213664,
          deleted_subscriptions: 73922,
          bulletins_sent: 830,
        },
        this_period: {
          new_subscriptions: 3626,
          deleted_subscriptions: 2594,
          bulletins_sent: 2,
          allocated: {
            direct: 485,
            overlay: 20,
            signup: 0,
            upload: 914,
            other: 0,
            all_network: 2206,
          },
        },
      },
      {
        id: 447782,
        code: "USCENSUS_11932",
        name: "Data Visualization Newsletter",
        description:
          "Do You Love Data? Start Here. We serve as the leading source of quality data about the nation's people and economy. If you love data as much as we do, sign up to get the latest data visualizations and infographics from the Census Bureau. Get Started!",
        visibility: "Listed",
        to_date: {
          total_subscriptions: 158678,
          new_subscriptions: 238747,
          deleted_subscriptions: 80069,
          bulletins_sent: 1103,
        },
        this_period: {
          new_subscriptions: 3644,
          deleted_subscriptions: 2605,
          bulletins_sent: 1,
          allocated: {
            direct: 487,
            overlay: 20,
            signup: 0,
            upload: 918,
            other: 0,
            all_network: 2217,
          },
        },
      },
      {
        id: 444992,
        code: "USCENSUS_11927",
        name: "Census Updates for Business",
        description:
          "See How It All Adds Up: Start Here. We serve as the leading source of quality data about the nation's people and economy. Sign up here to get important Economic Census updates, news, and data from the Census Bureau. Get Started!",
        visibility: "Listed",
        to_date: {
          total_subscriptions: 151974,
          new_subscriptions: 230744,
          deleted_subscriptions: 78770,
          bulletins_sent: 1596,
        },
        this_period: {
          new_subscriptions: 3677,
          deleted_subscriptions: 2628,
          bulletins_sent: 8,
          allocated: {
            direct: 491,
            overlay: 20,
            signup: 0,
            upload: 927,
            other: 0,
            all_network: 2237,
          },
        },
      },
      {
        id: 444983,
        code: "USCENSUS_11926",
        name: "Census Updates",
        description:
          "Get the Facts: Start Here. We serve as the leading source of quality data about the nation's people and economy. Sign up here to get important updates, news, and data from the Census Bureau. Get Started!",
        visibility: "Listed",
        to_date: {
          total_subscriptions: 286998,
          new_subscriptions: 405483,
          deleted_subscriptions: 118485,
          bulletins_sent: 1928,
        },
        this_period: {
          new_subscriptions: 4233,
          deleted_subscriptions: 2980,
          bulletins_sent: 7,
          allocated: {
            direct: 566,
            overlay: 23,
            signup: 0,
            upload: 1067,
            other: 0,
            all_network: 2575,
          },
        },
      },
      {
        id: 69354,
        code: "USCENSUS_239",
        name: "News about Housing Statistics",
        description:
          "Includes data on housing characteristics such as house type, age, size, plumbing, telephone access, ownership and financing.",
        visibility: "Listed",
        to_date: {
          total_subscriptions: 44119,
          new_subscriptions: 75368,
          deleted_subscriptions: 31247,
          bulletins_sent: 2715,
        },
        this_period: {
          new_subscriptions: 146,
          deleted_subscriptions: 92,
          bulletins_sent: 2,
          allocated: {
            direct: 19,
            overlay: 0,
            signup: 0,
            upload: 36,
            other: 0,
            all_network: 88,
          },
        },
      },
      {
        id: 69353,
        code: "USCENSUS_238",
        name: "News about Business, Industry and Government Statistics",
        description:
          "Includes data on the economy, business ownership, business patterns, industry data, government and tax expenditures.",
        visibility: "Listed",
        to_date: {
          total_subscriptions: 43093,
          new_subscriptions: 74651,
          deleted_subscriptions: 31558,
          bulletins_sent: 2887,
        },
        this_period: {
          new_subscriptions: 145,
          deleted_subscriptions: 85,
          bulletins_sent: 3,
          allocated: {
            direct: 19,
            overlay: 0,
            signup: 0,
            upload: 36,
            other: 0,
            all_network: 88,
          },
        },
      },
      {
        id: 69352,
        code: "USCENSUS_237",
        name: "News about People Statistics",
        description:
          "Includes data on population, family structure, age, sex, race, ethnic groups, education, health care insurance, marital status, disability, language, income, poverty, commuting, mobility and labor force.",
        visibility: "Listed",
        to_date: {
          total_subscriptions: 45962,
          new_subscriptions: 78574,
          deleted_subscriptions: 32609,
          bulletins_sent: 2860,
        },
        this_period: {
          new_subscriptions: 156,
          deleted_subscriptions: 88,
          bulletins_sent: 2,
          allocated: {
            direct: 20,
            overlay: 0,
            signup: 0,
            upload: 39,
            other: 0,
            all_network: 94,
          },
        },
      },
      {
        id: 42305,
        code: "USCENSUS_111",
        name: "ACS Program Updates",
        description: "American Community Survey Program Updates",
        visibility: "Listed",
        to_date: {
          total_subscriptions: 39247,
          new_subscriptions: 68821,
          deleted_subscriptions: 29568,
          bulletins_sent: 670,
        },
        this_period: {
          new_subscriptions: 130,
          deleted_subscriptions: 86,
          bulletins_sent: 1,
          allocated: {
            direct: 17,
            overlay: 0,
            signup: 0,
            upload: 32,
            other: 0,
            all_network: 79,
          },
        },
      },
      {
        id: 42299,
        code: "USCENSUS_106",
        name: "ACS Data Products on American FactFinder",
        description: "Data Products on American FactFinder",
        visibility: "Unlisted",
        to_date: {
          total_subscriptions: 19850,
          new_subscriptions: 46537,
          deleted_subscriptions: 26679,
          bulletins_sent: 709,
        },
        this_period: {
          new_subscriptions: 0,
          deleted_subscriptions: 0,
          bulletins_sent: 1,
          allocated: {
            direct: 0,
            overlay: 0,
            signup: 0,
            upload: 0,
            other: 0,
            all_network: 0,
          },
        },
      },
      {
        id: 42298,
        code: "USCENSUS_105",
        name: "ACS Data Releases and Notes",
        description: "Data Release Notes",
        visibility: "Listed",
        to_date: {
          total_subscriptions: 73872,
          new_subscriptions: 127114,
          deleted_subscriptions: 53231,
          bulletins_sent: 736,
        },
        this_period: {
          new_subscriptions: 152,
          deleted_subscriptions: 96,
          bulletins_sent: 1,
          allocated: {
            direct: 20,
            overlay: 0,
            signup: 0,
            upload: 38,
            other: 0,
            all_network: 92,
          },
        },
      },
      {
        id: 42189,
        code: "USCENSUS_215",
        name: "Training Opportunities",
        description:
          "Let us show you how to find and use Census data for your everyday uses, including informing your business planning, supporting grant proposals and research projects, planning of local schools and hospitals, and much more! Whether you’re looking for economic or demographic data, we can teach you how to get what you need for your various projects.",
        visibility: "Listed",
        to_date: {
          total_subscriptions: 29596,
          new_subscriptions: 43320,
          deleted_subscriptions: 13721,
          bulletins_sent: 808,
        },
        this_period: {
          new_subscriptions: 8,
          deleted_subscriptions: 16,
          bulletins_sent: 2,
          allocated: {
            direct: 1,
            overlay: 0,
            signup: 0,
            upload: 2,
            other: 0,
            all_network: 4,
          },
        },
      },
    ],
  },
  "40875052": {
    detail: {
      id: "40875052",
      created_at: "2019-12-04T15:13:29.000Z",
      subject: "JL Test Webinar Today: New Updates to Job-to-Job Flows Explorer",
      to_text: 'Subscribers of Census Email Team TESTING where email contains "@"',
      delivery_status_name: "Succeeded",
      addresses_count: 46,
      success_count: 46,
      failed_count: 0,
      percent_success: 100,
      immediate_email_recipients: 46,
      emails_delivered: 46,
      emails_failed: 0,
      percent_emails_delivered: 100,
      opens_count: 14,
      percent_opened: 30.434782608695652,
      nonunique_opens_count: 43,
      links_count: 15,
      click_rate: 0,
      clicks_count: 0,
      nonunique_clicks_count: 0,
      sender_email: "jessica.luckey@census.gov",
      digest_email_recipients: 0,
      unique_click_count: 0,
      total_click_count: 0,
      utm_campaign: "20191204mscacs1ccstars",
      unsubscribes: 0,
    },
    links: [
      {
        id: "140421279",
        link_url:
          "https://censusevent.webex.com/censusevent/onstage/g.php?MTID=efff7052eb24c7d29d6d91af08417e02a&utm_campaign=20191204mscacs1ccstars&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140421280",
        link_url: "https://content.govdelivery.com/accounts/USCENSUS/bulletins/26fb42c",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140421281",
        link_url:
          "https://www.census.gov/data/academy/webinars/2019/job-flows-explorer.html?utm_campaign=20191204mscacs1ccstars&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140421282",
        link_url:
          "http://www.census.gov/about/contact-us.html?utm_campaign=20191204mscacs1ccstars&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140421283",
        link_url: "https://subscriberhelp.govdelivery.com/",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140421284",
        link_url:
          "https://public.govdelivery.com/accounts/USCENSUS/subscriber/one_click_unsubscribe?verification=%5B%5BVERIFICATION%5D%5D&destination=%5B%5BEMAIL_ADDRESS%5D%5D",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140421285",
        link_url:
          "https://www.instagram.com/uscensusbureau/?utm_campaign=20191204mscacs1ccstars&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140421286",
        link_url:
          "https://public.govdelivery.com/accounts/USCENSUS/subscriber/edit?preferences=true#tab1",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140421287",
        link_url:
          "https://www.linkedin.com/company/us-census-bureau/?utm_campaign=20191204mscacs1ccstars&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140421288",
        link_url:
          "https://www.youtube.com/user/uscensusbureau/?utm_campaign=20191204mscacs1ccstars&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140421289",
        link_url:
          "https://www.facebook.com/uscensusbureau/?utm_campaign=20191204mscacs1ccstars&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140421290",
        link_url:
          "https://twitter.com/uscensusbureau/?utm_campaign=20191204mscacs1ccstars&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 0,
        total_click_count: 0,
      },
    ],
    topics: [
      {
        id: 447861,
        code: "USCENSUS_11933",
        name: "Census Email Team TESTING",
        visibility: "Unlisted",
        to_date: {
          total_subscriptions: 46,
          new_subscriptions: 68,
          deleted_subscriptions: 22,
          bulletins_sent: 1595,
        },
        this_period: {
          new_subscriptions: 0,
          deleted_subscriptions: 0,
          bulletins_sent: 7,
          allocated: {
            direct: 0,
            overlay: 0,
            signup: 0,
            upload: 0,
            other: 0,
            all_network: 0,
          },
        },
      },
    ],
  },
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
        id: "140430736",
        link_url:
          "https://www.facebook.com/uscensusbureau/?utm_campaign=20191204mscacs1ccstars&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 526,
        total_click_count: 562,
      },
      {
        id: "140430735",
        link_url:
          "https://www.youtube.com/user/uscensusbureau/?utm_campaign=20191204mscacs1ccstars&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 6,
        total_click_count: 7,
      },
      {
        id: "140430719",
        link_url:
          "https://censusevent.webex.com/censusevent/onstage/g.php?MTID=efff7052eb24c7d29d6d91af08417e02a&utm_campaign=20191204mscacs1ccstars&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 668,
        total_click_count: 763,
      },
      {
        id: "140430732",
        link_url:
          "https://www.instagram.com/uscensusbureau/?utm_campaign=20191204mscacs1ccstars&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 523,
        total_click_count: 552,
      },
      {
        id: "140430722",
        link_url: "https://content.govdelivery.com/accounts/USCENSUS/bulletins/26fb6c3",
        unique_click_count: 548,
        total_click_count: 583,
      },
      {
        id: "140430737",
        link_url:
          "https://twitter.com/uscensusbureau/?utm_campaign=20191204mscacs1ccstars&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 524,
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
        id: "140430730",
        link_url:
          "https://public.govdelivery.com/accounts/USCENSUS/subscriber/one_click_unsubscribe?verification=%5B%5BVERIFICATION%5D%5D&destination=%5B%5BEMAIL_ADDRESS%5D%5D",
        unique_click_count: 662,
        total_click_count: 706,
      },
      {
        id: "140430724",
        link_url:
          "https://www.census.gov/data/academy/webinars/2019/job-flows-explorer.html?utm_campaign=20191204mscacs1ccstars&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 931,
        total_click_count: 1149,
      },
      {
        id: "140430734",
        link_url:
          "https://www.linkedin.com/company/us-census-bureau/?utm_campaign=20191204mscacs1ccstars&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 522,
        total_click_count: 553,
      },
      {
        id: "140430726",
        link_url:
          "http://www.census.gov/about/contact-us.html?utm_campaign=20191204mscacs1ccstars&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 525,
        total_click_count: 561,
      },
      {
        id: "140430728",
        link_url: "https://subscriberhelp.govdelivery.com/",
        unique_click_count: 522,
        total_click_count: 552,
      },
    ],
    topics: [
      {
        id: 503853,
        code: "USCENSUS_12079",
        name: "LEHD-Job-to-Job Flows (J2J)",
        visibility: "Listed",
        to_date: {
          total_subscriptions: 7440,
          new_subscriptions: 18766,
          deleted_subscriptions: 11326,
          bulletins_sent: 7,
        },
        this_period: {
          new_subscriptions: 208,
          deleted_subscriptions: 97,
          bulletins_sent: 1,
          allocated: {
            direct: 27,
            overlay: 1,
            signup: 0,
            upload: 52,
            other: 0,
            all_network: 126,
          },
        },
      },
      {
        id: 454831,
        code: "USCENSUS_11971",
        name: "Census Academy",
        description:
          "Census Academy is your virtual hub for learning data skills. Sign up to receive the latest Data Gems and more!",
        visibility: "Listed",
        to_date: {
          total_subscriptions: 139742,
          new_subscriptions: 213664,
          deleted_subscriptions: 73922,
          bulletins_sent: 830,
        },
        this_period: {
          new_subscriptions: 3626,
          deleted_subscriptions: 2594,
          bulletins_sent: 2,
          allocated: {
            direct: 485,
            overlay: 20,
            signup: 0,
            upload: 914,
            other: 0,
            all_network: 2206,
          },
        },
      },
      {
        id: 444992,
        code: "USCENSUS_11927",
        name: "Census Updates for Business",
        description:
          "See How It All Adds Up: Start Here. We serve as the leading source of quality data about the nation's people and economy. Sign up here to get important Economic Census updates, news, and data from the Census Bureau. Get Started!",
        visibility: "Listed",
        to_date: {
          total_subscriptions: 151974,
          new_subscriptions: 230744,
          deleted_subscriptions: 78770,
          bulletins_sent: 1596,
        },
        this_period: {
          new_subscriptions: 3677,
          deleted_subscriptions: 2628,
          bulletins_sent: 8,
          allocated: {
            direct: 491,
            overlay: 20,
            signup: 0,
            upload: 927,
            other: 0,
            all_network: 2237,
          },
        },
      },
      {
        id: 299424,
        code: "USCENSUS_11782",
        name: "LEHD-General Information",
        description:
          "The individuals on this list have expressed interest in the ongoing development and progress of the LEHD program and would like to receive continuing news, participate in ongoing discussions, or suggest ideas or comments about the program.",
        visibility: "Listed",
        to_date: {
          total_subscriptions: 4793,
          new_subscriptions: 49431,
          deleted_subscriptions: 44638,
          bulletins_sent: 568,
        },
        this_period: {
          new_subscriptions: 141,
          deleted_subscriptions: 67,
          bulletins_sent: 1,
          allocated: {
            direct: 18,
            overlay: 0,
            signup: 0,
            upload: 35,
            other: 0,
            all_network: 85,
          },
        },
      },
      {
        id: 69353,
        code: "USCENSUS_238",
        name: "News about Business, Industry and Government Statistics",
        description:
          "Includes data on the economy, business ownership, business patterns, industry data, government and tax expenditures.",
        visibility: "Listed",
        to_date: {
          total_subscriptions: 43093,
          new_subscriptions: 74651,
          deleted_subscriptions: 31558,
          bulletins_sent: 2887,
        },
        this_period: {
          new_subscriptions: 145,
          deleted_subscriptions: 85,
          bulletins_sent: 3,
          allocated: {
            direct: 19,
            overlay: 0,
            signup: 0,
            upload: 36,
            other: 0,
            all_network: 88,
          },
        },
      },
      {
        id: 42189,
        code: "USCENSUS_215",
        name: "Training Opportunities",
        description:
          "Let us show you how to find and use Census data for your everyday uses, including informing your business planning, supporting grant proposals and research projects, planning of local schools and hospitals, and much more! Whether you’re looking for economic or demographic data, we can teach you how to get what you need for your various projects.",
        visibility: "Listed",
        to_date: {
          total_subscriptions: 29596,
          new_subscriptions: 43320,
          deleted_subscriptions: 13721,
          bulletins_sent: 808,
        },
        this_period: {
          new_subscriptions: 8,
          deleted_subscriptions: 16,
          bulletins_sent: 2,
          allocated: {
            direct: 1,
            overlay: 0,
            signup: 0,
            upload: 2,
            other: 0,
            all_network: 4,
          },
        },
      },
    ],
  },
  "40876760": {
    detail: {
      id: "40876760",
      created_at: "2019-12-04T19:05:11.000Z",
      subject: "ML test: 2020 Census Count Guides Funding of New Roads and Bridges",
      to_text: "Subscribers of Census Email Team TESTING",
      delivery_status_name: "Succeeded",
      addresses_count: 46,
      success_count: 46,
      failed_count: 0,
      percent_success: 100,
      immediate_email_recipients: 46,
      emails_delivered: 46,
      emails_failed: 0,
      percent_emails_delivered: 100,
      opens_count: 16,
      percent_opened: 34.78260869565217,
      nonunique_opens_count: 34,
      links_count: 20,
      click_rate: 13.043478260869565,
      clicks_count: 6,
      nonunique_clicks_count: 11,
      sender_email: "mary.w.leisenring@census.gov",
      digest_email_recipients: 0,
      unique_click_count: 6,
      total_click_count: 11,
      utm_campaign: "20191204msacos1ccstors",
      unsubscribes: 0,
    },
    links: [
      {
        id: "140442312",
        link_url: "https://content.govdelivery.com/accounts/USCENSUS/bulletins/26fbad8",
        unique_click_count: 1,
        total_click_count: 1,
      },
      {
        id: "140442307",
        link_url:
          "https://www.census.gov/newsroom/about.html?utm_campaign=20191204msacos1ccstors&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 1,
        total_click_count: 1,
      },
      {
        id: "140442311",
        link_url:
          "https://2020census.gov/en/jobs.html?utm_campaign=20191204msacos1ccstors&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 1,
        total_click_count: 1,
      },
      {
        id: "140442309",
        link_url:
          "https://www.census.gov/AmericaCounts?utm_campaign=20191204msacos1ccstors&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 1,
        total_click_count: 1,
      },
      {
        id: "140442306",
        link_url:
          "https://www.census.gov/library/stories/2019/12/2020-census-count-guides-funding-of-new-roads-and-bridges.html?utm_campaign=20191204msacos1ccstors&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 2,
        total_click_count: 7,
      },
      {
        id: "140442308",
        link_url:
          "https://www.facebook.com/uscensusbureau/?utm_campaign=20191204msacos1ccstors&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140442310",
        link_url:
          "https://census.gov/library/stories/2019/12/supplemental-poverty-measure-shows-state-level-impact-of-food-stamps.html?utm_campaign=20191204msacos1ccstors&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140442313",
        link_url:
          "http://www.census.gov/about/contact-us.html?utm_campaign=20191204msacos1ccstors&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140442314",
        link_url: "https://subscriberhelp.govdelivery.com/",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140442315",
        link_url:
          "https://public.govdelivery.com/accounts/USCENSUS/subscriber/one_click_unsubscribe?verification=%5B%5BVERIFICATION%5D%5D&destination=%5B%5BEMAIL_ADDRESS%5D%5D",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140442316",
        link_url:
          "https://public.govdelivery.com/accounts/USCENSUS/subscriber/edit?preferences=true#tab1",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140442317",
        link_url:
          "https://www.instagram.com/uscensusbureau/?utm_campaign=20191204msacos1ccstors&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140442318",
        link_url:
          "https://www.youtube.com/user/uscensusbureau/?utm_campaign=20191204msacos1ccstors&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140442319",
        link_url:
          "https://www.linkedin.com/company/us-census-bureau/?utm_campaign=20191204msacos1ccstors&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140442320",
        link_url:
          "https://twitter.com/uscensusbureau/?utm_campaign=20191204msacos1ccstors&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 0,
        total_click_count: 0,
      },
    ],
    topics: [
      {
        id: 447861,
        code: "USCENSUS_11933",
        name: "Census Email Team TESTING",
        visibility: "Unlisted",
        to_date: {
          total_subscriptions: 46,
          new_subscriptions: 68,
          deleted_subscriptions: 22,
          bulletins_sent: 1595,
        },
        this_period: {
          new_subscriptions: 0,
          deleted_subscriptions: 0,
          bulletins_sent: 7,
          allocated: {
            direct: 0,
            overlay: 0,
            signup: 0,
            upload: 0,
            other: 0,
            all_network: 0,
          },
        },
      },
    ],
  },
  "40877172": {
    detail: {
      id: "40877172",
      created_at: "2019-12-04T17:00:17.000Z",
      subject: "Welcome to Statistics in Schools!",
      to_text:
        'Subscribers of Statistics in Schools who who subscribed to topics in the last 3 days, and were not sent this campaign message ever, and were not sent Welcome New Subscriber in the last day where email contains "@"',
      delivery_status_name: "Delivered",
      addresses_count: 1723,
      success_count: 1685,
      failed_count: 38,
      percent_success: 97.79454439930355,
      immediate_email_recipients: 1597,
      emails_delivered: 1685,
      emails_failed: 38,
      percent_emails_delivered: 97.79454439930355,
      opens_count: 395,
      percent_opened: 23.44213649851632,
      nonunique_opens_count: 909,
      links_count: 18,
      click_rate: 4.688427299703264,
      clicks_count: 79,
      nonunique_clicks_count: 124,
      sender_email: "matthew.e.tompkins@census.gov",
      digest_email_recipients: 126,
      unique_click_count: 81,
      total_click_count: 159,
      utm_campaign: "11110101wcc20s1ccedurs",
      unsubscribes: 3,
    },
    links: [
      {
        id: "140432841",
        link_url:
          "https://census.gov/schools?utm_campaign=11110101wcc20s1ccedurs&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 16,
        total_click_count: 18,
      },
      {
        id: "140432834",
        link_url:
          "https://www.census.gov/schools?utm_campaign=11110101wcc20s1ccedurs&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 18,
        total_click_count: 32,
      },
      {
        id: "140432845",
        link_url:
          "https://public.govdelivery.com/accounts/USCENSUS/subscriber/one_click_unsubscribe?verification=%5B%5BVERIFICATION%5D%5D&destination=%5B%5BEMAIL_ADDRESS%5D%5D",
        unique_click_count: 3,
        total_click_count: 3,
      },
      {
        id: "140432837",
        link_url:
          "https://www.census.gov/programs-surveys/sis.html?utm_campaign=11110101wcc20s1ccedurs&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 4,
        total_click_count: 4,
      },
      {
        id: "140432835",
        link_url:
          "https://twitter.com/uscensusbureau/?utm_campaign=11110101wcc20s1ccedurs&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 3,
        total_click_count: 3,
      },
      {
        id: "140432842",
        link_url:
          "https://www.census.gov/programs-surveys/sis/resources/videos.html?utm_campaign=11110101wcc20s1ccedurs&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 4,
        total_click_count: 4,
      },
      {
        id: "140432838",
        link_url:
          "https://www.facebook.com/uscensusbureau/?utm_campaign=11110101wcc20s1ccedurs&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 4,
        total_click_count: 4,
      },
      {
        id: "140432847",
        link_url:
          "https://www.instagram.com/uscensusbureau/?utm_campaign=11110101wcc20s1ccedurs&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 3,
        total_click_count: 3,
      },
      {
        id: "140432848",
        link_url:
          "https://www.youtube.com/user/uscensusbureau/?utm_campaign=11110101wcc20s1ccedurs&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 4,
        total_click_count: 4,
      },
      {
        id: "140432833",
        link_url:
          "https://www.census.gov/schools/?utm_campaign=11110101wcc20s1ccedurs&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 10,
        total_click_count: 72,
      },
      {
        id: "140432846",
        link_url:
          "https://public.govdelivery.com/accounts/USCENSUS/subscriber/edit?preferences=true#tab1",
        unique_click_count: 2,
        total_click_count: 2,
      },
      {
        id: "140432836",
        link_url:
          "https://www.linkedin.com/company/us-census-bureau/?utm_campaign=11110101wcc20s1ccedurs&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 3,
        total_click_count: 3,
      },
      {
        id: "140432840",
        link_url: "https://content.govdelivery.com/accounts/USCENSUS/bulletins/26fbc74",
        unique_click_count: 7,
        total_click_count: 7,
      },
      {
        id: "140432843",
        link_url:
          "http://www.census.gov/about/contact-us.html?utm_campaign=11110101wcc20s1ccedurs&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140432844",
        link_url: "https://subscriberhelp.govdelivery.com/",
        unique_click_count: 0,
        total_click_count: 0,
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
        to_date: {
          total_subscriptions: 191045,
          new_subscriptions: 268844,
          deleted_subscriptions: 77799,
          bulletins_sent: 1012,
        },
        this_period: {
          new_subscriptions: 3758,
          deleted_subscriptions: 2674,
          bulletins_sent: 5,
          allocated: {
            direct: 502,
            overlay: 20,
            signup: 0,
            upload: 947,
            other: 0,
            all_network: 2286,
          },
        },
      },
    ],
  },
  "40877189": {
    detail: {
      id: "40877189",
      created_at: "2019-12-04T17:00:19.000Z",
      subject: "Confirmed: 2020 Census Updates",
      to_text:
        'Subscribers of 2020 Census Conferences, Webinars, and Workshops, 2020 Census Tests, 2020 Welcome Campaign Test, Census Day 2019, Census Jobs, Census Partnerships, Census Updates, Census Updates for Business, or General 2020 Census Updates, who answered "Apply for a 2020 Census Job" or "Become a 2020 Partner" or "Receive 2020 Census News for the Media and Stakeholders" or "Get 2020 Census Updates and Reminders" or did not respond to "I want to:", and were added after 08/29/2019, and were not sent this campaign message ever where email contains "@"',
      delivery_status_name: "Succeeded",
      addresses_count: 468,
      success_count: 468,
      failed_count: 0,
      percent_success: 100,
      immediate_email_recipients: 414,
      emails_delivered: 468,
      emails_failed: 0,
      percent_emails_delivered: 100,
      opens_count: 215,
      percent_opened: 45.94017094017094,
      nonunique_opens_count: 525,
      links_count: 11,
      click_rate: 17.307692307692307,
      clicks_count: 81,
      nonunique_clicks_count: 119,
      sender_email: "anthony.j.calabrese@census.gov",
      digest_email_recipients: 54,
      unique_click_count: 81,
      total_click_count: 120,
      utm_campaign: "11110101wcc20s1ccallrs",
      unsubscribes: 5,
    },
    links: [
      {
        id: "140431867",
        link_url:
          "https://www.linkedin.com/company/us-census-bureau/?utm_campaign=11110101wcc20s1ccallrs&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 3,
        total_click_count: 6,
      },
      {
        id: "140431863",
        link_url:
          "https://public.govdelivery.com/accounts/USCENSUS/subscriber/one_click_unsubscribe?verification=%5B%5BVERIFICATION%5D%5D&destination=%5B%5BEMAIL_ADDRESS%5D%5D",
        unique_click_count: 5,
        total_click_count: 5,
      },
      {
        id: "140431859",
        link_url:
          "https://www.facebook.com/uscensusbureau/?utm_campaign=11110101wcc20s1ccallrs&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 4,
        total_click_count: 8,
      },
      {
        id: "140431860",
        link_url:
          "https://twitter.com/uscensusbureau/?utm_campaign=11110101wcc20s1ccallrs&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 3,
        total_click_count: 6,
      },
      {
        id: "140431861",
        link_url:
          "https://2020census.gov/en?utm_campaign=11110101wcc20s1ccallrs&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 66,
        total_click_count: 95,
      },
      {
        id: "140431862",
        link_url:
          "http://www.census.gov/about/contact-us.html?utm_campaign=11110101wcc20s1ccallrs&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140431864",
        link_url: "https://subscriberhelp.govdelivery.com/",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140431865",
        link_url:
          "https://www.instagram.com/uscensusbureau/?utm_campaign=11110101wcc20s1ccallrs&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140431866",
        link_url:
          "https://public.govdelivery.com/accounts/USCENSUS/subscriber/edit?preferences=true#tab1",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140431868",
        link_url:
          "https://www.youtube.com/user/uscensusbureau/?utm_campaign=11110101wcc20s1ccallrs&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 0,
        total_click_count: 0,
      },
    ],
    topics: [
      {
        id: 507624,
        code: "USCENSUS_12091",
        name: "2020 Welcome Campaign Test",
        visibility: "Unlisted",
        to_date: {
          total_subscriptions: 7,
          new_subscriptions: 7,
          deleted_subscriptions: 0,
          bulletins_sent: 485,
        },
        this_period: {
          new_subscriptions: 0,
          deleted_subscriptions: 0,
          bulletins_sent: 5,
          allocated: {
            direct: 0,
            overlay: 0,
            signup: 0,
            upload: 0,
            other: 0,
            all_network: 0,
          },
        },
      },
      {
        id: 492841,
        code: "USCENSUS_12060",
        name: "Census Day 2019",
        visibility: "Unlisted",
        to_date: {
          total_subscriptions: 2978,
          new_subscriptions: 3283,
          deleted_subscriptions: 305,
          bulletins_sent: 491,
        },
        this_period: {
          new_subscriptions: 1,
          deleted_subscriptions: 1,
          bulletins_sent: 5,
          allocated: {
            direct: 0,
            overlay: 0,
            signup: 0,
            upload: 0,
            other: 0,
            all_network: 0,
          },
        },
      },
      {
        id: 452433,
        code: "USCENSUS_11958",
        name: "Census Partnerships",
        description:
          "Partner with Us: Start Here. We serve as the leading source of quality data about the nation's people and economy. Whether you’re a business, school, nonprofit, or government, we’ll work with you to find new and innovative ways to partner with the Census Bureau. Get Started!",
        visibility: "Listed",
        to_date: {
          total_subscriptions: 67328,
          new_subscriptions: 115639,
          deleted_subscriptions: 48311,
          bulletins_sent: 1379,
        },
        this_period: {
          new_subscriptions: 2129,
          deleted_subscriptions: 2535,
          bulletins_sent: 5,
          allocated: {
            direct: 284,
            overlay: 11,
            signup: 0,
            upload: 536,
            other: 0,
            all_network: 1295,
          },
        },
      },
      {
        id: 449126,
        code: "USCENSUS_11941",
        name: "Census Jobs",
        description:
          "Get Census Job Updates: Start Here. Sign up here to get important updates on new job postings and learn how to submit your application for a job with the Census Bureau.",
        visibility: "Listed",
        to_date: {
          total_subscriptions: 231823,
          new_subscriptions: 292842,
          deleted_subscriptions: 61019,
          bulletins_sent: 1070,
        },
        this_period: {
          new_subscriptions: 13295,
          deleted_subscriptions: 2492,
          bulletins_sent: 5,
          allocated: {
            direct: 1778,
            overlay: 74,
            signup: 0,
            upload: 3352,
            other: 0,
            all_network: 8089,
          },
        },
      },
      {
        id: 444992,
        code: "USCENSUS_11927",
        name: "Census Updates for Business",
        description:
          "See How It All Adds Up: Start Here. We serve as the leading source of quality data about the nation's people and economy. Sign up here to get important Economic Census updates, news, and data from the Census Bureau. Get Started!",
        visibility: "Listed",
        to_date: {
          total_subscriptions: 151974,
          new_subscriptions: 230744,
          deleted_subscriptions: 78770,
          bulletins_sent: 1596,
        },
        this_period: {
          new_subscriptions: 3677,
          deleted_subscriptions: 2628,
          bulletins_sent: 8,
          allocated: {
            direct: 491,
            overlay: 20,
            signup: 0,
            upload: 927,
            other: 0,
            all_network: 2237,
          },
        },
      },
      {
        id: 444983,
        code: "USCENSUS_11926",
        name: "Census Updates",
        description:
          "Get the Facts: Start Here. We serve as the leading source of quality data about the nation's people and economy. Sign up here to get important updates, news, and data from the Census Bureau. Get Started!",
        visibility: "Listed",
        to_date: {
          total_subscriptions: 286998,
          new_subscriptions: 405483,
          deleted_subscriptions: 118485,
          bulletins_sent: 1928,
        },
        this_period: {
          new_subscriptions: 4233,
          deleted_subscriptions: 2980,
          bulletins_sent: 7,
          allocated: {
            direct: 566,
            overlay: 23,
            signup: 0,
            upload: 1067,
            other: 0,
            all_network: 2575,
          },
        },
      },
      {
        id: 295482,
        code: "USCENSUS_11759",
        name: "2020 Census Conferences, Webinars, and Workshops",
        visibility: "Listed",
        to_date: {
          total_subscriptions: 51089,
          new_subscriptions: 69862,
          deleted_subscriptions: 18773,
          bulletins_sent: 1061,
        },
        this_period: {
          new_subscriptions: 229,
          deleted_subscriptions: 123,
          bulletins_sent: 6,
          allocated: {
            direct: 30,
            overlay: 1,
            signup: 0,
            upload: 57,
            other: 0,
            all_network: 139,
          },
        },
      },
      {
        id: 295477,
        code: "USCENSUS_11758",
        name: "2020 Census Tests",
        visibility: "Listed",
        to_date: {
          total_subscriptions: 51281,
          new_subscriptions: 70129,
          deleted_subscriptions: 18848,
          bulletins_sent: 1058,
        },
        this_period: {
          new_subscriptions: 233,
          deleted_subscriptions: 127,
          bulletins_sent: 6,
          allocated: {
            direct: 31,
            overlay: 1,
            signup: 0,
            upload: 58,
            other: 0,
            all_network: 141,
          },
        },
      },
      {
        id: 289016,
        code: "USCENSUS_11754",
        name: "General 2020 Census Updates",
        visibility: "Listed",
        to_date: {
          total_subscriptions: 72552,
          new_subscriptions: 98392,
          deleted_subscriptions: 25840,
          bulletins_sent: 1084,
        },
        this_period: {
          new_subscriptions: 281,
          deleted_subscriptions: 164,
          bulletins_sent: 6,
          allocated: {
            direct: 37,
            overlay: 1,
            signup: 0,
            upload: 70,
            other: 0,
            all_network: 170,
          },
        },
      },
    ],
  },
  "40877445": {
    detail: {
      id: "40877445",
      created_at: "2019-12-04T17:10:10.000Z",
      subject: "How The Census Helps You",
      to_text:
        'Subscribers of 2020 Census Conferences, Webinars, and Workshops, 2020 Census Tests, 2020 Welcome Campaign Test, Census Day 2019, Census Jobs, Census Partnerships, Census Updates, Census Updates for Business, or General 2020 Census Updates, who were sent Thank You Message at least 1 days ago, and were not sent this campaign message ever where email contains "@"',
      delivery_status_name: "Succeeded",
      addresses_count: 431,
      success_count: 431,
      failed_count: 0,
      percent_success: 100,
      immediate_email_recipients: 374,
      emails_delivered: 431,
      emails_failed: 0,
      percent_emails_delivered: 100,
      opens_count: 143,
      percent_opened: 33.17865429234339,
      nonunique_opens_count: 253,
      links_count: 13,
      click_rate: 1.8561484918793503,
      clicks_count: 8,
      nonunique_clicks_count: 10,
      sender_email: "anthony.j.calabrese@census.gov",
      digest_email_recipients: 57,
      unique_click_count: 8,
      total_click_count: 10,
      utm_campaign: "11110101wcc20s2ccallrs",
      unsubscribes: 2,
    },
    links: [
      {
        id: "140433779",
        link_url:
          "https://2020census.gov/en/community-impact.html?utm_campaign=11110101wcc20s2ccallrs&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 4,
        total_click_count: 4,
      },
      {
        id: "140433780",
        link_url: "https://content.govdelivery.com/accounts/USCENSUS/bulletins/26fbd85",
        unique_click_count: 1,
        total_click_count: 2,
      },
      {
        id: "140433782",
        link_url:
          "https://public.govdelivery.com/accounts/USCENSUS/subscriber/one_click_unsubscribe?verification=%5B%5BVERIFICATION%5D%5D&destination=%5B%5BEMAIL_ADDRESS%5D%5D",
        unique_click_count: 2,
        total_click_count: 3,
      },
      {
        id: "140433785",
        link_url:
          "https://public.govdelivery.com/accounts/USCENSUS/subscriber/edit?preferences=true#tab1",
        unique_click_count: 1,
        total_click_count: 1,
      },
      {
        id: "140433781",
        link_url:
          "http://www.census.gov/about/contact-us.html?utm_campaign=11110101wcc20s2ccallrs&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140433783",
        link_url: "https://subscriberhelp.govdelivery.com/",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140433784",
        link_url:
          "https://www.instagram.com/uscensusbureau/?utm_campaign=11110101wcc20s2ccallrs&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140433786",
        link_url:
          "https://www.linkedin.com/company/us-census-bureau/?utm_campaign=11110101wcc20s2ccallrs&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140433787",
        link_url:
          "https://www.youtube.com/user/uscensusbureau/?utm_campaign=11110101wcc20s2ccallrs&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140433788",
        link_url:
          "https://www.facebook.com/uscensusbureau/?utm_campaign=11110101wcc20s2ccallrs&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140433789",
        link_url:
          "https://twitter.com/uscensusbureau/?utm_campaign=11110101wcc20s2ccallrs&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 0,
        total_click_count: 0,
      },
    ],
    topics: [
      {
        id: 507624,
        code: "USCENSUS_12091",
        name: "2020 Welcome Campaign Test",
        visibility: "Unlisted",
        to_date: {
          total_subscriptions: 7,
          new_subscriptions: 7,
          deleted_subscriptions: 0,
          bulletins_sent: 485,
        },
        this_period: {
          new_subscriptions: 0,
          deleted_subscriptions: 0,
          bulletins_sent: 5,
          allocated: {
            direct: 0,
            overlay: 0,
            signup: 0,
            upload: 0,
            other: 0,
            all_network: 0,
          },
        },
      },
      {
        id: 492841,
        code: "USCENSUS_12060",
        name: "Census Day 2019",
        visibility: "Unlisted",
        to_date: {
          total_subscriptions: 2978,
          new_subscriptions: 3283,
          deleted_subscriptions: 305,
          bulletins_sent: 491,
        },
        this_period: {
          new_subscriptions: 1,
          deleted_subscriptions: 1,
          bulletins_sent: 5,
          allocated: {
            direct: 0,
            overlay: 0,
            signup: 0,
            upload: 0,
            other: 0,
            all_network: 0,
          },
        },
      },
      {
        id: 452433,
        code: "USCENSUS_11958",
        name: "Census Partnerships",
        description:
          "Partner with Us: Start Here. We serve as the leading source of quality data about the nation's people and economy. Whether you’re a business, school, nonprofit, or government, we’ll work with you to find new and innovative ways to partner with the Census Bureau. Get Started!",
        visibility: "Listed",
        to_date: {
          total_subscriptions: 67328,
          new_subscriptions: 115639,
          deleted_subscriptions: 48311,
          bulletins_sent: 1379,
        },
        this_period: {
          new_subscriptions: 2129,
          deleted_subscriptions: 2535,
          bulletins_sent: 5,
          allocated: {
            direct: 284,
            overlay: 11,
            signup: 0,
            upload: 536,
            other: 0,
            all_network: 1295,
          },
        },
      },
      {
        id: 449126,
        code: "USCENSUS_11941",
        name: "Census Jobs",
        description:
          "Get Census Job Updates: Start Here. Sign up here to get important updates on new job postings and learn how to submit your application for a job with the Census Bureau.",
        visibility: "Listed",
        to_date: {
          total_subscriptions: 231823,
          new_subscriptions: 292842,
          deleted_subscriptions: 61019,
          bulletins_sent: 1070,
        },
        this_period: {
          new_subscriptions: 13295,
          deleted_subscriptions: 2492,
          bulletins_sent: 5,
          allocated: {
            direct: 1778,
            overlay: 74,
            signup: 0,
            upload: 3352,
            other: 0,
            all_network: 8089,
          },
        },
      },
      {
        id: 444992,
        code: "USCENSUS_11927",
        name: "Census Updates for Business",
        description:
          "See How It All Adds Up: Start Here. We serve as the leading source of quality data about the nation's people and economy. Sign up here to get important Economic Census updates, news, and data from the Census Bureau. Get Started!",
        visibility: "Listed",
        to_date: {
          total_subscriptions: 151974,
          new_subscriptions: 230744,
          deleted_subscriptions: 78770,
          bulletins_sent: 1596,
        },
        this_period: {
          new_subscriptions: 3677,
          deleted_subscriptions: 2628,
          bulletins_sent: 8,
          allocated: {
            direct: 491,
            overlay: 20,
            signup: 0,
            upload: 927,
            other: 0,
            all_network: 2237,
          },
        },
      },
      {
        id: 444983,
        code: "USCENSUS_11926",
        name: "Census Updates",
        description:
          "Get the Facts: Start Here. We serve as the leading source of quality data about the nation's people and economy. Sign up here to get important updates, news, and data from the Census Bureau. Get Started!",
        visibility: "Listed",
        to_date: {
          total_subscriptions: 286998,
          new_subscriptions: 405483,
          deleted_subscriptions: 118485,
          bulletins_sent: 1928,
        },
        this_period: {
          new_subscriptions: 4233,
          deleted_subscriptions: 2980,
          bulletins_sent: 7,
          allocated: {
            direct: 566,
            overlay: 23,
            signup: 0,
            upload: 1067,
            other: 0,
            all_network: 2575,
          },
        },
      },
      {
        id: 295482,
        code: "USCENSUS_11759",
        name: "2020 Census Conferences, Webinars, and Workshops",
        visibility: "Listed",
        to_date: {
          total_subscriptions: 51089,
          new_subscriptions: 69862,
          deleted_subscriptions: 18773,
          bulletins_sent: 1061,
        },
        this_period: {
          new_subscriptions: 229,
          deleted_subscriptions: 123,
          bulletins_sent: 6,
          allocated: {
            direct: 30,
            overlay: 1,
            signup: 0,
            upload: 57,
            other: 0,
            all_network: 139,
          },
        },
      },
      {
        id: 295477,
        code: "USCENSUS_11758",
        name: "2020 Census Tests",
        visibility: "Listed",
        to_date: {
          total_subscriptions: 51281,
          new_subscriptions: 70129,
          deleted_subscriptions: 18848,
          bulletins_sent: 1058,
        },
        this_period: {
          new_subscriptions: 233,
          deleted_subscriptions: 127,
          bulletins_sent: 6,
          allocated: {
            direct: 31,
            overlay: 1,
            signup: 0,
            upload: 58,
            other: 0,
            all_network: 141,
          },
        },
      },
      {
        id: 289016,
        code: "USCENSUS_11754",
        name: "General 2020 Census Updates",
        visibility: "Listed",
        to_date: {
          total_subscriptions: 72552,
          new_subscriptions: 98392,
          deleted_subscriptions: 25840,
          bulletins_sent: 1084,
        },
        this_period: {
          new_subscriptions: 281,
          deleted_subscriptions: 164,
          bulletins_sent: 6,
          allocated: {
            direct: 37,
            overlay: 1,
            signup: 0,
            upload: 70,
            other: 0,
            all_network: 170,
          },
        },
      },
    ],
  },
  "40877494": {
    detail: {
      id: "40877494",
      created_at: "2019-12-04T17:15:07.000Z",
      subject: "3 More Reasons to Use Statistics in Schools",
      to_text:
        'Subscribers of Statistics in Schools who were not sent this campaign message ever, and were sent SIS Welcome Email #1 at least 2 days ago where email contains "@"',
      delivery_status_name: "Delivered",
      addresses_count: 567,
      success_count: 563,
      failed_count: 4,
      percent_success: 99.29453262786596,
      immediate_email_recipients: 554,
      emails_delivered: 563,
      emails_failed: 4,
      percent_emails_delivered: 99.29453262786596,
      opens_count: 152,
      percent_opened: 26.99822380106572,
      nonunique_opens_count: 310,
      links_count: 17,
      click_rate: 4.9733570159857905,
      clicks_count: 28,
      nonunique_clicks_count: 38,
      sender_email: "matthew.e.tompkins@census.gov",
      digest_email_recipients: 13,
      unique_click_count: 29,
      total_click_count: 39,
      utm_campaign: "11110101wcc20s2ccedurs",
      unsubscribes: 2,
    },
    links: [
      {
        id: "140434156",
        link_url:
          "https://census.gov/schools?utm_campaign=11110101wcc20s2ccedurs&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 7,
        total_click_count: 10,
      },
      {
        id: "140434184",
        link_url:
          "https://public.govdelivery.com/accounts/USCENSUS/subscriber/one_click_unsubscribe?verification=%5B%5BVERIFICATION%5D%5D&destination=%5B%5BEMAIL_ADDRESS%5D%5D",
        unique_click_count: 2,
        total_click_count: 2,
      },
      {
        id: "140434169",
        link_url:
          "https://www.facebook.com/uscensusbureau/?utm_campaign=11110101wcc20s2ccedurs&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 1,
        total_click_count: 1,
      },
      {
        id: "140434150",
        link_url:
          "https://www.census.gov/programs-surveys/sis/resources/data-tools/state-facts.html?utm_campaign=11110101wcc20s2ccedurs&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 19,
        total_click_count: 26,
      },
      {
        id: "140434162",
        link_url:
          "https://www.linkedin.com/company/us-census-bureau/?utm_campaign=11110101wcc20s2ccedurs&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140434165",
        link_url:
          "https://www.youtube.com/user/uscensusbureau/?utm_campaign=11110101wcc20s2ccedurs&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140434173",
        link_url:
          "https://twitter.com/uscensusbureau/?utm_campaign=11110101wcc20s2ccedurs&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140434175",
        link_url: "https://content.govdelivery.com/accounts/USCENSUS/bulletins/26fbdb6",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140434177",
        link_url:
          "https://www.census.gov/programs-surveys/sis.html?utm_campaign=11110101wcc20s2ccedurs&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140434179",
        link_url:
          "http://www.census.gov/about/contact-us.html?utm_campaign=11110101wcc20s2ccedurs&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140434182",
        link_url: "https://subscriberhelp.govdelivery.com/",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140434187",
        link_url:
          "https://public.govdelivery.com/accounts/USCENSUS/subscriber/edit?preferences=true#tab1",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140434189",
        link_url:
          "https://www.instagram.com/uscensusbureau/?utm_campaign=11110101wcc20s2ccedurs&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 0,
        total_click_count: 0,
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
        to_date: {
          total_subscriptions: 191045,
          new_subscriptions: 268844,
          deleted_subscriptions: 77799,
          bulletins_sent: 1012,
        },
        this_period: {
          new_subscriptions: 3758,
          deleted_subscriptions: 2674,
          bulletins_sent: 5,
          allocated: {
            direct: 502,
            overlay: 20,
            signup: 0,
            upload: 947,
            other: 0,
            all_network: 2286,
          },
        },
      },
    ],
  },
  "40877495": {
    detail: {
      id: "40877495",
      created_at: "2019-12-04T17:15:08.000Z",
      subject: "2020 Census: What We’re Asking",
      to_text:
        'Subscribers of 2020 Census Conferences, Webinars, and Workshops, 2020 Census Tests, 2020 Welcome Campaign Test, Census Day 2019, Census Jobs, Census Partnerships, Census Updates, Census Updates for Business, or General 2020 Census Updates, who were sent Welcome Message #1 at least 1 days ago, and were not sent this campaign message ever where email contains "@"',
      delivery_status_name: "Succeeded",
      addresses_count: 297,
      success_count: 297,
      failed_count: 0,
      percent_success: 100,
      immediate_email_recipients: 256,
      emails_delivered: 297,
      emails_failed: 0,
      percent_emails_delivered: 100,
      opens_count: 108,
      percent_opened: 36.36363636363637,
      nonunique_opens_count: 202,
      links_count: 13,
      click_rate: 8.754208754208754,
      clicks_count: 26,
      nonunique_clicks_count: 30,
      sender_email: "anthony.j.calabrese@census.gov",
      digest_email_recipients: 41,
      unique_click_count: 26,
      total_click_count: 30,
      utm_campaign: "11110101wcc20s3ccallrs",
      unsubscribes: 0,
    },
    links: [
      {
        id: "140434171",
        link_url:
          "https://twitter.com/uscensusbureau/?utm_campaign=11110101wcc20s3ccallrs&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 2,
        total_click_count: 2,
      },
      {
        id: "140434160",
        link_url:
          "https://www.instagram.com/uscensusbureau/?utm_campaign=11110101wcc20s3ccallrs&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 2,
        total_click_count: 2,
      },
      {
        id: "140434166",
        link_url:
          "https://www.youtube.com/user/uscensusbureau/?utm_campaign=11110101wcc20s3ccallrs&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 2,
        total_click_count: 2,
      },
      {
        id: "140434148",
        link_url:
          "https://2020census.gov/en/avoiding-fraud.html?utm_campaign=11110101wcc20s3ccallrs&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 2,
        total_click_count: 2,
      },
      {
        id: "140434149",
        link_url: "https://content.govdelivery.com/accounts/USCENSUS/bulletins/26fbdb7",
        unique_click_count: 1,
        total_click_count: 1,
      },
      {
        id: "140434152",
        link_url:
          "https://2020census.gov/en/about-questions.html?utm_campaign=11110101wcc20s3ccallrs&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 9,
        total_click_count: 11,
      },
      {
        id: "140434159",
        link_url: "https://subscriberhelp.govdelivery.com/",
        unique_click_count: 2,
        total_click_count: 2,
      },
      {
        id: "140434164",
        link_url:
          "https://www.linkedin.com/company/us-census-bureau/?utm_campaign=11110101wcc20s3ccallrs&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 2,
        total_click_count: 2,
      },
      {
        id: "140434161",
        link_url:
          "https://public.govdelivery.com/accounts/USCENSUS/subscriber/edit?preferences=true#tab1",
        unique_click_count: 2,
        total_click_count: 2,
      },
      {
        id: "140434168",
        link_url:
          "https://www.facebook.com/uscensusbureau/?utm_campaign=11110101wcc20s3ccallrs&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 2,
        total_click_count: 4,
      },
      {
        id: "140434154",
        link_url:
          "http://www.census.gov/about/contact-us.html?utm_campaign=11110101wcc20s3ccallrs&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140434157",
        link_url:
          "https://public.govdelivery.com/accounts/USCENSUS/subscriber/one_click_unsubscribe?verification=%5B%5BVERIFICATION%5D%5D&destination=%5B%5BEMAIL_ADDRESS%5D%5D",
        unique_click_count: 0,
        total_click_count: 0,
      },
    ],
    topics: [
      {
        id: 507624,
        code: "USCENSUS_12091",
        name: "2020 Welcome Campaign Test",
        visibility: "Unlisted",
        to_date: {
          total_subscriptions: 7,
          new_subscriptions: 7,
          deleted_subscriptions: 0,
          bulletins_sent: 485,
        },
        this_period: {
          new_subscriptions: 0,
          deleted_subscriptions: 0,
          bulletins_sent: 5,
          allocated: {
            direct: 0,
            overlay: 0,
            signup: 0,
            upload: 0,
            other: 0,
            all_network: 0,
          },
        },
      },
      {
        id: 492841,
        code: "USCENSUS_12060",
        name: "Census Day 2019",
        visibility: "Unlisted",
        to_date: {
          total_subscriptions: 2978,
          new_subscriptions: 3283,
          deleted_subscriptions: 305,
          bulletins_sent: 491,
        },
        this_period: {
          new_subscriptions: 1,
          deleted_subscriptions: 1,
          bulletins_sent: 5,
          allocated: {
            direct: 0,
            overlay: 0,
            signup: 0,
            upload: 0,
            other: 0,
            all_network: 0,
          },
        },
      },
      {
        id: 452433,
        code: "USCENSUS_11958",
        name: "Census Partnerships",
        description:
          "Partner with Us: Start Here. We serve as the leading source of quality data about the nation's people and economy. Whether you’re a business, school, nonprofit, or government, we’ll work with you to find new and innovative ways to partner with the Census Bureau. Get Started!",
        visibility: "Listed",
        to_date: {
          total_subscriptions: 67328,
          new_subscriptions: 115639,
          deleted_subscriptions: 48311,
          bulletins_sent: 1379,
        },
        this_period: {
          new_subscriptions: 2129,
          deleted_subscriptions: 2535,
          bulletins_sent: 5,
          allocated: {
            direct: 284,
            overlay: 11,
            signup: 0,
            upload: 536,
            other: 0,
            all_network: 1295,
          },
        },
      },
      {
        id: 449126,
        code: "USCENSUS_11941",
        name: "Census Jobs",
        description:
          "Get Census Job Updates: Start Here. Sign up here to get important updates on new job postings and learn how to submit your application for a job with the Census Bureau.",
        visibility: "Listed",
        to_date: {
          total_subscriptions: 231823,
          new_subscriptions: 292842,
          deleted_subscriptions: 61019,
          bulletins_sent: 1070,
        },
        this_period: {
          new_subscriptions: 13295,
          deleted_subscriptions: 2492,
          bulletins_sent: 5,
          allocated: {
            direct: 1778,
            overlay: 74,
            signup: 0,
            upload: 3352,
            other: 0,
            all_network: 8089,
          },
        },
      },
      {
        id: 444992,
        code: "USCENSUS_11927",
        name: "Census Updates for Business",
        description:
          "See How It All Adds Up: Start Here. We serve as the leading source of quality data about the nation's people and economy. Sign up here to get important Economic Census updates, news, and data from the Census Bureau. Get Started!",
        visibility: "Listed",
        to_date: {
          total_subscriptions: 151974,
          new_subscriptions: 230744,
          deleted_subscriptions: 78770,
          bulletins_sent: 1596,
        },
        this_period: {
          new_subscriptions: 3677,
          deleted_subscriptions: 2628,
          bulletins_sent: 8,
          allocated: {
            direct: 491,
            overlay: 20,
            signup: 0,
            upload: 927,
            other: 0,
            all_network: 2237,
          },
        },
      },
      {
        id: 444983,
        code: "USCENSUS_11926",
        name: "Census Updates",
        description:
          "Get the Facts: Start Here. We serve as the leading source of quality data about the nation's people and economy. Sign up here to get important updates, news, and data from the Census Bureau. Get Started!",
        visibility: "Listed",
        to_date: {
          total_subscriptions: 286998,
          new_subscriptions: 405483,
          deleted_subscriptions: 118485,
          bulletins_sent: 1928,
        },
        this_period: {
          new_subscriptions: 4233,
          deleted_subscriptions: 2980,
          bulletins_sent: 7,
          allocated: {
            direct: 566,
            overlay: 23,
            signup: 0,
            upload: 1067,
            other: 0,
            all_network: 2575,
          },
        },
      },
      {
        id: 295482,
        code: "USCENSUS_11759",
        name: "2020 Census Conferences, Webinars, and Workshops",
        visibility: "Listed",
        to_date: {
          total_subscriptions: 51089,
          new_subscriptions: 69862,
          deleted_subscriptions: 18773,
          bulletins_sent: 1061,
        },
        this_period: {
          new_subscriptions: 229,
          deleted_subscriptions: 123,
          bulletins_sent: 6,
          allocated: {
            direct: 30,
            overlay: 1,
            signup: 0,
            upload: 57,
            other: 0,
            all_network: 139,
          },
        },
      },
      {
        id: 295477,
        code: "USCENSUS_11758",
        name: "2020 Census Tests",
        visibility: "Listed",
        to_date: {
          total_subscriptions: 51281,
          new_subscriptions: 70129,
          deleted_subscriptions: 18848,
          bulletins_sent: 1058,
        },
        this_period: {
          new_subscriptions: 233,
          deleted_subscriptions: 127,
          bulletins_sent: 6,
          allocated: {
            direct: 31,
            overlay: 1,
            signup: 0,
            upload: 58,
            other: 0,
            all_network: 141,
          },
        },
      },
      {
        id: 289016,
        code: "USCENSUS_11754",
        name: "General 2020 Census Updates",
        visibility: "Listed",
        to_date: {
          total_subscriptions: 72552,
          new_subscriptions: 98392,
          deleted_subscriptions: 25840,
          bulletins_sent: 1084,
        },
        this_period: {
          new_subscriptions: 281,
          deleted_subscriptions: 164,
          bulletins_sent: 6,
          allocated: {
            direct: 37,
            overlay: 1,
            signup: 0,
            upload: 70,
            other: 0,
            all_network: 170,
          },
        },
      },
    ],
  },
  "40877539": {
    detail: {
      id: "40877539",
      created_at: "2019-12-04T17:20:08.000Z",
      subject: "4 Great Tips for Using SIS in the Classroom",
      to_text:
        'Subscribers of Statistics in Schools who were sent SIS Welcome Email #2 at least 2 days ago, and were not sent this campaign message ever where email contains "@"',
      delivery_status_name: "Succeeded",
      addresses_count: 174,
      success_count: 174,
      failed_count: 0,
      percent_success: 100,
      immediate_email_recipients: 159,
      emails_delivered: 174,
      emails_failed: 0,
      percent_emails_delivered: 100,
      opens_count: 35,
      percent_opened: 20.114942528735632,
      nonunique_opens_count: 49,
      links_count: 23,
      click_rate: 6.32183908045977,
      clicks_count: 11,
      nonunique_clicks_count: 14,
      sender_email: "matthew.e.tompkins@census.gov",
      digest_email_recipients: 15,
      unique_click_count: 11,
      total_click_count: 14,
      utm_campaign: "11110101wcc20s3ccedurs",
      unsubscribes: 0,
    },
    links: [
      {
        id: "140434515",
        link_url:
          "https://www.instagram.com/uscensusbureau/?utm_campaign=11110101wcc20s3ccedurs&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 1,
        total_click_count: 1,
      },
      {
        id: "140434520",
        link_url: "https://content.govdelivery.com/accounts/USCENSUS/bulletins/26fbde3",
        unique_click_count: 1,
        total_click_count: 1,
      },
      {
        id: "140434492",
        link_url:
          "https://www.census.gov/schools/?utm_campaign=11110101wcc20s3ccedurs&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 2,
        total_click_count: 3,
      },
      {
        id: "140434518",
        link_url:
          "https://twitter.com/uscensusbureau/?utm_campaign=11110101wcc20s3ccedurs&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 1,
        total_click_count: 1,
      },
      {
        id: "140434495",
        link_url:
          "https://www.census.gov/programs-surveys/sis.html?utm_campaign=11110101wcc20s3ccedurs&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 1,
        total_click_count: 3,
      },
      {
        id: "140434514",
        link_url:
          "https://public.govdelivery.com/accounts/USCENSUS/subscriber/edit?preferences=true#tab1",
        unique_click_count: 1,
        total_click_count: 1,
      },
      {
        id: "140434517",
        link_url:
          "https://www.linkedin.com/company/us-census-bureau/?utm_campaign=11110101wcc20s3ccedurs&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 1,
        total_click_count: 1,
      },
      {
        id: "140434504",
        link_url:
          "https://www.census.gov/programs-surveys/sis/about/teachers-guide.html?utm_campaign=11110101wcc20s3ccedurs&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 2,
        total_click_count: 2,
      },
      {
        id: "140434513",
        link_url:
          "https://www.census.gov/programs-surveys/sis/resources/maps.html?utm_campaign=11110101wcc20s3ccedurs&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 1,
        total_click_count: 1,
      },
      {
        id: "140434498",
        link_url:
          "https://www.census.gov/schools?utm_campaign=11110101wcc20s3ccedurs&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140434510",
        link_url:
          "https://census.gov/schools/?utm_campaign=11110101wcc20s3ccedurs&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140434512",
        link_url:
          "https://www.census.gov/programs-surveys/sis/resources/warm-up-activities.html?utm_campaign=11110101wcc20s3ccedurs&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140434516",
        link_url:
          "https://www.youtube.com/user/uscensusbureau/?utm_campaign=11110101wcc20s3ccedurs&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140434519",
        link_url:
          "https://www.facebook.com/uscensusbureau/?utm_campaign=11110101wcc20s3ccedurs&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140434521",
        link_url:
          "http://www.census.gov/about/contact-us.html?utm_campaign=11110101wcc20s3ccedurs&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140434522",
        link_url: "https://subscriberhelp.govdelivery.com/",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140434523",
        link_url:
          "https://public.govdelivery.com/accounts/USCENSUS/subscriber/one_click_unsubscribe?verification=%5B%5BVERIFICATION%5D%5D&destination=%5B%5BEMAIL_ADDRESS%5D%5D",
        unique_click_count: 0,
        total_click_count: 0,
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
        to_date: {
          total_subscriptions: 191045,
          new_subscriptions: 268844,
          deleted_subscriptions: 77799,
          bulletins_sent: 1012,
        },
        this_period: {
          new_subscriptions: 3758,
          deleted_subscriptions: 2674,
          bulletins_sent: 5,
          allocated: {
            direct: 502,
            overlay: 20,
            signup: 0,
            upload: 947,
            other: 0,
            all_network: 2286,
          },
        },
      },
    ],
  },
  "40877548": {
    detail: {
      id: "40877548",
      created_at: "2019-12-04T17:20:11.000Z",
      subject: "2020 Census: What? When? How?",
      to_text:
        'Subscribers of 2020 Census Conferences, Webinars, and Workshops, 2020 Census Tests, 2020 Welcome Campaign Test, Census Day 2019, Census Jobs, Census Partnerships, Census Updates, Census Updates for Business, or General 2020 Census Updates, who were sent Welcome Message #2 at least 1 days ago, and were not sent this campaign message ever where email contains "@"',
      delivery_status_name: "Delivered",
      addresses_count: 229,
      success_count: 228,
      failed_count: 1,
      percent_success: 99.56331877729258,
      immediate_email_recipients: 202,
      emails_delivered: 228,
      emails_failed: 1,
      percent_emails_delivered: 99.56331877729258,
      opens_count: 81,
      percent_opened: 35.526315789473685,
      nonunique_opens_count: 139,
      links_count: 14,
      click_rate: 3.9473684210526314,
      clicks_count: 9,
      nonunique_clicks_count: 10,
      sender_email: "anthony.j.calabrese@census.gov",
      digest_email_recipients: 27,
      unique_click_count: 9,
      total_click_count: 10,
      utm_campaign: "11110101wcc20s4ccallrs",
      unsubscribes: 1,
    },
    links: [
      {
        id: "140434549",
        link_url:
          "http://www.census.gov/about/contact-us.html?utm_campaign=11110101wcc20s4ccallrs&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 1,
        total_click_count: 1,
      },
      {
        id: "140434553",
        link_url:
          "https://public.govdelivery.com/accounts/USCENSUS/subscriber/edit?preferences=true#tab1",
        unique_click_count: 1,
        total_click_count: 1,
      },
      {
        id: "140434563",
        link_url: "https://content.govdelivery.com/accounts/USCENSUS/bulletins/26fbdec",
        unique_click_count: 1,
        total_click_count: 2,
      },
      {
        id: "140434543",
        link_url:
          "https://2020census.gov/en/important-dates.html?utm_campaign=11110101wcc20s4ccallrs&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 4,
        total_click_count: 4,
      },
      {
        id: "140434546",
        link_url:
          "https://2020census.gov/en/ways-to-respond.html?utm_campaign=11110101wcc20s4ccallrs&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 1,
        total_click_count: 1,
      },
      {
        id: "140434555",
        link_url:
          "https://public.govdelivery.com/accounts/USCENSUS/subscriber/one_click_unsubscribe?verification=%5B%5BVERIFICATION%5D%5D&destination=%5B%5BEMAIL_ADDRESS%5D%5D",
        unique_click_count: 1,
        total_click_count: 1,
      },
      {
        id: "140434547",
        link_url:
          "https://2020census.gov/en/about-questions.html?utm_campaign=11110101wcc20s4ccallrs&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140434548",
        link_url:
          "https://2020census.gov/en/data-protection.html?utm_campaign=11110101wcc20s4ccallrs&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140434551",
        link_url: "https://subscriberhelp.govdelivery.com/",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140434556",
        link_url:
          "https://www.youtube.com/user/uscensusbureau/?utm_campaign=11110101wcc20s4ccallrs&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140434558",
        link_url:
          "https://www.instagram.com/uscensusbureau/?utm_campaign=11110101wcc20s4ccallrs&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140434560",
        link_url:
          "https://twitter.com/uscensusbureau/?utm_campaign=11110101wcc20s4ccallrs&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140434562",
        link_url:
          "https://www.linkedin.com/company/us-census-bureau/?utm_campaign=11110101wcc20s4ccallrs&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140434564",
        link_url:
          "https://www.facebook.com/uscensusbureau/?utm_campaign=11110101wcc20s4ccallrs&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 0,
        total_click_count: 0,
      },
    ],
    topics: [
      {
        id: 507624,
        code: "USCENSUS_12091",
        name: "2020 Welcome Campaign Test",
        visibility: "Unlisted",
        to_date: {
          total_subscriptions: 7,
          new_subscriptions: 7,
          deleted_subscriptions: 0,
          bulletins_sent: 485,
        },
        this_period: {
          new_subscriptions: 0,
          deleted_subscriptions: 0,
          bulletins_sent: 5,
          allocated: {
            direct: 0,
            overlay: 0,
            signup: 0,
            upload: 0,
            other: 0,
            all_network: 0,
          },
        },
      },
      {
        id: 492841,
        code: "USCENSUS_12060",
        name: "Census Day 2019",
        visibility: "Unlisted",
        to_date: {
          total_subscriptions: 2978,
          new_subscriptions: 3283,
          deleted_subscriptions: 305,
          bulletins_sent: 491,
        },
        this_period: {
          new_subscriptions: 1,
          deleted_subscriptions: 1,
          bulletins_sent: 5,
          allocated: {
            direct: 0,
            overlay: 0,
            signup: 0,
            upload: 0,
            other: 0,
            all_network: 0,
          },
        },
      },
      {
        id: 452433,
        code: "USCENSUS_11958",
        name: "Census Partnerships",
        description:
          "Partner with Us: Start Here. We serve as the leading source of quality data about the nation's people and economy. Whether you’re a business, school, nonprofit, or government, we’ll work with you to find new and innovative ways to partner with the Census Bureau. Get Started!",
        visibility: "Listed",
        to_date: {
          total_subscriptions: 67328,
          new_subscriptions: 115639,
          deleted_subscriptions: 48311,
          bulletins_sent: 1379,
        },
        this_period: {
          new_subscriptions: 2129,
          deleted_subscriptions: 2535,
          bulletins_sent: 5,
          allocated: {
            direct: 284,
            overlay: 11,
            signup: 0,
            upload: 536,
            other: 0,
            all_network: 1295,
          },
        },
      },
      {
        id: 449126,
        code: "USCENSUS_11941",
        name: "Census Jobs",
        description:
          "Get Census Job Updates: Start Here. Sign up here to get important updates on new job postings and learn how to submit your application for a job with the Census Bureau.",
        visibility: "Listed",
        to_date: {
          total_subscriptions: 231823,
          new_subscriptions: 292842,
          deleted_subscriptions: 61019,
          bulletins_sent: 1070,
        },
        this_period: {
          new_subscriptions: 13295,
          deleted_subscriptions: 2492,
          bulletins_sent: 5,
          allocated: {
            direct: 1778,
            overlay: 74,
            signup: 0,
            upload: 3352,
            other: 0,
            all_network: 8089,
          },
        },
      },
      {
        id: 444992,
        code: "USCENSUS_11927",
        name: "Census Updates for Business",
        description:
          "See How It All Adds Up: Start Here. We serve as the leading source of quality data about the nation's people and economy. Sign up here to get important Economic Census updates, news, and data from the Census Bureau. Get Started!",
        visibility: "Listed",
        to_date: {
          total_subscriptions: 151974,
          new_subscriptions: 230744,
          deleted_subscriptions: 78770,
          bulletins_sent: 1596,
        },
        this_period: {
          new_subscriptions: 3677,
          deleted_subscriptions: 2628,
          bulletins_sent: 8,
          allocated: {
            direct: 491,
            overlay: 20,
            signup: 0,
            upload: 927,
            other: 0,
            all_network: 2237,
          },
        },
      },
      {
        id: 444983,
        code: "USCENSUS_11926",
        name: "Census Updates",
        description:
          "Get the Facts: Start Here. We serve as the leading source of quality data about the nation's people and economy. Sign up here to get important updates, news, and data from the Census Bureau. Get Started!",
        visibility: "Listed",
        to_date: {
          total_subscriptions: 286998,
          new_subscriptions: 405483,
          deleted_subscriptions: 118485,
          bulletins_sent: 1928,
        },
        this_period: {
          new_subscriptions: 4233,
          deleted_subscriptions: 2980,
          bulletins_sent: 7,
          allocated: {
            direct: 566,
            overlay: 23,
            signup: 0,
            upload: 1067,
            other: 0,
            all_network: 2575,
          },
        },
      },
      {
        id: 295482,
        code: "USCENSUS_11759",
        name: "2020 Census Conferences, Webinars, and Workshops",
        visibility: "Listed",
        to_date: {
          total_subscriptions: 51089,
          new_subscriptions: 69862,
          deleted_subscriptions: 18773,
          bulletins_sent: 1061,
        },
        this_period: {
          new_subscriptions: 229,
          deleted_subscriptions: 123,
          bulletins_sent: 6,
          allocated: {
            direct: 30,
            overlay: 1,
            signup: 0,
            upload: 57,
            other: 0,
            all_network: 139,
          },
        },
      },
      {
        id: 295477,
        code: "USCENSUS_11758",
        name: "2020 Census Tests",
        visibility: "Listed",
        to_date: {
          total_subscriptions: 51281,
          new_subscriptions: 70129,
          deleted_subscriptions: 18848,
          bulletins_sent: 1058,
        },
        this_period: {
          new_subscriptions: 233,
          deleted_subscriptions: 127,
          bulletins_sent: 6,
          allocated: {
            direct: 31,
            overlay: 1,
            signup: 0,
            upload: 58,
            other: 0,
            all_network: 141,
          },
        },
      },
      {
        id: 289016,
        code: "USCENSUS_11754",
        name: "General 2020 Census Updates",
        visibility: "Listed",
        to_date: {
          total_subscriptions: 72552,
          new_subscriptions: 98392,
          deleted_subscriptions: 25840,
          bulletins_sent: 1084,
        },
        this_period: {
          new_subscriptions: 281,
          deleted_subscriptions: 164,
          bulletins_sent: 6,
          allocated: {
            direct: 37,
            overlay: 1,
            signup: 0,
            upload: 70,
            other: 0,
            all_network: 170,
          },
        },
      },
    ],
  },
  "40877585": {
    detail: {
      id: "40877585",
      created_at: "2019-12-04T17:25:07.000Z",
      subject: "Why the 2020 Census Matters for Your School",
      to_text:
        'Subscribers of Statistics in Schools who were sent SIS Welcome Email #3 at least 2 days ago, and were not sent this campaign message ever where email contains "@"',
      delivery_status_name: "Delivered",
      addresses_count: 361,
      success_count: 359,
      failed_count: 2,
      percent_success: 99.44598337950139,
      immediate_email_recipients: 349,
      emails_delivered: 359,
      emails_failed: 2,
      percent_emails_delivered: 99.44598337950139,
      opens_count: 83,
      percent_opened: 23.119777158774372,
      nonunique_opens_count: 137,
      links_count: 19,
      click_rate: 1.6713091922005572,
      clicks_count: 6,
      nonunique_clicks_count: 6,
      sender_email: "matthew.e.tompkins@census.gov",
      digest_email_recipients: 12,
      unique_click_count: 6,
      total_click_count: 6,
      utm_campaign: "11110101wcc20s4ccedurs",
      unsubscribes: 1,
    },
    links: [
      {
        id: "140434887",
        link_url:
          "https://www.census.gov/programs-surveys/sis/2020census/why-2020-matters.html?utm_campaign=11110101wcc20s4ccedurs&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 2,
        total_click_count: 2,
      },
      {
        id: "140434890",
        link_url:
          "https://www.census.gov/programs-surveys/sis.html?utm_campaign=11110101wcc20s4ccedurs&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 2,
        total_click_count: 2,
      },
      {
        id: "140434897",
        link_url:
          "https://public.govdelivery.com/accounts/USCENSUS/subscriber/edit?preferences=true#tab1",
        unique_click_count: 1,
        total_click_count: 1,
      },
      {
        id: "140434896",
        link_url:
          "https://public.govdelivery.com/accounts/USCENSUS/subscriber/one_click_unsubscribe?verification=%5B%5BVERIFICATION%5D%5D&destination=%5B%5BEMAIL_ADDRESS%5D%5D",
        unique_click_count: 1,
        total_click_count: 1,
      },
      {
        id: "140434889",
        link_url:
          "https://www.census.gov/schools/?utm_campaign=11110101wcc20s4ccedurs&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140434891",
        link_url:
          "https://www.facebook.com/uscensusbureau/?utm_campaign=11110101wcc20s4ccedurs&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140434892",
        link_url:
          "https://twitter.com/uscensusbureau/?utm_campaign=11110101wcc20s4ccedurs&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140434893",
        link_url: "https://content.govdelivery.com/accounts/USCENSUS/bulletins/26fbe11",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140434894",
        link_url:
          "http://www.census.gov/about/contact-us.html?utm_campaign=11110101wcc20s4ccedurs&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140434895",
        link_url: "https://subscriberhelp.govdelivery.com/",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140434898",
        link_url:
          "https://www.instagram.com/uscensusbureau/?utm_campaign=11110101wcc20s4ccedurs&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140434899",
        link_url:
          "https://www.youtube.com/user/uscensusbureau/?utm_campaign=11110101wcc20s4ccedurs&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140434900",
        link_url:
          "https://www.linkedin.com/company/us-census-bureau/?utm_campaign=11110101wcc20s4ccedurs&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140434888",
        link_url:
          "https://www.census.gov/programs-surveys/sis/2020census/2020-resources.html?utm_campaign=11110101wcc20s4ccedurs&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 0,
        total_click_count: 0,
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
        to_date: {
          total_subscriptions: 191045,
          new_subscriptions: 268844,
          deleted_subscriptions: 77799,
          bulletins_sent: 1012,
        },
        this_period: {
          new_subscriptions: 3758,
          deleted_subscriptions: 2674,
          bulletins_sent: 5,
          allocated: {
            direct: 502,
            overlay: 20,
            signup: 0,
            upload: 947,
            other: 0,
            all_network: 2286,
          },
        },
      },
    ],
  },
  "40877587": {
    detail: {
      id: "40877587",
      created_at: "2019-12-04T17:25:08.000Z",
      subject: "Help Us Complete the Count",
      to_text:
        'Subscribers of 2020 Census Conferences, Webinars, and Workshops, 2020 Census Tests, 2020 Welcome Campaign Test, Census Day 2019, Census Jobs, Census Partnerships, Census Updates, Census Updates for Business, or General 2020 Census Updates, who were not sent this campaign message ever, and were sent Welcome Message #3 at least 1 days ago where email contains "@"',
      delivery_status_name: "Succeeded",
      addresses_count: 186,
      success_count: 186,
      failed_count: 0,
      percent_success: 100,
      immediate_email_recipients: 168,
      emails_delivered: 186,
      emails_failed: 0,
      percent_emails_delivered: 100,
      opens_count: 71,
      percent_opened: 38.17204301075269,
      nonunique_opens_count: 139,
      links_count: 16,
      click_rate: 5.376344086021505,
      clicks_count: 10,
      nonunique_clicks_count: 10,
      sender_email: "anthony.j.calabrese@census.gov",
      digest_email_recipients: 18,
      unique_click_count: 10,
      total_click_count: 10,
      utm_campaign: "11110101wcc20s5ccallrs",
      unsubscribes: 0,
    },
    links: [
      {
        id: "140434902",
        link_url:
          "https://2020census.gov/en/how-to-help.html?utm_campaign=11110101wcc20s5ccallrs&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 5,
        total_click_count: 5,
      },
      {
        id: "140434962",
        link_url:
          "https://2020census.gov/en/jobs?utm_campaign=11110101wcc20s5ccallrs&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 3,
        total_click_count: 3,
      },
      {
        id: "140434915",
        link_url:
          "http://www.census.gov/about/contact-us.html?utm_campaign=11110101wcc20s5ccallrs&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 1,
        total_click_count: 1,
      },
      {
        id: "140434930",
        link_url:
          "https://public.govdelivery.com/accounts/USCENSUS/subscriber/edit?preferences=true#tab1",
        unique_click_count: 1,
        total_click_count: 1,
      },
      {
        id: "140434912",
        link_url:
          "https://2020census.gov/en/partners.html?utm_campaign=11110101wcc20s5ccallrs&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140434919",
        link_url: "https://subscriberhelp.govdelivery.com/",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140434924",
        link_url:
          "https://public.govdelivery.com/accounts/USCENSUS/subscriber/one_click_unsubscribe?verification=%5B%5BVERIFICATION%5D%5D&destination=%5B%5BEMAIL_ADDRESS%5D%5D",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140434939",
        link_url:
          "https://www.youtube.com/user/uscensusbureau/?utm_campaign=11110101wcc20s5ccallrs&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140434946",
        link_url:
          "https://www.instagram.com/uscensusbureau/?utm_campaign=11110101wcc20s5ccallrs&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140434953",
        link_url:
          "https://twitter.com/uscensusbureau/?utm_campaign=11110101wcc20s5ccallrs&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140434957",
        link_url:
          "https://www.linkedin.com/company/us-census-bureau/?utm_campaign=11110101wcc20s5ccallrs&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140434958",
        link_url: "https://content.govdelivery.com/accounts/USCENSUS/bulletins/26fbe13",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140434960",
        link_url:
          "https://www.facebook.com/uscensusbureau/?utm_campaign=11110101wcc20s5ccallrs&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140434964",
        link_url:
          "https://www.census.gov/schools/2020census/why-2020-matters.html?utm_campaign=11110101wcc20s5ccallrs&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 0,
        total_click_count: 0,
      },
    ],
    topics: [
      {
        id: 507624,
        code: "USCENSUS_12091",
        name: "2020 Welcome Campaign Test",
        visibility: "Unlisted",
        to_date: {
          total_subscriptions: 7,
          new_subscriptions: 7,
          deleted_subscriptions: 0,
          bulletins_sent: 485,
        },
        this_period: {
          new_subscriptions: 0,
          deleted_subscriptions: 0,
          bulletins_sent: 5,
          allocated: {
            direct: 0,
            overlay: 0,
            signup: 0,
            upload: 0,
            other: 0,
            all_network: 0,
          },
        },
      },
      {
        id: 492841,
        code: "USCENSUS_12060",
        name: "Census Day 2019",
        visibility: "Unlisted",
        to_date: {
          total_subscriptions: 2978,
          new_subscriptions: 3283,
          deleted_subscriptions: 305,
          bulletins_sent: 491,
        },
        this_period: {
          new_subscriptions: 1,
          deleted_subscriptions: 1,
          bulletins_sent: 5,
          allocated: {
            direct: 0,
            overlay: 0,
            signup: 0,
            upload: 0,
            other: 0,
            all_network: 0,
          },
        },
      },
      {
        id: 452433,
        code: "USCENSUS_11958",
        name: "Census Partnerships",
        description:
          "Partner with Us: Start Here. We serve as the leading source of quality data about the nation's people and economy. Whether you’re a business, school, nonprofit, or government, we’ll work with you to find new and innovative ways to partner with the Census Bureau. Get Started!",
        visibility: "Listed",
        to_date: {
          total_subscriptions: 67328,
          new_subscriptions: 115639,
          deleted_subscriptions: 48311,
          bulletins_sent: 1379,
        },
        this_period: {
          new_subscriptions: 2129,
          deleted_subscriptions: 2535,
          bulletins_sent: 5,
          allocated: {
            direct: 284,
            overlay: 11,
            signup: 0,
            upload: 536,
            other: 0,
            all_network: 1295,
          },
        },
      },
      {
        id: 449126,
        code: "USCENSUS_11941",
        name: "Census Jobs",
        description:
          "Get Census Job Updates: Start Here. Sign up here to get important updates on new job postings and learn how to submit your application for a job with the Census Bureau.",
        visibility: "Listed",
        to_date: {
          total_subscriptions: 231823,
          new_subscriptions: 292842,
          deleted_subscriptions: 61019,
          bulletins_sent: 1070,
        },
        this_period: {
          new_subscriptions: 13295,
          deleted_subscriptions: 2492,
          bulletins_sent: 5,
          allocated: {
            direct: 1778,
            overlay: 74,
            signup: 0,
            upload: 3352,
            other: 0,
            all_network: 8089,
          },
        },
      },
      {
        id: 444992,
        code: "USCENSUS_11927",
        name: "Census Updates for Business",
        description:
          "See How It All Adds Up: Start Here. We serve as the leading source of quality data about the nation's people and economy. Sign up here to get important Economic Census updates, news, and data from the Census Bureau. Get Started!",
        visibility: "Listed",
        to_date: {
          total_subscriptions: 151974,
          new_subscriptions: 230744,
          deleted_subscriptions: 78770,
          bulletins_sent: 1596,
        },
        this_period: {
          new_subscriptions: 3677,
          deleted_subscriptions: 2628,
          bulletins_sent: 8,
          allocated: {
            direct: 491,
            overlay: 20,
            signup: 0,
            upload: 927,
            other: 0,
            all_network: 2237,
          },
        },
      },
      {
        id: 444983,
        code: "USCENSUS_11926",
        name: "Census Updates",
        description:
          "Get the Facts: Start Here. We serve as the leading source of quality data about the nation's people and economy. Sign up here to get important updates, news, and data from the Census Bureau. Get Started!",
        visibility: "Listed",
        to_date: {
          total_subscriptions: 286998,
          new_subscriptions: 405483,
          deleted_subscriptions: 118485,
          bulletins_sent: 1928,
        },
        this_period: {
          new_subscriptions: 4233,
          deleted_subscriptions: 2980,
          bulletins_sent: 7,
          allocated: {
            direct: 566,
            overlay: 23,
            signup: 0,
            upload: 1067,
            other: 0,
            all_network: 2575,
          },
        },
      },
      {
        id: 295482,
        code: "USCENSUS_11759",
        name: "2020 Census Conferences, Webinars, and Workshops",
        visibility: "Listed",
        to_date: {
          total_subscriptions: 51089,
          new_subscriptions: 69862,
          deleted_subscriptions: 18773,
          bulletins_sent: 1061,
        },
        this_period: {
          new_subscriptions: 229,
          deleted_subscriptions: 123,
          bulletins_sent: 6,
          allocated: {
            direct: 30,
            overlay: 1,
            signup: 0,
            upload: 57,
            other: 0,
            all_network: 139,
          },
        },
      },
      {
        id: 295477,
        code: "USCENSUS_11758",
        name: "2020 Census Tests",
        visibility: "Listed",
        to_date: {
          total_subscriptions: 51281,
          new_subscriptions: 70129,
          deleted_subscriptions: 18848,
          bulletins_sent: 1058,
        },
        this_period: {
          new_subscriptions: 233,
          deleted_subscriptions: 127,
          bulletins_sent: 6,
          allocated: {
            direct: 31,
            overlay: 1,
            signup: 0,
            upload: 58,
            other: 0,
            all_network: 141,
          },
        },
      },
      {
        id: 289016,
        code: "USCENSUS_11754",
        name: "General 2020 Census Updates",
        visibility: "Listed",
        to_date: {
          total_subscriptions: 72552,
          new_subscriptions: 98392,
          deleted_subscriptions: 25840,
          bulletins_sent: 1084,
        },
        this_period: {
          new_subscriptions: 281,
          deleted_subscriptions: 164,
          bulletins_sent: 6,
          allocated: {
            direct: 37,
            overlay: 1,
            signup: 0,
            upload: 70,
            other: 0,
            all_network: 170,
          },
        },
      },
    ],
  },
  "40878965": {
    detail: {
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
      unique_click_count: 8239,
      total_click_count: 12304,
      utm_campaign: "20191204msacos1ccstors",
      unsubscribes: 265,
    },
    links: [
      {
        id: "140451801",
        link_url:
          "https://public.govdelivery.com/accounts/USCENSUS/subscriber/edit?preferences=true#tab1",
        unique_click_count: 55,
        total_click_count: 73,
      },
      {
        id: "140451785",
        link_url:
          "https://www.census.gov/AmericaCounts?utm_campaign=20191204msacos1ccstors&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 914,
        total_click_count: 1007,
      },
      {
        id: "140451784",
        link_url:
          "https://www.facebook.com/uscensusbureau/?utm_campaign=20191204msacos1ccstors&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 29,
        total_click_count: 43,
      },
      {
        id: "140451790",
        link_url:
          "https://2020census.gov/en/jobs.html?utm_campaign=20191204msacos1ccstors&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 1387,
        total_click_count: 2550,
      },
      {
        id: "140451794",
        link_url:
          "http://www.census.gov/about/contact-us.html?utm_campaign=20191204msacos1ccstors&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 13,
        total_click_count: 20,
      },
      {
        id: "140451799",
        link_url:
          "https://public.govdelivery.com/accounts/USCENSUS/subscriber/one_click_unsubscribe?verification=%5B%5BVERIFICATION%5D%5D&destination=%5B%5BEMAIL_ADDRESS%5D%5D",
        unique_click_count: 265,
        total_click_count: 313,
      },
      {
        id: "140451807",
        link_url:
          "https://www.linkedin.com/company/us-census-bureau/?utm_campaign=20191204msacos1ccstors&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 21,
        total_click_count: 30,
      },
      {
        id: "140451805",
        link_url:
          "https://www.youtube.com/user/uscensusbureau/?utm_campaign=20191204msacos1ccstors&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 17,
        total_click_count: 30,
      },
      {
        id: "140451781",
        link_url:
          "https://www.census.gov/library/stories/2019/12/2020-census-count-guides-funding-of-new-roads-and-bridges.html?utm_campaign=20191204msacos1ccstors&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 1769,
        total_click_count: 4208,
      },
      {
        id: "140451810",
        link_url:
          "https://twitter.com/uscensusbureau/?utm_campaign=20191204msacos1ccstors&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 913,
        total_click_count: 960,
      },
      {
        id: "140451792",
        link_url: "https://content.govdelivery.com/accounts/USCENSUS/bulletins/26fc375",
        unique_click_count: 1003,
        total_click_count: 1090,
      },
      {
        id: "140451783",
        link_url:
          "https://www.census.gov/newsroom/about.html?utm_campaign=20191204msacos1ccstors&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 920,
        total_click_count: 970,
      },
      {
        id: "140451797",
        link_url: "https://subscriberhelp.govdelivery.com/",
        unique_click_count: 11,
        total_click_count: 20,
      },
      {
        id: "140451788",
        link_url:
          "https://census.gov/library/stories/2019/12/supplemental-poverty-measure-shows-state-level-impact-of-food-stamps.html?utm_campaign=20191204msacos1ccstors&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 904,
        total_click_count: 960,
      },
      {
        id: "140451803",
        link_url:
          "https://www.instagram.com/uscensusbureau/?utm_campaign=20191204msacos1ccstors&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 18,
        total_click_count: 30,
      },
    ],
    topics: [
      {
        id: 452958,
        code: "USCENSUS_11960",
        name: "Stats for Stories",
        description:
          "Stats for Stories provides links to timely story ideas highlighting the Census Bureau's newsworthy statistics that relate to current events, observances, holidays, and anniversaries. The story ideas are intended to assist the media in story mining and producing content for their respective audiences.",
        visibility: "Listed",
        to_date: {
          total_subscriptions: 135485,
          new_subscriptions: 203342,
          deleted_subscriptions: 67857,
          bulletins_sent: 920,
        },
        this_period: {
          new_subscriptions: 3618,
          deleted_subscriptions: 2563,
          bulletins_sent: 1,
          allocated: {
            direct: 484,
            overlay: 20,
            signup: 0,
            upload: 912,
            other: 0,
            all_network: 2201,
          },
        },
      },
      {
        id: 449122,
        code: "USCENSUS_11939",
        name: "America Counts: Stories Behind the Numbers",
        description:
          "Get the Stories: Start Here. America Counts tells the stories behind the numbers in a new inviting way. Sign up here to get important updates, news, and data from the Census Bureau. Get Started!",
        visibility: "Listed",
        to_date: {
          total_subscriptions: 159568,
          new_subscriptions: 240681,
          deleted_subscriptions: 81113,
          bulletins_sent: 1226,
        },
        this_period: {
          new_subscriptions: 3669,
          deleted_subscriptions: 2614,
          bulletins_sent: 1,
          allocated: {
            direct: 490,
            overlay: 20,
            signup: 0,
            upload: 925,
            other: 0,
            all_network: 2232,
          },
        },
      },
      {
        id: 444992,
        code: "USCENSUS_11927",
        name: "Census Updates for Business",
        description:
          "See How It All Adds Up: Start Here. We serve as the leading source of quality data about the nation's people and economy. Sign up here to get important Economic Census updates, news, and data from the Census Bureau. Get Started!",
        visibility: "Listed",
        to_date: {
          total_subscriptions: 151974,
          new_subscriptions: 230744,
          deleted_subscriptions: 78770,
          bulletins_sent: 1596,
        },
        this_period: {
          new_subscriptions: 3677,
          deleted_subscriptions: 2628,
          bulletins_sent: 8,
          allocated: {
            direct: 491,
            overlay: 20,
            signup: 0,
            upload: 927,
            other: 0,
            all_network: 2237,
          },
        },
      },
      {
        id: 444983,
        code: "USCENSUS_11926",
        name: "Census Updates",
        description:
          "Get the Facts: Start Here. We serve as the leading source of quality data about the nation's people and economy. Sign up here to get important updates, news, and data from the Census Bureau. Get Started!",
        visibility: "Listed",
        to_date: {
          total_subscriptions: 286998,
          new_subscriptions: 405483,
          deleted_subscriptions: 118485,
          bulletins_sent: 1928,
        },
        this_period: {
          new_subscriptions: 4233,
          deleted_subscriptions: 2980,
          bulletins_sent: 7,
          allocated: {
            direct: 566,
            overlay: 23,
            signup: 0,
            upload: 1067,
            other: 0,
            all_network: 2575,
          },
        },
      },
      {
        id: 424793,
        code: "USCENSUS_11893",
        name: "America Counts : Alpha Launch Audience (Internal)",
        visibility: "Unlisted",
        to_date: {
          total_subscriptions: 197,
          new_subscriptions: 258,
          deleted_subscriptions: 61,
          bulletins_sent: 739,
        },
        this_period: {
          new_subscriptions: 0,
          deleted_subscriptions: 0,
          bulletins_sent: 1,
          allocated: {
            direct: 0,
            overlay: 0,
            signup: 0,
            upload: 0,
            other: 0,
            all_network: 0,
          },
        },
      },
      {
        id: 424780,
        code: "USCENSUS_11894",
        name: "America Counts: Beta Launch Audience (External and Internal)",
        visibility: "Unlisted",
        to_date: {
          total_subscriptions: 644,
          new_subscriptions: 852,
          deleted_subscriptions: 208,
          bulletins_sent: 738,
        },
        this_period: {
          new_subscriptions: 7,
          deleted_subscriptions: 2,
          bulletins_sent: 1,
          allocated: {
            direct: 0,
            overlay: 0,
            signup: 0,
            upload: 1,
            other: 0,
            all_network: 4,
          },
        },
      },
      {
        id: 417807,
        code: "USCENSUS_11880",
        name: "Governments Data",
        visibility: "Listed",
        to_date: {
          total_subscriptions: 41942,
          new_subscriptions: 57156,
          deleted_subscriptions: 15214,
          bulletins_sent: 558,
        },
        this_period: {
          new_subscriptions: 158,
          deleted_subscriptions: 112,
          bulletins_sent: 1,
          allocated: {
            direct: 21,
            overlay: 0,
            signup: 0,
            upload: 39,
            other: 0,
            all_network: 96,
          },
        },
      },
      {
        id: 295482,
        code: "USCENSUS_11759",
        name: "2020 Census Conferences, Webinars, and Workshops",
        visibility: "Listed",
        to_date: {
          total_subscriptions: 51089,
          new_subscriptions: 69862,
          deleted_subscriptions: 18773,
          bulletins_sent: 1061,
        },
        this_period: {
          new_subscriptions: 229,
          deleted_subscriptions: 123,
          bulletins_sent: 6,
          allocated: {
            direct: 30,
            overlay: 1,
            signup: 0,
            upload: 57,
            other: 0,
            all_network: 139,
          },
        },
      },
      {
        id: 295477,
        code: "USCENSUS_11758",
        name: "2020 Census Tests",
        visibility: "Listed",
        to_date: {
          total_subscriptions: 51281,
          new_subscriptions: 70129,
          deleted_subscriptions: 18848,
          bulletins_sent: 1058,
        },
        this_period: {
          new_subscriptions: 233,
          deleted_subscriptions: 127,
          bulletins_sent: 6,
          allocated: {
            direct: 31,
            overlay: 1,
            signup: 0,
            upload: 58,
            other: 0,
            all_network: 141,
          },
        },
      },
      {
        id: 289016,
        code: "USCENSUS_11754",
        name: "General 2020 Census Updates",
        visibility: "Listed",
        to_date: {
          total_subscriptions: 72552,
          new_subscriptions: 98392,
          deleted_subscriptions: 25840,
          bulletins_sent: 1084,
        },
        this_period: {
          new_subscriptions: 281,
          deleted_subscriptions: 164,
          bulletins_sent: 6,
          allocated: {
            direct: 37,
            overlay: 1,
            signup: 0,
            upload: 70,
            other: 0,
            all_network: 170,
          },
        },
      },
      {
        id: 110887,
        code: "USCENSUS_1705",
        name: "Research Matters Blog",
        visibility: "Listed",
        to_date: {
          total_subscriptions: 27106,
          new_subscriptions: 43952,
          deleted_subscriptions: 16846,
          bulletins_sent: 928,
        },
        this_period: {
          new_subscriptions: 108,
          deleted_subscriptions: 68,
          bulletins_sent: 1,
          allocated: {
            direct: 14,
            overlay: 0,
            signup: 0,
            upload: 27,
            other: 0,
            all_network: 65,
          },
        },
      },
      {
        id: 92782,
        code: "USCENSUS_306",
        name: "News about American Indian/Alaska Native Statistics",
        visibility: "Listed",
        to_date: {
          total_subscriptions: 34940,
          new_subscriptions: 57174,
          deleted_subscriptions: 22233,
          bulletins_sent: 2514,
        },
        this_period: {
          new_subscriptions: 136,
          deleted_subscriptions: 79,
          bulletins_sent: 1,
          allocated: {
            direct: 18,
            overlay: 0,
            signup: 0,
            upload: 34,
            other: 0,
            all_network: 82,
          },
        },
      },
      {
        id: 69354,
        code: "USCENSUS_239",
        name: "News about Housing Statistics",
        description:
          "Includes data on housing characteristics such as house type, age, size, plumbing, telephone access, ownership and financing.",
        visibility: "Listed",
        to_date: {
          total_subscriptions: 44119,
          new_subscriptions: 75368,
          deleted_subscriptions: 31247,
          bulletins_sent: 2715,
        },
        this_period: {
          new_subscriptions: 146,
          deleted_subscriptions: 92,
          bulletins_sent: 2,
          allocated: {
            direct: 19,
            overlay: 0,
            signup: 0,
            upload: 36,
            other: 0,
            all_network: 88,
          },
        },
      },
      {
        id: 69353,
        code: "USCENSUS_238",
        name: "News about Business, Industry and Government Statistics",
        description:
          "Includes data on the economy, business ownership, business patterns, industry data, government and tax expenditures.",
        visibility: "Listed",
        to_date: {
          total_subscriptions: 43093,
          new_subscriptions: 74651,
          deleted_subscriptions: 31558,
          bulletins_sent: 2887,
        },
        this_period: {
          new_subscriptions: 145,
          deleted_subscriptions: 85,
          bulletins_sent: 3,
          allocated: {
            direct: 19,
            overlay: 0,
            signup: 0,
            upload: 36,
            other: 0,
            all_network: 88,
          },
        },
      },
      {
        id: 69352,
        code: "USCENSUS_237",
        name: "News about People Statistics",
        description:
          "Includes data on population, family structure, age, sex, race, ethnic groups, education, health care insurance, marital status, disability, language, income, poverty, commuting, mobility and labor force.",
        visibility: "Listed",
        to_date: {
          total_subscriptions: 45962,
          new_subscriptions: 78574,
          deleted_subscriptions: 32609,
          bulletins_sent: 2860,
        },
        this_period: {
          new_subscriptions: 156,
          deleted_subscriptions: 88,
          bulletins_sent: 2,
          allocated: {
            direct: 20,
            overlay: 0,
            signup: 0,
            upload: 39,
            other: 0,
            all_network: 94,
          },
        },
      },
      {
        id: 42329,
        code: "USCENSUS_188",
        name: "Facts for Features",
        description:
          "Statistical factoids for holidays, calendar observances and topics in the news.",
        visibility: "Listed",
        to_date: {
          total_subscriptions: 39461,
          new_subscriptions: 69792,
          deleted_subscriptions: 30330,
          bulletins_sent: 2801,
        },
        this_period: {
          new_subscriptions: 133,
          deleted_subscriptions: 73,
          bulletins_sent: 1,
          allocated: {
            direct: 17,
            overlay: 0,
            signup: 0,
            upload: 33,
            other: 0,
            all_network: 80,
          },
        },
      },
      {
        id: 42328,
        code: "USCENSUS_187",
        name: "Tip Sheets",
        description: "Biweekly newsletter announcing upcoming data releases and reports.",
        visibility: "Listed",
        to_date: {
          total_subscriptions: 40132,
          new_subscriptions: 70737,
          deleted_subscriptions: 30604,
          bulletins_sent: 2801,
        },
        this_period: {
          new_subscriptions: 137,
          deleted_subscriptions: 78,
          bulletins_sent: 1,
          allocated: {
            direct: 18,
            overlay: 0,
            signup: 0,
            upload: 34,
            other: 0,
            all_network: 83,
          },
        },
      },
      {
        id: 42320,
        code: "USCENSUS_189",
        name: "Communications En Espanol",
        visibility: "Listed",
        to_date: {
          total_subscriptions: 35587,
          new_subscriptions: 63146,
          deleted_subscriptions: 27559,
          bulletins_sent: 2303,
        },
        this_period: {
          new_subscriptions: 128,
          deleted_subscriptions: 75,
          bulletins_sent: 1,
          allocated: {
            direct: 17,
            overlay: 0,
            signup: 0,
            upload: 32,
            other: 0,
            all_network: 77,
          },
        },
      },
      {
        id: 42295,
        code: "USCENSUS_123",
        name: "Random Samplings blog",
        description: "Random samplings blog",
        visibility: "Listed",
        to_date: {
          total_subscriptions: 27047,
          new_subscriptions: 47683,
          deleted_subscriptions: 20636,
          bulletins_sent: 1099,
        },
        this_period: {
          new_subscriptions: 105,
          deleted_subscriptions: 72,
          bulletins_sent: 1,
          allocated: {
            direct: 14,
            overlay: 0,
            signup: 0,
            upload: 26,
            other: 0,
            all_network: 63,
          },
        },
      },
      {
        id: 42277,
        code: "USCENSUS_13",
        name: "Press Kits",
        visibility: "Listed",
        to_date: {
          total_subscriptions: 35219,
          new_subscriptions: 49385,
          deleted_subscriptions: 14166,
          bulletins_sent: 629,
        },
        this_period: {
          new_subscriptions: 128,
          deleted_subscriptions: 71,
          bulletins_sent: 1,
          allocated: {
            direct: 17,
            overlay: 0,
            signup: 0,
            upload: 32,
            other: 0,
            all_network: 77,
          },
        },
      },
      {
        id: 42274,
        code: "USCENSUS_6",
        name: "Directors Blog",
        visibility: "Listed",
        to_date: {
          total_subscriptions: 28889,
          new_subscriptions: 51258,
          deleted_subscriptions: 22366,
          bulletins_sent: 973,
        },
        this_period: {
          new_subscriptions: 107,
          deleted_subscriptions: 68,
          bulletins_sent: 1,
          allocated: {
            direct: 14,
            overlay: 0,
            signup: 0,
            upload: 26,
            other: 0,
            all_network: 65,
          },
        },
      },
    ],
  },
  subssummary: {
    detail: {
      unique_click_count: 0,
      total_click_count: 0,
      utm_campaign: "",
      unsubscribes: 0,
    },
  },
  portions: {
    direct: 0.1337999961853173,
    overlay: 0.005569436762097313,
    signup: 0,
    upload: 0.2521505273798852,
    other: 0,
    all_network: 0.6084800396727003,
  },
  summary: {
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
//
//
//   e88~~8e  Y88b  /        d88~\ 888-~88e-~88e
//  d888  88b  Y88b/        C888   888  888  888
//  8888__888   Y88b         Y88b  888  888  888
//  Y888    ,   /Y88b         888D 888  888  888
//   "88___/   /  Y88b      \_88P  888  888  888
//                     ----
//

const ex_payload_sm = {
  "40877587": {
    detail: {
      id: "40877587",
      created_at: "2019-12-04T17:25:08.000Z",
      subject: "Help Us Complete the Count",
      to_text:
        'Subscribers of 2020 Census Conferences, Webinars, and Workshops, 2020 Census Tests, 2020 Welcome Campaign Test, Census Day 2019, Census Jobs, Census Partnerships, Census Updates, Census Updates for Business, or General 2020 Census Updates, who were not sent this campaign message ever, and were sent Welcome Message #3 at least 1 days ago where email contains "@"',
      delivery_status_name: "Succeeded",
      addresses_count: 186,
      success_count: 186,
      failed_count: 0,
      percent_success: 100,
      immediate_email_recipients: 168,
      emails_delivered: 186,
      emails_failed: 0,
      percent_emails_delivered: 100,
      opens_count: 71,
      percent_opened: 38.17204301075269,
      nonunique_opens_count: 139,
      links_count: 16,
      click_rate: 5.376344086021505,
      clicks_count: 10,
      nonunique_clicks_count: 10,
      sender_email: "anthony.j.calabrese@census.gov",
      digest_email_recipients: 18,
      unique_click_count: 10,
      total_click_count: 10,
      utm_campaign: "11110101wcc20s5ccallrs",
      unsubscribes: 0,
    },
    links: [
      {
        id: "140434902",
        link_url:
          "https://2020census.gov/en/how-to-help.html?utm_campaign=11110101wcc20s5ccallrs&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 5,
        total_click_count: 5,
      },
      {
        id: "140434962",
        link_url:
          "https://2020census.gov/en/jobs?utm_campaign=11110101wcc20s5ccallrs&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 3,
        total_click_count: 3,
      },
      {
        id: "140434915",
        link_url:
          "http://www.census.gov/about/contact-us.html?utm_campaign=11110101wcc20s5ccallrs&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 1,
        total_click_count: 1,
      },
      {
        id: "140434930",
        link_url:
          "https://public.govdelivery.com/accounts/USCENSUS/subscriber/edit?preferences=true#tab1",
        unique_click_count: 1,
        total_click_count: 1,
      },
      {
        id: "140434912",
        link_url:
          "https://2020census.gov/en/partners.html?utm_campaign=11110101wcc20s5ccallrs&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140434919",
        link_url: "https://subscriberhelp.govdelivery.com/",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140434924",
        link_url:
          "https://public.govdelivery.com/accounts/USCENSUS/subscriber/one_click_unsubscribe?verification=%5B%5BVERIFICATION%5D%5D&destination=%5B%5BEMAIL_ADDRESS%5D%5D",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140434939",
        link_url:
          "https://www.youtube.com/user/uscensusbureau/?utm_campaign=11110101wcc20s5ccallrs&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140434946",
        link_url:
          "https://www.instagram.com/uscensusbureau/?utm_campaign=11110101wcc20s5ccallrs&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140434953",
        link_url:
          "https://twitter.com/uscensusbureau/?utm_campaign=11110101wcc20s5ccallrs&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140434957",
        link_url:
          "https://www.linkedin.com/company/us-census-bureau/?utm_campaign=11110101wcc20s5ccallrs&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140434958",
        link_url: "https://content.govdelivery.com/accounts/USCENSUS/bulletins/26fbe13",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140434960",
        link_url:
          "https://www.facebook.com/uscensusbureau/?utm_campaign=11110101wcc20s5ccallrs&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 0,
        total_click_count: 0,
      },
      {
        id: "140434964",
        link_url:
          "https://www.census.gov/schools/2020census/why-2020-matters.html?utm_campaign=11110101wcc20s5ccallrs&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 0,
        total_click_count: 0,
      },
    ],
    topics: [
      {
        id: 507624,
        code: "USCENSUS_12091",
        name: "2020 Welcome Campaign Test",
        visibility: "Unlisted",
        to_date: {
          total_subscriptions: 7,
          new_subscriptions: 7,
          deleted_subscriptions: 0,
          bulletins_sent: 485,
        },
        this_period: {
          new_subscriptions: 0,
          deleted_subscriptions: 0,
          bulletins_sent: 5,
          allocated: {
            direct: 0,
            overlay: 0,
            signup: 0,
            upload: 0,
            other: 0,
            all_network: 0,
          },
        },
      },
      {
        id: 492841,
        code: "USCENSUS_12060",
        name: "Census Day 2019",
        visibility: "Unlisted",
        to_date: {
          total_subscriptions: 2978,
          new_subscriptions: 3283,
          deleted_subscriptions: 305,
          bulletins_sent: 491,
        },
        this_period: {
          new_subscriptions: 1,
          deleted_subscriptions: 1,
          bulletins_sent: 5,
          allocated: {
            direct: 0,
            overlay: 0,
            signup: 0,
            upload: 0,
            other: 0,
            all_network: 0,
          },
        },
      },
      {
        id: 452433,
        code: "USCENSUS_11958",
        name: "Census Partnerships",
        description:
          "Partner with Us: Start Here. We serve as the leading source of quality data about the nation's people and economy. Whether you’re a business, school, nonprofit, or government, we’ll work with you to find new and innovative ways to partner with the Census Bureau. Get Started!",
        visibility: "Listed",
        to_date: {
          total_subscriptions: 67328,
          new_subscriptions: 115639,
          deleted_subscriptions: 48311,
          bulletins_sent: 1379,
        },
        this_period: {
          new_subscriptions: 2129,
          deleted_subscriptions: 2535,
          bulletins_sent: 5,
          allocated: {
            direct: 284,
            overlay: 11,
            signup: 0,
            upload: 536,
            other: 0,
            all_network: 1295,
          },
        },
      },
      {
        id: 449126,
        code: "USCENSUS_11941",
        name: "Census Jobs",
        description:
          "Get Census Job Updates: Start Here. Sign up here to get important updates on new job postings and learn how to submit your application for a job with the Census Bureau.",
        visibility: "Listed",
        to_date: {
          total_subscriptions: 231823,
          new_subscriptions: 292842,
          deleted_subscriptions: 61019,
          bulletins_sent: 1070,
        },
        this_period: {
          new_subscriptions: 13295,
          deleted_subscriptions: 2492,
          bulletins_sent: 5,
          allocated: {
            direct: 1778,
            overlay: 74,
            signup: 0,
            upload: 3352,
            other: 0,
            all_network: 8089,
          },
        },
      },
      {
        id: 444992,
        code: "USCENSUS_11927",
        name: "Census Updates for Business",
        description:
          "See How It All Adds Up: Start Here. We serve as the leading source of quality data about the nation's people and economy. Sign up here to get important Economic Census updates, news, and data from the Census Bureau. Get Started!",
        visibility: "Listed",
        to_date: {
          total_subscriptions: 151974,
          new_subscriptions: 230744,
          deleted_subscriptions: 78770,
          bulletins_sent: 1596,
        },
        this_period: {
          new_subscriptions: 3677,
          deleted_subscriptions: 2628,
          bulletins_sent: 8,
          allocated: {
            direct: 491,
            overlay: 20,
            signup: 0,
            upload: 927,
            other: 0,
            all_network: 2237,
          },
        },
      },
      {
        id: 444983,
        code: "USCENSUS_11926",
        name: "Census Updates",
        description:
          "Get the Facts: Start Here. We serve as the leading source of quality data about the nation's people and economy. Sign up here to get important updates, news, and data from the Census Bureau. Get Started!",
        visibility: "Listed",
        to_date: {
          total_subscriptions: 286998,
          new_subscriptions: 405483,
          deleted_subscriptions: 118485,
          bulletins_sent: 1928,
        },
        this_period: {
          new_subscriptions: 4233,
          deleted_subscriptions: 2980,
          bulletins_sent: 7,
          allocated: {
            direct: 566,
            overlay: 23,
            signup: 0,
            upload: 1067,
            other: 0,
            all_network: 2575,
          },
        },
      },
      {
        id: 295482,
        code: "USCENSUS_11759",
        name: "2020 Census Conferences, Webinars, and Workshops",
        visibility: "Listed",
        to_date: {
          total_subscriptions: 51089,
          new_subscriptions: 69862,
          deleted_subscriptions: 18773,
          bulletins_sent: 1061,
        },
        this_period: {
          new_subscriptions: 229,
          deleted_subscriptions: 123,
          bulletins_sent: 6,
          allocated: {
            direct: 30,
            overlay: 1,
            signup: 0,
            upload: 57,
            other: 0,
            all_network: 139,
          },
        },
      },
      {
        id: 295477,
        code: "USCENSUS_11758",
        name: "2020 Census Tests",
        visibility: "Listed",
        to_date: {
          total_subscriptions: 51281,
          new_subscriptions: 70129,
          deleted_subscriptions: 18848,
          bulletins_sent: 1058,
        },
        this_period: {
          new_subscriptions: 233,
          deleted_subscriptions: 127,
          bulletins_sent: 6,
          allocated: {
            direct: 31,
            overlay: 1,
            signup: 0,
            upload: 58,
            other: 0,
            all_network: 141,
          },
        },
      },
      {
        id: 289016,
        code: "USCENSUS_11754",
        name: "General 2020 Census Updates",
        visibility: "Listed",
        to_date: {
          total_subscriptions: 72552,
          new_subscriptions: 98392,
          deleted_subscriptions: 25840,
          bulletins_sent: 1084,
        },
        this_period: {
          new_subscriptions: 281,
          deleted_subscriptions: 164,
          bulletins_sent: 6,
          allocated: {
            direct: 37,
            overlay: 1,
            signup: 0,
            upload: 70,
            other: 0,
            all_network: 170,
          },
        },
      },
    ],
  },
  "40878965": {
    detail: {
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
      unique_click_count: 8239,
      total_click_count: 12304,
      utm_campaign: "20191204msacos1ccstors",
      unsubscribes: 265,
    },
    links: [
      {
        id: "140451801",
        link_url:
          "https://public.govdelivery.com/accounts/USCENSUS/subscriber/edit?preferences=true#tab1",
        unique_click_count: 55,
        total_click_count: 73,
      },
      {
        id: "140451785",
        link_url:
          "https://www.census.gov/AmericaCounts?utm_campaign=20191204msacos1ccstors&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 914,
        total_click_count: 1007,
      },
      {
        id: "140451784",
        link_url:
          "https://www.facebook.com/uscensusbureau/?utm_campaign=20191204msacos1ccstors&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 29,
        total_click_count: 43,
      },
      {
        id: "140451790",
        link_url:
          "https://2020census.gov/en/jobs.html?utm_campaign=20191204msacos1ccstors&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 1387,
        total_click_count: 2550,
      },
      {
        id: "140451794",
        link_url:
          "http://www.census.gov/about/contact-us.html?utm_campaign=20191204msacos1ccstors&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 13,
        total_click_count: 20,
      },
      {
        id: "140451799",
        link_url:
          "https://public.govdelivery.com/accounts/USCENSUS/subscriber/one_click_unsubscribe?verification=%5B%5BVERIFICATION%5D%5D&destination=%5B%5BEMAIL_ADDRESS%5D%5D",
        unique_click_count: 265,
        total_click_count: 313,
      },
      {
        id: "140451807",
        link_url:
          "https://www.linkedin.com/company/us-census-bureau/?utm_campaign=20191204msacos1ccstors&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 21,
        total_click_count: 30,
      },
      {
        id: "140451805",
        link_url:
          "https://www.youtube.com/user/uscensusbureau/?utm_campaign=20191204msacos1ccstors&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 17,
        total_click_count: 30,
      },
      {
        id: "140451781",
        link_url:
          "https://www.census.gov/library/stories/2019/12/2020-census-count-guides-funding-of-new-roads-and-bridges.html?utm_campaign=20191204msacos1ccstors&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 1769,
        total_click_count: 4208,
      },
      {
        id: "140451810",
        link_url:
          "https://twitter.com/uscensusbureau/?utm_campaign=20191204msacos1ccstors&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 913,
        total_click_count: 960,
      },
      {
        id: "140451792",
        link_url: "https://content.govdelivery.com/accounts/USCENSUS/bulletins/26fc375",
        unique_click_count: 1003,
        total_click_count: 1090,
      },
      {
        id: "140451783",
        link_url:
          "https://www.census.gov/newsroom/about.html?utm_campaign=20191204msacos1ccstors&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 920,
        total_click_count: 970,
      },
      {
        id: "140451797",
        link_url: "https://subscriberhelp.govdelivery.com/",
        unique_click_count: 11,
        total_click_count: 20,
      },
      {
        id: "140451788",
        link_url:
          "https://census.gov/library/stories/2019/12/supplemental-poverty-measure-shows-state-level-impact-of-food-stamps.html?utm_campaign=20191204msacos1ccstors&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 904,
        total_click_count: 960,
      },
      {
        id: "140451803",
        link_url:
          "https://www.instagram.com/uscensusbureau/?utm_campaign=20191204msacos1ccstors&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 18,
        total_click_count: 30,
      },
    ],
    topics: [
      {
        id: 452958,
        code: "USCENSUS_11960",
        name: "Stats for Stories",
        description:
          "Stats for Stories provides links to timely story ideas highlighting the Census Bureau's newsworthy statistics that relate to current events, observances, holidays, and anniversaries. The story ideas are intended to assist the media in story mining and producing content for their respective audiences.",
        visibility: "Listed",
        to_date: {
          total_subscriptions: 135485,
          new_subscriptions: 203342,
          deleted_subscriptions: 67857,
          bulletins_sent: 920,
        },
        this_period: {
          new_subscriptions: 3618,
          deleted_subscriptions: 2563,
          bulletins_sent: 1,
          allocated: {
            direct: 484,
            overlay: 20,
            signup: 0,
            upload: 912,
            other: 0,
            all_network: 2201,
          },
        },
      },
      {
        id: 449122,
        code: "USCENSUS_11939",
        name: "America Counts: Stories Behind the Numbers",
        description:
          "Get the Stories: Start Here. America Counts tells the stories behind the numbers in a new inviting way. Sign up here to get important updates, news, and data from the Census Bureau. Get Started!",
        visibility: "Listed",
        to_date: {
          total_subscriptions: 159568,
          new_subscriptions: 240681,
          deleted_subscriptions: 81113,
          bulletins_sent: 1226,
        },
        this_period: {
          new_subscriptions: 3669,
          deleted_subscriptions: 2614,
          bulletins_sent: 1,
          allocated: {
            direct: 490,
            overlay: 20,
            signup: 0,
            upload: 925,
            other: 0,
            all_network: 2232,
          },
        },
      },
      {
        id: 444992,
        code: "USCENSUS_11927",
        name: "Census Updates for Business",
        description:
          "See How It All Adds Up: Start Here. We serve as the leading source of quality data about the nation's people and economy. Sign up here to get important Economic Census updates, news, and data from the Census Bureau. Get Started!",
        visibility: "Listed",
        to_date: {
          total_subscriptions: 151974,
          new_subscriptions: 230744,
          deleted_subscriptions: 78770,
          bulletins_sent: 1596,
        },
        this_period: {
          new_subscriptions: 3677,
          deleted_subscriptions: 2628,
          bulletins_sent: 8,
          allocated: {
            direct: 491,
            overlay: 20,
            signup: 0,
            upload: 927,
            other: 0,
            all_network: 2237,
          },
        },
      },
      {
        id: 444983,
        code: "USCENSUS_11926",
        name: "Census Updates",
        description:
          "Get the Facts: Start Here. We serve as the leading source of quality data about the nation's people and economy. Sign up here to get important updates, news, and data from the Census Bureau. Get Started!",
        visibility: "Listed",
        to_date: {
          total_subscriptions: 286998,
          new_subscriptions: 405483,
          deleted_subscriptions: 118485,
          bulletins_sent: 1928,
        },
        this_period: {
          new_subscriptions: 4233,
          deleted_subscriptions: 2980,
          bulletins_sent: 7,
          allocated: {
            direct: 566,
            overlay: 23,
            signup: 0,
            upload: 1067,
            other: 0,
            all_network: 2575,
          },
        },
      },
      {
        id: 424793,
        code: "USCENSUS_11893",
        name: "America Counts : Alpha Launch Audience (Internal)",
        visibility: "Unlisted",
        to_date: {
          total_subscriptions: 197,
          new_subscriptions: 258,
          deleted_subscriptions: 61,
          bulletins_sent: 739,
        },
        this_period: {
          new_subscriptions: 0,
          deleted_subscriptions: 0,
          bulletins_sent: 1,
          allocated: {
            direct: 0,
            overlay: 0,
            signup: 0,
            upload: 0,
            other: 0,
            all_network: 0,
          },
        },
      },
      {
        id: 424780,
        code: "USCENSUS_11894",
        name: "America Counts: Beta Launch Audience (External and Internal)",
        visibility: "Unlisted",
        to_date: {
          total_subscriptions: 644,
          new_subscriptions: 852,
          deleted_subscriptions: 208,
          bulletins_sent: 738,
        },
        this_period: {
          new_subscriptions: 7,
          deleted_subscriptions: 2,
          bulletins_sent: 1,
          allocated: {
            direct: 0,
            overlay: 0,
            signup: 0,
            upload: 1,
            other: 0,
            all_network: 4,
          },
        },
      },
      {
        id: 417807,
        code: "USCENSUS_11880",
        name: "Governments Data",
        visibility: "Listed",
        to_date: {
          total_subscriptions: 41942,
          new_subscriptions: 57156,
          deleted_subscriptions: 15214,
          bulletins_sent: 558,
        },
        this_period: {
          new_subscriptions: 158,
          deleted_subscriptions: 112,
          bulletins_sent: 1,
          allocated: {
            direct: 21,
            overlay: 0,
            signup: 0,
            upload: 39,
            other: 0,
            all_network: 96,
          },
        },
      },
      {
        id: 295482,
        code: "USCENSUS_11759",
        name: "2020 Census Conferences, Webinars, and Workshops",
        visibility: "Listed",
        to_date: {
          total_subscriptions: 51089,
          new_subscriptions: 69862,
          deleted_subscriptions: 18773,
          bulletins_sent: 1061,
        },
        this_period: {
          new_subscriptions: 229,
          deleted_subscriptions: 123,
          bulletins_sent: 6,
          allocated: {
            direct: 30,
            overlay: 1,
            signup: 0,
            upload: 57,
            other: 0,
            all_network: 139,
          },
        },
      },
      {
        id: 295477,
        code: "USCENSUS_11758",
        name: "2020 Census Tests",
        visibility: "Listed",
        to_date: {
          total_subscriptions: 51281,
          new_subscriptions: 70129,
          deleted_subscriptions: 18848,
          bulletins_sent: 1058,
        },
        this_period: {
          new_subscriptions: 233,
          deleted_subscriptions: 127,
          bulletins_sent: 6,
          allocated: {
            direct: 31,
            overlay: 1,
            signup: 0,
            upload: 58,
            other: 0,
            all_network: 141,
          },
        },
      },
      {
        id: 289016,
        code: "USCENSUS_11754",
        name: "General 2020 Census Updates",
        visibility: "Listed",
        to_date: {
          total_subscriptions: 72552,
          new_subscriptions: 98392,
          deleted_subscriptions: 25840,
          bulletins_sent: 1084,
        },
        this_period: {
          new_subscriptions: 281,
          deleted_subscriptions: 164,
          bulletins_sent: 6,
          allocated: {
            direct: 37,
            overlay: 1,
            signup: 0,
            upload: 70,
            other: 0,
            all_network: 170,
          },
        },
      },
      {
        id: 110887,
        code: "USCENSUS_1705",
        name: "Research Matters Blog",
        visibility: "Listed",
        to_date: {
          total_subscriptions: 27106,
          new_subscriptions: 43952,
          deleted_subscriptions: 16846,
          bulletins_sent: 928,
        },
        this_period: {
          new_subscriptions: 108,
          deleted_subscriptions: 68,
          bulletins_sent: 1,
          allocated: {
            direct: 14,
            overlay: 0,
            signup: 0,
            upload: 27,
            other: 0,
            all_network: 65,
          },
        },
      },
      {
        id: 92782,
        code: "USCENSUS_306",
        name: "News about American Indian/Alaska Native Statistics",
        visibility: "Listed",
        to_date: {
          total_subscriptions: 34940,
          new_subscriptions: 57174,
          deleted_subscriptions: 22233,
          bulletins_sent: 2514,
        },
        this_period: {
          new_subscriptions: 136,
          deleted_subscriptions: 79,
          bulletins_sent: 1,
          allocated: {
            direct: 18,
            overlay: 0,
            signup: 0,
            upload: 34,
            other: 0,
            all_network: 82,
          },
        },
      },
      {
        id: 69354,
        code: "USCENSUS_239",
        name: "News about Housing Statistics",
        description:
          "Includes data on housing characteristics such as house type, age, size, plumbing, telephone access, ownership and financing.",
        visibility: "Listed",
        to_date: {
          total_subscriptions: 44119,
          new_subscriptions: 75368,
          deleted_subscriptions: 31247,
          bulletins_sent: 2715,
        },
        this_period: {
          new_subscriptions: 146,
          deleted_subscriptions: 92,
          bulletins_sent: 2,
          allocated: {
            direct: 19,
            overlay: 0,
            signup: 0,
            upload: 36,
            other: 0,
            all_network: 88,
          },
        },
      },
      {
        id: 69353,
        code: "USCENSUS_238",
        name: "News about Business, Industry and Government Statistics",
        description:
          "Includes data on the economy, business ownership, business patterns, industry data, government and tax expenditures.",
        visibility: "Listed",
        to_date: {
          total_subscriptions: 43093,
          new_subscriptions: 74651,
          deleted_subscriptions: 31558,
          bulletins_sent: 2887,
        },
        this_period: {
          new_subscriptions: 145,
          deleted_subscriptions: 85,
          bulletins_sent: 3,
          allocated: {
            direct: 19,
            overlay: 0,
            signup: 0,
            upload: 36,
            other: 0,
            all_network: 88,
          },
        },
      },
      {
        id: 69352,
        code: "USCENSUS_237",
        name: "News about People Statistics",
        description:
          "Includes data on population, family structure, age, sex, race, ethnic groups, education, health care insurance, marital status, disability, language, income, poverty, commuting, mobility and labor force.",
        visibility: "Listed",
        to_date: {
          total_subscriptions: 45962,
          new_subscriptions: 78574,
          deleted_subscriptions: 32609,
          bulletins_sent: 2860,
        },
        this_period: {
          new_subscriptions: 156,
          deleted_subscriptions: 88,
          bulletins_sent: 2,
          allocated: {
            direct: 20,
            overlay: 0,
            signup: 0,
            upload: 39,
            other: 0,
            all_network: 94,
          },
        },
      },
      {
        id: 42329,
        code: "USCENSUS_188",
        name: "Facts for Features",
        description:
          "Statistical factoids for holidays, calendar observances and topics in the news.",
        visibility: "Listed",
        to_date: {
          total_subscriptions: 39461,
          new_subscriptions: 69792,
          deleted_subscriptions: 30330,
          bulletins_sent: 2801,
        },
        this_period: {
          new_subscriptions: 133,
          deleted_subscriptions: 73,
          bulletins_sent: 1,
          allocated: {
            direct: 17,
            overlay: 0,
            signup: 0,
            upload: 33,
            other: 0,
            all_network: 80,
          },
        },
      },
      {
        id: 42328,
        code: "USCENSUS_187",
        name: "Tip Sheets",
        description: "Biweekly newsletter announcing upcoming data releases and reports.",
        visibility: "Listed",
        to_date: {
          total_subscriptions: 40132,
          new_subscriptions: 70737,
          deleted_subscriptions: 30604,
          bulletins_sent: 2801,
        },
        this_period: {
          new_subscriptions: 137,
          deleted_subscriptions: 78,
          bulletins_sent: 1,
          allocated: {
            direct: 18,
            overlay: 0,
            signup: 0,
            upload: 34,
            other: 0,
            all_network: 83,
          },
        },
      },
      {
        id: 42320,
        code: "USCENSUS_189",
        name: "Communications En Espanol",
        visibility: "Listed",
        to_date: {
          total_subscriptions: 35587,
          new_subscriptions: 63146,
          deleted_subscriptions: 27559,
          bulletins_sent: 2303,
        },
        this_period: {
          new_subscriptions: 128,
          deleted_subscriptions: 75,
          bulletins_sent: 1,
          allocated: {
            direct: 17,
            overlay: 0,
            signup: 0,
            upload: 32,
            other: 0,
            all_network: 77,
          },
        },
      },
      {
        id: 42295,
        code: "USCENSUS_123",
        name: "Random Samplings blog",
        description: "Random samplings blog",
        visibility: "Listed",
        to_date: {
          total_subscriptions: 27047,
          new_subscriptions: 47683,
          deleted_subscriptions: 20636,
          bulletins_sent: 1099,
        },
        this_period: {
          new_subscriptions: 105,
          deleted_subscriptions: 72,
          bulletins_sent: 1,
          allocated: {
            direct: 14,
            overlay: 0,
            signup: 0,
            upload: 26,
            other: 0,
            all_network: 63,
          },
        },
      },
      {
        id: 42277,
        code: "USCENSUS_13",
        name: "Press Kits",
        visibility: "Listed",
        to_date: {
          total_subscriptions: 35219,
          new_subscriptions: 49385,
          deleted_subscriptions: 14166,
          bulletins_sent: 629,
        },
        this_period: {
          new_subscriptions: 128,
          deleted_subscriptions: 71,
          bulletins_sent: 1,
          allocated: {
            direct: 17,
            overlay: 0,
            signup: 0,
            upload: 32,
            other: 0,
            all_network: 77,
          },
        },
      },
      {
        id: 42274,
        code: "USCENSUS_6",
        name: "Directors Blog",
        visibility: "Listed",
        to_date: {
          total_subscriptions: 28889,
          new_subscriptions: 51258,
          deleted_subscriptions: 22366,
          bulletins_sent: 973,
        },
        this_period: {
          new_subscriptions: 107,
          deleted_subscriptions: 68,
          bulletins_sent: 1,
          allocated: {
            direct: 14,
            overlay: 0,
            signup: 0,
            upload: 26,
            other: 0,
            all_network: 65,
          },
        },
      },
    ],
  },
  subssummary: {
    detail: {
      unique_click_count: 0,
      total_click_count: 0,
      utm_campaign: "",
      unsubscribes: 0,
    },
  },
  portions: {
    direct: 0.1337999961853173,
    overlay: 0.005569436762097313,
    signup: 0,
    upload: 0.2521505273798852,
    other: 0,
    all_network: 0.6084800396727003,
  },
  summary: {
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
  },
}

//saveDa saveDailyPayload(ex_payload_sm) //?
