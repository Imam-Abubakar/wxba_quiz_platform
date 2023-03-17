import React, { useState, useEffect } from 'react';
import './style.css'
import { isAuth, setLocalStorage } from '../../../helper/Auth';
import axios from 'axios';

export default function TestQuestion() {
  const questions = [
    {
      questionText: 'Support and resistance levels are associated with what type of analysis?',
      answerOptions: [
        { answerText: 'Technical analysis', isCorrect: true },
        { answerText: 'Fundamental analysis', isCorrect: false },
        { answerText: 'Sentimental analysis', isCorrect: false },
      ],
    },
    {
      questionText: 'The market reflects all available market information because all traders have the same access to the same piece of data.',
      answerOptions: [
        { answerText: 'Sometimes', isCorrect: false },
        { answerText: 'True', isCorrect: true },
        { answerText: 'False', isCorrect: false },
      ],
    },
    {
      questionText: 'Which type of analysis looks at economic, social, and political forces that affect the supply and demand of an asset?',
      answerOptions: [
        { answerText: 'Technical analysis', isCorrect: false },
        { answerText: 'Fundamental analysis', isCorrect: true },
        { answerText: 'Sentimental analysis', isCorrect: false },
      ],
    },
    {
      questionText: 'The unit of measurement to express the charge in value between two currencies is called ___',
      answerOptions: [
        { answerText: 'Point of percentage', isCorrect: false },
        { answerText: 'Point in percentage', isCorrect: true },
        { answerText: 'Point on percentage', isCorrect: false },
      ],
    },
    {
      questionText: 'Which type of analysis looks at the historical price movements to determine the current trading condition and potential price movement?',
      answerOptions: [
        { answerText: 'Sentimental analysis', isCorrect: false },
        { answerText: 'Fundamental analysis', isCorrect: false },
        { answerText: 'Technical analysis', isCorrect: true },
      ],
    },
    {
      questionText: 'When a trader believes that the price will go up, he is feeling ',
      answerOptions: [
        { answerText: 'Bullish', isCorrect: true },
        { answerText: 'Piggish', isCorrect: false },
        { answerText: 'Bearish', isCorrect: false },
        
      ],
    },
    {
      questionText: ' is the amount of money you are willing to buy a pair of commodity.',
      answerOptions: [
        { answerText: 'Currency', isCorrect: false },
        { answerText: 'Lot size', isCorrect: true },
        { answerText: 'Pairs', isCorrect: false },
        
      ],
    },
    {
      questionText: 'The largest stock market in the world is ______',
      answerOptions: [
        { answerText: 'United stock exchange', isCorrect: false },
        { answerText: 'New York stock exchange', isCorrect: true },
        { answerText: 'New Zealand stock exchange', isCorrect: false },
        
      ],
    },
    {
      questionText: 'Currency speculators are also known as____',
      answerOptions: [
        { answerText: 'Currency group', isCorrect: false },
        { answerText: 'Currency traders', isCorrect: true },
        { answerText: 'Currency community', isCorrect: false },
        { answerText: 'None of the above', isCorrect: false },
      ],
    },
    {
      questionText: 'There are _____ categories of currency pairs',
      answerOptions: [
        { answerText: 'Eight', isCorrect: false },
        { answerText: 'Three', isCorrect: true },
        { answerText: 'Five', isCorrect: false },
        { answerText: 'Ten', isCorrect: false },
      ],
    },
    {
      questionText: '0.07 lot size falls under what category of the lot sizes',
      answerOptions: [
        { answerText: 'Minilot size', isCorrect: true },
        { answerText: 'Microlot size', isCorrect: false },
        { answerText: 'Standard lot size', isCorrect: false },
        { answerText: 'None of the above', isCorrect: false },
      ],
    },
    {
      questionText: 'Another name for support under technical analysis is called____',
      answerOptions: [
        { answerText: 'Bouncing castle', isCorrect: true },
        { answerText: 'Roof', isCorrect: false },
        { answerText: 'Ceiling', isCorrect: false },
        { answerText: 'None of the above', isCorrect: false },
      ],
    },
    {
      questionText: 'Calculate the lot sizes of $1000',
      answerOptions: [
        { answerText: '0.4', isCorrect: false },
        { answerText: '0.2', isCorrect: true },
        { answerText: '2.0', isCorrect: false },
        { answerText: 'None of the above', isCorrect: false },
      ],
    },
    {
      questionText: "When a candlestick is depreciating it's known as_____",
      answerOptions: [
        { answerText: 'Bearish', isCorrect: true },
        { answerText: 'Bullish', isCorrect: false },
        { answerText: 'Piggish', isCorrect: false },
        { answerText: 'None of the above', isCorrect: false },
      ],
    },
    {
      questionText: '______ is a zone where there is an obvious or significant rebound of price to the downward direction',
      answerOptions: [
        { answerText: 'Support', isCorrect: false },
        { answerText: 'Resistance', isCorrect: true },
        { answerText: 'Market structure', isCorrect: false },
        { answerText: 'None of the above', isCorrect: false },
      ],
    },

  ]

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [start, setStart] = useState(false)
  const [hoursMinSecs, setHoursMinSecs] = useState({ hours: 0, minutes: 10, seconds: 7 })
  const scoreTest = isAuth()?.forexAssessment

  const isForexTestCompleted = "true";
  const forexAssessment = score;

  const { hours = 0, minutes = 0, seconds = 0 } = hoursMinSecs;
  const [[hrs, mins, secs], setTime] = useState([hours, minutes, seconds]);
  const date = new Date();
  const dateCompletedForex = date.toLocaleDateString()

  const postData = {
    forexAssessment,
    isForexTestCompleted,
    dateCompletedForex,
  }

  if (showScore === true) {
    postData._id = isAuth()?._id;
    axios
      .put(`https://wxba-quiz-server.vercel.app/api/user/update/forex`, postData)
      .then((res) => {
        setLocalStorage('user', res.data);
        window.location.reload()
      })
      .catch((err) => {
        console.log(err)
      });
  }

  const tick = () => {
    if (hrs === 0 && mins === 0 && secs === 0) {
      setShowScore(true)
    } else if (mins === 0 && secs === 0) {
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
              {scoreTest !== undefined ?
                <div className="form-create-item">
                  <div className='score-section text-center'>
                    You have successfully completed the test
                    <br />You Scored {scoreTest}/20
                  </div>
                </div>
                :
                <>
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
                </>
              }

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}