import React from "react";
import "./AboutHero.css";
import { FaStar } from "react-icons/fa";
import image from "../../assets/exoticphotos/img7.jpeg";

const AboutHero = () => {
  return (
    <section className="about-hero">
      <div className="about-container">
        <div className="about-left">
          <h1 className="about-title">
            Building Scalable Digital Solutions
            <br />
            with Agility and Excellence
          </h1>

          <p className="about-description">
            Techforce Global is a software development and IT consulting company
            delivering tailored digital solutions across industries. Our expert
            team offers end-to-end services to meet your business goals.
          </p>

          <p className="about-description">
            We help startups, SMBs, and enterprises build scalable, secure
            software, providing dedicated teams and custom IT solutions that
            boost speed to market and ROI.
          </p>

          <button className="about-btn">
            View Portfolio
            <span className="gear">⚙</span>
          </button>
        </div>

        <div className="about-right">
          <img
            src={image}
            alt="Exotic Infotech"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
