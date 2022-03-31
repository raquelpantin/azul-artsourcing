import "./LoginPage.scss";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function loginUser(event) {
    event.preventDefault();
    const response = await fetch("http://localhost:7070/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = await response.json();

    if (data.token) {
      alert("Login Successufl");
      window.location.href = "/user";
    } else {
      alert("Please check your username and password");
    }
    console.log(data);
  }

  return (
    <div className="form-container__login">
      <form className="login-form" onSubmit={loginUser}>
        <h1 className="login__header">Login</h1>
        <label className="login__label" htmlFor="email">
          EMAIL
        </label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="login__input"
          type="text"
          name="email"
        ></input>
        <label className="login__label" htmlFor="password">
          PASSWORD
        </label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login__input"
          type="password"
          name="password"
        ></input>
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
