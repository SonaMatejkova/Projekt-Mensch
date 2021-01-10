import React, { useEffect, useState } from 'react';
import useSound from 'use-sound';
import step from './step.mp3';

const positions = [
  null,
  { x: -198.609, y: 30.056 },
  { x: -180.108, y: 36.015 },
  { x: -183.283, y: 45.54 },
  { x: -196.47, y: 56.022 },
  { x: -192.803, y: 67.102 },
  { x: -173.677, y: 67.631 },
  { x: -157.811, y: 59.775 },
  { x: -144.648, y: 48.884 },
  { x: -134.972, y: 38.376 },
  { x: -118.795, y: 29.834 },
  { x: -101.106, y: 32.328 },
  { x: -100.954, y: 46.011 },
  { x: -100.596, y: 60.777 },
  { x: -111.916, y: 72.999 },
  { x: -127.488, y: 81.616 },
  { x: -144.044, y: 90.99 },
  { x: -159.163, y: 99.608 },
  { x: -169.822, y: 112.081 },
  { x: -163.925, y: 120.85 },
  { x: -145.145, y: 121.5 },
  { x: -125.976, y: 114.878 },
  { x: -109.572, y: 107.016 },
  { x: -94.831, y: 98.625 },
  { x: -80.884, y: 90.565 },
  { x: -66.468, y: 81.993 },
  { x: -51.349, y: 75.249 },
  { x: -31.596, y: 74.237 },
  { x: -24.272, y: 82.438 },
  { x: -25.286, y: 97.827 },
  { x: -31.347, y: 107.373 },
  { x: -46.073, y: 114.187 },
  { x: -60.164, y: 123.234 },
  { x: -77.747, y: 129.922 },
  { x: -96.04, y: 135.44 },
  { x: -113.579, y: 142.47 },
  { x: -132.856, y: 147.611 },
  { x: -149.033, y: 153.356 },
  { x: -146.16, y: 165.754 },
  { x: -129.832, y: 171.348 },
  { x: -111.235, y: 171.424 },
  { x: -90.447, y: 172.104 },
  { x: -70.49, y: 171.197 },
  { x: -50.532, y: 166.585 },
  { x: -32.314, y: 158.346 },
  { x: -16.817, y: 148.14 },
];

export const Figure = ({ position: givenPos, player }) => {
  const [currentPos, setCurrentPos] = useState(givenPos);
  const { x, y } = positions[currentPos];
  const [play] = useSound(step);

  useEffect(() => {
    // animace pohybu
    let timer = setTimeout(() => {
      if (currentPos !== givenPos) {
        setCurrentPos((pos) => (pos > givenPos ? --pos : ++pos));
        play(); // zvuk
      }
    }, 200);
    return () => clearTimeout(timer);
  }, [givenPos, currentPos]);

  return (
    <>
      <g
        id="g1444-0-8-60-95"
        opacity="0.997"
        transform={`matrix(.92414 0 0 .94581 ${x} ${y})`}
      >
        <ellipse
          style={{ mixBlendMode: 'normal' }}
          id="ellipse1436-3-8-0-54"
          cx="40.329"
          cy="13.054"
          fill="#030104"
          strokeWidth="0.723"
          rx="1.491"
          ry="1.873"
          transform="matrix(.99161 -.12927 .15335 .98817 0 0)"
        ></ellipse>
        <path
          style={{ mixBlendMode: 'normal' }}
          id="path1438-1-2-282-74"
          fill={['#a32300', '#16502d'][player - 1]}
          fillOpacity="1"
          stroke="none"
          strokeOpacity="1"
          strokeWidth="0.723"
          d="M38.785 8.613a1.725 1.725 0 011.905 1.513c.19 1.22-.087 3.549-.087 3.549s1.841 1.126 2.312 1.483c.985.747.814 1.555-.42 1.1-2.002-.736-2.946-1.105-3.18-1.697-.234-.593-.303-1.848-.303-1.848l-.983.696-5.172-3.573s-.359.424-.576.452c-.219.029-.51-.137-.51-.137l.371-.912-.667-.754.811.302c-.014.002.342-.844.342-.844s.276.15.39.506c.115.356.061.72.061.72l2.226 1.533s.901-1.753 3.48-2.089z"
        ></path>
        <path
          style={{ mixBlendMode: 'normal' }}
          id="path1440-1-3-07-34"
          fill="#030104"
          strokeWidth="0.723"
          d="M34.505 12.508s4.165 2.733 4.728 3.148c.563.417 1.922 1.536.99 3.579-.912 2-1.916 3.973-1.916 3.973l-.794-.297-1.036-.489s1.337-2.984 1.57-3.55c.232-.564.065-.983-.423-1.327-.472-.333-1.252-.75-1.955-1.209-.695-.453-1.908-1.962-1.164-3.828z"
        ></path>
        <path
          style={{ mixBlendMode: 'normal' }}
          id="path1442-0-4-94-7"
          fill="none"
          stroke="#030104"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="1.445"
          d="M29.736 18.106l14.057 7.43s1.78.701 2.42-.895"
        ></path>
      </g>
    </>
  );
};
