import "./PageFooter.scss";
import { Link } from "react-router-dom";

function PageFooter() {
  return (
    <div className="footer">
      <div className="footer__container">
        <Link className="footer__link" to="/about">
          <p className="footer__item">ABOUT</p>
        </Link>
        <Link className="footer__link" to="/contact">
          <p className="footer__item">CONTACT</p>
        </Link>
      </div>
      <div className="footer__container-bottom">
        <Link className="footer__link" to="/">
          <p className="footer__logo">AZUL</p>
        </Link>
        <p className="footer__footnote">
          Copyright © 2022 All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default PageFooter;
