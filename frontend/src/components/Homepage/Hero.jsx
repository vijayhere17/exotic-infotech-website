import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import "./Hero.css";

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
  const [loadBackground, setLoadBackground] = useState(false);
  const [loadRobot, setLoadRobot] = useState(false);

  useEffect(() => {
    // Text animation interval
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 3000);

    // Lazy load spline background & robot
    const bgTimer = setTimeout(() => {
      setLoadBackground(true);
    }, 300);

    const robotTimer = setTimeout(() => {
      setLoadRobot(true);
    }, 1000);

    return () => {
      clearInterval(interval);
      clearTimeout(bgTimer);
      clearTimeout(robotTimer);
    };
  }, []);

  return (
    <section className="hero-container">

      {/* Background Spline (Lazy Loaded) */}
      <div className="spline-wrapper">
        {loadBackground && (
          <iframe
            src="https://my.spline.design/serenityinsymmetry-dbX7kaVDRrzDSyBdrMUeFWIY/"
            frameBorder="0"
            title="Spline Background"
            className="spline-iframe"
            loading="lazy"
            allow="autoplay; fullscreen"
          />
        )}
      </div>

      <div className="hero-overlay" />

      {/* Main Content */}
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
          We support companies in Europe, India, and international markets
          with structured development processes, clear communication, and
          scalable technology solutions.
        </p>

        <button className="cta-btn">
          Let's Connect
          <ArrowRight className="arrow-icon" size={18} />
        </button>
      </div>

      {/* Robot — Lazy Loaded */}
      {loadRobot && (
        <div className="robot-wrapper">
          <iframe
            src="https://my.spline.design/robotcopy-Yk4ylNmQiBD8fvq8uWKtornn/"
            frameBorder="0"
            title="Robot"
            className="robot-iframe"
            loading="lazy"
            allow="autoplay; fullscreen"
          />
        </div>
      )}

    </section>
  );
};

export default Hero;