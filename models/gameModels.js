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
        const nextPlayerId = currentGame.playerIds[currentGame.playerIds.length-1]+1; // last Id + 1
        
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
    try {
        await client.connect();
        const db = client.db(dbName);
        const collection = db.collection(coll);
        const gameData = await collection.findOne({gameId: gID});
        // get the index of the player we're removing;
        let ix = 0;
        for (let i=0; i<gameData.playerIds.length; i++) {
            if (gameData.playerIds[i] == pID) {
                ix = i;
            }
        }
        gameData.scores.splice(ix,1);
        gameData.usernames.splice(ix,1);
        if (pID == 0) { // is host
            await collection.deleteOne({ gameId: gID });
            return {"message": "Game closed successfully!", gID};
        } else {
            await collection.updateOne(
                { gameId: gID },
                { $pull: {
                    playerIds: parseInt(pID),
                }, $set: {
                    usernames: gameData.usernames,
                    scores: gameData.scores
                }} 
            );
            return {"message": "Game left successfully!", gID};
        }
    } finally {
        await client.close();
    }
}

module.exports = {
    createNewGame,
    addPlayerToGame,
    leaveGame
}

