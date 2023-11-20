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

const addPlayerToGame = async (gameId) => {
    try {
        await client.connect();
        const db = client.db(dbName);
        const collection = db.collection('gameSessions');
        
        const currentGame = await collection.findOne({ _id: gameId });
        const nextPlayerId = currentGame.playerIds.length;


        const result = await collection.updateOne(
            { _id: gameId }, // Filter to identify the game
            { $push: { playerIds: nextPlayerId } } // Add playerId to the playerIds array without duplicating
        );
        return result;
    } finally {
        await client.close();
    }
};

const endGame = async (gameId) => {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection('gameSessions');
    const result = await collection.updateOne(
        { _id: gameId },
        { $set: { status: 'ended' } }
    );
    return result;
}

module.exports = {
    createNewGame,
    addPlayerToGame,
    endGame
}