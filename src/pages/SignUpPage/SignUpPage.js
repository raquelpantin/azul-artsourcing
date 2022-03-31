import "./SignUpPage.scss";
import React from "react";
import { useState, useEffect } from "react";

function SignUpPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function registerUser(event) {
    event.preventDefault();
    const response = await fetch("http://localhost:7070/user/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        password,
      }),
    });
    const data = await response.json();
    console.log(data);
  }

  return (
    <div className="form-container">
      <form className="signup-form" onSubmit={registerUser}>
        <h1 className="signup__header">Create an AZUL account</h1>
        <label className="signup__label" htmlFor="firstName">
          FIRST NAME
        </label>
        <input
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="signup__input"
          type="text"
          name="firstName"
        ></input>
        <label className="signup__label" htmlFor="lasttName">
          LAST NAME
        </label>
        <input
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="signup__input"
          type="text"
          name="lastName"
        ></input>
        <label className="signup__label" htmlFor="email">
          EMAIL
        </label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="signup__input"
          type="text"
          name="email"
        ></input>
        <label className="signup__label" htmlFor="password">
          PASSWORD
        </label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="signup__input"
          type="password"
          name="password"
        ></input>
        <button className="signup__button" type="submit">
          CREATE ACCOUNT
        </button>
      </form>
    </div>
  );
}

export default SignUpPage;
