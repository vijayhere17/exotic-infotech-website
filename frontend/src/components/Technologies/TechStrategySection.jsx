import React from "react";
import { FaArrowRight } from "react-icons/fa";
import "./TechStrategySection.css";
import techImage from "../../assets/images/technical-system.png";

const TechStrategySection = () => {
  return (
    <section className="strategy-section">
      <div className="strategy-wrapper">

        <div className="strategy-container">

          {/* LEFT CONTENT */}
          <div className="strategy-content">

            <span className="section-label">TECHNOLOGY STRATEGY</span>

            <h2 className="strategy-title">
              Technology is a tool.
              <br />
              <span className="gradient-highlight">
                Strategy is what creates value.
              </span>
            </h2>

            <p className="strategy-description">
              We combine engineering expertise with structured execution to build
              digital systems that deliver measurable business impact.
            </p>

            <button className="strategy-btn">
              Discuss Your Technical Requirements
              <FaArrowRight className="btn-icon" />
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="strategy-image-wrapper">
            <div className="image-glow"></div>
            <img
              src={techImage}
              alt="Engineering and Digital Systems Illustration"
              className="strategy-image"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default TechStrategySection;