import React, { useEffect, useRef } from "react";
import HeroBanner from "../assets/hero-banner.png";

function Hero({ scrollToPosition }) {
  const heroContainerRef = useRef(null);

  useEffect(() => {
    const heroContainer = heroContainerRef.current;

    const handleTransition = () => {
      heroContainer.style.opacity = "1";
      heroContainer.style.transform = "translateY(0)";
    };

    window.addEventListener("load", handleTransition);
    window.addEventListener("scroll", handleTransition);

    return () => {
      window.removeEventListener("load", handleTransition);
      window.removeEventListener("scroll", handleTransition);
    };
  }, []);

  return (
    <div className="hero-container" ref={heroContainerRef}>
      <div className="hero-text-container">
        <h1>
          Buy & Sell Digital Assets In{" "}
          <span className="hero-evobit">Evobit</span>
        </h1>
        <p>
          Coin Evobit is the easiest, safest, and fastest way to buy & sell
          crypto asset exchange.
        </p>
        <div className="transition-wrapper">
          <button
            onClick={(e) => {
              e.preventDefault();
              const targetElement = document.getElementById(
                "how-it-works-container"
              );
              if (targetElement) {
                const containerOffset =
                  document.querySelector(".container").offsetTop;

                const targetScrollPosition =
                  targetElement.offsetTop - containerOffset;

                window.scrollTo({
                  top: targetScrollPosition,
                  behavior: "smooth",
                });
              }
            }}
            style={{ padding: "13px 30px" }}
            className="animated-btn"
          >
            Get started now
          </button>
        </div>
      </div>
      <img className="hero-banner" src={HeroBanner} />
    </div>
  );
}

export default Hero;
