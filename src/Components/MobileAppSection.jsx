import React, { useEffect, useState } from "react";
import mobileImg from "../assets/app-banner.png";
import googlePlayImg from "../assets/googleplay.png";
import appStoreImg from "../assets/appstore.png";
import { IoMdCheckmarkCircle } from "react-icons/io";

function MobileAppSection({ data }) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showContainer, setShowContainer] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setScrollPosition(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  useEffect(() => {
    if (data && scrollPosition >= 3000) {
      setShowContainer(true);
    } else if (!data && scrollPosition >= 2300) {
      setShowContainer(true);
    } else {
      setShowContainer(false);
    }
  }, [scrollPosition]);

  return (
    <div
      style={{
        opacity: showContainer && 1,
        transform: showContainer && "translateY(0)",
      }}
      className="mobile-app-container"
    >
      <div className="text-wrapper">
        <div>
          <h1>
            Free Your Money & <br /> Invest With Confident
          </h1>
          <p className="title-text">
            With Crypto Trade, you can be sure your trading skills are matched
          </p>
        </div>
        <div className="text-container">
          <div className="title-wrapper">
            <IoMdCheckmarkCircle className="tick-img" />
            <h2>Buy, Sell, And Trade On The Go</h2>
          </div>
          <p>Manage Your Holdings From Your Mobile Decive</p>
        </div>
        <div className="text-container1">
          <div className="title-wrapper">
            <IoMdCheckmarkCircle className="tick-img" />
            <h2>Take Control Of Your Wealth</h2>
          </div>
          <p>Rest Assured You (And Only You) Have Access To Your Funds</p>
        </div>
        <div className="app-google-store">
          <img className="google-play-img" src={googlePlayImg} />
          <img className="app-store-img" src={appStoreImg} />
        </div>
      </div>
      <div className="app-banner">
        <button className="scan-btn">Scan To Download</button>
        <img className="mobile-img" src={mobileImg} />
      </div>
    </div>
  );
}

export default MobileAppSection;
