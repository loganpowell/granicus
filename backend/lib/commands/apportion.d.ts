export declare const key_partition: (obj: any, splicer?: number[], sep?: string) => {};
export declare const subs_proportions: (subs_obj?: {
    direct: number;
    overlay: number;
    signup: number;
    upload: number;
    other: number;
    total: number;
    deleted: number;
    all_network: number;
    net: number;
}) => {};
export declare const apportion_subs: ({ _links, ...subsummary }: {
    [x: string]: any;
    _links: any;
}, daily_report: any) => {
    portions: {};
    summary: {
        [x: string]: any;
    };
};
export declare const APPORTION_CMD: {
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
