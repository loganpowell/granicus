import { gather } from "./gather"

const links = [
    {
        link_url:
            "https://us.vocuspr.com/Publish/518008/Forward_518008_2215647.htm?Date=3%2F12%2F2019+9%3A07%3A47+AM&Email=ashleah.younker%40cision.com&utm_campaign=bloopers&utm_medium=email&utm_source=govdelivery",
        subject: "Census News Report - Tuesday, 03.12.19",
        sent_at: "2019-03-12T13:22:28.000Z",
        sender_email: "joann.hotchkiss@census.gov",
        unique_click_count: 68,
        total_click_count: 84,
        _links: {
            self: {
                href: "/api/v2/accounts/11723/reports/bulletins/37094111/links/123206685",
            },
        },
    },
    {
        link_url:
            "https://collab.ecm.census.gov/div/pio/intranet/Pages/Daily-News-Digest.aspx?utm_campaign=&utm_medium=email&utm_source=govdelivery",
        subject: "Census News Report - Tuesday, 03.12.19",
        sent_at: "2019-03-12T13:22:28.000Z",
        sender_email: "joann.hotchkiss@census.gov",
        unique_click_count: 3,
        total_click_count: 3,
        _links: {
            self: {
                href: "/api/v2/accounts/11723/reports/bulletins/37094111/links/123206687",
            },
        },
    },

    {
        link_url:
            "https://public.govdelivery.com/accounts/USCENSUS/subscriber/one_click_unsubscribe?verification=%5B%5BVERIFICATION%5D%5D&destination=%5B%5BEMAIL_ADDRESS%5D%5D",
        subject: "Census News Report - Tuesday, 03.12.19",
        sent_at: "2019-03-12T13:22:28.000Z",
        sender_email: "joann.hotchkiss@census.gov",
        unique_click_count: 10,
        total_click_count: 20,
        _links: {
            self: {
                href: "/api/v2/accounts/11723/reports/bulletins/37094111/links/123206692",
            },
        },
    },
]

test("gather: links", () => {
    expect(gather(links)).toEqual({
        unique_click_count: 81,
        total_click_count: 107,
        utm_campaign: "bloopers",
        unsubscribes: 10,
    })
})
