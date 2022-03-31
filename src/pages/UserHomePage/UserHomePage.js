import "./UserHomePage.scss";
import Featured from "../../components/Featured/Featured";
import WelcomeBanner from "../../components/WelcomeBanner/WelcomeBanner";
import { Link } from "react-router-dom";

function UserHomePage() {
  return (
    <>
      <WelcomeBanner />
      <div className="home">
        <h2 className="featured-title">Featured</h2>
        <div className="featured-slider">
          <Featured />
        </div>
      </div>
    </>
  );
}

export default UserHomePage;
