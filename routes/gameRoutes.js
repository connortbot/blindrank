const express = require('express');
const router = express.Router();
const gameController = require('../controllers/gameControllers.js');

// Route to create a new game
router.post('/create', gameController.createGame);

module.exports = router;