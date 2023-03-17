import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/header/Header";
import TestQuestion from "../components/layouts/wxba-test/TestQuestion";
import Footer from "../components/footer/Footer";
import { useOwnedNFTs, useAddress, useContract } from "@thirdweb-dev/react";



const Web3Test = () => {
  const address = useAddress();
  const { contract: editionDrop } = useContract("0x0c709b96d86227eE41f1120841aa9d2a5C12e55F")
  const { data: balance, isLoading: loadingBalance, error } = useOwnedNFTs(editionDrop, address);
  console.log(balance)

  return (
    <div>
      <Header />

      <section className="fl-page-title">
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="page-title-inner flex">
                <div className="page-title-heading">
                  <h2 className="heading">WXBA Test</h2>
                </div>
                <div className="breadcrumbs">
                  <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>WXBA Test</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <>
        {address ? (
          <>
            {
              loadingBalance ? (
                <div>
                      <section className="tf-section login-page">
                        <div className="container">
                          <div className="row">
                            <div className="col-md-12">
                              <div className="form-create-item-content">
                                <div className="form-create-item">
                                  <div className="sc-heading">
                                    <h3>Loading...</h3>
                                    <p className="desc">
                                      Loading your data from the blockchain...Please wait{" "}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                    </div>
              ) : (
                <>
                  {balance.length == 0 ?
                    <div>
                      <section className="tf-section login-page">
                        <div className="container">
                          <div className="row">
                            <div className="col-md-12">
                              <div className="form-create-item-content">
                                <div className="form-create-item">
                                  <div className="sc-heading">
                                    <h3>You are not a WXBA Student</h3>
                                    <p className="desc">
                                      You need to have WXBA NFT to be eligible to take the test{" "}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                    </div>
                    :
                    <TestQuestion />
                  }
                </>
              )
            }
          </>
        ) : (
          <div>
            <section className="tf-section login-page">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-create-item-content">
                      <div className="form-create-item">
                        <div className="sc-heading">
                          <h3>Connect Your Wallet</h3>
                          <p className="desc">
                            You need to connect your ETH wallet to take the test{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}
      </>
      <Footer />
    </div>
  );
};

export default Web3Test;
