import axios from 'axios'
import React, {useEffect, useState} from 'react'

const Score = () => {
  const [data, setData] = useState(null)
  console.log(data)

  useEffect(() => {
    axios 
    .get(`https://5000-imamabubaka-wxbaquizser-1vf7zqmyxta.ws-eu75.gitpod.io/api/all-users`)
    .then((res) => {
      setData(res.data)
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
             
              {
                data !== null
                ?
                <>
                  {data?.map((user) => {
                    return(
                      
                      <div className='text-center'>
                         <hr />
                      <h5><b>Address:</b> {user.address}</h5>
                      <h5><b>Test Score:</b> {user.testScore}</h5>
                      <h5><b>Date Taken:</b> {user.dateCompleted}</h5>
                    </div>
                    )
                  })}
                </>
                :
                <div className='text-center'>Loading Data...</div>
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