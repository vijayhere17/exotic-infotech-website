import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "./Testimonials.css";

import mkLogo from "../../assets/logos/mk.png";
import jalLogo from "../../assets/logos/jalagarment1.png";
import scalpLogo from "../../assets/logos/scalping.png";
import millionLogo from "../../assets/logos/millionaire.png";
import fourStepLogo from "../../assets/logos/4step.png";
import regionalLogo from "../../assets/logos/regional.png";

const testimonials = [
  {
    logo: mkLogo,
    name: "- Mr. Hardik Gujjar",
    review:
      "Team Techforce is a highly skilled team with an eye for details. The project management and communication work really well through the online project tools and the dedicated project manager made a great job keeping things together.",
  },
  {
    logo: jalLogo,
    name: "- Mr. Mitul Patel",
    review:
      "Excellent coordination and smooth workflow. The team delivered exactly what we required with clear communication and technical precision.",
  },
  {
    logo: scalpLogo,
    name: "- Mr. Ajay Jariwala",
    review:
      "Professional, responsive, and technically strong. We truly appreciated the structured project handling.",
  },
  {
    logo: millionLogo,
    name: "- Mr.Ritesh Patel",
    review:
      "A reliable technology partner with strong business understanding and clear execution strategy.",
  },
  {
    logo: fourStepLogo,
    name: "- Mr. Sandeep",
    review:
      "From planning to deployment everything was seamless. We value their long-term support.",
  },
  {
    logo: regionalLogo,
    name: "- Mr. Jatin",
    review:
      "The team delivered outstanding results with strong communication and disciplined development workflow.",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonial-section">
      <h2 className="testimonial-title">What Client's are Saying</h2>

      <Swiper
        modules={[Autoplay]}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial-card">
              <div className="quote-left">“</div>

              <div className="testimonial-logo">
                <img src={item.logo} alt={item.name} />
              </div>

              <p className="testimonial-text">{item.review}</p>

              <h4 className="testimonial-name">{item.name}</h4>

              <div className="quote-right">”</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;