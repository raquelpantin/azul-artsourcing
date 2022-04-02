import "./SearchResultsPage.scss";
import { Link } from "react-router-dom";
import react from "react";
import open from "../../assets/icons/arrow_circle_right_black_24dp.svg";
import artist from "../../assets/images/li-shanting-AGy0SxTzqr8-unsplash.jpg";

function SearchResultsPage({ results }) {
  console.log(results);
  return (
    <>
      {/* STILL NEED TO MAP THROUGH */}
      <div className="search-results">
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
      </div>
    </>
  );
}

export default SearchResultsPage;
