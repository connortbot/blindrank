import io from 'socket.io-client';
const socket = io('http://localhost:5000')

const joinGame = (gameId) => {
    socket.emit('joinGame', gameId);
}

export { joinGame };