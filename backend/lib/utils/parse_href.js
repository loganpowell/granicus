import { parse } from "@-0/utils";
import { EquivMap } from "@thi.ng/associative";
export const parse_href = (str = "") => {
    const args = parse(str);
    const { URL_path, URL_query } = args;
    const { utm_campaign } = URL_query;
    return (new EquivMap([
        [
            Object.assign(Object.assign({}, args), { URL_query: Object.assign(Object.assign({}, URL_query), { [utm_campaign !== "" && "utm_campaign"]: utm_campaign }) }),
            { utm_campaign },
        ],
        [
            Object.assign(Object.assign({}, args), { URL_path: [...URL_path.slice(0, -1), "one_click_unsubscribe"] }),
            { unsubscribe: 1 },
        ],
        [
            Object.assign(Object.assign({}, args), { URL_path: [...URL_path.slice(0, -1), "one_click_unsubscribe"], URL_query: Object.assign(Object.assign({}, URL_query), { [utm_campaign !== "" && "utm_campaign"]: utm_campaign }) }),
            { utm_campaign, unsubscribe: 1 },
        ],
    ]).get(args) || null);
};
