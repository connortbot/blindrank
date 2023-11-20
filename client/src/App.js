import React from 'react';
import GameCreate from './components/GameCreate';
import GameJoin from './components/GameJoin';
import GameEnd from './components/GameEnd';

const App = () => {
  return (
    <div className="App">
      <h1>Blind Rank Game</h1>
      <GameCreate />
      <GameJoin />
      <GameEnd gameId="some-game-id" />
    </div>
  );
};

export default App;