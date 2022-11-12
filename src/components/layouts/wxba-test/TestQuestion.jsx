import React, { useState, useEffect } from 'react';
import './style.css'
import { isAuth, setLocalStorage } from '../../../helper/Auth';
import axios from 'axios';

export default function TestQuestion() {
  const questions = [
    {
      questionText: 'How will Web 3.0 profiles affect the browsing experience for users?',
      answerOptions: [
        { answerText: 'No two people will have the same browsing experience', isCorrect: true },
        { answerText: 'It would not affect the experience at all -- everything happens on the back end', isCorrect: false },
        { answerText: 'Niche Web sites will lose traffic and will eventually fade away, leaving only a few monopolies on the Web', isCorrect: false },
      ],
    },
    {
      questionText: 'If the Web 1.0 experience is like going to a library and the Web 2.0 experience is like talking with a group of friends, what will the Web 3.0 experience be like?',
      answerOptions: [
        { answerText: 'having a personal assistant', isCorrect: false },
        { answerText: 'going to class in a university lecture hall', isCorrect: false },
        { answerText: 'going to a movie theater with every film and television show available to watch any time you like', isCorrect: true },
      ],
    },
    {
      questionText: 'The early internet that only allows people to read from the internet?',
      answerOptions: [
        { answerText: 'Web 1.0', isCorrect: true },
        { answerText: 'Web 2.0', isCorrect: false },
        { answerText: 'Web 3.0', isCorrect: false },
      ],
    },
     {
      questionText: 'This is about user - generated content and the readwriteweb',
      answerOptions: [
        { answerText: 'Web 2.0', isCorrect: false },
        { answerText: 'Web 1.0', isCorrect: false },
        { answerText: 'Web 3.0', isCorrect: true },
      ],
    },
    {
      questionText: 'Which of the following does not belong to the web 1.0?',
      answerOptions: [
        { answerText: 'Sites are static', isCorrect: false },
        { answerText: 'Focused on communities', isCorrect: true },
        { answerText: 'Companies Own or produce the Content', isCorrect: false },
        { answerText: 'Sites are not Interactive', isCorrect: false },
      ],
    },
    {
      questionText: ' which of the following is not an utility of WXBA?',
      answerOptions: [
        { answerText: 'Trading Signals', isCorrect: false },
        { answerText: 'Daily ETH airdrops ', isCorrect: true },
        { answerText: 'Monthly academic assessments', isCorrect: false },
        { answerText: 'Giveaways and occasional giftings', isCorrect: false },
      ],
    },
    {
      questionText: 'How many NFT collection is WXBA?',
      answerOptions: [
        { answerText: '77', isCorrect: false },
        { answerText: '777', isCorrect: true },
        { answerText: '7777', isCorrect: false },
        { answerText: '77.7', isCorrect: false },
      ],
    },
    {
      questionText: 'What does WXBA mean?',
      answerOptions: [
        { answerText: 'Workxiebillionaire Academy', isCorrect: true },
        { answerText: 'Workxiebillionaire Academic', isCorrect: false },
        { answerText: 'Workziebillionaire Academic', isCorrect: false },
        { answerText: 'Workziebillionaire Academy', isCorrect: false },
      ],
    },
    {
      questionText: 'On what blockchain is WXBA?',
      answerOptions: [
        { answerText: 'Ethereum ', isCorrect: true },
        { answerText: 'Solana', isCorrect: false },
        { answerText: 'Etheruem', isCorrect: false },
        { answerText: 'Polygon', isCorrect: false },
      ],
    },
    {
      questionText: 'What’s the mint price for WXBA?',
      answerOptions: [
        { answerText: '0.02ETH', isCorrect: true },
        { answerText: '0.002ETH', isCorrect: false },
        { answerText: '0.2ETH', isCorrect: false },
        { answerText: '2ETH', isCorrect: false },
      ],
    },
    {
      questionText: 'WXB has launched how many NFT collections?',
      answerOptions: [
        { answerText: '2', isCorrect: true },
        { answerText: '1', isCorrect: false },
        { answerText: '3', isCorrect: false },
        { answerText: '4', isCorrect: false },
      ],
    },
    {
      questionText: 'How many phases do we have in WXB roadmap?',
      answerOptions: [
        { answerText: '1', isCorrect: false },
        { answerText: '2', isCorrect: false },
        { answerText: '3', isCorrect: false },
        { answerText: '4', isCorrect: true },
      ],
    },
    {
      questionText: 'What does WXBG mean?',
      answerOptions: [
        { answerText: 'Workxiebillionaire general', isCorrect: false },
        { answerText: 'Workxiebillionaire game', isCorrect: false },
        { answerText: 'Workxiebillionaire god', isCorrect: false },
        { answerText: 'Workxiebillionaire Genesis', isCorrect: true },
      ],
    },
    {
      questionText: 'WXBG is launched on which blockchain?',
      answerOptions: [
        { answerText: 'Bitcoin', isCorrect: false },
        { answerText: 'Aptos', isCorrect: false },
        { answerText: 'Tezos', isCorrect: false },
        { answerText: 'Polygon', isCorrect: true },
      ],
    },
    {
      questionText: '_____ is a project of the people, for the people and by the people?',
      answerOptions: [
        { answerText: 'Democracy', isCorrect: false },
        { answerText: 'Government', isCorrect: false },
        { answerText: 'WXB', isCorrect: true },
        { answerText: 'NFT', isCorrect: false },
      ],
    },
    {
      questionText: 'Which of the following is not a known risk of NFTs?',
      answerOptions: [
        { answerText: 'Carbon emissions ', isCorrect: true },
        { answerText: 'Money laundering', isCorrect: false },
        { answerText: 'Collusion ', isCorrect: false },
        { answerText: 'Scamming', isCorrect: false },
      ],
    },
    {
      questionText: 'What does the acronym NFT stand for?',
      answerOptions: [
        { answerText: 'Non-financial token', isCorrect: false },
        { answerText: 'New fungible token', isCorrect: false },
        { answerText: 'Non-fungible token', isCorrect: true },
        { answerText: 'New financial token', isCorrect: false },
      ],
    },
    {
      questionText: 'What feature unites cryptocurrencies?',
      answerOptions: [
        { answerText: 'They are all illegal', isCorrect: false },
        { answerText: 'They were all invented by the same anonymous person ', isCorrect: false },
        { answerText: 'They are all used by criminals to launder money', isCorrect: false },
        { answerText: 'They are all based on blockchain', isCorrect: true },
      ],
    },
    {
      questionText: ' Which of the following is not a known benefit of an NFT?',
      answerOptions: [
        { answerText: 'They allow the owner the right to reproduce the asset ', isCorrect: true },
        { answerText: 'They allow a securitisation-like process for assets', isCorrect: false },
        { answerText: 'They allow the tracing of ownership and custody of an asset over time', isCorrect: false },
        { answerText: 'They allow owners to better control duplication of work by others', isCorrect: false },
      ],
    },
    {
      questionText: 'When you buy an NFT what do you get in the end?',
      answerOptions: [
        { answerText: 'The ability to sell the NFT', isCorrect: false },
        { answerText: 'The NFT itself', isCorrect: false },
        { answerText: 'The copyright of the original work', isCorrect: true },
        { answerText: 'The ability to reproduce or sell the original work', isCorrect: false },
      ],
    },
   
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [start, setStart] = useState(false)
  const [hoursMinSecs, setHoursMinSecs] = useState({ hours: 0, minutes: 10, seconds: 7 })
  const auth = isAuth()?.isTestCompleted
  const scoreTest = isAuth()?.testScore

  const isTestCompleted = "true";
  const testScore = score;

  const { hours = 0, minutes = 0, seconds = 0 } = hoursMinSecs;
  const [[hrs, mins, secs], setTime] = useState([hours, minutes, seconds]);
  const date = new Date();
  const dateCompleted = date.toLocaleDateString()

  const postData = {
    testScore,
    isTestCompleted,
    dateCompleted
  }

    if (showScore === true) {
        postData._id = isAuth()?._id;
        axios
          .put(`https://wxba-quiz-server.vercel.app/api/user/update`, postData)
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
              {auth !== "false" ?
                <div className="form-create-item">
                  <div className='score-section text-center'>
                    You have successfully completed the test
                    <br/>You Scored {scoreTest}/20
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