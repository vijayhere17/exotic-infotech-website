import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "./ClientLogoSlider.css";
import mkLogo from "../../assets/logos/mk.png";
import jalLogo from "../../assets/logos/jalagarment1.png";
import scalpLogo from "../../assets/logos/scalping.png";
import millionLogo from "../../assets/logos/millionaire.png";
import fourStepLogo from "../../assets/logos/4step.png";
import regionalLogo from "../../assets/logos/regional.png";

const ClientLogoSlider = () => {
  return (
    <section className="client-slider">
      <h2>Our Projects</h2>
      <div className="client-container">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={5}
          spaceBetween={50}
          loop={true}
          speed={4000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          allowTouchMove={false}
          breakpoints={{
            0: { slidesPerView: 2 },
            576: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1200: { slidesPerView: 5 },
          }}
        >
          <SwiperSlide>
            <div className="logo-box">
              <img src={mkLogo} alt="MK Logo" className="mk-logo" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="logo-box">
              <img src={jalLogo} alt="Jal Logo" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="logo-box">
              <img src={scalpLogo} alt="Scalp Logo" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="logo-box">
              <img src={millionLogo} alt="Million Logo" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="logo-box">
              <img src={fourStepLogo} alt="4Step Logo" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="logo-box">
              <img src={regionalLogo} alt="Regional Logo" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default ClientLogoSlider;