const MongoClient = require('mongodb').MongoClient;
require('dotenv').config();
module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    let retData = "No user found."

    const url = process.env.mongoConnectionString;
    context.log("Env: " + url);
    const mongo = new MongoClient(url);

    await mongo.connect();
    const db = mongo.db("event");
    const collection = db.collection('attendees');

    // get all documents, sorted by name, convert cursor into array
    const products = await collection.find({}).toArray();

    retData = JSON.stringify(products);
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: retData
    };
}