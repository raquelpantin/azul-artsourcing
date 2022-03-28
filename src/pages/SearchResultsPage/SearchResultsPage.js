import "./SearchResultsPage.scss";
import WelcomeBanner from "../../components/WelcomeBanner/WelcomeBanner";
import { Link } from "react-router-dom";
import open from "../../assets/icons/arrow_circle_right_black_24dp.svg";
import artist from "../../assets/images/li-shanting-AGy0SxTzqr8-unsplash.jpg";

function SearchResultsPage() {
  return (
    <>
      <WelcomeBanner />
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
            <Link className="search-link" to="#">
              <img className="search-open" src={open} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchResultsPage;
