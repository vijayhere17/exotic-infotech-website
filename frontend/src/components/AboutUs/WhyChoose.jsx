import React from "react";
import "./WhyChoose.css";
import { FaCheck } from "react-icons/fa";
import developerImg from "./developer-illustration.png"; 
// Replace with your actual image path

const points = [
  {
    title: "ISO 9001:2015 Certified",
    desc: "Quality-first processes with structured documentation and continuous improvement frameworks.",
  },
  {
    title: "Agile Delivery",
    desc: "Sprint-based execution with transparency and flexibility.",
  },
  {
    title: "Skilled Talent Pool",
    desc: "A diverse team of certified developers, designers, and engineers.",
  },
  {
    title: "Client-Centric Approach",
    desc: "Dedicated account management and project governance.",
  },
  {
    title: "IP Protection & NDA",
    desc: "Enterprise-grade confidentiality and compliance practices.",
  },
];

export default function WhyChoose() {
  return (
    <section className="why-section">
      <div className="why-container">
        <h2 className="why-title">Why Choose Techforce?</h2>

        <div className="why-content">
          {/* Left Illustration */}
          <div className="why-image">
            <img src={developerImg} alt="Developer Illustration" />
          </div>

          {/* Right Content */}
          <div className="why-points">
            {points.map((item, index) => (
              <div key={index} className="why-item">
                <div className="check-icon">
                  <FaCheck />
                </div>
                <div>
                  <h4>{item.title}:</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
