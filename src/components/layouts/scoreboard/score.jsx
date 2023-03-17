import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { isAuth } from '../../../helper/Auth'

const Score = () => {
  const [data, setData] = useState(null)
  const auth1 = isAuth?.isForexTestCompleted
  const auth2 = isAuth?.isWeb3TestCompleted


  useEffect(() => {
    axios
      .get(`https://wxba-quiz-server.vercel.app/api/all-users`)
      .then((res) => {
        setData(res.data)
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err)
      });
  }, [])

  return (
    <section className="tf-section login-page register-page">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="form-create-item-content">
              <div className="form-create-item">
                <div className="sc-heading">
                  <h3>WXBA Test Scoreboard</h3>
                </div>
                {auth1 === "false" || auth2 === "false" ?
                  <div className='h5'>
                    Make sure to complete the test to be able to view the scoreboard
                  </div>
                  :
                  <>
                    {
                      data !== null
                        ?
                        <>
                          {data?.map((user) => {
                            return (

                              <div className='text-align-left'>
                                <hr />
                                <h5><b>Address:</b> {user.address.slice(0, 10)}...{user.address.slice(35)}</h5>
                                <h5><b>Prev. Web3 Test Score ({user?.dateCompleted || "Not Taken"}): </b> {user?.testScore
                                  == undefined ? 'No result yet' : `${user.testScore
                                  }/30`}</h5>
                                <h5><b>New Web3 Test Score ({user?.dateCompletedWeb3 || "Not Taken"}): </b> {user?.web3Assessment
                                  == undefined ? 'No result yet' : `${user.web3Assessment
                                  }/30`}</h5>
                                <h5><b>Forex Test Score ({user?.dateCompletedForex || "Not Taken"}): </b> {user?.forexAssessment
                                  == undefined ? 'No result yet' : `${user.forexAssessment
                                  }/15`}</h5>
                              </div>
                            )
                          })}
                        </>
                        :
                        <div className='text-center'>Loading Data...</div>
                    }
                  </>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Score