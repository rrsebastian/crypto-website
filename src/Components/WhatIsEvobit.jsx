import React, { useEffect, useState } from "react";
import laptopImg from "../assets/about-banner.png";
import { IoMdCheckmarkCircle } from "react-icons/io";

function WhatIsCryptex({ data }) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showWhatIsSection, setShowWhatIsSection] = useState(false);

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
    if (data && scrollPosition >= 2300) {
      setShowWhatIsSection(true);
    } else if (!data && scrollPosition >= 1600) {
      setShowWhatIsSection(true);
    } else {
      setShowWhatIsSection(false);
    }
  }, [scrollPosition]);

  return (
    <div id="what-is-evobit" className="background-wrapper">
      <div
        style={{
          opacity: showWhatIsSection && "1",
          transform: showWhatIsSection && "translateY(0)",
        }}
        className="what-is-container"
      >
        <div>
          <img className="laptop-img" src={laptopImg} />
        </div>
        <div className="what-is-text-wrapper">
          <div>
            <h1 className="section-title">What Is Evobit</h1>
            <p className="top-text">
              Experience a variety of trading on Bitcost. You can use various
              types of coin transactions such as Spot Trade, Futures Trade, P2P,
              Staking, Mining, and margin.
            </p>
          </div>

          <div className="text-container1">
            <div className="title-wrapper">
              <IoMdCheckmarkCircle className="tick-img" />

              <h2>View real-time cryptocurrency prices</h2>
            </div>
            <p>
              Experience a variety of trading on Bitcost. You can use various
              types of coin transactions such as Spot Trade, Futures Trade, P2P,
              Staking, Mining, and margin.
            </p>
          </div>
          <div className="text-container1">
            <div className="title-wrapper">
              <IoMdCheckmarkCircle className="tick-img" />
              <h2>Buy and sell BTC, ETH, XRP, OKB, Etc...</h2>
            </div>

            <p>
              Experience a variety of trading on Bitcost. You can use various
              types of coin transactions such as Spot Trade, Futures Trade, P2P,
              Staking, Mining, and margin.
            </p>
          </div>

          <button
            style={{
              fontSize: "17px",
              marginTop: "50px",
              padding: "16px 30px",
            }}
            className="animated-btn"
          >
            Explore More
          </button>
        </div>
      </div>
    </div>
  );
}

export default WhatIsCryptex;
