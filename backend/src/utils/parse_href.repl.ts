import { parse_href } from "./parse_href"

const unsub_str =
  "https://public.govdelivery.com/accounts/USCENSUS/subscriber/one_click_unsubscribe?verification=%5B%5BVERIFICATION%5D%5D&destination=%5B%5BEMAIL_ADDRESS%5D%5D"

const utm_str =
  "http://www.census.gov/abourt/cotact-us.html?utm_campaign=20191203msacos1ccstors&utm_medium=email&utm_source=govdelivery"

const utm_unsub_str =
  "http://www.census.gov/about/contactus/one_click_unsubscribe?utm_campaign=20191203msacos1ccstors&utm_medium=email&utm_source=govdelivery"

const null_str =
  "https://us.vocuspr.com/Publish/518008/Forward_518008_2215647.htm?Date=3%2F12%2F2019+9%3A07%3A47+AM&Email=ashleah.younker%40cision.com&utm_campaign=&utm_medium=email&utm_source=govdelivery"

parse_href(unsub_str)
//? { unsubscribe: 1 }
parse_href(utm_str)
//? { utm_campaign: "20191203msacos1ccstors" }
parse_href(utm_unsub_str)
//? { utm_campaign: "20191203msacos1ccstors", unsubscribe: 1, }
parse_href(null_str)
//? null
