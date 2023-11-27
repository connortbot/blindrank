import React from 'react';
import GameCreate from './components/GameCreate';
import GameJoin from './components/GameJoin';
import GameLeave from './components/GameLeave';

// localStorage
// "playerId"
// "gameId"
const App = () => {
  return (
    <div className="App">
      <h1>Blind Rank Game</h1>
      <GameCreate/>
      <GameJoin/>
      <GameLeave/>
    </div>
  );
};


export default App;