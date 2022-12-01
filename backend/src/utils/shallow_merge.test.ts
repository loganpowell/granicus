import { shallow_merge } from "./shallow_merge"

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

export const merged = {
    a: { detail: [1, "bleep 1"], links: [1, "blop 1"] },
    b: { detail: [2, "bleep 2"], links: [2, "blop 2"] },
    c: { detail: [3, "bleep 3"], links: [3, "blop 3"] },
    omit: "PLEASE DELETE ME",
    d: ["x", "y", "z", "a", "b", "c"],
    i_dont_belong: "Get me out of here",
}
test("shallow_merge", () => {
    expect(shallow_merge(merge_obj3, merge_obj4)).toEqual(merged)
})
