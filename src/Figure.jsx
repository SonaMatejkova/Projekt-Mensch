import React from 'react';

export const Figure = (props) => {
  return (
    <g display="inline">
      <g transform={`matrix(${props.position})`}>
        <ellipse
          cx="83.319"
          cy="95.046"
          fill="#fc0"
          fillOpacity="1"
          stroke="none"
          strokeDasharray="none"
          strokeMiterlimit="4"
          strokeWidth="0.198"
          opacity="1"
          rx="41.199"
          ry="24.19"
          transform="matrix(.83696 0 0 .81005 11.057 38.56)"
        ></ellipse>
        {props.player > 0 ? (
          <g>
            <g
              fill={props.player === 1 ? 'red' : 'green'}
              fillOpacity="1"
              transform="translate(.378 38.554)"
            >
              <g>
                <ellipse
                  cx="81.832"
                  cy="33.262"
                  fill={props.player === 1 ? 'red' : 'green'}
                  fillOpacity="1"
                  stroke="none"
                  strokeDasharray="none"
                  strokeMiterlimit="4"
                  strokeWidth="0.298"
                  opacity="1"
                  rx="11.15"
                  ry="11.339"
                ></ellipse>
              </g>
              <path
                stroke="none"
                strokeDasharray="none"
                strokeMiterlimit="4"
                strokeWidth="0.265"
                d="M80.509 33.262c1.498-1.66 4.47-1.897 6.432-.03 1.96 1.868-.491 5.085 1.499 8.82 1.99 3.737 2.752 4.969 4.337 8.914.793 1.973 3.587 6.42 5.142 8.795 1.555 2.375 4.14 6.838 4.513 8.086 2.124 7.1-3.88 12.662-20.79 12.662-16.908 0-20.69-3.812-19.654-11.15.184-1.3 3.053-6.643 4.63-9.94 1.666-3.484 3.093-6.527 5.103-10.402 1.327-2.557 1.97-5.263 3.728-8.101 1.758-2.84-1.418-6.567 1.34-8.143.862-.492 2.092.369 4.854.11"
                opacity="1"
              ></path>
            </g>
          </g>
        ) : null}
      </g>
    </g>
  );
};
