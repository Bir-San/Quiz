import React, { useState, useEffect } from "react";
import Button from "./Button.jsx";

function QuestionDisplay({ currQuestion, updateScore, updateQuestion }) {
  const [play, setPlay] = useState(false);
  const [delay, setDelay] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const answerCheck = (chosenAnswer) => {
    if (chosenAnswer.innerText === currQuestion.answer) {
      chosenAnswer.style.backgroundColor = "#1F4A22";
      updateScore();
    } else {
      chosenAnswer.style.backgroundColor = "#4E1716";
    }
    setTimeout(() => {
      chosenAnswer.style.backgroundColor = "#1a1a1a";
      updateQuestion();

      setDelay(false);
      setDisabled(false);
    }, 1200);
  };

  const handleClick = (event) => {
    setDisabled(true);
    if (!delay) {
      setDelay(true);
      answerCheck(event.target);
      event.target.blur();
    }
  };

  const startPlay = () => {
    setPlay(true);
  };

  useEffect;

  if (play) {
    return (
      <>
        <h2>{currQuestion.quizQuestion}</h2>
        <ul>
          {currQuestion.alternatives.map((alts, idx) => (
            <li key={idx}>
              <Button
                value={alts}
                onClick={handleClick}
                disabled={disabled}
                style={
                  alts === currQuestion.answer && disabled
                    ? { backgroundColor: "#1F4A22" }
                    : { backgroundColor: "#1a1a1a" }
                }
              >
                {" "}
              </Button>
            </li>
          ))}
        </ul>
      </>
    );
  }

  if (!play) {
    return (
      <>
        <h1>QUIZ APP or Fuck Duolingo 🐦</h1>
        <Button value="Click To Play" onClick={startPlay}></Button>
      </>
    );
  }
}

export default QuestionDisplay;
