import React, { useRef, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/images/logo/logo_dark.png";
import logo2x from "../../assets/images/logo/logo_dark@2x.png";
import logolight from "../../assets/images/logo/logo.png";
import logolight2x from "../../assets/images/logo/logo@2x.png";
import menus from "../../pages/menu";
import DarkMode from "./DarkMode";
import axios from "axios";
import { authenticate, isAuth } from "../../helper/Auth";

import { ChainId, useChainId, useNetwork, useNetworkMismatch, useAddress, useMetamask } from "@thirdweb-dev/react";

import icon1 from "../../assets/images/icon/connect-wallet.svg";
import icon2 from "../../assets/images/icon/user.png";

const Header = () => {
  const connectWithMetamask = useMetamask();
  const address = useAddress();
  const { pathname } = useLocation();
  const headerRef = useRef(null);
  const [, switchNetwork] = useNetwork(); // Switch to desired chain
  const isMismatched = useNetworkMismatch(); // Detect if user is connected to the wrong network
  const auth = isAuth()?._id;

  const register = () => {
    const formData = { address }
    axios
      .post(`https://wxba-quiz-server.vercel.app/api/register`, formData)
      .then((res) => {
        console.log(res.data)
        login();
      })
      .catch((err) => {
        console.log(err);
      })
  }

  const login = () => {
    const formData = { address }
    axios
      .post(`https://wxba-quiz-server.vercel.app/api/login`, formData)
      .then((res) => {
        authenticate(res);
      })
      .catch((err) => {
        register();
      })
  }

  useEffect(() => {
    if (isMismatched) {
      switchNetwork(ChainId.Mainnet);
    }

    if (!auth) {
      if (address !== undefined) {
        login();
      }
    }

  }, [address]);


  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });
  const isSticky = (e) => {
    const header = document.querySelector(".js-header");
    const scrollTop = window.scrollY;

    scrollTop >= 100
      ? header.classList.add("is-fixed")
      : header.classList.remove("is-fixed");
    scrollTop >= 120
      ? header.classList.add("is-small")
      : header.classList.remove("is-small");
  };

  const menuLeft = useRef(null);
  const btnToggle = useRef(null);

  const menuToggle = () => {
    menuLeft.current.classList.toggle("active");
    btnToggle.current.classList.toggle("active");
  };

  const [activeIndex, setActiveIndex] = useState(null);
  const handleOnClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div>
      <header id="header_main" className="header_1 js-header" ref={headerRef}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div
                className="mobile-button"
                ref={btnToggle}
                onClick={menuToggle}
              >
                <span></span>
              </div>
              <div id="site-header-inner" className="flex">
                <div id="site-logo" className="clearfix">
                  <div id="site-logo-inner">
                    <Link to="/" rel="home" className="main-logo">
                      <img
                        id="logo_header"
                        className="logo-dark"
                        src={logo}
                        srcSet={logo2x}
                        alt="nft-gaming"
                      />
                      <img
                        id="logo_header"
                        className="logo-light"
                        src={logolight}
                        srcSet={logolight2x}
                        alt="nft-gaming"
                      />
                    </Link>
                  </div>
                </div>

                <nav id="main-nav" className="main-nav" ref={menuLeft}>
                  <ul id="menu-primary-menu" className="menu">
                    {menus.map((data, index) => (
                      <li
                        key={index}
                        onClick={() => handleOnClick(index)}
                        className={`menu-item  ${activeIndex === index ? "active" : ""
                          } `}
                      >
                        <a href={data.links}>{data.name}</a>
                      </li>
                    ))}
                    <li>
                      <a
                        href="#"
                      >
                        Test
                      </a>
                      <ul className="sub-menu" >
                        <li className={
                          pathname === '/web3-test'
                            ? "menu-item current-item"
                            : "menu-item"
                        }><Link to='/web3-test'>Web3 Assessment</Link></li>
                        <li className={
                          pathname === '/forex-test'
                            ? "menu-item current-item"
                            : "menu-item"
                        }><Link to='/forex-test'>Forex Assessment</Link></li>
                      </ul>
                    </li>

                    <li><a href="https://workxiebillionaire.xyz">Back to WXB</a></li>

                  </ul>
                </nav>
                <div className="button-connect-wallet">
                  <span className="sc-button wallet  style-2">
                    {address ? (
                      <img src={icon2} alt="icon" />
                    ) : (
                      <img
                        src={icon1}
                        onClick={connectWithMetamask}
                        alt="icon"
                      />
                    )}
                    <span>
                      {address ? (
                        <span>
                          {address.slice(0, 6)}...{address.slice(38)}
                        </span>
                      ) : (
                        <span onClick={connectWithMetamask}>
                          Connect Wallet
                        </span>
                      )}
                    </span>
                  </span>
                </div>

                <DarkMode />
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
