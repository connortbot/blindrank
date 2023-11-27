import React, { useState } from 'react';
import { createGame } from '../services/gameService';
import { socketjoinGame } from '../socket.js';

const GameCreate = () => {
    const [username, setUsername] = useState('');
    const [theme, setTheme] = useState('');
    const [rounds, setRounds] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        const gameData = await createGame({ username, theme, rounds });
        const gameId = gameData.gameId;
        localStorage.setItem("gameId",gameId);
        localStorage.setItem("playerId",0);
        socketjoinGame(gameId);
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
            value={theme} 
            onChange={(e) => setTheme(e.target.value)}
            placeholder="Enter game theme"
            />
            <input
            type="number"
            value={rounds}
            onChange={(e) => setRounds(e.target.value)}
            placeholder="Enter rounds"
            />
            <button type="submit">Create Game</button>
        </form>
    );
}

export default GameCreate;