import React, { useState, useEffect } from 'react';
import './style.css'
import { Button } from "react-bootstrap";

export default function TestQuestion() {
  const questions = [
    {
      questionText: 'What is the capital of France?',
      answerOptions: [
        { answerText: 'New York', isCorrect: false },
        { answerText: 'London', isCorrect: false },
        { answerText: 'Paris', isCorrect: true },
        { answerText: 'Dublin', isCorrect: false },
      ],
    },
    {
      questionText: 'Who is CEO of Tesla?',
      answerOptions: [
        { answerText: 'Jeff Bezos', isCorrect: false },
        { answerText: 'Elon Musk', isCorrect: true },
        { answerText: 'Bill Gates', isCorrect: false },
        { answerText: 'Tony Stark', isCorrect: false },
      ],
    },
    {
      questionText: 'The iPhone was created by which company?',
      answerOptions: [
        { answerText: 'Apple', isCorrect: true },
        { answerText: 'Intel', isCorrect: false },
        { answerText: 'Amazon', isCorrect: false },
        { answerText: 'Microsoft', isCorrect: false },
      ],
    },
    {
      questionText: 'How many Harry Potter books are there?',
      answerOptions: [
        { answerText: '1', isCorrect: false },
        { answerText: '4', isCorrect: false },
        { answerText: '6', isCorrect: false },
        { answerText: '7', isCorrect: true },
      ],
    },
    {
      questionText: 'What is the capital of France?',
      answerOptions: [
        { answerText: 'New York', isCorrect: false },
        { answerText: 'London', isCorrect: false },
        { answerText: 'Paris', isCorrect: true },
        { answerText: 'Dublin', isCorrect: false },
      ],
    },
    {
      questionText: 'Who is CEO of Tesla?',
      answerOptions: [
        { answerText: 'Jeff Bezos', isCorrect: false },
        { answerText: 'Elon Musk', isCorrect: true },
        { answerText: 'Bill Gates', isCorrect: false },
        { answerText: 'Tony Stark', isCorrect: false },
      ],
    },
    {
      questionText: 'The iPhone was created by which company?',
      answerOptions: [
        { answerText: 'Apple', isCorrect: true },
        { answerText: 'Intel', isCorrect: false },
        { answerText: 'Amazon', isCorrect: false },
        { answerText: 'Microsoft', isCorrect: false },
      ],
    },
    {
      questionText: 'How many Harry Potter books are there?',
      answerOptions: [
        { answerText: '1', isCorrect: false },
        { answerText: '4', isCorrect: false },
        { answerText: '6', isCorrect: false },
        { answerText: '7', isCorrect: true },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [start, setStart] = useState(false)

  const hoursMinSecs = {hours:0, minutes: 0, seconds: 7}
  const { hours = 0, minutes = 0, seconds = 0 } = hoursMinSecs;
  const [[hrs, mins, secs], setTime] = useState([hours, minutes, seconds]);
  

  const tick = () => {
      if (hrs === 0 && mins === 0 && secs === 0) 
          setShowScore(true)
      else if (mins === 0 && secs === 0) {
          setTime([hrs - 1, 59, 59]);
      } else if (secs === 0) {
          setTime([hrs, mins - 1, 59]);
      } else {
          setTime([hrs, mins, secs - 1]);
      }
  };

  const reset = () => setTime([parseInt(hours), parseInt(minutes), parseInt(seconds)]);
  
  useEffect(() => {
      const timerId = setInterval(() => tick(), 1000);
      return () => clearInterval(timerId);
  });

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const startTest = () => {
    setStart(true)
  }
  return (
    <section className="tf-section login-page register-page">
      <div className="col-md-12">
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="form-create-item-content">
              {start ?
                <>
                {showScore ? (
                  <div className="form-create-item">
                  <div className='score-section text-center'>
                    You scored {score} out of {questions.length}
                  </div>
                  </div>
                ) : (
                  <div className="form-create-item">
                    <div className="sc-heading">
                      <h3><span>Question {currentQuestion + 1}</span>/{questions.length}</h3>
                      <p className="desc">{questions[currentQuestion].questionText}</p>
                      <div className='timer-text'>
          <p className='timer-item'>{`${hrs.toString().padStart(2, '0')}:${mins
          .toString()
          .padStart(2, '0')}:${secs.toString().padStart(2, '0')}`}</p>
      </div>
                    </div>
                    <div className='answer-section'>
                      {questions[currentQuestion].answerOptions.map((answerOption) => (
                        <button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
                      ))}
                    </div>
                  </div>
                )}
                </>
              :
              <div className="form-create-item">
                <div className='score-section text-center'>
                    Click the button below to start
                  </div>
                  <div className='text-center mt-2'>
                  <button className="sc-button style letter style-2 " onClick={startTest}>
                Start Test
              </button>
                  </div>
             
              </div>
              }
              
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}