import "./ArtistProfilePage.scss";
import { Link, useNavigate } from "react-router-dom";
import React, { useRef } from "react";
import artist from "../../assets/images/li-shanting-AGy0SxTzqr8-unsplash.jpg";
import back from "../../assets/icons/arrow_back_white_24dp.svg";
import mail from "../../assets/icons/mail_white_24dp.svg";
import chat from "../../assets/icons/chat_black_24dp.svg";
import Banner from "../../components/Banner/Banner";
import ArtistPortfolio from "../../components/ArtistPortfolio/ArtistPortfolio";

function ArtistProfilePage() {
  const navigate = useNavigate();

  return (
    <>
      <div className="artist-profile">
        <Banner />
        <div className="artist-profile__container-all">
          <div className="artist-profile__back">
            <img
              className="artist-profile__back-icon"
              src={back}
              onClick={() => navigate(-1)}
            />
          </div>
          <div className="artist-profile__container-top">
            <div className="artist-profile__pfp">
              <img className="artist-profile__pfp-image" src={artist} />
            </div>
            <div className="artist-profile__container-details">
              <div className="artist-profile__details">
                <h2 className="artist-profile__name">Jane Doe</h2>
                <p className="artist-profile__location">Miami, FL</p>
              </div>
              <div className="artist-profile__message">
                <img className="artist-profile__message-icon" src={chat} />
                <p className="artist-profile__message-text">Message Jane</p>
              </div>
            </div>
          </div>
        </div>
        <div className="artist-profile__container-bottom">
          <div className="artist-profile__about">
            <h3 className="artist-profile__about-header">About Me</h3>
            <p className="artist-profile__about-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum...
            </p>
          </div>
          <div className="artist-profile__skill">
            <h3 className="artist-profile__skill-header">Skillset</h3>
            <div className="artist-profile__skill-card">
              <p className="artist-profile__skill-btns">photography</p>
              <p className="artist-profile__skill-btns">oil painting</p>
              <p className="artist-profile__skill-btns">glass blowing</p>
              <p className="artist-profile__skill-btns">pen & ink</p>
            </div>
          </div>
          <ArtistPortfolio />
        </div>
      </div>
    </>
  );
}

export default ArtistProfilePage;
