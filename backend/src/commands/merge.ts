import { registerCMD } from "@-0/spool"

import { shallow_merge } from "../utils"

export const merge_props_cmd = (prop1 = "details", prop2 = "links") =>
  registerCMD({
    sub$: `${prop1}_${prop1}_MERGE_PROPS`,
    // @ts-ignore
    args: ({ [prop1]: _prop1, [prop2]: _prop2 }) => shallow_merge(_prop1, _prop2),
  })
