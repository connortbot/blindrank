import React from 'react';
import { endGame } from '../services/gameService';

const GameEnd = ({ gameId }) => {
    const handleEndGame = async () => {
        await endGame(gameId);
    };
    return <button onClick={handleEndGame}>End Game</button>;
};

export default GameEnd;
