import React from 'react';
import { Dice1 } from './Dice1.jsx';
import { Dice2 } from './Dice2.jsx';
import { Dice3 } from './Dice3.jsx';
import { Dice4 } from './Dice4.jsx';
import { Dice5 } from './Dice5.jsx';
import { Dice6 } from './Dice6.jsx';
import { Hazej } from './Hazej.jsx';
import './style.css';

export const Dice = (props) => {
  const innerDice = [
    <Hazej />,
    <Dice1 />,
    <Dice2 />,
    <Dice3 />,
    <Dice4 />,
    <Dice5 />,
    <Dice6 />,
  ][props.value || 0];
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="86"
      height="86"
      version="1.1"
      viewBox="0 0 22.754 22.754"
      onClick={props.onClick}
      className="dice"
    >
      <g transform="translate(-1.474 -.718)">
        <g>
          <g transform="translate(-.756 -1.512)">
            <rect
              width="22.754"
              height="22.754"
              x="2.23"
              y="2.23"
              fill={props.fill}
              fillOpacity="1"
              strokeWidth="0.265"
              paintOrder="normal"
              rx="4.762"
              ry="4.762"
            ></rect>
          </g>
          <path
            fill="#fff"
            fillOpacity="0.226"
            strokeWidth="0.265"
            d="M6.237.718a4.752 4.752 0 00-4.763 4.763V18.71c0 2.381 2.117 4.762 2.117 2.116V5.481c0-1.323 1.323-2.646 2.646-2.646h15.345c2.646 0 .265-2.117-2.116-2.117z"
            paintOrder="normal"
          ></path>
          {innerDice}
        </g>
      </g>
    </svg>
  );
};
