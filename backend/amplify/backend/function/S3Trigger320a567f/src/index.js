// eslint-disable-next-line
const fetch = require("node-fetch")

/**
 * just like in the delegatee lambda, EMFILE limits cause
 * errors without some form of concurrent socket governance...
 * async-sema to the rescue
 */
const { Sema } = require("async-sema")
const s = new Sema(500) // 🔀 CONCURRENCY LIMIT

const AWS = require("aws-sdk")
const S3 = new AWS.S3()

// Set in Lambda Environment Variables:
const API_URL = process.env.API
const API_KEY = process.env.KEY

// S3 node video: https://www.youtube.com/watch?v=j0Pw8s99n0k
// S3 docs: https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#getObject-property
exports.handler = async (event, context) => {
    // s3 ///////////////////////////////////////////////

    //console.log("Received S3 event:", JSON.stringify(event, null, 2)) // ONE

    // Get the object from the event and show its content type
    const Bucket = event.Records[0].s3.bucket.name //eslint-disable-line
    const Key = event.Records[0].s3.object.key //eslint-disable-line

    //console.log(`Bucket: ${Bucket}`, `Key: ${Key}`) // TWO

    // Bunch of examples here: https://github.com/aws/aws-sdk-js/issues/1436
    const object = await S3.getObject({
        Bucket, // e.g.: granicus-subs93734-env
        Key, // e.g.: subs_test_1.json
        ResponseContentType: "application/json",
    }).promise()

    /////////////////////////////////////////////// s3 //

    const response = object.Body.toString("utf-8")

    //console.log("response: ", response) // already string-ified
    //context.done(null, "Successfully processed S3 event") // SUCCESS with message

    // fetch fn ///////////////////////////////////////////////

    const records = JSON.parse(response)

    const headers = {
        "Content-Type": "application/json",
        "x-api-key": API_KEY,
    }

    const options = body => ({
        method: "POST",
        body,
        headers,
    })

    const partition = (arr = [], siz = 1000) => {
        let out = []
        for (let i = 0; i < arr.length; i += siz) {
            out[out.length] = arr.slice(i, i + siz)
        }
        return out
    }

    const delegate = async partitions => {
        if (!partitions.length) return

        console.log(`Delegating ${partitions.length} payloads to 'upload-env' lambda...`)
        const done = await Promise.all(
            partitions.map(async part => {
                // governor
                await s.acquire()

                return await fetch(API_URL, options(JSON.stringify(part))) // AWS API Gateway times-out after 30 seconds
                    .then(r => r.json()) // <- so we may not use the response //
                    .then(json => {
                        // but if our partition is small enough, we do
                        console.log(`
        ${part.length} items = 1st:
        ${part[0]["DESTINATION"]}
        last:
        ${part[part.length - 1]["DESTINATION"]}

        `)
                        console.log(`
        ${
            (json[0] && `💚 UNDER 30s LAST PARSED = ${json[json.length - 1]}`) ||
            "😡 OVER 30s no data returned..."
        }
        `)
                        return
                    })
                    .catch(console.error)
                    .finally(() => s.release()) // release back to concurrency pool
            })
        )

        return done
    }

    const partitions = partition(records, 200) // 📦 PARTITION SIZE

    const recorded = await delegate(partitions)

    console.log(`Finished delegating ${recorded.length} payloads to 'upload-env' lambda`)

    /////////////////////////////////////////////// fetch fn //

    console.log(`
  
  888~-_     ,88~-_   888b    | 888~~  
  888   \\   d888   \\  |Y88b   | 888___ 
  888    | 88888    | | Y88b  | 888    
  888    | 88888    | |  Y88b | 888    
  888   /   Y888   /  |   Y88b| 888    
  888_-~      88_-~   |    Y888 888___ 
                                         
      `)
    context.done(null, "success!") // SUCCESS with message
}

/**
 * 
 * EXAMPLE FETCH
 * 
var myHeaders = new Headers();
myHeaders.append("x-api-key", "GeALobRoxF6jQJ9ucUBMJ4aphoq381379C0BUOXR");
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify([{"SUBSCRIBER_ID":"1356545046","DESTINATION":"ogarcia@acerelocation.com","LATITUDE":"29.5565","LONGITUDE":"-98.4306","REFERRER_URL":"https://service.govdelivery.com/accounts/USDHSFEMA/subscriber/new","SUBSCRIBER_CREATED_AT":"1605803012","SUBSCRIBER_SOURCE":"Network","SUBSCRIPTION_CREATED_AT":"1605803012","SUBSCRIPTION_SOURCE":"Network","TOPIC_ID":"42183","SUBSCRIPTION_ADDED":"1"}]);

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://dwngn8oq6a.execute-api.us-east-1.amazonaws.com/env/subs", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
 */

/** ONE
 * Received S3 event: 
{
    "Records": [
        {
            "eventVersion": "2.1",
            "eventSource": "aws:s3",
            "awsRegion": "us-east-1",
            "eventTime": "2020-11-30T18:54:15.643Z",
            "eventName": "ObjectCreated:Put",
            "userIdentity": {
                "principalId": "A1BK9DY5P6ZQM9"
            },
            "requestParameters": {
                "sourceIPAddress": "173.73.98.23"
            },
            "responseElements": {
                "x-amz-request-id": "94B1D646944C71D0",
                "x-amz-id-2": "RjRwyrt/vVCK1PGtKBccNWmXmYBYJ2ifViVhTRrY9w8FoS9/XrnhOlCL8A3iVL5vneths0l3jHRzwOJNWMXzuC9MMHMf2EHY4CjJEtFhk9E="
            },
            "s3": {
                "s3SchemaVersion": "1.0",
                "configurationId": "aeecf3e5-b718-4bed-89b6-6775cf296120",
                "bucket": {
                    "name": "granicus-subs93734-env",
                    "ownerIdentity": {
                        "principalId": "A1BK9DY5P6ZQM9"
                    },
                    "arn": "arn:aws:s3:::granicus-subs93734-env"
                },
                "object": {
                    "key": "subs_test_1.json",
                    "size": 996,
                    "eTag": "e3ef3d93cc55a5b588ddd5c0d334068f",
                    "sequencer": "005FC53FD88C4FE84D"
                }
            }
        }
    ]
}

 */

/** TWO
 * Bucket: granicus-subs93734-env Key: subs_test_1.json
 */
