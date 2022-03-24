import "./HomePage.scss";
import Featured from "../Featured/Featured";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="home">
      <div className="home__hero-image">
        <div className="home__hero-content">
          <h1 className="home__hero-title">Art Sourcing</h1>
          <p className="home__hero-text">the easy way</p>
          <Link to={"/about"}>
            <button className="home__hero-btn1">Learn More</button>
          </Link>
          <button className="home__hero-btn2">Get Started</button>
        </div>
      </div>
      <Featured />
    </div>
  );
}

export default HomePage;