import React, { useState } from 'react';
import { joinGame } from '../services/gameService';

const GameJoin = () => {
    const [gameId, setGameId] = useState('');
    const [username, setUsername] = useState('username');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await joinGame({username, gameId});
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
        onChange={(e) => setGameId(e.target.value)} // Updates gameId state when input changes
        placeholder="Enter Game ID"
        />
        <button type="submit">Join Game</button>
    </form>
    );
};

export default GameJoin;
