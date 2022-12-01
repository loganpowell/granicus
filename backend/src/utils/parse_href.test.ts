import { parse_href } from "./parse_href"

const unsub_str =
  "https://public.govdelivery.com/accounts/USCENSUS/subscriber/one_click_unsubscribe?verification=%5B%5BVERIFICATION%5D%5D&destination=%5B%5BEMAIL_ADDRESS%5D%5D"

const utm_str =
  "http://www.census.gov/abourt/cotact-us.html?utm_campaign=20191203msacos1ccstors&utm_medium=email&utm_source=govdelivery"

const utm_unsub_str =
  "http://www.census.gov/about/contactus/one_click_unsubscribe?utm_campaign=20191203msacos1ccstors&utm_medium=email&utm_source=govdelivery"

const null_str =
  "https://us.vocuspr.com/Publish/518008/Forward_518008_2215647.htm?Date=3%2F12%2F2019+9%3A07%3A47+AM&Email=ashleah.younker%40cision.com&utm_campaign=&utm_medium=email&utm_source=govdelivery"

test("matcher: unsubscribe", () => {
  expect(parse_href(unsub_str)).toEqual({ unsubscribe: 1 })
})
test("matcher: utm_campaign", () => {
  expect(parse_href(utm_str)).toEqual({ utm_campaign: "20191203msacos1ccstors" })
})
test("matcher: utm_campaign & unsubscribe", () => {
  expect(parse_href(utm_unsub_str)).toEqual({
    utm_campaign: "20191203msacos1ccstors",
    unsubscribe: 1,
  })
})
test("matcher: null (no match)", () => {
  expect(parse_href(null_str)).toEqual(null)
})
