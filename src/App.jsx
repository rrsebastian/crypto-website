import React, { useEffect, useState } from "react";
import Header from "./Components/Header";
import "./styles/App.css";
import "./styles/Header.css";
import Hero from "./Components/Hero";
import "./styles/Hero.css";
import CoinMarket from "./Components/Market";
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

  const scrollToPosition = (position) => {
    window.scrollTo({
      top: position,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch();
        // "/api/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container">
      <Header scrollToPosition={scrollToPosition} />
      <Hero scrollToPosition={scrollToPosition} />
      <CoinMarket data={data} />
      <HowItWorks data={data} />
      <WhatIsEvobit data={data} />
      <MobileAppSection data={data} />
      <Footer data={data} />
    </div>
  );
}

export default App;
