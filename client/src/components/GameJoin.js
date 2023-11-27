import React, { useState } from 'react';
import { joinGame } from '../services/gameService';
import { socketjoinGame } from '../socket.js';

const GameJoin = () => {
    const [gameId, setGameId] = useState('');
    const [username, setUsername] = useState('username');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const gameData = await joinGame({username, gameId});
        const newId = gameData.playerIds[gameData.playerIds.length - 1]
        if (!("message" in gameData)) {
            localStorage.setItem("gameId",gameData.gameId);
            localStorage.setItem("playerId",newId);
            socketjoinGame(gameId);
        }
    };

    return (
    <form onSubmit={handleSubmit}>
        <input 
        type="text" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)}
        placeholder="username"
        />
        <input 
        type="text" 
        value={gameId} 
        onChange={(e) => setGameId(e.target.value)}
        placeholder="Enter Game ID"
        />
        <button type="submit">Join Game</button>
    </form>
    );
};

export default GameJoin;
