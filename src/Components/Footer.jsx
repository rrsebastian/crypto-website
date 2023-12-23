import React from "react";
import FooterTop from "./FooterTop";
import FooterBottom from "./FooterBottom";

function Footer({ isSmallScreen, data }) {
  return (
    <>
      <FooterTop isSmallScreen={isSmallScreen} data={data} />
      <FooterBottom />
    </>
  );
}

export default Footer;
