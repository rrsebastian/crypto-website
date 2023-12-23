import React, { useEffect, useRef, useState } from "react";
import Top4Coins from "./Top4Coins";
import coinData from "../data.json";
import MarketUpdate from "./MarketUpdate";

function CoinMarket() {
  const [data, setData] = useState(null);
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

  // useEffect(() => {
  //   setData(coinData);
  // });

  function formatAsPercent(num) {
    return `${parseFloat(num).toFixed(2)}%`;
  }

  function currencyFormat(num) {
    return "$" + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"
        );
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div
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
          formatAsPercent={formatAsPercent}
          currencyFormat={currencyFormat}
        />
      </div>
    </div>
  );
}

export default CoinMarket;
