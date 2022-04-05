import "./MessagePage.scss";
import back from "../../assets/icons/arrow_back_white_24dp.svg";
import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import jwtDecode from "jwt-decode";
import { TextField, InputAdornment } from "@mui/material";

function MessagePage() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="message-return__container">
        <img
          className="message-back__icon"
          src={back}
          onClick={() => navigate(-1)}
        />
        <div className="message-banner"></div>
      </div>

      <div className="message-content__container">
        <h2 className="message-title">Your Conversation with ARTIST</h2>
        <div className="message-sent sb1">
          <p className="message-text">
            Hello hello, here is my message blah blah blahjkajs
            fjlkasjflkasjfklasjflkasdjfaslkfjajkdjsflkasdjflkasjflksadjflksdajfladsk;fjaslkfjasdl;fjs
          </p>
        </div>
        <p className="message-dtg">sent 4/1/2022 at 5:18pm</p>
      </div>
      <form className="message-form">
        <TextField
          className="message-input"
          id="outlined-multiline-static"
          label="Message"
          placeholder="Start typing..."
          name="message"
          size="small"
          //   multiline
          //   rows={1}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SendOutlinedIcon />
              </InputAdornment>
            ),
          }}
        />
        <button className="message-button" type="submit">
          Send
        </button>
      </form>
    </div>
  );
}

export default MessagePage;
