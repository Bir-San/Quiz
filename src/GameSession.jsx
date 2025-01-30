import { useEffect } from "react"
import React, { useState } from "react";
import QuestionDisplay from "./QuestionDisplay";
import Button from "./Button"

const quizAdress = "/questions.json";

function GameSession() {

    const [questions, setQuestions] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [loading, setLoading] = useState(true);

    const updateScore = () => {
        setScore(score + 1);
    }

    const updateQuestion = () => {
        setCurrentQuestion(currentQuestion + 1)
    }

    const reset = () => {
        setScore(0)
        setCurrentQuestion(0)
    }

    useEffect (() => {
        fetch(quizAdress)
        .then(response => response.json())
        .then(data => setQuestions(data))
        setLoading(false);
        
    }, [])

    if(loading)
        {
            <div>
                return (<h1>{loading}</h1>)
            </div>
        } 

        if(currentQuestion === questions.length)
        {
            return (
                <div className="wrapper">
                <h1>{score < 3 ? "Better luck next time" : "CONGRATULATIONS!" }</h1>
                <h2>Your score:</h2>
                <h1 className="score">{score}</h1>
                <Button value="Again?" onClick={reset}></Button>
                </div>
            )
        }
        return ( 
        <div className="wrapper">
            <QuestionDisplay currQuestion={questions[currentQuestion]} updateScore={updateScore} updateQuestion={updateQuestion} />
        </div>
    )
}

        
export default GameSession