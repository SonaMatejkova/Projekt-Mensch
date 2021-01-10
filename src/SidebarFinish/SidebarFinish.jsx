import React, { useEffect } from 'react';
import { setStarted } from '../state';
import { SnowFalling } from '../SnowFalling/SnowFalling';
import useSound from 'use-sound';
import fanfara from './fanfara.mp3';
import './style.css';
import pohar from './pohar.jpg';

export const SidebarFinish = ({ state, setState }) => {
  const [play] = useSound(fanfara);
  useEffect(play);

  return (
    <>
      <div className="shade-finish">
        <SnowFalling />
        <div className="popup-finish">
          <div className="nadpis-finish">
            <div className="shimmer">Gratulace! Gratulation!</div>
            <main>
              <div className="center">
                <figure>
                  <img src={pohar} alt="pohar" />
                  <figcaption>
                    Autor obrázku: macrovector, web: freepik.com
                  </figcaption>
                </figure>
                <p className="gratulace">
                  {' '}
                  To byl úžasný sjezd! <br />
                  Das war eine tolle Abfahrt!
                </p>
                <button
                  className="bublina-final"
                  onClick={() => setState(setStarted(state, false))}
                >
                  NOVÁ HRA
                </button>
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
};
