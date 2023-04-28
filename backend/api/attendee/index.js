const MongoClient = require('mongodb').MongoClient;
require('dotenv').config();
module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    let user = req.body;


    const url = process.env.mongoConnectionString;
    context.log("Env: " + url);
    const mongo = new MongoClient(url);
    await mongo.connect();
    const db = mongo.db("event");
    const collection = db.collection('attendees');

    const query = { name: user.name };
    const update = { $set: user };
    const options = { upsert: true, new: true };

    const upsertResult1 = await collection.updateOne(query, update, options);
    context.log(`upsertResult1: ${JSON.stringify(upsertResult1)}\n`);

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: user.name + " " + user.email
    };
}