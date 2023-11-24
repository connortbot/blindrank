const { MongoClient } = require('mongodb');
const url = 'mongoURL';
const client = new MongoClient(url);
const dbName = 'blindrank';

const coll = 'games';

// async createNewGame(gameData)
// => Inserts new into gameSessions using gameData
const createNewGame = async (gameData) => {
    try {
        await client.connect();
        console.log('Connected to MongoDB');
        const db = client.db(dbName);
        const collection = db.collection(coll);
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
        const collection = db.collection(coll);
        
        const currentGame = await collection.findOne({ gameId: gid });
        if (!currentGame) { // gameId does not exist
            return { "message": "game with gameID "+gid+" does not exist!" };
        }
        const nextPlayerId = currentGame.playerIds.length;

        
        await collection.updateOne(
            { gameId: gid }, // Filter to identify the game
            { $push: { 
                playerIds: nextPlayerId,
                usernames: gameData.username,
                scores: 0
            } } // Add without dupe
        );
        return await collection.findOne({ gameId: gid });
    } finally {
        await client.close();
    }
};

// async leaveGame(gameId)
// => Deletes game from games collection if host
// => leaves game if not host
const leaveGame = async (pID, gID) => {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection(coll);
    if (pID === 0) { // is host
        return await collection.deleteOne({ gameId: gID });
    } else {
        return {};
    }
}

module.exports = {
    createNewGame,
    addPlayerToGame,
    leaveGame
}