import "./SearchResultsPage.scss";
import {
  Link,
  useParams,
  useLocation,
  useSearchParams,
} from "react-router-dom";
import axios from "axios";
import React, { useState, useEffect } from "react";
import open from "../../assets/icons/arrow_circle_right_black_24dp.svg";
import artist from "../../assets/images/li-shanting-AGy0SxTzqr8-unsplash.jpg";
import ContactPage from "../ContactPage/ContactPage";

function SearchResultsPage() {
  const [results, setResults] = useState([]);

  // const Search = () => {
  //   const [searchParams] = useSearchParams();
  //   console.log(searchParams.get("q"));
  //   return searchParams.get("q");
  // };

  const [searchParams] = useSearchParams();
  const test = searchParams.get("q");

  // Search();

  useEffect(() => {
    getSearch();
  }, []);

  const getSearch = () => {
    axios
      .get("http://localhost:7070/artist")
      .then((response) => {
        console.log(response.data);
        setResults(response.data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="search-all">
      {results.map((result) => {
        return (
          <>
            <div className="search-results" key={result._id}>
              <div className="search-container">
                <div className="search-pfp-container">
                  <img className="search-pfp" src={result.avatar} />
                </div>
                <div className="search-artist-info">
                  <h3 className="search-name">
                    {result.firstName} {result.lastName}
                  </h3>
                  <p className="search-location">
                    {result.city}, {result.state}
                  </p>
                </div>
                <div className="search-info-right">
                  <p className="search-price">
                    Price Range: {result.pricRange}
                  </p>
                  <Link className="search-link" to="/profile/:id">
                    <img className="search-open" src={open} />
                  </Link>
                </div>
              </div>
            </div>
            <div className="border"></div>
          </>
        );
      })}
      {/* <div className="search-results">
        <div className="search-container">
          <div className="search-pfp-container">
            <img className="search-pfp" src={artist} />
          </div>
          <div className="search-artist-info">
            <h3 className="search-name">Jane Doe</h3>
            <p className="search-location">Miami, FL</p>
            <p className="search-skill">
              Skillset Includes:{" "}
              <span className="search-skill-results">photography</span>
            </p>
          </div>
          <div className="search-info-right">
            <p className="search-price">Price Range: $$</p>
            <Link className="search-link" to="/profile/:id">
              <img className="search-open" src={open} />
            </Link>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default SearchResultsPage;
