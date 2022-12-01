export declare const parse_href: (str?: string) => {
    utm_campaign: any;
    unsubscribe?: undefined;
} | {
    unsubscribe: number;
    utm_campaign?: undefined;
} | {
    utm_campaign: any;
    unsubscribe: number;
};
