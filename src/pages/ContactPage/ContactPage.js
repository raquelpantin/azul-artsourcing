import "./ContactPage.scss";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, InputAdornment, FormHelperText } from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import emailjs from "emailjs-com";

function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  let emailCheck = /\S+@\S+\.\S+/.test(email);

  const navigate = useNavigate();

  async function sendEmail(event) {
    event.preventDefault();

    if (!name || !email || !message) {
      alert("All fields must be filled");
    } else {
      emailjs
        .sendForm(
          "service_mo9zthu",
          "template_x7qjoph",
          event.target,
          "fhAnQfKtqBLjy2Db3"
        )
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));
      navigate("/");
    }
  }

  return (
    <div className="contact-container">
      <form className="contact-form" onSubmit={sendEmail}>
        <h1 className="contact__header">Contact Us</h1>
        <div className="contact__field">
          <TextField
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="contact__input"
            type="text"
            name="name"
            label="Name"
            variant="outlined"
            size="small"
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <BadgeOutlinedIcon />
                </InputAdornment>
              ),
            }}
          />

          <FormHelperText className="contact__error-container">
            {!name && <span className="contact__error">* Required Field</span>}
          </FormHelperText>
        </div>
        <div className="contact__field">
          <TextField
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="contact__input"
            type="text"
            name="email"
            label="Email"
            variant="outlined"
            size="small"
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <EmailOutlinedIcon />
                </InputAdornment>
              ),
            }}
          />
          <FormHelperText className="contact__error-container">
            {!email && <span className="contact__error">* Required Field</span>}
          </FormHelperText>
          {email && (
            <div className="contact__email-check">
              <div>
                <small
                  className={emailCheck ? "contact__success" : "signup__error"}
                >
                  must be in format example@mail.com
                </small>
              </div>
            </div>
          )}
        </div>
        <TextField
          id="outlined-multiline-static"
          label="Message"
          name="message"
          multiline
          rows={3}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="contact__input"
        />

        <button className="contact__button" type="submit">
          SUBMIT
        </button>
      </form>
    </div>
  );
}

export default ContactPage;
