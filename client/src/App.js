import React, { useState } from 'react';
import GameCreate from './components/GameCreate';
import GameJoin from './components/GameJoin';
import GameLeave from './components/GameLeave';

const App = () => {
  const [gameId, setgameId] = useState('');
  const [playerId, setplayerId] = useState(0);
  return (
    <div className="App">
      <h1>Blind Rank Game</h1>
      <GameCreate
        setgameId={setgameId}
        setplayerId={setplayerId}
      />
      <GameJoin
        setgameId={setgameId}
        setplayerId={setplayerId}
      />
      <GameLeave 
        gameId={gameId}
        setgameId={setgameId}
        playerId={playerId}
        setplayerId={setplayerId}
      />
    </div>
  );
};

export default App;