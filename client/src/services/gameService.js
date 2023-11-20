import axios from 'axios';

const API_URL = 'http://localhost:5000/game'; // Base URL for your game API

export const createGame = async (gameData) => {
  return await axios.post(`${API_URL}/create`, gameData); // POST request to create a game
};

export const joinGame = async (gameId) => {
  return await axios.post(`${API_URL}/join`, { gameId }); // POST request for a player to join a game
};

export const endGame = async (gameId) => {
  return await axios.post(`${API_URL}/end-game`, { gameId }); // POST request to end a game
};


