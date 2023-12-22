import React, { useState } from "react";
import logo from "../assets/logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";

function Header({ scrollToPosition }) {
  const [selectedItem, setSelectedItem] = useState("home");
  const [showHeaderLinks, setShowHeaderLinks] = useState(false);

  const handleSelectedItem = (value) => {
    setSelectedItem(value);
    setShowHeaderLinks(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-list-items-wrapper">
          <div onClick={() => scrollToPosition(0)} className="logo-wrapper">
            <img className="logo-img" src={logo} />
            <h2 className="logo">Evobit</h2>
          </div>
          <nav className="menu-wrapper">
            <ul
              style={{
                visibility: showHeaderLinks && "visible",
                left: showHeaderLinks && "0px",
              }}
              className="header-links"
            >
              <a onClick={() => scrollToPosition(0)}>
                <li
                  onClick={() => handleSelectedItem("home")}
                  style={{
                    backgroundColor:
                      selectedItem === "home" && "hsl(222, 100%, 61%)",
                  }}
                >
                  Home
                </li>
              </a>

              <a
                onClick={(e) => {
                  e.preventDefault();
                  const targetElement = document.getElementById(
                    "whole-market-container"
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

                    handleSelectedItem("market");
                  }
                }}
                href="#whole-market-container"
              >
                <li
                  onClick={() => handleSelectedItem("market")}
                  style={{
                    backgroundColor:
                      selectedItem === "market" && "hsl(222, 100%, 61%)",
                  }}
                >
                  Market
                </li>
              </a>

              <a
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

                    handleSelectedItem("how it works");
                  }
                }}
                href="#how-it-works-container"
              >
                <li
                  onClick={() => handleSelectedItem("how it works")}
                  style={{
                    backgroundColor:
                      selectedItem === "how it works" && "hsl(222, 100%, 61%)",
                  }}
                >
                  How it Works
                </li>
              </a>

              <a
                onClick={(e) => {
                  e.preventDefault();
                  const targetElement =
                    document.getElementById("what-is-evobit");
                  if (targetElement) {
                    const containerOffset =
                      document.querySelector(".container").offsetTop;

                    const targetScrollPosition =
                      targetElement.offsetTop - containerOffset;

                    window.scrollTo({
                      top: targetScrollPosition,
                      behavior: "smooth",
                    });

                    handleSelectedItem("what is evobit");
                  }
                }}
                href="#what-is-evobit"
              >
                <li
                  onClick={() => handleSelectedItem("what is evobit")}
                  style={{
                    backgroundColor:
                      selectedItem === "what is evobit" &&
                      "hsl(222, 100%, 61%)",
                  }}
                >
                  What is Evobit?
                </li>
              </a>
            </ul>
          </nav>
        </div>
        <div className="wallet-hamburger-wrapper">
          <GiHamburgerMenu
            onClick={(e) => {
              e.preventDefault();
              setShowHeaderLinks(!showHeaderLinks);
            }}
            className="hamburger-icon"
          />
          <button className="wallet-btn">Wallet</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
