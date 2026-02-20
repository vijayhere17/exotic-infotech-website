import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import "./Hero.css";
import video from "../../assets/exoticvideo.mp4";

const texts = [
  "Bespoke Website Development",
  "Custom Software Solutions",
  "Seamless User Experiences",
  "Scalable Cloud Infrastructure",
  "AI-Powered Applications"
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

    
      <video
        className="hero-video"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={video} type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="hero-overlay"></div>

      {/* Content */}
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
          We deliver advanced website development, custom software engineering
          solutions that empower businesses to innovate, optimize performance,
          and accelerate sustainable growth in a competitive digital landscape.
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
