/**
 * Takes two objects and merges them (shallow) if they share
 * a root key. Any shared path deeper than the first key
 * depth will have the value of the second key : value
 * instance replacing the first (in argument order)
 */
export const shallow_merge = (obj1, obj2) => {
    const acc = obj1
    Object.entries(obj2).forEach(([k, v], i) => {
        acc[k] =
            Array.isArray(v) && Array.isArray(obj1[k])
                ? [...obj1[k], ...v]
                : typeof v === "object" && typeof obj1[k] === "object"
                ? { ...obj1[k], ...v }
                : v
    })
    return acc
}

//export const shallow_merge = (obj, ...objs) => {
//  if (objs[0] == undefined) return obj
//  const acc = obj
//}
