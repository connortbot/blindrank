const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');

const gameRoutes = require('./routes/gameRoutes.js');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});
const port = 5000;

app.use(express.json());
app.use(cors());

app.use('/game', gameRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

io.on('connection', (socket) => {
  console.log('New client connected');

  socket.on('joinGame', (gameId) => {
    socket.join(gameId);
    console.log(`A player joined game: ${gameId}`);
  });

  // Handle disconnection
  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});