import day from "dayjs"

export const genGranicusDate = date => day(date).format("YYYY-MM-DD")

export const genDateFromDateMinusDays = (user_date, days_ago) =>
    day(user_date).subtract(days_ago, "day").format("YYYY-MM-DD")

export const getDaysDiffFromDates = (early_date, late_date) =>
    day(late_date).diff(early_date, "day") //?

/// BENCHMARK DATES/FIXTURES /////////////////////////////////////
export const firstEmailDate = new Date("December 03, 2009")

export const heavy_date = "March 30, 2020"

// 1 page of bulletins & 5 pages of links
export const medium_date = "March 12, 2019"

// 1 page of bulletins & 1 page (empty) of links
export const light_date = "March 1, 2010"

const current_date = new Date()

export const first_days_ago = getDaysDiffFromDates(firstEmailDate, current_date)

export const light_days_ago = getDaysDiffFromDates(new Date(light_date), current_date)
export const medium_days_ago = getDaysDiffFromDates(new Date(medium_date), current_date)
export const heavy_days_ago = getDaysDiffFromDates(new Date(heavy_date), current_date)
