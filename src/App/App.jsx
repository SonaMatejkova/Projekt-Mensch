import React, { useState } from 'react';
import './style.css';
import { Plan } from '../Plan.jsx';
import { doTurn, initialState } from '../state.js';

export const App = () => {
  const [state, setState] = useState(initialState);
  return (
    <div className="App">
      <h1>Mensch, nezlob se!</h1>
      <p>Na tahu je hráč: {state.onTurn}</p>
      <button onClick={() => setState(doTurn(state, 1, 1))}>Tah</button>
      <Plan fields={state.fields} />
    </div>
  );
};
