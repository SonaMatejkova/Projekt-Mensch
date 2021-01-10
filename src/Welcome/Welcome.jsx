import React from 'react';
import { Snowman } from '../Snowman/Snowman';
import { Logo } from './Logo';
import './style.css';

export const Welcome = ({ startGame }) => {
  return (
    <>
      <div className="obrazovka">
        <div className="welcome">
          <div className="div-start">
            <button className="start" onClick={startGame}>
              START!
            </button>
          </div>
          <div className="container-privitani">
            <Snowman className="snowman-uvodni" />
            <div className="privitani rec">
              <h2 className="nadpis-privitani">
                Herzlich willkommen - Srdečně vítej!
              </h2>
              <p>
                Zahraj si, procvič si němčinu, potrap nervy při vyhazování a
                nauč se pár nových slovíček.
              </p>
            </div>
          </div>
          <div className="pravidla speech">
            <h2 className="nadpis-pravidla">Pravidla/Spielregeln:</h2>
            <p>
              Hrají dva lyžaři. Rozdělte si, kdo bude červený a zelený sjezdař.
              Padne-li ti šestka, vyjedeš na sjezdovku. Na každém políčku na
              tebe čeká úkol. Pokud kvíz zodpovíš správně, postoupíš o hozený
              počet políček. Pokud se netrefíš, zůstaneš na svém políčku a na
              tahu bude soupeř. Vyhrává ten, kdo jako první sjede z kopce.
            </p>
          </div>
        </div>
        <footer className="footer">
          <Logo className="logo" />
          <div className="container">
            <p className="paticka">
              CZECHITAS. Hru vytvořily Soňa Matějková a Marta Kirchgessner pod
              vedením mentora Tomáše Randuse během Digitální akademie WEB 2020.
            </p>
            <p className="attribution">
              {' '}
              Lyžař a vločka designované u kolegů na Vecteezy a Visualpharm.
              Hudební efekty ze stránky zapsplat.com a freesound.org.{' '}
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};
