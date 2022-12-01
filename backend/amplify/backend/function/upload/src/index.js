/* Amplify Params - DO NOT EDIT
	API_GRANICUS_GRAPHQLAPIENDPOINTOUTPUT
	API_GRANICUS_GRAPHQLAPIIDOUTPUT
	API_GRANICUS_GRAPHQLAPIKEYOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

const { upload } = require("./upload")

// PRIORITY: Updated REST API with auth as per: https://github.com/aws-amplify/amplify-cli/issues/1016#issuecomment-605535948

const env = process.env

exports.handler = async event => {
    // parse the POST body
    const json = JSON.parse(event.body)
    const allDone = await upload(json)

    // NO LONGER AN HTTP ENDPOINT

    const response = {
        statusCode: 200,
        //  Uncomment below to enable CORS requests
        headers: {
            "Access-Control-Allow-Origin": "*",
        },
        //body: "Processing...",
        body: JSON.stringify(allDone, null, 4),
        //body:  JSON.stringify({env}, null, 4),
    }

    console.log(`Done parsing ${json.length} records`)
    console.log(`
  
  888~-_     ,88~-_   888b    | 888~~  
  888   \\   d888   \\  |Y88b   | 888___ 
  888    | 88888    | | Y88b  | 888    
  888    | 88888    | |  Y88b | 888    
  888   /   Y888   /  |   Y88b| 888    
  888_-~      88_-~   |    Y888 888___ 
                                         
      `)

    return response
}
