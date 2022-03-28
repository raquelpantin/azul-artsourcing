import "./SignUpPage.scss";
import React from "react";

function SignUpPage() {
  return (
    <div className="form-container">
      <form className="signup-form">
        <h1 className="signup__header">Create an AZUL account</h1>
        <label className="signup__label" htmlFor="firstName">
          FIRST NAME
        </label>
        <input className="signup__input" type="text" name="firstName"></input>
        <label className="signup__label" htmlFor="lasttName">
          LAST NAME
        </label>
        <input className="signup__input" type="text" name="lastName"></input>
        <label className="signup__label" htmlFor="email">
          EMAIL
        </label>
        <input className="signup__input" type="text" name="email"></input>
        <label className="signup__label" htmlFor="password">
          PASSWORD
        </label>
        <input className="signup__input" type="text" name="password"></input>
        <button className="signup__button" type="submit">
          CREATE ACCOUNT
        </button>
      </form>
    </div>
  );
}

export default SignUpPage;
