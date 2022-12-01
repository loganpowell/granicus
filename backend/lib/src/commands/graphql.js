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
import { registerCMD } from "@-0/spool";
import { getIn } from "@thi.ng/paths";
import { genGranicusDate, grafetch, log } from "../utils";
import { createBulletin, createBulletinTopic, createCampaign, createTopic, createSender, createAccumulator, createSubsSummary, updateAccumulator, updateSubsSummary, updateBulletinTopic, updateBulletin, } from "../graphql/mutations";
import { getAccumulator, getCampaign, getSender, getTopic, getSubsSummary, } from "../graphql/queries";
const saveCampaign = (acc_update_sets, entry) => __awaiter(void 0, void 0, void 0, function* () {
    const { all_campaigns } = acc_update_sets;
    const { detail } = entry;
    const { utm_campaign } = detail;
    const campaign_id = utm_campaign || "NA";
    let updated_campaigns = [...all_campaigns];
    if (!all_campaigns.has(campaign_id)) {
        log(`Campaign ${campaign_id} not in Accumulator. Checking DB...`);
        return grafetch({
            operation: getCampaign,
            vars_obj: { id: campaign_id },
        }).then(c => {
            const id = getIn(c, ["data", "getCampaign", "id"]);
            if (!id) {
                log(`Campaign ${campaign_id} not in DB. Creating ...`);
                return grafetch({
                    operation: createCampaign,
                    vars_obj: { input: { id: campaign_id } },
                }).then(c => {
                    updated_campaigns.push(campaign_id);
                    log(`Campaign ${campaign_id} added to DB. Accumulator Updated`);
                    return updated_campaigns;
                });
            }
            updated_campaigns.push(campaign_id);
            log("Campaign already in DB:", campaign_id, ". Accumulator Updated");
            return updated_campaigns;
        });
    }
    log("✔ Campaign alread in Accumulator:", campaign_id);
    return updated_campaigns;
});
const saveSender = (acc_update_sets, entry) => __awaiter(void 0, void 0, void 0, function* () {
    const { all_senders } = acc_update_sets;
    const { detail } = entry;
    const { sender_email = "unavailable" } = detail;
    let updated_senders = [...all_senders];
    if (!all_senders.has(sender_email)) {
        log(`Sender ${sender_email} not in Accumulator. Checking DB...`);
        return grafetch({
            operation: getSender,
            vars_obj: { id: sender_email },
        }).then(s => {
            const id = getIn(s, ["data", "getSender", "id"]);
            if (!id) {
                log(`Sender ${sender_email} not in DB. Creating...`);
                return grafetch({
                    operation: createSender,
                    vars_obj: { input: { id: sender_email } },
                }).then(s => {
                    const id = getIn(s, ["data", "createSender", "id"]);
                    log("Sender Created", id);
                    updated_senders.push(id);
                    log("Sender added to Accumulator:", id);
                    return updated_senders;
                });
            }
            updated_senders.push(sender_email);
            log("Sender in DB:", sender_email, ". Accumulator Updated");
            return updated_senders;
        });
    }
    log("✔ Sender already in Accumulator:", sender_email);
    return updated_senders;
});
const saveSummary = (created_at, summary) => __awaiter(void 0, void 0, void 0, function* () {
    const day = genGranicusDate(new Date(created_at));
    return grafetch({
        operation: getSubsSummary,
        vars_obj: { id: day },
    }).then(s => {
        const id = getIn(s, ["data", "getSubsSummary", "id"]);
        if (!id) {
            return grafetch({
                operation: createSubsSummary,
                vars_obj: { input: Object.assign({ id: day }, summary) },
            }).then(sum => {
                log("summary created:", sum);
            });
        }
        else {
            return grafetch({
                operation: updateSubsSummary,
                vars_obj: { inputs: Object.assign({ id }, summary) },
            }).then(sum => {
                log("summary updated:", sum);
            });
        }
    });
});
const saveTopic = (acc_update_sets, topic) => __awaiter(void 0, void 0, void 0, function* () {
    const { all_topics } = acc_update_sets;
    const { id = null, code, name, description } = topic;
    if (!id) {
        log("Topic is not legitimate, skipping");
        return;
    }
    let updated_topics = [...all_topics];
    if (!all_topics.has(id)) {
        log(`Topic ${id} not in Accumulator, checking DB...`);
        return grafetch({
            operation: getTopic,
            vars_obj: { id },
        }).then(t => {
            const topic_id = getIn(t, ["data", "getTopic", "id"]);
            if (!topic_id) {
                log(`Topic ${id} not present in DB, creating...`);
                return grafetch({
                    operation: createTopic,
                    vars_obj: {
                        input: {
                            id,
                            code,
                            name,
                            description,
                        },
                    },
                }).then(t => {
                    log(`Created Topic ${id} in DB.`);
                    log(`Pushing Topic: ${id} to Accumulator`);
                    updated_topics.push(id);
                    return updated_topics;
                });
            }
            log(`Topic ${id} already in DB, Updating Accumulator...`);
            updated_topics.push(id);
            return updated_topics;
        });
    }
    log(`✔ Topic ${id} already in Accumulator `);
    return updated_topics;
});
const saveBulletinTopics = ({ acc_update_sets, bulletin_id, created_at, topics }) => topics.map((topic) => __awaiter(void 0, void 0, void 0, function* () {
    const { id = null, to_date, this_period } = topic;
    if (!id) {
        log("BulletinTopic is not legitimate, skipping");
        return;
    }
    const BT_ID = `${bulletin_id}_${id}`;
    const input = {
        id: BT_ID,
        bulletin_id: bulletin_id,
        topic_id: id,
        created_at,
        this_period,
        to_date,
    };
    const updated_topics = yield saveTopic(acc_update_sets, topic);
    updated_topics.forEach(t => acc_update_sets.all_topics.add(t));
    return grafetch({
        operation: createBulletinTopic,
        vars_obj: {
            input,
        },
    }).then(bt => {
        log("Creating BulletinTopic:", BT_ID);
        const id = getIn(bt, ["data", "createBulletinTopic", "id"]);
        if (!id) {
            log(`BulltinTopic ${BT_ID} already in DB, Updating...`);
            return grafetch({
                operation: updateBulletinTopic,
                vars_obj: { input },
            }).then(BT => {
                log(`Updated BulletinTopic ${BT_ID}.`);
                return BT;
            });
        }
        log("✔ Created BulletinTopic:", BT_ID);
        return bt;
    });
}));
export const saveDailyPayload = (daily_payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { subssummary, portions, summary, days_ago, days_todo } = daily_payload, entries = __rest(daily_payload, ["subssummary", "portions", "summary", "days_ago", "days_todo"]);
    if (!Object.keys(entries).length) {
        log("no entries for the day");
        return daily_payload;
    }
    const { data: { getAccumulator: { all_campaigns, all_senders, all_topics }, }, } = yield grafetch({
        operation: getAccumulator,
        vars_obj: { id: "ACCUMULATOR" },
    }).then(acc => {
        const id = getIn(acc, ["data", "getAccumulator", "id"]);
        if (!id) {
            log("Accumulator non-existent. Creating...");
            return grafetch({
                operation: createAccumulator,
                vars_obj: { input: { id: "ACCUMULATOR" } },
            }).then(ACC => {
                const { data: { createAccumulator }, } = ACC;
                log("Accumulator created");
                return { data: { getAccumulator: createAccumulator } };
            });
        }
        log("returning Accumulator...");
        return acc;
    });
    const acc_update_sets = {
        all_campaigns: new Set(all_campaigns),
        all_senders: new Set(all_senders),
        all_topics: new Set(all_topics),
    };
    const promised_entries = Object.entries(entries).map(([k, v]) => __awaiter(void 0, void 0, void 0, function* () {
        const { detail, links, topics } = v;
        if (!detail) {
            log("invalid/empty entry, bailing...");
            return;
        }
        const { id = null, created_at, sender_email = "unavailable", utm_campaign } = detail, rest_details = __rest(detail, ["id", "created_at", "sender_email", "utm_campaign"]);
        if (!id) {
            log("detail doesn't exist, bailing...");
            return;
        }
        const campaign_id = utm_campaign || "NA";
        const input_bulletin = {
            id,
            campaign_id,
            created_at,
            sender_email,
            detail: rest_details,
            links,
        };
        const updated_senders = yield saveSender(acc_update_sets, v);
        const updated_capaigns = yield saveCampaign(acc_update_sets, v);
        updated_senders.forEach(s => acc_update_sets.all_senders.add(s));
        updated_capaigns.forEach(c => acc_update_sets.all_campaigns.add(c));
        return yield grafetch({
            operation: createBulletin,
            vars_obj: { input: input_bulletin },
        }).then(b => {
            const bulletin_id = getIn(b, ["data", "createBulletin", "id"]);
            if (!bulletin_id) {
                log(`Bulletin ${id} already in DB, updating...`);
                return grafetch({
                    operation: updateBulletin,
                    vars_obj: { input: input_bulletin },
                }).then(B => {
                    const B_ID = getIn(B, ["data", "updateBulletin", "id"]);
                    log(`Updated Bulletin ${B_ID}. Saving BulletinTopics...`);
                    return Promise.all(saveBulletinTopics({
                        acc_update_sets,
                        bulletin_id: B_ID,
                        created_at,
                        topics,
                    }));
                });
            }
            log(`Created Bulletin ${bulletin_id}. Saving BulletinTopics...`);
            return Promise.all(saveBulletinTopics({
                acc_update_sets,
                bulletin_id,
                created_at,
                topics,
            }));
        });
    }));
    return yield Promise.all(promised_entries).then(x => {
        const input = {
            id: "ACCUMULATOR",
            all_campaigns: [...acc_update_sets.all_campaigns],
            all_senders: [...acc_update_sets.all_senders],
            all_topics: [...acc_update_sets.all_topics],
        };
        return grafetch({
            operation: updateAccumulator,
            vars_obj: {
                input,
            },
        }).then(acc => {
            const print = {
                updateAccumulator: {
                    all_campaigns: input.all_campaigns.length,
                    all_senders: input.all_senders.length,
                    all_topics: input.all_topics.length,
                },
            };
            log("updated accumulator:", JSON.stringify(print, null, 2));
            return { days_ago, days_todo };
        });
    });
});
export const save_daily_payload_CMD = chan => [
    chan,
    (run, TASK) => registerCMD({
        sub$: "SAVE_DAILY_PAYLOAD_CMD",
        args: saveDailyPayload,
        work: x => {
            log(x);
            if (x.days_ago === x.days_todo) {
                log(" !!!!!!!!!!!!!!! FINISHED !!!!!!!!!!!!!!!");
                return chan.write("finished");
            }
            log("================= DONE =================");
            log(`for days_ago: ${x.days_ago}, minus 1...`);
            log(`days left todo: ${x.days_ago - x.days_todo}`);
            return run.next(TASK({ days_ago: --x.days_ago, days_todo: x.days_todo }));
        },
    }),
];
