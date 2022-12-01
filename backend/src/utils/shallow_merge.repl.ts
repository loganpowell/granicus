import { pruneKVPairs } from "./clean"
import { shallow_merge } from "./shallow_merge"

import { log } from "."

export const merge_obj3 = {
    a: { detail: [1, "bleep 1"] },
    b: { detail: [2, "bleep 2"] },
    c: { detail: [3, "bleep 3"] },
    i_dont_belong: "Get me out of here",
    d: ["x", "y", "z"],
}
export const merge_obj4 = {
    a: { links: [1, "blop 1"] },
    b: { links: [2, "blop 2"] },
    c: { links: [3, "blop 3"] },
    omit: "PLEASE DELETE ME",
    d: ["a", "b", "c"],
}

////////////////////////////////////////////////// parse href

// merge ///////////////////////////////////////////////

//log(for_merge)

const merged = shallow_merge(merge_obj3, merge_obj4) //?
const pruned = pruneKVPairs(merged, "omit", "i_dont_belong") //?

log(JSON.stringify(merged, null, 2)) //?

////////////////////////////////////////////////// merge

parseFloat("1.23242") * 12 //?
