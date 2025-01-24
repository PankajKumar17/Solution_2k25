// Crew.js
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./Crew.css";
import { EffectCoverflow, Pagination } from "swiper/modules";

const Crew = () => {
  return (
    <div className="crew-container">
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/team/deepak.svg" alt="Team Member" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/team/deepak.svg" alt="Team Member" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/team/deepak.svg" alt="Team Member" />
        </SwiperSlide>
        {/* Add more SwiperSlides as needed */}
      </Swiper>
    </div>
  );
};

export default Crew;
