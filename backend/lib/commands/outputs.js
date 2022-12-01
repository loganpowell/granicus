import { registerCMD } from "@-0/spool";
export const LOG_CMD = registerCMD({
    sub$: "LOG_CMD",
    args: acc => acc,
    work: acc => console.log("LOG:", JSON.stringify(acc, null, 2)),
});
export const csp_put_cmd = chan => registerCMD({
    sub$: `CSP_PUT_CMD_${chan.id}`,
    args: acc => acc,
    work: acc => chan.write(acc),
});
