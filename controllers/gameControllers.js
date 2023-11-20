const gameModel = require('../models/gameModel');

const createGame = async (res,req) => {
    try {
        const { rounds, playerIds, theme } = req.body;
        const initialScores = playerIds.map(() => 0);

        const newGame = {
            rounds,
            playerIds,
            scores: initialScores,
            theme,
            status: 'waiting',
        };

        const newGameId = await gameModel.createNewGame(newGame);
        res.json({ gameId: newGameId });
    } catch (error) {
        res.status(500).send(error.message);
    }
}



module.exports = {
    createGame,
};