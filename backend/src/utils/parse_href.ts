import { parse } from "@-0/utils"
import { EquivMap } from "@thi.ng/associative"

/**
 * pattern matcher that takes a URL/href, unpacks it and
 * then gives you back a structured object with the href
 * components therein (as a taxonomy)
 *
 * @example
 * parse_href("http://www.census.gov/abourt/cotact-us.html?utm_campaign=20191203msacos1ccstors&utm_medium=email&utm_source=govdelivery")
 * //? { utm_campaign: "20191203msacos1ccstors" }
 */
export const parse_href = (str = "") => {
    const args = parse(str)
    const { URL_path, URL_query } = args
    const { utm_campaign } = URL_query
    return (
        new EquivMap([
            [
                {
                    ...args,
                    URL_query: {
                        ...URL_query,
                        [utm_campaign !== "" && "utm_campaign"]: utm_campaign,
                    },
                },
                { utm_campaign },
            ],
            [
                { ...args, URL_path: [...URL_path.slice(0, -1), "one_click_unsubscribe"] },
                { unsubscribe: 1 },
            ],
            [
                {
                    ...args,
                    URL_path: [...URL_path.slice(0, -1), "one_click_unsubscribe"],
                    URL_query: {
                        ...URL_query,
                        [utm_campaign !== "" && "utm_campaign"]: utm_campaign,
                    },
                },
                { utm_campaign, unsubscribe: 1 },
            ],
        ]).get(args) || null
    )
}

// TODO: break up the remaining parts of the href for
// histogram on the detail
