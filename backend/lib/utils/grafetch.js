var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import gql from "nanographql";
import fetch from "node-fetch";
import { Sema } from "async-sema";
import dotenv from "dotenv";
dotenv.config();
export const GQL_URL = process.env.API_GRANICUS_GRAPHQLAPIENDPOINTOUTPUT;
export const GQL_KEY = process.env.API_GRANICUS_GRAPHQLAPIKEYOUTPUT;
const s = new Sema(500);
export const grafetch = ({ operation, api = GQL_URL, key = GQL_KEY, vars_obj = {} }) => __awaiter(void 0, void 0, void 0, function* () {
    let op = gql(operation);
    yield s.acquire();
    return yield fetch(api, {
        method: "POST",
        headers: {
            "x-api-key": key,
        },
        body: op(vars_obj),
    })
        .then(r => r.json())
        .catch(console.error)
        .finally(() => s.release());
});
