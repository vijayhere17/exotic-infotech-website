import React from "react";
import "./TechnologyExpertise.css";
import {
  ShieldCheck,
  Server,
  Gauge,
  Code2,
  Cloud,
} from "lucide-react";

const philosophyPoints = [
  { text: "Scalable Architecture", icon: <Server size={20} /> },
  { text: "Security-First Development", icon: <ShieldCheck size={20} /> },
  { text: "Performance Optimization", icon: <Gauge size={20} /> },
  { text: "Clean, Maintainable Code", icon: <Code2 size={20} /> },
  { text: "Cloud-Ready Infrastructure", icon: <Cloud size={20} /> },
];

const TechnologyExpertise = () => {
  return (
    <section className="tech-section">
      <div className="tech-wrapper">

        <div className="tech-header">
          <span className="section-label">ENGINEERING FOUNDATION</span>
          <h2 className="gradient-title">
            Technology & Engineering Expertise
          </h2>
        </div>

        <div className="tech-container">

          <div className="tech-content">
            <p className="tech-description">
              We build modern digital systems using reliable, scalable, and
              future-ready technologies. Our technology decisions are driven by
              business goals, performance requirements, and long-term
              maintainability.
            </p>

            <p className="tech-highlight">
              We do not select tools based on trends alone. We select technologies
              based on what delivers measurable value.
            </p>
          </div>

          <div className="tech-card">
            <div className="card-top-line"></div>

            <h3 className="card-title">Our Technology Philosophy</h3>

            <div className="card-grid">
              {philosophyPoints.map((point, index) => (
                <div key={index} className="card-item">
                  <div className="icon-wrapper">
                    {point.icon}
                  </div>
                  <span>{point.text}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TechnologyExpertise;