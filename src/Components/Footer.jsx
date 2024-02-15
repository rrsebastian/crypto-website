import React from "react";
import FooterTop from "./FooterTop";
import FooterBottom from "./FooterBottom";

function Footer({ isSmallScreen, data }) {
  return (
    <footer className="footer-container">
      <FooterTop isSmallScreen={isSmallScreen} data={data} />
      <FooterBottom />
    </footer>
  );
}

export default Footer;
