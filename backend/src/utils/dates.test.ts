import { genDateFromDateMinusDays, genGranicusDate, getDaysDiffFromDates } from "./dates"

export const GD_dates = {
    erl0: "2009-12-03",
    erl1: "2009-12-04",
    arb0: new Date("April 08, 2020"),
    arb4: new Date("April 12, 2020"),
}

test("genGranicusDate", () => {
    expect(genGranicusDate(GD_dates.arb0)).toBe("2020-04-08")
})

test("genDateFromDateMinusDays", () => {
    expect(genDateFromDateMinusDays(GD_dates.arb0, 7)).toBe("2020-04-01")
})

test("getDaysDiffFromDates", () => {
    expect(getDaysDiffFromDates(GD_dates.arb0, GD_dates.arb4)).toBe(4)
})
