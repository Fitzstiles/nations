import React from "react";
import { MdFacebook } from "react-icons/md";
import { RiWhatsappFill } from "react-icons/ri";
import { Link } from "react-router-dom";

// css styles is in the index.css file

const Footer = () => {
  return (
    <div className="footer__container">
      <div className="first__section">
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/goals">What we do</Link>
          <Link to="/ourmission">Our Mission</Link>
        </div>
        <div className="icons">
          <MdFacebook />
          <RiWhatsappFill />
        </div>
      </div>
    </div>
  );
};

export default Footer;
