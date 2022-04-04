import "./ArtistProfilePage.scss";
import { useNavigate, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import back from "../../assets/icons/arrow_back_white_24dp.svg";
import chat from "../../assets/icons/chat_black_24dp.svg";
import Banner from "../../components/Banner/Banner";
import ArtistPortfolio from "../../components/ArtistPortfolio/ArtistPortfolio";

function ArtistProfilePage() {
  const [artist, setArtist] = useState({});
  const navigate = useNavigate();

  const { id } = useParams();

  const fetchDetails = () => {
    axios
      .get(`http://localhost:7070/artist/${id}`)
      .then((response) => {
        setArtist(response.data[0]);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchDetails();
  }, []);

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
              <img className="artist-profile__pfp-image" src={artist.avatar} />
            </div>
            <div className="artist-profile__container-details">
              <div className="artist-profile__details">
                <h2 className="artist-profile__name">
                  {artist.firstName} {artist.lastName}
                </h2>
                <p className="artist-profile__location">
                  {artist.city}, {artist.state}
                </p>
              </div>
              <div className="artist-profile__message">
                <img className="artist-profile__message-icon" src={chat} />
                <p className="artist-profile__message-text">
                  Message {artist.firstName}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="artist-profile__container-bottom">
          <div className="artist-profile__about">
            <h3 className="artist-profile__about-header">About Me</h3>
            <p className="artist-profile__about-text">{artist.bio}</p>
          </div>
          <div className="artist-profile__skill">
            <h3 className="artist-profile__skill-header">Skillset</h3>
            <div className="artist-profile__skill-card">
              {(artist.skills ?? []).map((data) => {
                return (
                  <p key={data.id} className="artist-profile__skill-btns">
                    {data}
                  </p>
                );
              })}
              {/* <p className="artist-profile__skill-btns">oil painting</p>
              <p className="artist-profile__skill-btns">glass blowing</p>
              <p className="artist-profile__skill-btns">pen & ink</p> */}
            </div>
          </div>
          <ArtistPortfolio portfolio={artist.portfolio} />
        </div>
      </div>
    </>
  );
}

export default ArtistProfilePage;
