import { registerCMD } from "@-0/spool"

/**
 * prints out the result of the Task
 *
 * TODO: CHARGE_CMD & DISCHARGE_CMD (CSP put take for state)
 */
export const LOG_CMD = registerCMD({
    sub$: "LOG_CMD",
    args: acc => acc,
    work: acc => console.log("LOG:", JSON.stringify(acc, null, 2)),
})

/**
 * CSP: takes a `new Channel()` and returned a registered
 * Command that puts the accumulator into the channel.
 * Useful for returning to a main function (e.g., for server
 * request/responses)
 */
export const csp_put_cmd = chan =>
    registerCMD({
        sub$: `CSP_PUT_CMD_${chan.id}`,
        args: acc => acc,
        work: acc => chan.write(acc),
    })
