import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="container mx-auto py-5">
      <div className="flex justify-between">
        <p>© Copyright 2023 Noootes</p>
        <div className="flex items-center space-x-3">
          <a target="_blank" href="https://github.com/alamincodes">
            <span>
              <FaGithub />
            </span>
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/alamincodes/">
            <span>
              <FaLinkedin />
            </span>
          </a>
          <a target="_blank" href="https://facebook.com/alamincodes">
            <span>
              <FaFacebook />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
