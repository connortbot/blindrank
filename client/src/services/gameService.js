import axios from 'axios';

const API_URL = 'http://localhost:5000'; // Base URL for your game API

export const createGame = async (gameData) => {
  return await axios.post(`${API_URL}/game/create`, gameData); // POST request to create a game
};

export const joinGame = async (joinData) => {
  return await axios.post(`${API_URL}/game/join`,joinData); // POST request for a player to join a game
};

export const endGame = async (gameId) => {
  return await axios.post(`${API_URL}/game/end-game`, { gameId }); // POST request to end a game
};


