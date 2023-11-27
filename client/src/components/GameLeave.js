import React from 'react';
import { leaveGame } from '../services/gameService';
import { socketleaveGame } from '../socket.js';

const GameLeave = ({ currGameId, setcurrGameId, currPlayerId, setcurrPlayerId }) => {
    const handleLeaveGame = async () => {
        await leaveGame({currPlayerId, currGameId});
        setcurrGameId('');
        setcurrPlayerId(0);
        socketleaveGame(currGameId);
    };
    return <button onClick={handleLeaveGame}>Leave Game</button>;
};

export default GameLeave;
