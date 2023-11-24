import axios from 'axios';

const URL = "http://localhost:5000";

export const createGame = async (gameData) => {
  const response = await axios.post(`${URL}/game/create`, gameData);
  return response.data;
};

export const joinGame = async (joinData) => {
  const response = await axios.post(`${URL}/game/join`,joinData);
  return response.data;
};

export const leaveGame = async (leaveData) => {
  const response = await axios.post(`${URL}/game/leave-game`, leaveData);
  return response.data;
};


