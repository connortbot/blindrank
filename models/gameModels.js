const { MongoClient } = require('mongodb');
const url = 'mongoURL';
const client = new MongoClient(url);
const dbName = 'blindrank';

const createNewGame = async (gameData) => {
    try {
        await client.connect();
        const db = client.db(dbName);
        const collection = db.collection('gameSessions');
        const result = await collection.insertOne(gameData);
        return result.insertedId;
    } finally {
        await client.close();
    }
};

module.exports = {
    createNewGame;
}