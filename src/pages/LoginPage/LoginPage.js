import "./LoginPage.scss";
import React from "react";
import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <div className="form-container__login">
      <form className="login-form">
        <h1 className="login__header">Login</h1>
        <label className="login__label" htmlFor="email">
          EMAIL
        </label>
        <input className="login__input" type="text" name="email"></input>
        <label className="login__label" htmlFor="password">
          PASSWORD
        </label>
        <input className="login__input" type="text" name="password"></input>
        <button className="login__button" type="submit">
          LOGIN
        </button>
        <p className="login__footnote">
          Need an account?
          <span className="login__footnote-link">
            <Link className="login__footnote-link" to="/signup">
              Sign Up
            </Link>
          </span>
        </p>
      </form>
    </div>
  );
}

export default LoginPage;
