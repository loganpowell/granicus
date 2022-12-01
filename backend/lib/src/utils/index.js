export * from "./clean";
export * from "./dates";
export * from "./shallow_merge";
export * from "./gather";
export * from "./grafetch";
export const log = console.log;
const ify = arg => JSON.stringify(arg, null, 2);
export const logify = (...args) => (args.length ? args.forEach(ify) : ify(args));
