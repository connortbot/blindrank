import React, { useState } from 'react';
import { createGame } from '../services/gameService';

const GameCreate = () => {
    const [username, setUsername] = useState('');
    const [theme, setTheme] = useState('');
    const [rounds, setRounds] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        await createGame({ username, theme, rounds });
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
            onChange={(e) => setTheme(e.target.value)} // Updates state when the input changes
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