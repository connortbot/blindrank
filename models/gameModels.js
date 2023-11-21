const { MongoClient } = require('mongodb');
const url = 'mongoURL';
const client = new MongoClient(url);
const dbName = 'blindrank';



// async createNewGame(gameData)
// => Inserts new into gameSessions using gameData
const createNewGame = async (gameData) => {
    try {
        await client.connect();
        console.log('Connected to MongoDB');
        const db = client.db(dbName);
        const collection = db.collection('gameSessions');
        await collection.insertOne(gameData);
        return gameData.gameId;
    } catch (err) {
		console.log(err);
    } finally {
        await client.close();
    }
};

// async addPlayerToGame(gameId)
// => finds gameSession that matches given gameIds
const addPlayerToGame = async (gameData) => {
    try {
        const gid = gameData.gameId;
        await client.connect();
        const db = client.db(dbName);
        const collection = db.collection('gameSessions');
        
        const currentGame = await collection.findOne({ gameId: gid });
        const nextPlayerId = currentGame.playerIds.length;


        await collection.updateOne(
            { gameId: gid }, // Filter to identify the game
            { $push: { 
                playerIds: nextPlayerId,
                usernames: gameData.username,
                scores: 0
            } } // Add without dupe
        );
        return currentGame;
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