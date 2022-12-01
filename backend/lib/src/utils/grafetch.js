import gql from "nanographql";
import fetch from "node-fetch";
import dotenv from "dotenv";
dotenv.config();
export const GQL_URL = process.env.API_GRANICUS_GRAPHQLAPIENDPOINTOUTPUT;
export const GQL_KEY = process.env.API_GRANICUS_GRAPHQLAPIKEYOUTPUT;
export const grafetch = ({ operation, api = GQL_URL, key = GQL_KEY, vars_obj = {} }) => {
    let op = gql(operation);
    return (fetch(api, {
        method: "POST",
        headers: {
            "x-api-key": key,
        },
        body: op(vars_obj),
    })
        .then(r => r.json())
        .catch(console.error));
};
