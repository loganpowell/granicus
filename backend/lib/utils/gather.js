import { parse_href } from "./parse_href";
export const gather = (links = []) => links.reduce((a, c, i) => {
    const parsed = parse_href(c["link_url"]);
    const unsubs = parsed && parsed["unsubscribe"] ? c["unique_click_count"] : 0;
    const utm = a["utm_campaign"]
        ? a["utm_campaign"]
        : parsed && parsed["utm_campaign"]
            ? parsed["utm_campaign"]
            : "";
    const res = {
        unique_click_count: a["unique_click_count"] + c["unique_click_count"],
        total_click_count: a["total_click_count"] + c["total_click_count"],
        utm_campaign: utm,
        unsubscribes: a["unsubscribes"] + unsubs,
    };
    return res;
}, { unique_click_count: 0, total_click_count: 0, utm_campaign: "", unsubscribes: 0 });
