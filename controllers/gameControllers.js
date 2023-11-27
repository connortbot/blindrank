const gameModel = require('../models/gameModels');


function generateGameId(username) {
    let id = username;
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const length = 6;
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        id += characters.charAt(randomIndex);
    }
    return id;
}

// async createGame(req,res)
// => From POST request, pulls theme and rounds
// => Sends database insertion req to gameModel
const createGame = async (req, res) => {
    try {
        const { username, theme, rounds } = req.body;
        const playerIds = [0];
        const initialScores = playerIds.map(() => 0);
        const usernames = [username];
        const newId = generateGameId(username);
        const newGame = {
            gameId: newId,
            theme,
            rounds: parseInt(rounds),
            playerIds,
            usernames,
            scores: initialScores,
            status: 'waiting',
        };
        const newGameId = await gameModel.createNewGame(newGame);
        res.json({ gameId: newGameId });
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const joinGame = async (req, res) => {
    try {
        const { username, gameId } = req.body;
        const gameData = {
            username,
            gameId
        };
        const updatedGame = await gameModel.addPlayerToGame(gameData);
        res.json(updatedGame);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const leaveGame = async (req, res) => {
    try {
        const { playerId, gameId } = req.body;
        const result = await gameModel.leaveGame(playerId, gameId);
        res.json(result);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports = {
    createGame,
    joinGame,
    leaveGame
};