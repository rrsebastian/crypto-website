import React, { useEffect, useState } from "react";
function Top4Coins({ data, formatAsPercent, currencyFormat }) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showTopFour, setShowTopFour] = useState(false);

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
      setShowTopFour(true);
    } else {
      setShowTopFour(false);
    }
  }, [scrollPosition]);

  return (
    <div
      style={{
        opacity: showTopFour && 1,
        transform: showTopFour && "translateY(0)",
      }}
      className="top-four"
    >
      {data &&
        data.slice(0, 4).map((coin, index) => {
          return (
            <div
              style={{ cursor: showTopFour && "pointer" }}
              className="coin-container"
              key={index}
            >
              <div className="coin-logo-wrapper">
                <img className="coin-img" src={coin.image} />
                <h1 className="top4-coin-name">{coin.name}</h1>
                <p className="coin-symbol">{coin.symbol.toUpperCase()}/USD</p>
              </div>
              <h1 className="current-coin-price">
                {currencyFormat(coin.current_price)}
              </h1>
              <div className="precent-change-wrapper">
                <p className="hrs-change">24 Hour %:</p>
                <p
                  style={{
                    backgroundColor: coin.price_change_percentage_24h
                      .toString()
                      .includes("-")
                      ? "hsl(0, 64%, 52%)"
                      : "green",
                  }}
                  className="precent-change"
                >
                  {formatAsPercent(coin.price_change_percentage_24h)}
                </p>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Top4Coins;
