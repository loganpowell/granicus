/* Amplify Params - DO NOT EDIT
	API_GRANICUS_GRAPHQLAPIENDPOINTOUTPUT
	API_GRANICUS_GRAPHQLAPIIDOUTPUT
	API_GRANICUS_GRAPHQLAPIKEYOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

const { _CHAN_, doTheThing } = require("./lib")

exports.handler = async event => {
    // a fortnight:
    doTheThing(6)
    const finished = await _CHAN_.read()

    const response = {
        statusCode: 200,
        body: JSON.stringify(finished),
    }
    return response
}
