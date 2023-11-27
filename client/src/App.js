import React, { useState } from 'react';
import GameCreate from './components/GameCreate';
import GameJoin from './components/GameJoin';
import GameLeave from './components/GameLeave';

const App = () => {
  const [currGameId, setcurrGameId] = useState('');
  const [currPlayerId, setcurrPlayerId] = useState(0);
  return (
    <div className="App">
      <h1>Blind Rank Game</h1>
      <GameCreate
        setcurrGameId={setcurrGameId}
        setcurrPlayerId={setcurrPlayerId}
      />
      <GameJoin
        setcurrGameId={setcurrGameId}
        setcurrPlayerId={setcurrPlayerId}
      />
      <GameLeave 
        currGameId={currGameId}
        setcurrGameId={setcurrGameId}
        currPlayerId={currPlayerId}
        setcurrPlayerId={setcurrPlayerId}
      />
    </div>
  );
};

export default App;