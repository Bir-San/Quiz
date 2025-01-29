import { useEffect } from "react"
import React, { useState } from "react";
import QuestionDisplay from "./QuestionDisplay";

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

    useEffect (() => {
        fetch(quizAdress)
        .then(response => response.json())
        .then(data => setQuestions(data))
        setLoading(false);
        
    }, [])

    if(loading)
        {
            return (<h1>{loading}</h1>)
        } 

        if(currentQuestion === questions.length)
        {
            return (
                <>
                <h1>CONGRATULATIONS</h1>
                <h2>Your score: {score}</h2>
                </>
            )
        }
        return ( 
        <>
            <QuestionDisplay currQuestion={questions[currentQuestion]} updateScore={updateScore} updateQuestion={updateQuestion}></QuestionDisplay>
        </>
    )
}

        
export default GameSession