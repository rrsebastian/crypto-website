import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function FooterBottom() {
  return (
    <div className="footer-bottom-container">
      <small>
        © 2023 Evobit All Rights Reserved by{" "}
        <span className="footer-name"> Sebastian Torkowski</span>
      </small>
      <div className="social-media-icons-container">
        <a href="https://www.facebook.com/" target="_blank">
          <FaFacebook className="social-media-icon" />
        </a>
        <a href="https://twitter.com/" target="_blank">
          <FaTwitter className="social-media-icon" />
        </a>
        <a href="https://instagram.com/" target="_blank">
          <FaInstagram className="social-media-icon" />
        </a>
        <a href="https://www.linkedin.com/" target="_blank">
          <FaLinkedin className="social-media-icon" />
        </a>
      </div>
    </div>
  );
}

export default FooterBottom;
