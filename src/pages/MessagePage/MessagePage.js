import "./MessagePage.scss";
import back from "../../assets/icons/arrow_back_white_24dp.svg";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import { TextField, InputAdornment } from "@mui/material";

const getMessagesLS = () => {
  const data = localStorage.getItem("Message");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

function MessagePage() {
  const [messageValue, setMessageValue] = useState("");

  const [messages, setMessages] = useState(getMessagesLS());
  console.log(messages);

  const navigate = useNavigate();

  let today = new Date();
  let date =
    today.getMonth() +
    1 +
    "/" +
    today.getDate() +
    "/" +
    today.getFullYear().toString().slice(-2);
  let time = today.getHours() + ":" + today.getMinutes();
  let dateTime = date + " at " + time;

  const handleSubmit = (e) => {
    e.preventDefault();

    const date = new Date();
    const time = date.getTime();

    let messageObj = {
      ID: time,
      MessageValue: messageValue,
    };
    setMessages([...messages, messageObj]);
    setMessageValue("");
  };

  useEffect(() => {
    localStorage.setItem("Message", JSON.stringify(messages));
  }, [messages]);

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

      {messages.length == 0 && (
        <div className="message-content__container">
          <h2 className="message-title">Start your conversation here!</h2>
        </div>
      )}

      {messages.length > 0 && (
        <div className="message-content__container">
          <h2 className="message-title">AZUL Messaging</h2>
          {messages.map((singleMessage) => (
            <>
              <div className="message-sent sb1" key={singleMessage.ID}>
                <p className="message-text">{singleMessage.MessageValue}</p>
              </div>
              <p className="message-dtg">sent {dateTime}</p>
            </>
          ))}
        </div>
      )}

      <form className="message-form" onSubmit={handleSubmit}>
        <TextField
          onChange={(e) => setMessageValue(e.target.value)}
          className="message-input"
          id="outlined-multiline-static"
          label="Message"
          placeholder="Start typing..."
          value={messageValue}
          size="small"
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
