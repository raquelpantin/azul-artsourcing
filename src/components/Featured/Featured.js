import "./Featured.scss";
import React from "react";
import "swiper/css";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/scrollbar";
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
        <div className="card">
          <div className="card-image">
            <img src={image1} />
          </div>
          <div className="details">
            <h2>
              John Doe <span className="job-title">UI Developer</span>
            </h2>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="card">
          <div className="card-image">
            <img src={image2} />
          </div>
          <div className="details">
            <h2>
              John Doe <span className="job-title">UI Developer</span>
            </h2>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="card">
          <div className="card-image">
            <img src={image3} />
          </div>
          <div className="details">
            <h2>
              John Doe <span className="job-title">UI Developer</span>
            </h2>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="card">
          <div className="card-image">
            <img src={image4} />
          </div>
          <div className="details">
            <h2>
              John Doe <span className="job-title">UI Developer</span>
            </h2>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="card">
          <div className="card-image">
            <img src={image5} />
          </div>
          <div className="details">
            <h2>
              John Doe <span className="job-title">UI Developer</span>
            </h2>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default Featured;
