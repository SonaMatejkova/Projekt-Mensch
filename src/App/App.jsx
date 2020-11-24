import React, { useState } from 'react';
import './style.css';
import { Plan } from '../Plan.jsx';
import { doTurn, initialState } from '../state.js';

export const App = () => {
  const [state, setState] = useState(initialState);
  return (
    <div className="App">
      <h1>Mensch, nezlob se!</h1>
      <p>
        Na tahu je hráč:{' '}
        <span className={`player-${state.player}`}>{state.player}</span>
        {state.dice ? ` Kostka ukazuje ${state.dice}` : ''}
      </p>
      <button onClick={() => setState(doTurn(state, 1, 1))}>
        {state.dice ? 'Táhni' : 'Házej'}
      </button>
      <Plan state={state} />
    </div>
  );
};
