const mongodb = require('mongodb')
const mongoClient = mongodb.mongoClient;
let database;

async function getDatabase(){
    const client = await mongodb.MongoClient.connect('mongodb://127.0.0.1:27017')
    database = client.db('library');

    if(!database){
        console.log("database not connected");
    }
    return database;
}

module.exports = {getDatabase};