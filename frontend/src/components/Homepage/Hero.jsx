import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import "./Hero.css";
// import video from "../../assets/exoticvideo1.mp4";

const texts = [
  "Serving Businesses Across Europe & Asia",
  "Bespoke Website Development",
  "Custom Software Solutions",
  "Seamless User Experiences",
  "Scalable Cloud Infrastructure",
  "AI-Powered Applications",
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-container">
      {/* Spline Interactive Background */}
<div className="spline-wrapper">
  <iframe
    id="spline-frame"
    src="https://my.spline.design/serenityinsymmetry-dbX7kaVDRrzDSyBdrMUeFWIY/"
    frameBorder="0"
    title="Spline Background"
    className="spline-iframe"
  ></iframe>


 
</div>

      <div className="hero-overlay"></div>

      <div className="hero-content">
        <h4 className="subtitle">EMPOWERING YOUR</h4>

        <div className="flip-wrapper">
          <AnimatePresence mode="wait">
            <motion.h1
              key={index}
              data-text={texts[index]}
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -60, opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="flip-text"
            >
              {texts[index]}
            </motion.h1>
          </AnimatePresence>
        </div>

        <p className="hero-description">
          We support companies in Europe, India, and other international markets
          with structured development processes, clear communication, and
          scalable technology solutions.
        </p>

        <button className="cta-btn">
          Let’s Connect
          <ArrowRight className="arrow-icon" size={18} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
