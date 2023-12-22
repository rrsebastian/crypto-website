import React from "react";
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
import WhatIsCryptex from "./Components/WhatIsCryptex";
import "./styles/WhatIsCryptex.css";
import MobileAppSection from "./Components/MobileAppSection";
import "./styles/MobileAppSection.css";
import Footer from "./Components/Footer";
import "./styles/Footer.css";

function App() {
  const scrollToPosition = (position) => {
    window.scrollTo({
      top: position,
      behavior: "smooth",
    });
  };

  return (
    <div className="container">
      <Header scrollToPosition={scrollToPosition} />
      <Hero scrollToPosition={scrollToPosition} />
      <CoinMarket />
      <HowItWorks />
      <WhatIsCryptex />
      <MobileAppSection />
      <Footer />
    </div>
  );
}

export default App;
