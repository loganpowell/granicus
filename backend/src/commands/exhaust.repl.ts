import { exhaustFetchGD_links, exhaustFetchGD_details } from "./exhaust"

//exhaustFetchGD_details(1).then(r => console.log("done\n"))
//exhaustFetchGD_details(1000).then(x => console.log(JSON.stringify(x, null, 2)))
//exhaustFetchGD_details(10).then(r => console.log("done\n"))
//exhaustFetchGD_details(1).then(x => console.log(JSON.stringify(x, null, 2))) //?
exhaustFetchGD_links(1).then(x => console.log(JSON.stringify(x, null, 2))) //?
