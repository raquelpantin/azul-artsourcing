import "./AboutPage.scss";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import image1 from "../../assets/images/about2.jpg";
import image2 from "../../assets/images/about1.jpg";
import { motion } from "framer-motion";

function AboutPage() {
  const navigate = useNavigate();

  return (
    <div className="about-page">
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: "calc(50vw - 50%)" }}
        transition={{ duration: 1 }}
        className="about-container"
      >
        <img className="about-image" src={image1} />
        <p className="about-texttop">
          AZUL is an art sourcing platform designed to connect clients and
          artists with the click of a button
        </p>
      </motion.div>
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: "calc(-40vw + 50%)" }}
        transition={{ duration: 1.1 }}
        className="about-container"
      >
        <p className="about-textbottom">
          So, whether you need a large-scale mural for the front of your
          business or a digital portrait of your pooch, AZUL has you covered!
        </p>
        <img className="about-image" src={image2} />
      </motion.div>
      <div className="about-container__bottom">
        <p className="about-cta__header">Ready to get started?</p>
        <p className="about-cta__text">
          Click{" "}
          <Link to={"/signup"} className="about-cta__link">
            <span className="about-cta__link-text">here</span>
          </Link>{" "}
          to begin your AZUL journey!
        </p>
      </div>
    </div>
  );
}

export default AboutPage;
