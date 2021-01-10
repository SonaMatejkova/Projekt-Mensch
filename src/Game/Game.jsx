import React from "react";
import { Plan } from "../Plan/Plan.jsx";
import { Quiz } from "../Quiz/Quiz.jsx";
import { Sidebar } from "../Sidebar/Sidebar.jsx";
import { SidebarFinish } from "../SidebarFinish/SidebarFinish";
import useSound from "use-sound";
import vyhozeni from "./vyhozeni.mp3";
import {
  isOverflowAlert,
  isPlayerInGame,
  isWinner,
  isColisionAlert,
  doTurn,
  setQuiz,
} from "../state";
import "./style.css";

export const Game = ({ state, setState }) => {
  const inGame = isPlayerInGame(state, state.player);
  const [hraj] = useSound(vyhozeni);

  return (
    <>
      <div className="game">
        <Plan state={state} className="plan" />
        {isWinner(state) ? (
          <SidebarFinish state={state} setState={setState} />
        ) : (
          <Sidebar
            state={state}
            setState={setState}
            onTurn={() => {
              if (isColisionAlert(state)) {
                console.log("COLISION");
                hraj(); //pridat zvuk//
              }
              setState(doTurn(state));
            }}
          />
        )}
      </div>
      {inGame &&
      state.dice &&
      state.quiz === null &&
      !isOverflowAlert(state) ? (
        <Quiz
          state={state}
          setState={setState}
          onTurn={(valid) => {
            if (valid && isColisionAlert(state)) {
              hraj(); //pridat zvuk//
            }
            setState(doTurn(setQuiz(state, valid)));
          }}
        />
      ) : null}
    </>
  );
};
