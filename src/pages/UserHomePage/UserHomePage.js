import "./UserHomePage.scss";
import Featured from "../../components/Featured/Featured";
import WelcomeBanner from "../../components/WelcomeBanner/WelcomeBanner";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import jwtDecode from "jwt-decode";

function UserHomePage() {
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
