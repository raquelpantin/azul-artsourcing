import "./SignUpPage.scss";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  TextField,
  InputAdornment,
  IconButton,
  OutlinedInput,
  FormControl,
  InputLabel,
  FormHelperText,
} from "@mui/material";

import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

function SignUpPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  let passwordChar = password.length >= 6;
  let passwordLowerChar = /(.*[a-z].*)/.test(password);
  let passwordUpperChar = /(.*[A-Z].*)/.test(password);
  let passwordNum = /(.*[0-9].*)/.test(password);
  let passwordSpecialChar = /(.*[^a-zA-Z0-9].*)/.test(password);

  let emailCheck = /\S+@\S+\.\S+/.test(email);

  const navigate = useNavigate();

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
    navigate("/login");
  }

  return (
    <div className="signup-page">
      <div className="form-container">
        <form className="signup-form" onSubmit={registerUser}>
          <h1 className="signup__header">Create an AZUL account</h1>
          <div className="signup__field">
            <TextField
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="signup__input"
              type="text"
              name="firstName"
              label="First Name"
              variant="outlined"
              size="small"
            />

            <FormHelperText className="signup__error-container">
              {!firstName && (
                <span className="signup__error">* Required Field</span>
              )}
            </FormHelperText>
          </div>
          <div className="signup__field">
            <TextField
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="signup__input"
              type="text"
              name="lastName"
              label="Last Name"
              variant="outlined"
              size="small"
            />
            <FormHelperText className="signup__error-container">
              {!lastName && (
                <span className="signup__error">* Required Field</span>
              )}
            </FormHelperText>
          </div>
          <div className="signup__field">
            <TextField
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="signup__input"
              type="text"
              name="email"
              label="Email"
              variant="outlined"
              size="small"
            />
            <FormHelperText className="signup__error-container">
              {!email && (
                <span className="signup__error">* Required Field</span>
              )}
            </FormHelperText>
            {email && (
              <div className="signup__password-check">
                <div>
                  <small
                    className={emailCheck ? "signup__success" : "signup__error"}
                  >
                    must be in format example@mail.com
                  </small>
                </div>
              </div>
            )}
          </div>
          <div className="signup__field">
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
            <FormHelperText className="signup__error-container">
              {!password && (
                <span className="signup__error">* Required Field</span>
              )}
            </FormHelperText>
            {password && (
              <div className="signup__password-check">
                <div>
                  <small
                    className={
                      passwordChar ? "signup__success" : "signup__error"
                    }
                  >
                    at least 6 characters
                  </small>
                </div>
                <div>
                  <small
                    className={
                      passwordLowerChar ? "signup__success" : "signup__error"
                    }
                  >
                    at least one lowercase letter
                  </small>
                </div>
                <div>
                  <small
                    className={
                      passwordUpperChar ? "signup__success" : "signup__error"
                    }
                  >
                    at least one uppercase letter
                  </small>
                </div>
                <div>
                  <small
                    className={
                      passwordNum ? "signup__success" : "signup__error"
                    }
                  >
                    at least one number
                  </small>
                </div>
                <div>
                  <small
                    className={
                      passwordSpecialChar ? "signup__success" : "signup__error"
                    }
                  >
                    at least one special character
                  </small>
                </div>
              </div>
            )}
          </div>

          <button className="signup__button" type="submit">
            CREATE ACCOUNT
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUpPage;
