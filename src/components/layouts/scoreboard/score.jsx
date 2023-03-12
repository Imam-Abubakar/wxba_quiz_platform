import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { isAuth } from '../../../helper/Auth'

const Score = () => {
  const [data, setData] = useState(null)
  const auth = isAuth?.isTestCompleted

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
              {auth === "false" ? 
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
                    return(
                      
                      <div className='text-align-left'>
                         <hr />
                      <h5><b>Address:</b> {user.address.slice(0, 10)}...{user.address.slice(35)}</h5>
                      <h5><b>WXBA Initial Test Score ({user?.dateCompleted || "Not Taken"}): </b>{user.testScore || "Test Not Taken"}</h5>
                      <h5><b>DeFi Assessment Score ({user?.dateCompletedB|| "Not Taken"}):  </b> {user.testScoreB || "Not Completed"}</h5>
                      <h5><b>Blockchain Assessment Score ({user?.dateCompletedC || "Not Taken"}):  </b> {user.testScoreC || "Not Completed"}</h5>
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