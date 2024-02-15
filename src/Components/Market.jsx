import React, { useEffect, useRef, useState } from "react";
import Top4Coins from "./Top4Coins";
import MarketUpdate from "./MarketUpdate";

function CoinMarket({ data, isError }) {
  const backgroundWrapperRef = useRef(null);

  useEffect(() => {
    const backgroundWrapper = backgroundWrapperRef.current;

    const handleTransition = () => {
      backgroundWrapper.style.opacity = "1";
      backgroundWrapper.style.transform = "translateY(0)";
    };

    window.addEventListener("load", handleTransition);
    window.addEventListener("scroll", handleTransition);

    return () => {
      window.removeEventListener("load", handleTransition);
      window.removeEventListener("scroll", handleTransition);
    };
  }, []);

  function formatAsPercent(num) {
    return `${parseFloat(num).toFixed(2)}%`;
  }

  function currencyFormat(num) {
    return "$" + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }

  return (
    <section
      id="whole-market-container"
      className="market-background-wrapper"
      ref={backgroundWrapperRef}
    >
      <div className="market-wrapper">
        <Top4Coins
          data={data}
          formatAsPercent={formatAsPercent}
          currencyFormat={currencyFormat}
        />

        <MarketUpdate
          data={data}
          isError={isError}
          formatAsPercent={formatAsPercent}
          currencyFormat={currencyFormat}
        />
      </div>
    </section>
  );
}

export default CoinMarket;
