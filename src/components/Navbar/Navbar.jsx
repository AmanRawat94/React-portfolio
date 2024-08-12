import React, { useState } from "react";
import "./Navbar.css";
import MobileNavbar from "./MobileNavbar/MobileNavbar";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import logo from "../../img/AP-Enterprise-logo-1.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const sendEmail = () => {
    window.open("mailto:ar981089@gmail.com?subject=Hiring&body=Description");
  };
  return (
    <>
      <MobileNavbar isOpen={openMenu} toggleMenu={toggleMenu} />
      <nav className="nav-wrapper">
        <div className="nav-content">
          <img src={logo} alt="logo-img" className="logo" />

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

          <button className="menu-btn" onClick={toggleMenu}>
            <span
              className={"material-symbols-outlined"}
              style={{ fontSize: "1.8rem" }}
            >
              {openMenu ? <IoMdClose /> : <CiMenuBurger />}
            </span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
