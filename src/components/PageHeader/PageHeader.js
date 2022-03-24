import "./PageHeader.scss";
import { Link, NavLink } from "react-router-dom";
import React, { useState } from "react";
import search from "../../assets/icons/search_black_24dp.svg";
import login from "../../assets/icons/login_white_24dp.svg";
import logout from "../../assets/icons/logout_white_24dp.svg";
import menu from "../../assets/icons/menu_white_24dp.svg";
import user from "../../assets/icons/person_white_24dp.svg";
import message from "../../assets/icons/mail_white_24dp.svg";
import close from "../../assets/icons/close_white_24dp.svg";

function PageHeader() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <div className="header">
      <div className="header__container">
        <div className="header__top">
          <Link className="header__link" to="/">
            <h1 className="header__title">AZUL</h1>
          </Link>
          <div className="header__searchbar">
            <input
              className="header__search-input"
              type="text"
              placeholder="Search..."
            ></input>
            <img
              className="header__search-icon"
              src={search}
              alt="search icon"
            />
          </div>
          <div className="header__icons">
            <Link
              className="header__icons-menu--link"
              to="/"
              onClick={handleClick}
            >
              {click ? (
                <img className="header__icons-close" src={close} alt="menu" />
              ) : (
                <img className="header__icons-menu" src={menu} alt="menu" />
              )}
            </Link>
          </div>
        </div>

        <ul className={click ? "header__navlist active" : "header__navlist"}>
          <li className="header__navlist-item">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "header__navlist-links--active"
                  : "header__navlist-links"
              }
              onClick={handleClick}
            >
              HOME
            </NavLink>
          </li>
          <li className="header__navlist-item">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "header__navlist-links--active"
                  : "header__navlist-links"
              }
              onClick={handleClick}
            >
              ABOUT
            </NavLink>
            <div className="header__navlist-divider"></div>
          </li>
          <li className="header__navlist-item">
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "header__navlist-links--active"
                  : "header__navlist-links"
              }
              onClick={handleClick}
            >
              CONTACT
            </NavLink>
            <div className="header__navlist-divider"></div>
          </li>
          <li className="header__navlist-item">
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive
                  ? "header__navlist-links--active"
                  : "header__navlist-links"
              }
              onClick={handleClick}
            >
              LOGIN
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default PageHeader;
