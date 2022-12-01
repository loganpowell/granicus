import { getInUnsafe, exists, mutInUnsafe, updateInUnsafe, setInUnsafe } from "@thi.ng/paths"
import { range, reverse, comp } from "@thi.ng/transducers"
import fetch from "node-fetch"

import { command$, out$, registerCMD, run$, task$ } from "@-0/spool"
import { trace$, parse, unparse } from "@-0/utils"

import { days_ago__save_GQL } from "./clusterfork"
import {
    light_days_ago,
    medium_days_ago,
    heavy_days_ago,
    first_days_ago,
    logify,
    getDaysDiffFromDates,
} from "../utils"

import { gen_args, fetch_opts_GD, genGranicusCall } from "../granicus"

const dec_4_2019_days_ago = getDaysDiffFromDates(new Date("December 4, 2019"), new Date()) //?

// batchover ///////////////////////////////////////////////

//
//    d8
//  _d88__ 888-~\   /~~~8e   e88~~\  e88~~8e
//   888   888          88b d888    d888  88b
//   888   888     e88~-888 8888    8888__888
//   888   888    C888  888 Y888    Y888    ,
//   "88_/ 888     "88_-888  "88__/  "88___/
//
//

trace$("command$ ->", command$)
//trace$("out$ ->", out$)
// 2 pages of bulletins & 18 pages of links

//
//    d8                      d8
//  _d88__  e88~~8e   d88~\ _d88__  d88~\
//   888   d888  88b C888    888   C888
//   888   8888__888  Y88b   888    Y88b
//   888   Y888    ,   888D  888     888D d88b d88b d88b
//   "88_/  "88___/  \_88P   "88_/ \_88P  Y88P Y88P Y88P
//
//

//const [AGE_MD__GD_DETAILSnLINKS, _MEDIUM_] = age__GD_detailsNlinks_pruned(medium_days_ago)

//run$.next(AGE_MD__GD_DETAILSnLINKS)
//// @ts-ignore

//_MEDIUM_.read().then(r => {
//  console.log("RESULT:", JSON.stringify(r, null, 2))
//})

//export const batchFromDaysAgo = days_ago => {
//  const window = [...range(0, first_days_ago)]
//}

//const full_window = [...reverse(range(0, first_days_ago))]

//const test_window = [...reverse(range(first_days_ago - 10, first_days_ago))]

////////////////////////////////////////////////// batchover

// clusterfork ///////////////////////////////////////////////

//trace$("command$ ->", command$)
//trace$("out$ ->", out$)
// 2 pages of bulletins & 18 pages of links
// :bubble

/**
 * TODO: days_since_GD_inception.forEach(x => run$.next(DETAILSnLINKS_OUT_(x)))
 */

//const [DAYS_AGO__GOVDETAILINKS_PRUNED, _MEDIUM_] = days_ago__govdetailinks_pruned(
//  dec_4_2019_days_ago
//)

//const good_day_for_the_cut = getDaysDiffFromDates(new Date("2017-08-22"), new Date()) //?

// GOOD DATE: 2017-08-22
//const [TWO_DAYS_AGO, _LG_] = days_ago__govdetailinks_pruned(good_day_for_the_cut)

//run$.next(DAYS_AGO__GOVDETAILINKS_PRUNED)

// @ts-ignore
//_MEDIUM_.read().then(x => console.log(JSON.stringify(x, null, 2))) //?

//run$.next(TWO_DAYS_AGO)

//// @ts-ignore
//_LG_.read().then(x => console.log(JSON.stringify(x, null, 1))) //?

//run$.next(long_time_ago)

//// @ts-ignore
//_SM_.read().then(x => {
//  console.log(JSON.stringify(x, null, 2))
//}) //?

////////////////////////////////////////////////// clusterfork

run$.next(days_ago__save_GQL({ days_ago: 19, days_todo: 13 })) //?
