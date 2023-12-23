import React, { useEffect, useState } from "react";
import Header from "./Components/Header";
import "./styles/App.css";
import "./styles/Header.css";
import Hero from "./Components/Hero";
import "./styles/Hero.css";
import Market from "./Components/Market";
import "./styles/Top4Coins.css";
import "./styles/MarketUpdate.css";
import HowItWorks from "./Components/HowItWorks";
import "./styles/HowItWorks.css";
import WhatIsEvobit from "./Components/WhatIsEvobit";
import "./styles/WhatIsEvobit.css";
import MobileAppSection from "./Components/MobileAppSection";
import "./styles/MobileAppSection.css";
import Footer from "./Components/Footer";
import "./styles/Footer.css";

function App() {
  const [data, setData] = useState(null);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isError, setIsError] = useState(false);

  const scrollToPosition = (position) => {
    window.scrollTo({
      top: position,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    fetch(
      "/api/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"
    )
      .then((response) => {
        if (!response.ok) {
          setIsError(true);
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return response.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error("Fetch Error:", error);
      });
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const isSmall = window.innerWidth < 800;
      setIsSmallScreen(isSmall);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="container">
      <Header scrollToPosition={scrollToPosition} />
      <Hero scrollToPosition={scrollToPosition} />
      <Market isError={isError} data={data} />
      <HowItWorks isSmallScreen={isSmallScreen} data={data} />
      <WhatIsEvobit isSmallScreen={isSmallScreen} data={data} />
      <MobileAppSection isSmallScreen={isSmallScreen} data={data} />
      <Footer isSmallScreen={isSmallScreen} data={data} />
    </div>
  );
}

export default App;
