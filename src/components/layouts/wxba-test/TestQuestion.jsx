import React, { useState, useEffect } from 'react';
import './style.css'
import { isAuth, setLocalStorage } from '../../../helper/Auth';
import axios from 'axios';

export default function TestQuestion() {
  const questions = [
    {
      questionText: 'What is a crowdsourced pool of cryptocurrencies or tokens locked in a smart contract that is used to facilitate trades between the assets on a decentralized exchange?',
      answerOptions: [
        { answerText: 'Spillage', isCorrect: false },
        { answerText: 'Liquidity Pool ', isCorrect: true },
        { answerText: 'Yield Farming', isCorrect: false },
        { answerText: 'Automated Market Maker', isCorrect: false },
      ],
    },
    {
      questionText: 'What is Tokenomics?',
      answerOptions: [
        { answerText: 'Token economy of a project', isCorrect: true },
        { answerText: `The information of a token’s utility`, isCorrect: false },
        { answerText: `The view of a token’s dominance`, isCorrect: false },
      ],
    },
    {
      questionText: 'What are inflationary tokens?',
      answerOptions: [
        { answerText: 'Tokens that increases their supply', isCorrect: true },
        { answerText: 'Tokens that decrease their supply', isCorrect: false },
        { answerText: 'Tokens that gets affected by deflation', isCorrect: false },
        { answerText: 'Tokens that are affected by economy', isCorrect: false },
      ],
    },
    {
      questionText: 'As a Defi enthusiast, which app is important for you as a content writer ?',
      answerOptions: [
        { answerText: 'Twitter , Telegram, Discord', isCorrect: false },
        { answerText: `Discord, Linkedln, Twitter`, isCorrect: false },
        { answerText: `Twitter , Linkedln, Medium`, isCorrect: true },
        { answerText: `Binance , Trustwallet, Metamask`, isCorrect: false },
      ],
    },
    {
      questionText: `What isn’t a reg flag among these ?`,
      answerOptions: [
        { answerText: 'Inactiveness of community', isCorrect: false },
        { answerText: `A doxxed team`, isCorrect: true },
        { answerText: `FUD`, isCorrect: false },
        { answerText: `No VC`, isCorrect: false },
      ],
    },
    {
      questionText: `What does it mean to exist liquidity?`,
      answerOptions: [
        { answerText: 'Investing in honey pot', isCorrect: false },
        { answerText: 'Having a project dump on you', isCorrect: false },
        { answerText: 'Having a project pump on you', isCorrect: false },
        { answerText: 'Buying and taking profit in a rug project', isCorrect: true },
      ],
    },
    {
      questionText: `What is liquidity?`,
      answerOptions: [
        { answerText: 'The project marketcap', isCorrect: false },
        { answerText: 'The fuel enabling the flow of money between digital assets', isCorrect: true },
        { answerText: 'The projects fund', isCorrect: false },
      ],
    },
    {
      questionText: `What effect does 'Weak community' and 'High percentage of holding by the developer' have on a project?`,
      answerOptions: [
        { answerText: 'Rugpull', isCorrect: true },
        { answerText: 'FUD', isCorrect: false },
        { answerText: 'appreciation in the token’s value', isCorrect: false },
        { answerText: ' depreciation in the token’s value', isCorrect: false },
      ],
    },
    {
      questionText: `Which of this isn’t a defi wallet?`,
      answerOptions: [
        { answerText: 'Paypal', isCorrect: true },
        { answerText: 'Metamask', isCorrect: false },
        { answerText: 'Binance', isCorrect: false },
        { answerText: 'Trust Wallet', isCorrect: false },
      ],
    },
    {
      questionText: `Who is the founder of Bitcoin?`,
      answerOptions: [
        { answerText: ' CZ', isCorrect: false },
        { answerText: 'Vitalik Buterin', isCorrect: false },
        { answerText: 'Satoshi Nakamoto', isCorrect: true },
      ],
    },
    {
      questionText: ` What is the meaning of Crypto?`,
      answerOptions: [
        { answerText: 'Ethereum', isCorrect: false },
        { answerText: 'Digital', isCorrect: false },
        { answerText: 'Concealed', isCorrect: true },
      ],
    },
    {
      questionText: `What do one use to swap on Trust Wallet?`,
      answerOptions: [
        { answerText: 'Pancakeswap', isCorrect: true },
        { answerText: 'Dapps', isCorrect: false },
        { answerText: 'Binance', isCorrect: false },
      ]
    },
    {
      questionText: `Which isn’t a Defi features?`,
      answerOptions: [
        { answerText: 'Liquidity farming', isCorrect: false },
        { answerText: 'Staking', isCorrect: false },
        { answerText: 'Centralized Exchange', isCorrect: true },
        { answerText: 'Automated Market Maker', isCorrect: false },
      ]
    },
    {
      questionText: `The airdrop which workxie billionaire did for its genesis holders is?`,
      answerOptions: [
        { answerText: 'Standard airdrop', isCorrect: false },
        { answerText: 'Holders airdrop', isCorrect: true },
        { answerText: 'Raffle airdrop', isCorrect: false },
        { answerText: 'Bounty airdrop', isCorrect: false },
      ]
    },
    {
      questionText: `What is the meaning of DYOR?`,
      answerOptions: [
        { answerText: ' do your research', isCorrect: false },
        { answerText: 'do your own research', isCorrect: true },
        { answerText: 'doxxed team', isCorrect: false },
      ]
    },
    {
      questionText: `When was Bitcoin invented?`,
      answerOptions: [
        { answerText: ' 2008', isCorrect: false },
        { answerText: '2009', isCorrect: true },
        { answerText: '1999', isCorrect: false },
        { answerText: ' 2010', isCorrect: false },
      ]
    },
    {
      questionText: `The following are forms of crypto except`,
      answerOptions: [
        { answerText: 'Altcoins', isCorrect: false },
        { answerText: 'Standard coins', isCorrect: false },
        { answerText: 'Bitcoin and Defi', isCorrect: true },
      ]
    },
    {
      questionText: `Which isn’t a popular cryptocurrency?`,
      answerOptions: [
        { answerText: 'Litecoin', isCorrect: false },
        { answerText: 'Bitcoin', isCorrect: false },
        { answerText: 'Ethereum', isCorrect: false },
        { answerText: 'Shiba inu', isCorrect: true },
      ]
    },
    {
      questionText: `When cryptocurrency is in profit what does it mean?`,
      answerOptions: [
        { answerText: 'Bearish season', isCorrect: false },
        { answerText: 'Bullish season', isCorrect: true },
        { answerText: 'All time high', isCorrect: false },
        { answerText: 'All time low', isCorrect: false },
      ]
    },
    {
      questionText: `What are the types of crypto wallets?`,
      answerOptions: [
        { answerText: 'Cold wallet , Warm wallet', isCorrect: false },
        { answerText: 'Cold wallet , Hot wallet', isCorrect: true },
        { answerText: 'Trust Wallet , Metamask', isCorrect: false },
      ]
    },
  ];
  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [start, setStart] = useState(false)
  const [hoursMinSecs, setHoursMinSecs] = useState({ hours: 0, minutes: 10, seconds: 7 })
  const auth = isAuth()?.isTestCompleted
  const scoreTest = isAuth()?.testScoreB

  const isTestCompleted = "true";
  const testScoreB = score;

  const { hours = 0, minutes = 0, seconds = 0 } = hoursMinSecs;
  const [[hrs, mins, secs], setTime] = useState([hours, minutes, seconds]);
  const date = new Date();
  const dateCompletedB = date.toLocaleDateString()

  const postData = {
    testScoreB,
    isTestCompleted,
    dateCompletedB
  }

    if (showScore === true) {
        postData._id = isAuth()?._id;
        axios
          .put(`https://5000-imamabubaka-wxbaquizser-kt1qah62bvm.ws-eu78.gitpod.io/api/user/update`, postData)
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