import { run$ } from "@-0/spool";
import { days_ago__save_GQL, _OUT_ } from "./tasks";
export const doTheThing = (days_ago, days_todo = days_ago - 2) => run$.next(days_ago__save_GQL({ days_ago, days_todo }));
export const _CHAN_ = _OUT_;
