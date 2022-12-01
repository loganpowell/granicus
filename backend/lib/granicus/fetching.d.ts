export declare const GD_ROOT_URL = "https://api.govdelivery.com";
export declare const GD_BASE_URL: (account?: number) => string;
export declare const genGranicusCall: ({ endpoint, account, timewindow, page, topics, days_prior, months_prior, }: {
    endpoint?: string;
    account?: number;
    timewindow?: any[];
    page?: number;
    topics?: any[];
    days_prior?: number;
    months_prior?: number;
}) => string;
export declare const fetch_opts_GD: {
    method: string;
    headers: {
        "x-auth-token": string;
    };
};
export declare const fetchGDBulletinsInWindow: (beg: any, end: any) => any;
export declare const fetchReducer: (acc: any) => (URL: any, page_limit?: number) => Promise<void>;
export declare const GD_age_days: number;
export declare const GD_date: (days_ago: any) => string;
export declare const gen_args: (endpoint: any, days_ago?: number, page?: number) => {
    account: number;
    endpoint: any;
    page: number;
    timewindow: string[];
    topics: any[];
    days_prior: number;
    months_prior: number;
};
export declare const GD_ID_path: string[];
export declare const snip_id: (obj: any, str_target: any, id_path?: string[]) => any;
export declare const reducer: (a: any, key: any, snip_idx: any, mutate: any) => (c: any, i: any, d: any) => Promise<any>;
export declare const exhaustPagesGvD: ({ endpoint, coll_path, days_ago, page, acc, key, snip_idx, mutation, log, augment, }: {
    endpoint?: string;
    coll_path?: string | string[];
    days_ago?: number;
    page?: number;
    acc?: {};
    key?: string;
    snip_idx?: number;
    mutation?: (a: any, lens: any, c: any) => any;
    log?: boolean;
    augment?: (x: any) => any;
}) => any;
export declare const fetchTopicsForBulletinByID: (id: any, days_ago?: number) => Promise<[unknown, unknown, unknown, unknown, unknown, unknown, unknown, unknown, unknown, unknown]>;
