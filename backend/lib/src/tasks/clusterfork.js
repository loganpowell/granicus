import { Channel } from "@thi.ng/csp";
import { merge_props_cmd, BUBBLE_CMD, EXHAUST_PAGES_DETAILS_CMD, EXHAUST_PAGES_LINKS_CMD, GET_SUBSSUMMARY_CMD, APPORTION_CMD, save_daily_payload_CMD, } from "../commands";
import { run$ } from "@-0/spool";
const days_ago__merge_clean = ({ days_ago, days_todo }) => {
    const MERGE_PROPS_DETAILSnLINKS_CMD = merge_props_cmd("details", "links");
    return [
        {
            args: { days_ago, days_todo },
        },
        GET_SUBSSUMMARY_CMD,
        EXHAUST_PAGES_DETAILS_CMD,
        EXHAUST_PAGES_LINKS_CMD,
        MERGE_PROPS_DETAILSnLINKS_CMD,
        APPORTION_CMD,
        BUBBLE_CMD,
    ];
};
export const days_ago__save_GQL = ({ days_ago, days_todo }) => {
    return [
        ...days_ago__merge_clean({ days_ago, days_todo }),
        SAVE_DAILY_PAYLOAD_CMD,
    ];
};
export const [_OUT_, SDPCMD] = save_daily_payload_CMD(new Channel());
export const SAVE_DAILY_PAYLOAD_CMD = SDPCMD(run$, days_ago__save_GQL);
