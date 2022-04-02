import "./PageHeader.scss";
import { Link, useNavigate } from "react-router-dom";
import React, { useState, useRef } from "react";
import menu from "../../assets/icons/menu_white_24dp.svg";
import close from "../../assets/icons/close_white_24dp.svg";
import search from "../../assets/icons/search_black_24dp.svg";

const PageHeader = (props) => {
  const [isMobile, setIsMobile] = useState(false);
  const [term, setTerm] = useState(props.term || "");

  const navigate = useNavigate();

  const searchSubmit = (event) => {
    event.preventDefault();
    if (term === "") {
      return;
    }
    const urlEncodedTerm = encodeURI(term);
    console.log(term);
    navigate({
      pathname: "/search",
      search: `?q=${urlEncodedTerm}`,
    });
    // navigate(`/search?q=${urlEncodedTerm}`);
  };

  function logout() {
    localStorage.clear();
    navigate("/");
  }

  return (
    <div className="navbar-position">
      <nav className="navbar">
        <Link to="/" className="navbar__logo-link">
          <h1 className="navbar__logo">AZUL</h1>
        </Link>
        <form className="navbar__searchbar" onSubmit={searchSubmit}>
          <input
            className="navbar__search-input"
            type="text"
            placeholder="Search..."
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          ></input>
          <img className="navbar__search-icon" src={search} alt="search icon" />
        </form>
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
          {localStorage.getItem("user") ? (
            <Link to="/" className="login" onClick={logout}>
              <li>LOGOUT</li>
            </Link>
          ) : (
            <Link to="/login" className="login">
              <li>LOGIN</li>
            </Link>
          )}
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
        {localStorage.getItem("user") ? (
          <Link to="/" className="login" onClick={logout}>
            <li>LOGOUT</li>
          </Link>
        ) : (
          <Link to="/login" className="login">
            <li>LOGIN</li>
          </Link>
        )}
      </ul>
    </div>
  );
};

export default PageHeader;
