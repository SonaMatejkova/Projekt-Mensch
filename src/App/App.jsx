import React, { useState } from 'react';
import { Game } from '../Game/Game.jsx';
import { Welcome } from '../Welcome/Welcome.jsx';
import { initialState, setStarted } from '../state';
import './style.css';

export const App = () => {
  const [state, setState] = useState(initialState);

  return (
    <div className="app">
      <h1>Mensch, nezlob se!</h1>
      {state.started ? (
        <Game state={state} setState={setState} />
      ) : (
        <Welcome startGame={() => setState(setStarted(state, true))} />
      )}
    </div>
  );
};
