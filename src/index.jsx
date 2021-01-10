import React from 'react';
import { render } from 'react-dom';
import './index.html';
import { App } from './App/App.jsx';
import './style.css';

render(
  <>
    <header></header>
    <main>
      <App />
    </main>
    <footer></footer>
  </>,
  document.querySelector('#app'),
);
