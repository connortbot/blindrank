import React from 'react';
import GameCreate from './components/GameCreate';
import GameJoin from './components/GameJoin';
import GameLeave from './components/GameLeave';
import SetPid from './components/SetPid';

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
      <SetPid/>
    </div>
  );
};


export default App;