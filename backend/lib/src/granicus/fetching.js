var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import fetch from "node-fetch";
import dotenv from "dotenv";
import { getInUnsafe, mutInUnsafe, exists } from "@thi.ng/paths";
import { genDateFromDateMinusDays, getDaysDiffFromDates, firstEmailDate } from "../utils";
dotenv.config();
export const GD_ROOT_URL = "https://api.govdelivery.com";
export const GD_BASE_URL = (account = 11723) => `${GD_ROOT_URL}/api/v2${(account && `/accounts/${account}`) || ""}`;
export const genGranicusCall = ({ endpoint = "reports/bulletins", account = 11723, timewindow = [], page = 0, topics = [], days_prior = 0, months_prior = 0, }) => {
    const [beg, end] = timewindow;
    const params = (!!(page || topics.length || days_prior || timewindow.length || months_prior) && "?") || "";
    const root = `${GD_BASE_URL(account)}/${endpoint}${params}`;
    const inWindow = end ? `start_date=${beg}&end_date=${end}` : "";
    const forTopics = topics.length ? topics.map(t => `topic%5B%5D=${t}`).join("&") : "";
    const days = days_prior ? `&days=${days_prior}` : "";
    const pages = page ? `&page=${page}` : "";
    return root + inWindow + forTopics + days + pages;
};
export const fetch_opts_GD = {
    method: "GET",
    headers: {
        "x-auth-token": process.env.GD_KEY,
    },
};
export const fetchGDBulletinsInWindow = (beg, end) => fetch(genGranicusCall({
    timewindow: [beg, end],
}), fetch_opts_GD)
    .then(r => r.json())
    .catch(console.error);
export const fetchReducer = acc => (URL, page_limit = 20) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield fetch(URL);
});
export const GD_age_days = getDaysDiffFromDates(firstEmailDate, new Date());
export const GD_date = days_ago => genDateFromDateMinusDays(new Date(), days_ago);
export const gen_args = (endpoint, days_ago = GD_age_days, page = 0) => ({
    account: 11723,
    endpoint,
    page,
    timewindow: [GD_date(days_ago), GD_date(days_ago)],
    topics: [],
    days_prior: 0,
    months_prior: 0,
});
export const GD_ID_path = ["_links", "self", "href"];
export const snip_id = (obj, str_target, id_path = GD_ID_path) => getInUnsafe(obj, id_path).split("/").slice(str_target)[0].split(".")[0];
const log = console.log;
export const reducer = (a, key, snip_idx, mutate) => (c, i, d) => __awaiter(void 0, void 0, void 0, function* () {
    const ID = snip_id(c, snip_idx);
    const lens = [ID, key];
    const mutator = () => mutate(a, lens, c);
    if (exists(a, lens)) {
        return yield mutator();
    }
    if (exists(a, ID)) {
        a[ID] = Object.assign(Object.assign({}, a[ID]), { [key]: [] });
        return yield mutator();
    }
    a[ID] = { [key]: [] };
    return yield mutator();
});
export const exhaustPagesGvD = ({ endpoint = "reports/bulletins", coll_path = "bulletin_activity_details" || ["bulletin_activity_details"], days_ago = GD_age_days, page = 1, acc = {}, key = "detail", snip_idx = -1, mutation = (a, lens, c) => mutInUnsafe(a, lens, c), log = false, augment = x => x, }) => __awaiter(void 0, void 0, void 0, function* () {
    const URL = genGranicusCall(gen_args(endpoint, days_ago, page));
    if (log)
        console.log("fetching page", page, "for", coll_path);
    const result = yield fetch(URL, fetch_opts_GD)
        .then(r => r.json())
        .catch(console.error);
    const collection = getInUnsafe(result, coll_path) || [];
    const length = collection.length || 0;
    const mutate_acc = reducer(acc, key, snip_idx, mutation);
    collection.forEach(mutate_acc);
    if (length < 20)
        return acc;
    else
        return yield exhaustPagesGvD({
            endpoint,
            coll_path,
            days_ago,
            page: page + 1,
            acc,
            key,
            snip_idx,
            mutation,
            log,
            augment,
        });
});
export const fetchTopicsForBulletinByID = (id, days_ago = 0) => __awaiter(void 0, void 0, void 0, function* () {
    const T_URL = genGranicusCall({
        endpoint: `bulletins/${id}/topics`,
        account: 0,
    });
    const S_URL = t_id => genGranicusCall(gen_args(`reports/topics/${t_id}`, days_ago));
    const topics = yield fetch(T_URL, fetch_opts_GD)
        .then(r => r.json() || [])
        .catch(console.error);
    const summary = topics.items.map((topic) => __awaiter(void 0, void 0, void 0, function* () {
        const subscriber_report = yield fetch(S_URL(topic.id), fetch_opts_GD)
            .then(r => r.json() || {})
            .catch(console.error);
        const { ["_links"]: __links } = subscriber_report, subs = __rest(subscriber_report, ["_links"]);
        const { _links } = topic, rest = __rest(topic, ["_links"]);
        return Object.assign(Object.assign({}, rest), subs);
    })) || [];
    const results = yield Promise.all(summary);
    return results;
});
