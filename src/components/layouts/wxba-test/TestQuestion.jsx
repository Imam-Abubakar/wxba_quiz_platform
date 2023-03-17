import React, { useState, useEffect } from 'react';
import './style.css'
import { isAuth, setLocalStorage } from '../../../helper/Auth';
import axios from 'axios';

export default function TestQuestion() {
  const questions = [
    {
      questionText: 'What is a decentralized network?',
      answerOptions: [
        { answerText: 'A network that is controlled by a central authority', isCorrect: false },
        { answerText: 'A network that is controlled by multiple authorities ', isCorrect: false },
        { answerText: 'A network that is controlled by a single user', isCorrect: false },
        { answerText: 'A network that is not controlled by any central authority', isCorrect: true },
      ],
    },
    {
      questionText: 'What is the promise of web3?',
      answerOptions: [
        { answerText: 'To provide a more secure and private internet', isCorrect: true },
        { answerText: `To provide a more centralized internet`, isCorrect: false },
        { answerText: `To provide a faster internet connection`, isCorrect: false },
        { answerText: `To provide a cheaper internet connection`, isCorrect: false },
      ],
    },
    {
      questionText: '. What is blockchain?',
      answerOptions: [
        { answerText: 'A type of cryptocurrency', isCorrect: false },
        { answerText: 'A type of decentralized network', isCorrect: false },
        { answerText: 'A type of centralized network', isCorrect: false },
        { answerText: 'A type of database', isCorrect: true },
      ],
    },
    {
      questionText: 'How does blockchain work?',
      answerOptions: [
        { answerText: 'By using a central authority to verify transactions', isCorrect: false },
        { answerText: `By using multiple authorities to verify transactions`, isCorrect: false },
        { answerText: `By using a peer-to-peer network to verify transactions`, isCorrect: true },
        { answerText: `By using a decentralized network to verify transactions`, isCorrect: false },
      ],
    },
    {
      questionText: `What are the five layers of blockchain?`,
      answerOptions: [
        { answerText: 'Protocol, Network, Application, Data, Consensus', isCorrect: false },
        { answerText: `Protocol, Data, Network, Consensus, Application`, isCorrect: true },
        { answerText: `Network, Protocol, Consensus, Data, Application`, isCorrect: false },
        { answerText: `Consensus, Data, Application, Protocol, Network`, isCorrect: false },
      ],
    },
    {
      questionText: `What are blockchain nodes?`,
      answerOptions: [
        { answerText: 'The physical location of a blockchain', isCorrect: false },
        { answerText: 'The users that participate in the blockchain network', isCorrect: false },
        { answerText: 'The servers that host the blockchain network', isCorrect: false },
        { answerText: 'The software that runs the blockchain network', isCorrect: true },
      ],
    },
    {
      questionText: `What is the difference between a public and private blockchain?`,
      answerOptions: [
        { answerText: 'Public blockchains are more secure than private blockchains', isCorrect: false },
        { answerText: 'Public blockchains are open to anyone, while private blockchains are only accessible to specific users or groups', isCorrect: true },
        { answerText: 'Private blockchains are more transparent than public blockchains', isCorrect: false },
        { answerText: 'Private blockchains are more decentralized than public blockchains', isCorrect: false },
      ],
    },
    {
      questionText: `What is the scalability trilemma?`,
      answerOptions: [
        { answerText: 'The trade-off between security, decentralization, and speed in blockchain networks', isCorrect: true },
        { answerText: 'The trade-off between data storage, network bandwidth, and user activity in blockchain networks', isCorrect: false },
        { answerText: 'The trade-off between data privacy, user identity, and network latency in blockchain networks', isCorrect: false },
        { answerText: 'The trade-off between transaction fees, network security, and user accessibility in blockchain networks', isCorrect: false },
      ],
    },
    {
      questionText: ` Which of the following is NOT a layer of the blockchain?`,
      answerOptions: [
        { answerText: 'Consensus', isCorrect: false },
        { answerText: 'Data', isCorrect: false },
        { answerText: 'Application', isCorrect: false },
        { answerText: 'Node', isCorrect: true },
      ],
    },
    {
      questionText: `Which of the following is a benefit of using blockchain technology?`,
      answerOptions: [
        { answerText: 'Increased centralization', isCorrect: false },
        { answerText: ' Decreased security', isCorrect: false },
        { answerText: 'Increased transparency', isCorrect: true },
        { answerText: 'Decreased efficiency', isCorrect: false },
      ],
    },
    {
      questionText: `Which consensus mechanism is used by the Ethereum blockchain?`,
      answerOptions: [
        { answerText: 'Proof of Work', isCorrect: false },
        { answerText: 'Proof of Authority', isCorrect: false },
        { answerText: 'Proof of Stake', isCorrect: true },
        { answerText: 'Delegated Proof of Stake', isCorrect: false },
      ],
    },
    {
      questionText: `What is a smart contract?`,
      answerOptions: [
        { answerText: 'A legal contract that is stored on the blockchain', isCorrect: false },
        { answerText: 'An executable program that is stored on the blockchain', isCorrect: true },
        { answerText: 'A type of cryptocurrency wallet', isCorrect: false },
        { answerText: 'A type of decentralized database', isCorrect: false },
      ]
    },
    {
      questionText: ` What is a DAO?`,
      answerOptions: [
        { answerText: 'A type of cryptocurrency', isCorrect: false },
        { answerText: 'A type of decentralized autonomous organization', isCorrect: true },
        { answerText: 'A type of smart contract', isCorrect: false },
        { answerText: 'A type of decentralized network', isCorrect: false },
      ]
    },
    {
      questionText: `What is a non-fungible token (NFT)?`,
      answerOptions: [
        { answerText: ' A type of cryptocurrency that is not divisible', isCorrect: false },
        { answerText: ' A type of smart contract that is not transferable', isCorrect: false },
        { answerText: 'A type of digital asset that is unique and not interchangeable', isCorrect: true },
        { answerText: ' A type of decentralized database that is immutable', isCorrect: false },
      ]
    },
    {
      questionText: `What is the difference between a hard fork and a soft fork?`,
      answerOptions: [
        { answerText: 'A hard fork is a major change to the blockchain protocol, while a soft fork is a minor change', isCorrect: true },
        { answerText: 'A hard fork is a minor change to the blockchain protocol, while a soft fork is a major change', isCorrect: false },
        { answerText: 'A hard fork is a change that is backward compatible, while a soft fork is a change that is not backward compatible', isCorrect: false },
        { answerText: ' A hard fork is a change that is not backward compatible, while a soft fork is a change that is backward compatible', isCorrect: false },
      ]
    },
    {
      questionText: `What is a zero-knowledge proof?`,
      answerOptions: [
        { answerText: 'A type of cryptographic algorithm', isCorrect: false },
        { answerText: ' A type of smart contract', isCorrect: false },
        { answerText: 'A type of consensus mechanism', isCorrect: false },
        { answerText: 'A method of proving the authenticity of a transaction without revealing any information about it', isCorrect: true },
      ]
    },
    {
      questionText: `Which of the following is NOT a disadvantage of using blockchain technology?`,
      answerOptions: [
        { answerText: 'Limited scalability', isCorrect: false },
        { answerText: 'High energy consumption', isCorrect: false },
        { answerText: 'Limited privacy', isCorrect: false },
        { answerText: 'High transaction fees', isCorrect: false },
      ]
    },
    {
      questionText: `What is the purpose of a Merkle tree in a blockchain?`,
      answerOptions: [
        { answerText: 'To reduce the size of the blockchain', isCorrect: false },
        { answerText: 'To increase the speed of transactions', isCorrect: false },
        { answerText: 'To increase the security of the blockchain', isCorrect: true },
        { answerText: 'To reduce the complexity of the blockchain', isCorrect: false },
      ]
    },
    {
      questionText: `Which of the following is a benefit of using a private blockchain?`,
      answerOptions: [
        { answerText: 'Increased transparency', isCorrect: false },
        { answerText: 'Lower transaction fees', isCorrect: false },
        { answerText: 'More efficient consensus mechanism', isCorrect: false },
        { answerText: 'Greater control over who can participate in the network', isCorrect: true },
      ]
    },
    {
      questionText: `What is a sidechain?`,
      answerOptions: [
        { answerText: 'A separate blockchain that is connected to the main blockchain', isCorrect: true },
        { answerText: 'A type of consensus mechanism', isCorrect: false },
        { answerText: 'A type of smart contract', isCorrect: false },
        { answerText: 'A type of data structure used in blockchain technology', isCorrect: false },
      ]
    },
    {
      questionText: `What is a cryptocurrency wallet?`,
      answerOptions: [
        { answerText: 'A physical wallet that holds cryptocurrencies', isCorrect: false },
        { answerText: 'A software program that stores public and private keys', isCorrect: true },
        { answerText: 'A type of blockchain node', isCorrect: false },
        { answerText: 'A smart contract that enables cryptocurrency transactions', isCorrect: false },
      ]
    },
    {
      questionText: `What is a gas fee in Ethereum?`,
      answerOptions: [
        { answerText: 'The amount of Ethereum required to execute a smart contract', isCorrect: true},
        { answerText: 'The amount of computing power required to execute a smart contract', isCorrect: false },
        { answerText: 'The amount of Ether required to mine a block', isCorrect: false },
        { answerText: 'The amount of Ether required to validate a transaction', isCorrect: false },
      ]
    },
    {
      questionText: `What is a 51% attack in blockchain?`,
      answerOptions: [
        { answerText: 'When a majority of nodes in the network collude to manipulate the blockchain', isCorrect: false },
        { answerText: `When a miner has more than 51% of the network's computing power and can manipulate transactions`, isCorrect: true },
        { answerText: 'When a smart contract executes with a 51% probability of failure', isCorrect: false },
        { answerText: `When a user controls more than 51% of the network's cryptocurrency supply and can manipulate transactions`, isCorrect: false },
      ]
  
    },
    {
      questionText: `What is a soft fork in blockchain?`,
      answerOptions: [
        { answerText: 'A temporary network outage', isCorrect: false },
        { answerText: 'A change to the blockchain protocol that is backward compatible', isCorrect: true },
        { answerText: 'A change to the blockchain protocol that is not backward compatible', isCorrect: false },
        { answerText: 'A type of consensus mechanism', isCorrect: false },
      ]
    },
    {
      questionText: `What is a private key in cryptocurrency?`,
      answerOptions: [
        { answerText: 'A secret code that is used to decrypt a message', isCorrect: false },
        { answerText: 'A secret code that is used to encrypt a message', isCorrect: false },
        { answerText: 'A secret code that is used to sign a transaction', isCorrect: true },
        { answerText: 'A secret code that is used to verify a transaction', isCorrect: false },
      ]
    },
    {
      questionText: `What is a DAO hack?`,
      answerOptions: [
        { answerText: 'When a smart contract is manipulated to transfer funds to an unauthorized user', isCorrect: true },
        { answerText: 'When a smart contract executes with a 50% probability of failure', isCorrect: false },
        { answerText: 'When a user loses their private key and cannot access their cryptocurrency wallet', isCorrect: false },
        { answerText: 'When a miner manipulates a block to include their own transactions', isCorrect: false },
      ]
    },
    {
      questionText: `What is a consensus mechanism in blockchain?`,
      answerOptions: [
        { answerText: 'A method of reaching agreement on the state of the blockchain', isCorrect: true },
        { answerText: 'A method of encrypting transactions on the blockchain', isCorrect: false },
        { answerText: 'A method of verifying transactions on the blockchain', isCorrect: false },
        { answerText: 'A method of adding new blocks to the blockchain', isCorrect: false },
      ]
    },
    {
      questionText: `What is a hard cap in cryptocurrency?`,
      answerOptions: [
        { answerText: 'The maximum amount of cryptocurrency that will ever be produced', isCorrect: true },
        { answerText: 'The maximum amount of cryptocurrency that can be mined in a given period of time', isCorrect: false },
        { answerText: 'The maximum amount of cryptocurrency that can be purchased by an individual user', isCorrect: false },
        { answerText: 'The maximum amount of cryptocurrency that can be transferred in a single transaction', isCorrect: false },
      ]
    },
    {
      questionText: `What is the difference between a token and a coin in cryptocurrency?`,
      answerOptions: [
        { answerText: 'A token is a type of cryptocurrency that is used for payments, while a coin is a type of cryptocurrency that is used for governance', isCorrect: false },
        { answerText: 'A token is a type of cryptocurrency that is built on top of another blockchain, while a coin has its own blockchain', isCorrect: true },
        { answerText: 'A token is a type of cryptocurrency that is used for fundraising, while a coin is a type of cryptocurrency that is used for transactions', isCorrect: false },
        { answerText: 'A token is a type of cryptocurrency that is backed by a physical asset, while a coin is not backed by any physical asset', isCorrect: false },
      ]
    },
    {
      questionText: `What is a hard wallet in cryptocurrency?`,
      answerOptions: [
        { answerText: 'A physical device that stores cryptocurrency private keys offline', isCorrect: true },
        { answerText: 'A physical device that stores cryptocurrency public keys offline', isCorrect: false },
        { answerText: 'A software program that stores cryptocurrency private keys online', isCorrect: false },
        { answerText: 'A software program that stores cryptocurrency public keys online', isCorrect: false },
      ]
    }
  ];
  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [start, setStart] = useState(false)
  const [hoursMinSecs, setHoursMinSecs] = useState({ hours: 0, minutes: 10, seconds: 7 })
  const scoreTest = isAuth()?.web3Assessment

  const isWeb3TestCompleted = "true";
  const web3Assessment = score;

  const { hours = 0, minutes = 0, seconds = 0 } = hoursMinSecs;
  const [[hrs, mins, secs], setTime] = useState([hours, minutes, seconds]);
  const date = new Date();
  const dateCompletedWeb3 = date.toLocaleDateString()

  const postData = {
    web3Assessment,
    isWeb3TestCompleted,
    dateCompletedWeb3,
  }

    if (showScore === true) {
        postData._id = isAuth()?._id;
        axios
          .put(`https://wxba-quiz-server.vercel.app/api/user/update/web3`, postData)
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