import React, { useState } from "react";
import { isColisionAlert, isFinishAlert, addAskedQuestion } from "../state";
import { questions } from "../questions.js";
import { Snowman } from "../Snowman/Snowman.jsx";
import "./style.css";

const getRandomUnaskedQuestionId = (askedQuestions) => {
  let found;
  for (let i = 0; i < 10; i++) {
    const questionIndex = Math.round(Math.random() * (questions.length - 1));
    if (i === 9 || !askedQuestions.includes(questionIndex)) {
      found = questionIndex;
      break;
    }
  }
  return found;
};

export const Quiz = ({ state, setState, onTurn }) => {
  const [questionId] = useState(
    getRandomUnaskedQuestionId(state.askedQuestions)
  );
  const question = questions[questionId];
  const [answerId, setAnswerId] = useState(null); // id of selected answer
  const answer = answerId !== null ? question.answers[answerId] : null;

  const setAnswerAndRecord = (id) => {
    if (question.answers[id].value) {
      setState(addAskedQuestion(state, questionId));
    }
    setAnswerId(id);
  };

  let label, action;

  if (isColisionAlert(state)) {
    label = <span className="alert"> Pozor, hrozí kolize! </span>;
  } else if (isFinishAlert(state)) {
    label = <span className="alert"> Připrav se na výhru! </span>;
  } else {
    label = "";
  }

  if (answer && answer.value && isColisionAlert(state)) {
    action = "Vyhoď soupeře!";
  } else if (answer && answer.value && isFinishAlert(state)) {
    action = "Pojď do cíle!";
  } else if (answer && answer.value) {
    action = "Odraž se a jeď!";
  } else {
    action = "Nech hrát soupeře!";
  }

  return (
    <div className="shade">
      <div className={`popup turn-${state.player}`}>
        <h2 className={`quiz-h2 on-turn-${state.player}`}>Kvíz</h2>
        <div className="quiz-comment">
          {" "}
          Padla ti {state.dice}. Chceš frčet dál? {label} Odpověz správně:
        </div>
        <div className="quiz-question">{question.text}</div>
        {question.answers.map((currentAnswer, i) => (
          <div
            key={i}
            onClick={() => (answer ? null : setAnswerAndRecord(i))}
            className={`answer ${i === answerId ? "selected" : ""}`}
          >
            <Snowman
              className={`snowmanQuiz ${
                answer ? (currentAnswer.value ? "right" : "wrong") : ""
              }`}
            />
            <div>{currentAnswer.text}</div>
          </div>
        ))}
        <div className="quiz-evaluated">
          {answer
            ? answer.value
              ? "Správná odpověď. Gratulujeme!"
              : "Špatná odpověď. Zkus to příště!"
            : "Klikni na odpověď"}
        </div>
        {answer ? (
          <>
            <button className="quiz-btn" onClick={() => onTurn(answer.value)}>
              {action}
            </button>
          </>
        ) : null}
      </div>
    </div>
  );
};
