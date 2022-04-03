import "./ArtistPortfolio.scss";
import "swiper/css";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/scrollbar";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
SwiperCore.use([Navigation, Pagination, Autoplay]);

const ArtistPortfolio = ({ portfolio }) => {
  return (
    <>
      <div className="portfolio">
        <h3 className="portfolio-header">Portfolio</h3>
      </div>
      <Swiper
        className="portfolio-swiper"
        spaceBetween={20}
        slidesPerView={2}
        navigation
        loop={true}
        pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        breakpoints={{
          400: {
            slidesPerView: 3,
            spaceBetween: 5,
          },
          635: {
            slidesPerView: 3,
            spaceBetween: 25,
          },
          900: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
      >
        {(portfolio ?? []).map((data) => {
          return (
            <SwiperSlide>
              <div className="portfolio-card">
                <div className="portfolio-card-image">
                  <img src={data} />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default ArtistPortfolio;
