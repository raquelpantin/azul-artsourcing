import "./SearchResultsPage.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import React, { useState, useEffect } from "react";
import open from "../../assets/icons/arrow_circle_right_black_24dp.svg";

const SearchResultsPage = (props) => {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:7070/artist")
      .then((res) => {
        console.log(res.data);
        setArtists(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="search-all">
      {artists
        .filter((artist) => {
          if (
            artist.firstName.toLowerCase().includes(props.search.toLowerCase())
          ) {
            return true;
          } else if (
            artist.lastName.toLowerCase().includes(props.search.toLowerCase())
          ) {
            return true;
          } else if (
            artist.city.toLowerCase().includes(props.search.toLowerCase())
          ) {
            return true;
          } else if (
            artist.state.toLowerCase().includes(props.search.toLowerCase())
          ) {
            return true;
          } else if (
            artist.skills
              .toString()
              .toLowerCase()
              .includes(props.search.toLowerCase())
          ) {
            return true;
          }
        })
        .map((artist) => {
          return (
            <Link className="search-link" to={`/artist/${artist._id}`}>
              <div key={artist._id}>
                <div className="search-results">
                  <div className="search-container">
                    <div className="search-pfp-container">
                      <img className="search-pfp" src={artist.avatar} />
                    </div>
                    <div className="search-artist-info">
                      <h3 className="search-name">
                        {artist.firstName} {artist.lastName}
                      </h3>
                      <p className="search-location">
                        {artist.city}, {artist.state}
                      </p>
                    </div>
                    <div className="search-info-right">
                      <p className="search-price">
                        Price Range: {artist.pricRange}
                      </p>
                      <img className="search-open" src={open} />
                    </div>
                  </div>
                </div>
                <div className="border"></div>
              </div>
            </Link>
          );
        })}
    </div>
  );
};
export default SearchResultsPage;
