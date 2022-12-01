export declare const exhaustFetch: ({ url, fetch_opts, recur_cond, re_args_xf, reduction, acc, log, itr, }: {
    url?: string;
    fetch_opts?: {};
    recur_cond?: (res: any) => boolean;
    re_args_xf?: (res: any, itr: any, { url, fetch_opts, recur_cond }: {
        url: any;
        fetch_opts: any;
        recur_cond: any;
    }) => {
        url: any;
        fetch_opts: any;
        recur_cond: any;
    };
    reduction?: (acc: any, res: any, itr: any) => any;
    acc?: {};
    log?: boolean;
    itr?: number;
}) => any;
export declare const inject: (acc: any, lens: any, thunk: any) => void;
export declare const exhaustFetchGD_details: (days_ago: any) => Promise<any>;
export declare const exhaustFetchGD_links: (days_ago: any) => Promise<any>;
export declare const EXHAUST_PAGES_DETAILS_CMD: {
    sub$: any;
    args: any;
    reso: any;
    erro: any;
} | {
    sub$: any;
    args: any;
    reso?: undefined;
    erro?: undefined;
};
export declare const EXHAUST_PAGES_LINKS_CMD: {
    sub$: any;
    args: any;
    reso: any;
    erro: any;
} | {
    sub$: any;
    args: any;
    reso?: undefined;
    erro?: undefined;
};
export declare const GET_SUBSSUMMARY_CMD: {
    sub$: any;
    args: any;
    reso: any;
    erro: any;
} | {
    sub$: any;
    args: any;
    reso?: undefined;
    erro?: undefined;
};
