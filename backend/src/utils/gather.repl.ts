import { gather } from "./gather"

const payload_links = [
    {
        id: "140451799",
        link_url:
            "https://public.govdelivery.com/accounts/USCENSUS/subscriber/one_click_unsubscribe?verification=%5B%5BVERIFICATION%5D%5D&destination=%5B%5BEMAIL_ADDRESS%5D%5D",
        unique_click_count: 265,
        total_click_count: 313,
    },
    {
        id: "140451794",
        link_url:
            "http://www.census.gov/about/contact-us.html?utm_campaign=20191204msacos1ccstors&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 13,
        total_click_count: 20,
    },
    {
        id: "140451781",
        link_url:
            "https://www.census.gov/library/stories/2019/12/2020-census-count-guides-funding-of-new-roads-and-bridges.html?utm_campaign=20191204msacos1ccstors&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 1769,
        total_click_count: 4208,
    },
    {
        id: "140451807",
        link_url:
            "https://www.linkedin.com/company/us-census-bureau/?utm_campaign=20191204msacos1ccstors&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 21,
        total_click_count: 30,
    },
    {
        id: "140451797",
        link_url: "https://subscriberhelp.govdelivery.com/",
        unique_click_count: 11,
        total_click_count: 20,
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
        id: "140451803",
        link_url:
            "https://www.instagram.com/uscensusbureau/?utm_campaign=20191204msacos1ccstors&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 18,
        total_click_count: 30,
    },
    {
        id: "140451783",
        link_url:
            "https://www.census.gov/newsroom/about.html?utm_campaign=20191204msacos1ccstors&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 920,
        total_click_count: 970,
    },
    {
        id: "140451790",
        link_url:
            "https://2020census.gov/en/jobs.html?utm_campaign=20191204msacos1ccstors&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 1387,
        total_click_count: 2550,
    },
    {
        id: "140451792",
        link_url: "https://content.govdelivery.com/accounts/USCENSUS/bulletins/26fc375",
        unique_click_count: 1003,
        total_click_count: 1090,
    },
    {
        id: "140451810",
        link_url:
            "https://twitter.com/uscensusbureau/?utm_campaign=20191204msacos1ccstors&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 913,
        total_click_count: 960,
    },
    {
        id: "140451801",
        link_url:
            "https://public.govdelivery.com/accounts/USCENSUS/subscriber/edit?preferences=true#tab1",
        unique_click_count: 55,
        total_click_count: 73,
    },
    {
        id: "140451805",
        link_url:
            "https://www.youtube.com/user/uscensusbureau/?utm_campaign=20191204msacos1ccstors&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 17,
        total_click_count: 30,
    },
    {
        id: "140451788",
        link_url:
            "https://census.gov/library/stories/2019/12/supplemental-poverty-measure-shows-state-level-impact-of-food-stamps.html?utm_campaign=20191204msacos1ccstors&utm_medium=email&utm_source=govdelivery",
        unique_click_count: 904,
        total_click_count: 960,
    },
]

// @ts-ignore
gather(payload_links)
//?

const empty = ""

const test = {
    str: empty || "NA",
}

test //?
