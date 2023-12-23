import React, { useEffect, useState } from "react";
import logo from "../assets/logo.svg";

function FooterTop({ data, isSmallScreen }) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showContainer, setShowContainer] = useState(false);
  console.log(isSmallScreen);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setScrollPosition(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!isSmallScreen && scrollPosition >= 3450) {
      setShowContainer(true);
    } else if (!data && scrollPosition >= 2800) {
      setShowContainer(true);
    } else if (isSmallScreen && scrollPosition >= 5850) {
      setShowContainer(true);
    } else {
      setShowContainer(false);
    }
  }, [scrollPosition]);

  return (
    <div className="background-wrapper">
      <div
        style={{
          opacity: showContainer && "1",
          transform: showContainer && "translateY(0)",
        }}
        className="footer-top-container"
      >
        <div className="contact-info-container">
          <div className="logo-footer-wrapper">
            <img className="logo-footer-img" src={logo} />
            <h1 className="website-name">Evobit</h1>
          </div>
          <div className="contact-info">
            <h2>Let's talk! 🤙</h2>
            <p>+12 345 678 9101</p>
            <p>hello.evobit@gmail.com</p>
            <p>
              Cecilia Chapman 711-2880 Nulla St. Mankato <br /> Mississippi
              96522
            </p>
          </div>
        </div>
        <ul>
          <li>
            <h3>PRODUCTS</h3>
          </li>
          <li>Spot</li>
          <li>Inverse Perpetual</li>
          <li>USDT Perpetual</li>
          <li>Exchange</li>
          <li>Launchpad</li>
          <li>Binance Pay</li>
        </ul>

        <ul>
          <li>
            <h3>SERVICES</h3>
          </li>
          <li>Buy Crypto</li>
          <li>Markets</li>
          <li>Tranding Fee</li>
          <li>Affiliate Program</li>
          <li>Referral Program</li>
          <li>API</li>
        </ul>

        <ul>
          <li>
            <h3>SUPPORT</h3>
          </li>
          <li>Bybit Learn</li>
          <li>Help Center</li>
          <li>User Feedback</li>
          <li>Submit a request</li>
          <li>API Documentation</li>
          <li>Trading Rules</li>
        </ul>

        <ul>
          <li>
            <h3>ABOUT US</h3>
          </li>
          <li>About Bybit</li>
          <li>Authenticity Check</li>
          <li>Careers</li>
          <li>Business Contacts</li>
          <li>Blog</li>
        </ul>
      </div>
    </div>
  );
}

export default FooterTop;
