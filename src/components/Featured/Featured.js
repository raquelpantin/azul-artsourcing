import "./Featured.scss";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/scrollbar";
import Private from "../../pages/PrivateRoute/PrivateRoute";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import image1 from "../../assets/images/im1.jpg";
import image2 from "../../assets/images/im2.jpg";
import image3 from "../../assets/images/im3.jpg";
import image4 from "../../assets/images/im4.jpg";
import image5 from "../../assets/images/im5.jpg";
SwiperCore.use([Navigation, Pagination, Autoplay]);

function Featured() {
  return (
    <div className="featured-container">
      <Swiper
        spaceBetween={25}
        slidesPerView={2}
        navigation
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        breakpoints={{
          400: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          635: {
            slidesPerView: 4,
            spaceBetween: 25,
          },
          900: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
      >
        <SwiperSlide>
          {localStorage.getItem("user") ? (
            <Link to={"/artist/624904a1ee912cc4359a0c37"}>
              <div className="card">
                <div className="card-image">
                  <img src={image1} />
                </div>
                <div className="details">
                  <h2>
                    Hanae Taylor <span className="job-title">Pen & Ink</span>
                  </h2>
                </div>
              </div>
            </Link>
          ) : (
            <Link to={"/login"}>
              <div className="card">
                <div className="card-image">
                  <img src={image1} />
                </div>
                <div className="details">
                  <h2>
                    Hanae Taylor <span className="job-title">Pen & Ink</span>
                  </h2>
                </div>
              </div>
            </Link>
          )}
        </SwiperSlide>
        <SwiperSlide>
          {localStorage.getItem("user") ? (
            <Link to={"/artist/624904a1ee912cc4359a0c3f"}>
              <div className="card">
                <div className="card-image">
                  <img src={image2} />
                </div>
                <div className="details">
                  <h2>
                    Stacey Hurley <span className="job-title">Digital Art</span>
                  </h2>
                </div>
              </div>
            </Link>
          ) : (
            <Link to={"/login"}>
              <div className="card">
                <div className="card-image">
                  <img src={image2} />
                </div>
                <div className="details">
                  <h2>
                    Stacey Hurley <span className="job-title">Digital Art</span>
                  </h2>
                </div>
              </div>
            </Link>
          )}
        </SwiperSlide>
        <SwiperSlide>
          {localStorage.getItem("user") ? (
            <Link to={"/artist/624904a1ee912cc4359a0c3d"}>
              <div className="card">
                <div className="card-image">
                  <img src={image3} />
                </div>
                <div className="details">
                  <h2>
                    Charlotte Bryan
                    <span className="job-title">Oil on Canvas</span>
                  </h2>
                </div>
              </div>
            </Link>
          ) : (
            <Link to={"/login"}>
              <div className="card">
                <div className="card-image">
                  <img src={image3} />
                </div>
                <div className="details">
                  <h2>
                    Charlotte Bryan
                    <span className="job-title">Oil on Canvas</span>
                  </h2>
                </div>
              </div>
            </Link>
          )}
        </SwiperSlide>
        <SwiperSlide>
          {localStorage.getItem("user") ? (
            <Link to={"/artist/624904a1ee912cc4359a0c40"}>
              <div className="card">
                <div className="card-image">
                  <img src={image4} />
                </div>
                <div className="details">
                  <h2>
                    Kiona Snider
                    <span className="job-title">Acyrlic on Canvas</span>
                  </h2>
                </div>
              </div>
            </Link>
          ) : (
            <Link to={"/login"}>
              <div className="card">
                <div className="card-image">
                  <img src={image4} />
                </div>
                <div className="details">
                  <h2>
                    Kiona Snider
                    <span className="job-title">Acyrlic on Canvas</span>
                  </h2>
                </div>
              </div>
            </Link>
          )}
        </SwiperSlide>
        <SwiperSlide>
          {localStorage.getItem("user") ? (
            <Link to={"/artist/624904a1ee912cc4359a0c33"}>
              <div className="card">
                <div className="card-image">
                  <img src={image5} />
                </div>
                <div className="details">
                  <h2>
                    Leslie Valentine
                    <span className="job-title">Digital Art</span>
                  </h2>
                </div>
              </div>
            </Link>
          ) : (
            <Link to={"/login"}>
              <div className="card">
                <div className="card-image">
                  <img src={image5} />
                </div>
                <div className="details">
                  <h2>
                    Leslie Valentine
                    <span className="job-title">Digital Art</span>
                  </h2>
                </div>
              </div>
            </Link>
          )}
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Featured;
