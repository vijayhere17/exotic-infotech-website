import React from "react";
import "./OurApproach.css";
import {
  FaProjectDiagram,
  FaCode,
  FaCheckCircle,
  FaLayerGroup,
  FaTools,
  FaShieldAlt,
} from "react-icons/fa";

const features = [
  {
    icon: <FaProjectDiagram />,
    title: "Agile methodology",
  },
  {
    icon: <FaCode />,
    title: "Industry-standard coding practices",
  },
  {
    icon: <FaCheckCircle />,
    title: "Quality assurance integrated into every phase",
  },
  {
    icon: <FaLayerGroup />,
    title: "Scalable architecture for future growth",
  },
  {
    icon: <FaTools />,
    title: "Ongoing support and maintenance",
  },
  {
    icon: <FaShieldAlt />,
    title: "ISO Certified Processes",
  },
];

export default function OurApproach() {
  return (
    <section className="approach-section">
      <div className="approach-container">
        <h2 className="title">Our Approach</h2>

        <p className="description">
          At Exotic Infotech Global, we believe in a consultative approach. Our
          process begins by understanding your business needs, defining the
          technical roadmap, and delivering robust solutions tailored to your
          requirements. We emphasize transparency, collaboration, and continuous
          improvement.
        </p>

        <div className="cards-grid">
          {features.map((item, index) => (
            <div key={index} className="card">
              <h3>{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
