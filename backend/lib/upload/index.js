var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { grafetch, log } from "../utils";
import dotenv from "dotenv";
dotenv.config();
const createTopicFollower = `
    mutation CreateTopicFollower(
        $input: CreateTopicFollowerInput!
        $condition: ModelTopicFollowerConditionInput
    ) {
        createTopicFollower(input: $input, condition: $condition) {
            id
        }
    }
`;
const createFollower = `
    mutation CreateFollower($input: CreateFollowerInput!, $condition: ModelFollowerConditionInput) {
        createFollower(input: $input, condition: $condition) {
            id
        }
    }
`;
const createSub = `
    mutation CreateSub($input: CreateSubInput!, $condition: ModelSubConditionInput) {
        createSub(input: $input, condition: $condition) {
            id
        }
    }
`;
const getSub = `
    query GetSub($id: ID!) {
        getSub(id: $id) {
            id
            deleted_at
        }
    }
`;
const updateSub = `
    mutation UpdateSub($input: UpdateSubInput!, $condition: ModelSubConditionInput) {
        updateSub(input: $input, condition: $condition) {
            id
        }
    }
`;
const lowercase = str => String(str).toLowerCase();
const LC_keys = (obj = {}) => Object.entries(obj).reduce((a, [k, v]) => {
    const ending = k.split("_").slice(-1)[0];
    a[lowercase(k)] =
        ending === "AT" && v
            ? new Date(Number(v) * 1000).toISOString()
            : ending !== "ID" && Number(v)
                ? Number(v)
                : v;
    return a;
}, {});
const partition = ({ subscriber_id = "", destination = "", latitude = 0, longitude = 0, referrer_url = "", subscriber_created_at = "", subscriber_source = "", subscription_created_at = "", subscription_added, subscription_source = "", topic_id = "", }) => __awaiter(void 0, void 0, void 0, function* () {
    const is_deletion = subscription_added === 1 ? false : true;
    const domain = !Number(destination) ? destination.split("@").slice(-1)[0] : "phone";
    const createFollowerInput = {
        id: subscriber_id,
        destination,
        domain,
        latitude,
        longitude,
        created_at: subscriber_created_at,
        source: subscriber_source,
    };
    const topic_follower_id = `${topic_id}_${subscriber_id}`;
    const createTopicFollowerInput = {
        id: topic_follower_id,
        topic_id,
        follower_id: subscriber_id,
    };
    const subInput = Object.assign(Object.assign(Object.assign({ id: topic_follower_id, referrer_url }, (!is_deletion && { created_at: subscription_created_at })), (is_deletion && { deleted_at: subscription_created_at })), { source: subscription_source, topic_id, follower_id: subscriber_id });
    const followerDone = yield grafetch({
        operation: createFollower,
        vars_obj: { input: createFollowerInput },
    }).then(r => {
        if (r.errors) {
            log(`${subscriber_id} createFollower: assumed existing in DB`);
            return;
        }
        log(`${subscriber_id} createFollower: SAVED TO DB`);
        return;
    });
    const subDone = yield grafetch({
        operation: createSub,
        vars_obj: { input: subInput },
    }).then(r => {
        if (r.errors) {
            log(`${topic_follower_id} createSub: assumed existing... checking record props`);
            return grafetch({
                operation: getSub,
                vars_obj: { id: topic_follower_id },
            }).then(r => {
                if ((r.data && r.data.getSub && !r.data.getSub.deleted_at && is_deletion) ||
                    (r.data && r.data.getSub && !r.data.getSub.created_at && !is_deletion)) {
                    log(`${r.data.getSub.id || "no 'getSub' property..."} getSub: updating ${is_deletion ? "deleted_at" : "created_at"}`);
                    return grafetch({
                        operation: updateSub,
                        vars_obj: { input: subInput },
                    }).then(r => {
                        log(`${(r.data && r.data.updateSub.id) || "no data:"} updateSub: ${is_deletion ? "deleted_at" : "created_at"} UPDATED`);
                        return;
                    });
                }
                log(`${topic_follower_id} getSub: not updated... ${is_deletion ? "deleted_at" : "created_at"} unchanged`);
                return;
            });
        }
        log(`${topic_follower_id} createSub: SAVED TO DB`);
        return;
    });
    const topicFollowerDone = yield grafetch({
        operation: createTopicFollower,
        vars_obj: { input: createTopicFollowerInput },
    }).then(r => {
        if (r.errors) {
            log(`${topic_follower_id} createTopicFollower: assumed existing`);
            return;
        }
        log(`${topic_follower_id} createTopicFollower: SAVED TO DB`);
        return;
    });
    const done = [followerDone, subDone, topicFollowerDone];
    return Promise.all(done)
        .then(r => {
        log(`${topic_follower_id} done parsing for ${destination} from ${subscription_source}`);
        return `${topic_follower_id} uploaded for ${destination} from ${subscription_source}`;
    })
        .catch(console.error);
});
export const upload = (json) => __awaiter(void 0, void 0, void 0, function* () { return yield Promise.all(json.map(ob => partition(LC_keys(ob)))); });
