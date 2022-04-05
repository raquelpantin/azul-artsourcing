import "./LoginPage.scss";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  TextField,
  InputAdornment,
  IconButton,
  OutlinedInput,
  FormControl,
  InputLabel,
} from "@mui/material";

import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

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
      localStorage.setItem("user", data.firstName);
      alert("Login Successful");
      navigate("/");
    } else {
      alert("Please check your username and password");
    }
    console.log(data);
  }

  return (
    <div className="login-page">
      <div className="form-container__login">
        <form className="login-form" onSubmit={loginUser}>
          <h1 className="login__header">Login</h1>
          <div className="login__field">
            <TextField
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="login__input"
              type="text"
              name="email"
              variant="outlined"
              size="small"
              label="Email"
            />
          </div>

          <div className="login__field">
            <FormControl
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              variant="outlined"
              size="small"
              className="signup__input"
            >
              <InputLabel>Password</InputLabel>
              <OutlinedInput
                label="Password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment>
                    <IconButton
                      edge="end"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <VisibilityIcon />
                      ) : (
                        <VisibilityOffIcon />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </div>
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
    </div>
  );
}

export default LoginPage;
