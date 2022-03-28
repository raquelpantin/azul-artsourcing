import "./PageHeader.scss";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import menu from "../../assets/icons/menu_white_24dp.svg";
import close from "../../assets/icons/close_white_24dp.svg";
import search from "../../assets/icons/search_black_24dp.svg";

const PageHeader = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <div>
      <nav className="navbar">
        <Link to="/" className="navbar__logo-link">
          <h1 className="navbar__logo">AZUL</h1>
        </Link>
        <div className="navbar__searchbar">
          <input
            className="navbar__search-input"
            type="text"
            placeholder="Search..."
          ></input>
          <img className="navbar__search-icon" src={search} alt="search icon" />
        </div>
        <ul
          className={isMobile ? "nav-links-mobile" : "nav-links"}
          onClick={() => setIsMobile(false)}
        >
          <Link to="/" className="homelink">
            <li>HOME</li>
          </Link>
          <Link to="/about" className="about">
            <li>ABOUT</li>
          </Link>
          <Link to="/contact" className="contact">
            <li>CONTACT</li>
          </Link>
          <Link to="/login" className="login">
            <li>LOGIN</li>
          </Link>
        </ul>

        <Link className="icons" to="#" onClick={() => setIsMobile(!isMobile)}>
          {isMobile ? (
            <img className="mobile-close" src={close} alt="close" />
          ) : (
            <img className="mobile-menu" src={menu} alt="menu" />
          )}
        </Link>
      </nav>
      <ul className="navbar__tblt-dt">
        <Link to="/" className="homelink">
          <li>HOME</li>
        </Link>
        <div className="navbar__divider"></div>
        <Link to="/about" className="about">
          <li>ABOUT</li>
        </Link>
        <div className="navbar__divider"></div>
        <Link to="/contact" className="contact">
          <li>CONTACT</li>
        </Link>
        <div className="navbar__divider"></div>
        <Link to="/login" className="login">
          <li>LOGIN</li>
        </Link>
      </ul>
    </div>
  );
};

export default PageHeader;
