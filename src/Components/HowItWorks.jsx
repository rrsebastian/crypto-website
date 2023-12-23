import React, { useEffect, useState } from "react";
import Step from "./Step";
import connectLine from "../assets/connect-line.png";
import instruction1 from "../assets/instruction-1.png";
import instruction2 from "../assets/instruction-2.png";
import instruction3 from "../assets/instruction-3.png";
import instruction4 from "../assets/instruction-4.png";

function HowItWorks({ data, isSmallScreen }) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showHowItWorks, setShowHowItWorks] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;
      setScrollPosition(currentScrollPosition);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!isSmallScreen && scrollPosition >= 1700) {
      setShowHowItWorks(true);
    } else if (!data && scrollPosition >= 950) {
      setShowHowItWorks(true);
    } else if (isSmallScreen && scrollPosition >= 2400) {
      setShowHowItWorks(true);
    } else {
      setShowHowItWorks(false);
    }
  }, [scrollPosition]);

  return (
    <div
      id="how-it-works-container"
      style={{
        opacity: showHowItWorks && "1",
        transform: showHowItWorks && "translateY(0)",
      }}
      className="steps-container"
    >
      <h1>How It Works</h1>
      <p className="how-it-works-description">
        Stacks is a production-ready library of stackable content blocks built
        in React Native.
      </p>

      <div className="steps-wrapper">
        <Step img={instruction1} order="Step 1" title="Download" />
        <img className="connect-line1" src={connectLine} />
        <Step img={instruction2} order="Step 2" title="Connect Wallet" />
        <img className="connect-line2" src={connectLine} />
        <Step img={instruction3} order="Step 3" title="Start Trading" />
        <img className="connect-line3" src={connectLine} />
        <Step img={instruction4} order="Step 4" title="Earn Money" />
      </div>
    </div>
  );
}

export default HowItWorks;
