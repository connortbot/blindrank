import React, { useState } from 'react';
import { createGame } from '../services/gameService';
import { joinGame } from '../socket.js';

const GameCreate = ({setgameId, setplayerId}) => {
    const [username, setUsername] = useState('');
    const [theme, setTheme] = useState('');
    const [rounds, setRounds] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        const gameData = await createGame({ username, theme, rounds });
        const gameId = gameData.gameId;
        setgameId(gameId);
        setplayerId(0);
        joinGame(gameId);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
            type="test"
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