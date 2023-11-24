import React from 'react';
import { leaveGame } from '../services/gameService';

const GameLeave = ({ gameId, setgameId, playerId, setplayerId }) => {
    const handleLeaveGame = async () => {
        await leaveGame({playerId, gameId});
        setgameId('');
        setplayerId(0);
    };
    return <button onClick={handleLeaveGame}>Leave Game</button>;
};

export default GameLeave;
