import "./MessagePage.scss";
import back from "../../assets/icons/arrow_back_white_24dp.svg";
import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import jwtDecode from "jwt-decode";
import { TextField, InputAdornment } from "@mui/material";
import axios from "axios";

function MessagePage() {
  const [message, setMessage] = useState({
    text: "",
  });
  const navigate = useNavigate();

  const onChange = (e) => {
    const { name, value } = e.target;
    setMessage((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
    console.log(message);
  };

  const sendMessage = (e) => {
    e.prevent.default();
    const newMessage = {
      text: message.text,
    };
    axios.post("http://localhost:7070/newmessage", newMessage);
    console.log(newMessage);
    setMessage({
      text: "",
    });
  };

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
            Hello! Are you available for a commission?
          </p>
        </div>
        <p className="message-dtg">sent 4/1/2022 at 5:18pm</p>
      </div>
      <form className="message-form">
        <TextField
          onChange={onChange}
          className="message-input"
          id="outlined-multiline-static"
          label="Message"
          placeholder="Start typing..."
          name="text"
          value={message.text}
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
        <button onSubmit={sendMessage} className="message-button" type="submit">
          Send
        </button>
      </form>
    </div>
  );
}

export default MessagePage;
