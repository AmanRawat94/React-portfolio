import React from "react";
import "./MobileNavbar.css";
import logo from "../../../img/AP-Enterprise-logo-1.png";
import { Link } from "react-router-dom";

const MobileNavbar = ({ isOpen, toggleMenu }) => {
  const sendEmail = () => {
    window.open("mailto:ar981089@gmail.com?subject=Hiring&body=Description");
  };
  return (
    <>
      <div
        className={`mobile-menu ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div className="mobile-menu-container">
          <img src={logo} alt="mobile-img-logo" className="logo" />
          <ul>
            <li>
              <Link to="/" className="menu-item">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="menu-item">
                About Us
              </Link>
            </li>
            <li>
              <Link className="menu-item">Projects</Link>
            </li>
            <li>
              <Link to="/privacy" className="menu-item">
                Privacy Policy
              </Link>
            </li>

            <button className="contact-btn" onClick={sendEmail}>
              Hire Me
            </button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileNavbar;
