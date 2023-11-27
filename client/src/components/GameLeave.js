import React from 'react';
import { leaveGame } from '../services/gameService';
import { socketleaveGame } from '../socket.js';

const GameLeave = () => {
    const handleLeaveGame = async () => {
        let currPlayerId = localStorage.getItem("playerId");
        let currGameId = localStorage.getItem("gameId");
        await leaveGame({currPlayerId, currGameId});
        socketleaveGame(currPlayerId,currGameId);
        localStorage.setItem("gameId","");
        localStorage.setItem("playerId",0);
    };
    return <button onClick={handleLeaveGame}>Leave Game</button>;
};

export default GameLeave;
