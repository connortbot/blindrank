const express = require('express');
const router = express.Router();
const gameController = require('../controllers/gameControllers.js');

// Route to create a new game
router.post('/create', gameController.createGame);
router.post('/join', gameController.joinGame);
router.post('/end-game', gameController.endGame);

module.exports = router;