const express = require('express');
const bodyParser = require('body-parser');
const gameRoutes = require('./routes/gameRoutes.js');

const app = express();
const port = 5000;

app.use(express.json());

app.use('/game', gameRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});