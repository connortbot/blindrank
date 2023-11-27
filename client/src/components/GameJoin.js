import React, { useState } from 'react';
import { joinGame } from '../services/gameService';
import { socketjoinGame } from '../socket.js';

const GameJoin = ({setcurrGameId, setcurrPlayerId}) => {
    const [gameId, setGameId] = useState('');
    const [username, setUsername] = useState('username');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const gameData = await joinGame({username, gameId});
        if (!("message" in gameData)) {
            setcurrGameId(gameData.gameId);
            setcurrPlayerId(gameData.playerIds.length - 1);
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
