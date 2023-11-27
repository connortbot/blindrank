import io from 'socket.io-client';
const socket = io('http://localhost:5000')

const socketjoinGame = (gameId) => {
    socket.emit('joinGame', gameId);
}

const socketleaveGame = (gameId) => {
    socket.emit('leaveGame', gameId);
}

export { socketjoinGame, socketleaveGame };