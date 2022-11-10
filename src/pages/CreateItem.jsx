import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/header/Header";
import Create from "../components/layouts/creacte-item/Create";
import { Newsletters } from "../components/layouts/home/Newsletters";
import Footer from "../components/footer/Footer";
import { useAddress } from "@thirdweb-dev/react";

const whitelistAddress = [
  "0x4Fb3f65245519B91Ed0cb3DebA025E8eADaC330a",
  "0x7eaB5cF755A5d15DB4bc8B76d0a21A89Ba0fB30a",
  "0xCae5A70E19526B5aB844Cb3e04E4f0EAe4CfcaEe",
  "0x2bCd011F78Ea6362d17E8482db01fA7dCEfFb1Aa",
  "0x1F3354cDf6905F2E33c61b03cdC19711fb1f3968",
  "0x2806CeB5Aa8Fd2A727b7aa5e8860E9E0d1D6056B",
  "0xCb48f2F018E36b7d8cfce25b2f1D44A7A042c443",
  "0xD6419ce50875238bcED5a72663225c36891c58Ec",
  "0x953Fa1A19E51659d59ad0247D436020A13F45aaF",
  "0x31aBDFd780A044b034270862F46853d1e34Dd6aE",
  "0x336876B763Af277D4F63E2554D8Cec978a523e11",
  "0x97F1455b6702C167D087C31213E436Aef6515c93",
  "0x2E2ad229912dE943Fc9cE3E04BC4F38b950c9234",
  "0x06E3033F6D80C195770A1bcc66fd299B076c34Be",
  "0xAE25BefaDF944a40ceaa987b23b001cCe60EAc61",
  "0x1B4f59a2297DB5a17859CEED11F2E8f41d0E9984",
  "0x4F6c91960EdF72e82512649bE2E37BCc095538AC",
  "0x0208cF94EE3e91D2865168F476Bb50F1fb9c19f3",
  "0x8b7Edcca13c98B594a477B671f961cCb484F4cB1",
  "0xcA0fA32A41DAa19F938D61dCE9BDda4B822F3490",
  "0x3897354A27E586BC87Cf3Ba3220A99278A608b56",
  "0xcE6164FB6b0e15AF5f38623f31eA7bb39b8A1354",
  "0xd8cd27d3109dA230D0b189AF15ED04e025a92755",
  "0x62D6dfAD54342C5e3d2b5b2Fb242C78aeDA6d5bE",
  "0xe699D4B8CA8E4a903DFA10b3a12cA4bba0BBD30b",
  "0xeb703E6fC724e0F1FeBb8942b0E6dA4A862A20F6",
  "0x008B910E9dC7f3Ff2BcC65fd972C6DD4EB76Ca17",
  "0x3564CaA4641E0E922811e9474c3aE1f891dFE116",
  "0xa1B8b673590B43eedf9048DD9d505757df05784F",
  "0xC099e3BC855D5f1D5afAbB53Da3CB2950b51e2f9",
  "0xa26A2BfEF40B5860Ff8dC512DdBc58F0C30068d3",
  "0xc2e69Bcd4636EdaFd6A2C4C90f1b9210b4d92314",
  "0x03FF0CA69F53dD4b5b54b58ae3d05cC821AD5933",
  "0x28b5c779275491c270a6Ee2d9D642b542cB1A218",
  "0x59Fc82Af8Fcc890f6c87edB03121054fb61Fa536",
  "0x377b5a0fE48445875e1b0b25Cc711c2b791Cee65",
  "0x521167AA23F20b746c9E9f1c32CeD9f1b4Cc579d",
  "0x91E4c49e30161C5159CF93c0Cd3Ee4c49f5D2094",
  "0xF62Ae59C34C8933DF283CB1bA03c31519E08AEEf",
  "0x767B597A34BD8B5290FbEd5F7dd95C2a82e0Bf4E",
  "0x741a9B72CDd287973899cD9ACbFa0afD03bd5E47",
  "0xcA1a60C5A5a6B1CdE510edbdaa297F71Ec82B516",
];

const CreateItem = () => {
  const address = useAddress();

  const newAddress = whitelistAddress.includes(address);
  console.log(address)
  console.log(newAddress)
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
                  <h2 className="heading">WXBA Mint</h2>
                </div>
                <div className="breadcrumbs">
                  <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>WXBA Mint</li>
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
            {newAddress ?
              <Create />
              : 
              <div>
              <section className="tf-section login-page">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-create-item-content">
                        <div className="form-create-item">
                          <div className="sc-heading">
                            <h3>You are not whitelisted</h3>
                            <p className="desc">
                              Your address is not whitelisted to mint WXBA NFT{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
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
                            You need to connect your ETH wallet to mint WXBA NFT{" "}
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
      <Newsletters />
      <Footer />
    </div>
  );
};

export default CreateItem;
