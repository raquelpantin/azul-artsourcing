import "./HomePage.scss";
import Featured from "../../components/Featured/Featured";
import WelcomeBanner from "../../components/WelcomeBanner/WelcomeBanner";
import { Link, useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import jwtDecode from "jwt-decode";

function HomePage() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = jwtDecode(token);
      if (!user) {
        localStorage.removeItem("token");
        navigate("/login");
      }
    }
  }, []);

  return (
    <div className="home">
      {localStorage.getItem("user") ? (
        <WelcomeBanner />
      ) : (
        <div className="home__hero-image">
          <div className="home__hero-content">
            <h1 className="home__hero-title">Art Sourcing</h1>
            <p className="home__hero-text">the easy way</p>
            <Link to={"/about"}>
              <button className="home__hero-btn1">Learn More</button>
            </Link>
            <Link to={"/signup"}>
              <button className="home__hero-btn2">Get Started</button>
            </Link>
          </div>
        </div>
      )}

      <h2 className="featured-title">Featured</h2>
      <div className="featured-slider">
        <div className="featured-container">
          <Featured />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
