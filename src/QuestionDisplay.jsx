
import React, { useState } from 'react';
import Button from "./Button.jsx"


function QuestionDisplay({ currQuestion, updateScore, updateQuestion}) {
    
    
    const answerCheck = (chosenAnswer) => {
        if(chosenAnswer === currQuestion.answer) {
            updateScore()
        }
    }

    const handleClick = (event) => {
        answerCheck(event.target.innerText)
        updateQuestion()

      }
    
    
    
    
    if(currQuestion == null)
    return ( 
        <h1>CONGRATULATIONS</h1>
     );

     return (
        <>
        <h2>
            {currQuestion.quizQuestion}
        </h2>
        <ul>

        {currQuestion.alternatives.map((alts, idx) => (
            <li key={idx}>

            <Button alternative={alts} onClick={handleClick} > </Button>
            </li>
        ))}
        </ul>
        </>
     )

}

export default QuestionDisplay