import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function MarketUpdate({ data, formatAsPercent, currencyFormat }) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showMarketContainer, setShowMarketContainer] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;
      setScrollPosition(currentPosition);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollPosition >= 400) {
      setShowMarketContainer(true);
    } else {
      setShowMarketContainer(false);
    }
  }, [scrollPosition]);

  return (
    <div
      id="market-update"
      style={{
        opacity: showMarketContainer && 1,
        transform: showMarketContainer && "translateY(0)",
      }}
      className="market-container"
    >
      <h1 className="market-update-h1">Market Update</h1>
      <table className="table">
        <thead>
          <tr className="headers">
            <th>#</th>
            <th className="name">Name</th>
            <th>Last Price</th>
            <th>24h %</th>
            <th>Market Cap</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.slice(0, 8).map((coin, index) => {
              return (
                <tr
                  key={index}
                  style={{ cursor: showMarketContainer && "pointer" }}
                  className="coin-data-container"
                >
                  <td className="position-num">{index + 1}</td>
                  <td>
                    <div className="coin-logo-name-wrapper">
                      <img src={coin.image} />
                      <h2 className="coin-name">
                        {coin.name} <span>{coin.symbol.toUpperCase()}</span>
                      </h2>
                    </div>
                  </td>
                  <td className="current-price">
                    {currencyFormat(coin.current_price)}
                  </td>
                  <td
                    style={{
                      color: coin.price_change_percentage_24h
                        .toString()
                        .includes("-")
                        ? "hsl(0, 64%, 52%)"
                        : "hsl(142, 43%, 54%)",
                    }}
                  >
                    {formatAsPercent(coin.price_change_percentage_24h)}
                  </td>
                  <td className="market-cap">
                    {currencyFormat(coin.market_cap)}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default MarketUpdate;
