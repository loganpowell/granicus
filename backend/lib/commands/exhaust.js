var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { registerCMD } from "@-0/spool";
import fetch from "node-fetch";
import { getInUnsafe, exists, mutInUnsafe } from "@thi.ng/paths";
import { genGranicusCall, fetch_opts_GD, GD_ID_path, snip_id, gen_args, fetchTopicsForBulletinByID, } from "../granicus/fetching";
import { pruneKVPairs, keys2prune_detail, keys2prune_link } from "../utils";
export const exhaustFetch = ({ url = "", fetch_opts = {}, recur_cond = (res) => (true || false), re_args_xf = (res, itr, { url, fetch_opts, recur_cond }) => ({ url, fetch_opts, recur_cond }), reduction = (acc, res, itr) => (Object.assign(Object.assign({}, acc), res)), acc = {} || [], log = false, itr = 1, }) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield fetch(url, fetch_opts)
        .then(r => r.json() || {})
        .catch(console.error);
    if (log)
        log(acc, result, itr);
    if (recur_cond(result)) {
        const resolved = yield exhaustFetch(Object.assign(Object.assign({}, re_args_xf(result, itr, {
            url,
            fetch_opts,
            recur_cond,
        })), { log,
            re_args_xf,
            reduction, acc: yield reduction(acc, result, itr), itr: itr + 1 }));
        return resolved;
    }
    else {
        return yield reduction(acc, result, itr);
    }
});
export const inject = (acc, lens, thunk) => {
    const [id, path] = lens;
    if (exists(acc, lens)) {
        thunk();
        return;
    }
    else if (!exists(acc, lens) && exists(acc, id)) {
        acc[id] = Object.assign(Object.assign({}, acc[id]), { [path]: null });
        thunk();
        return;
    }
    else {
        acc[id] = { [path]: null };
        thunk();
        return;
    }
};
export const exhaustFetchGD_details = (days_ago) => __awaiter(void 0, void 0, void 0, function* () {
    const resolved = yield exhaustFetch({
        url: genGranicusCall(gen_args("reports/bulletins", days_ago)),
        fetch_opts: fetch_opts_GD,
        reduction: (acc, res) => __awaiter(void 0, void 0, void 0, function* () {
            const targets = res["bulletin_activity_details"] || [];
            const results = yield targets.reduce((_acc, detail) => __awaiter(void 0, void 0, void 0, function* () {
                const todos = yield _acc;
                const href = getInUnsafe(detail, GD_ID_path);
                const id = href.split("/").slice(-1)[0].split(".")[0];
                const topics = yield fetchTopicsForBulletinByID(id, days_ago);
                const todo1 = () => {
                    const _detail = Object.assign(Object.assign({ id }, pruneKVPairs(detail, ...keys2prune_detail)), { percent_success: parseFloat(detail.percent_success), percent_emails_delivered: parseFloat(detail.percent_emails_delivered), percent_opened: parseFloat(detail.percent_opened), click_rate: parseFloat(detail.click_rate) });
                    mutInUnsafe(todos, [id, "detail"], _detail);
                };
                const todo2 = () => {
                    mutInUnsafe(todos, [id, "topics"], topics);
                };
                inject(todos, [id, "detail"], todo1);
                inject(todos, [id, "topics"], todo2);
                return Object.assign(Object.assign({}, _acc), todos);
            }), Promise.resolve({}));
            return Object.assign(Object.assign({}, acc), results);
        }),
        recur_cond: res => {
            const length = (res["bulletin_activity_details"] || []).length;
            if (length === 20)
                return true;
            else
                return false;
        },
        re_args_xf: (res, itr, args) => (Object.assign(Object.assign({}, args), { url: genGranicusCall(gen_args("reports/bulletins", days_ago, itr + 1)) })),
    });
    return resolved;
});
const log = console.log;
export const exhaustFetchGD_links = (days_ago) => __awaiter(void 0, void 0, void 0, function* () {
    const resolved = yield exhaustFetch({
        url: genGranicusCall(gen_args("reports/bulletins/links", days_ago)),
        fetch_opts: fetch_opts_GD,
        reduction: (acc, res, itr) => __awaiter(void 0, void 0, void 0, function* () {
            const links = res["bulletins_links_details"] || [];
            let todos = Object.assign({}, acc);
            links.forEach(link => {
                const { _links } = link;
                const href = getInUnsafe(link, GD_ID_path);
                const id = href.split("/").slice(-3)[0].split(".")[0];
                const todo = () => {
                    if (!todos[id]["links"])
                        todos[id]["links"] = [];
                    todos[id]["links"].push(Object.assign({ id: snip_id(_links, -1, ["self", "href"]) }, pruneKVPairs(link, ...keys2prune_link)));
                };
                inject(todos, [id, "links"], todo);
            });
            return todos;
        }),
        recur_cond: res => {
            const length = (res["bulletins_links_details"] || []).length;
            if (length === 20)
                return true;
            else
                return false;
        },
        re_args_xf: (res, itr, args) => (Object.assign(Object.assign({}, args), { url: genGranicusCall(gen_args("reports/bulletins/links", days_ago, itr + 1)) })),
    });
    return resolved;
});
export const EXHAUST_PAGES_DETAILS_CMD = registerCMD({
    sub$: "EXHAUST_PAGES_DETAILS_CMD",
    args: ({ days_ago }) => exhaustFetchGD_details(days_ago),
    erro: (acc, err) => (console.error(err), acc),
    reso: (acc, res) => (Object.assign(Object.assign({}, acc), { details: res })),
});
export const EXHAUST_PAGES_LINKS_CMD = registerCMD({
    sub$: "EXHAUST_PAGES_LINKS_CMD",
    args: ({ days_ago }) => exhaustFetchGD_links(days_ago),
    erro: (acc, err) => (console.error(err), acc),
    reso: (acc, res) => (Object.assign(Object.assign({}, acc), { links: res })),
});
export const GET_SUBSSUMMARY_CMD = registerCMD({
    sub$: "GET_SUBSSUMMARY_CMD",
    args: ({ days_ago }) => fetch(genGranicusCall(gen_args("reports/subscriber_activity/summary", days_ago)), fetch_opts_GD)
        .then(r => r.json())
        .catch(console.error),
    erro: (acc, err) => (console.error(err), acc),
    reso: (acc, res) => (Object.assign(Object.assign({}, acc), { subssummary: res })),
});
