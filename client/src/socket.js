import io from 'socket.io-client';
const socket = io('http://localhost:5000')

const socketjoinGame = (gameId) => {
    socket.emit('joinGame', gameId);
}

const socketleaveGame = (currPlayerId,gameId) => {
    socket.emit('leaveGame', currPlayerId, gameId);
}

export { socketjoinGame, socketleaveGame };