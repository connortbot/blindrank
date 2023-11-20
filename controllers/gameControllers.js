const gameModel = require('../models/gameModels');

const createGame = async (req, res) => {
    try {
        const { theme, rounds } = req.body;
        const playerIds = [0];
        const initialScores = playerIds.map(() => 0);
        const newGame = {
            theme,
            rounds,
            playerIds,
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
        const { gameId } = req.body;
        const updatedGame = await gameModel.addPlayerToGame(gameId);
        res.json(updatedGame);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const endGame = async (req, res) => {
    try {
        const { gameId } = req.body;
        const result = await gameModel.endGame(gameId);
        res.json({ message: 'Game ended successfully', result });
    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports = {
    createGame,
    joinGame,
    endGame
};