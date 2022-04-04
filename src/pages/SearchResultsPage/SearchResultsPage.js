import "./SearchResultsPage.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import open from "../../assets/icons/arrow_circle_right_black_24dp.svg";
import { Context } from "../../context";

const SearchResultsPage = () => {
  const [state] = useContext(Context);
  const { artists } = state;

  console.log(state.artists);

  if (artists === undefined || artists.length === 0) {
    return <h2>No Search Results Found</h2>;
  } else {
    // const Search = () => {
    //   const [searchParams] = useSearchParams();
    //   console.log(searchParams.get("q"));
    //   return searchParams.get("q");
    // };

    // const [searchParams] = useSearchParams();
    // const test = searchParams.get("q");

    // Search();
    // const getSearch = () => {
    //   axios
    //     .get("http://localhost:7070/artist")
    //     .then((response) => {
    //       console.log(response.data);
    //       setResults(response.data);
    //     })
    //     .catch((error) => console.log(error));
    // };

    // useEffect(() => {
    //   getSearch();
    // }, []);

    return (
      <div className="search-all">
        {state.artists.map((artist) => {
          return (
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
                    <Link className="search-link" to={`/artist/${artist._id}`}>
                      <img className="search-open" src={open} />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="border"></div>
            </div>
          );
        })}
      </div>
    );
  }
};

export default SearchResultsPage;
