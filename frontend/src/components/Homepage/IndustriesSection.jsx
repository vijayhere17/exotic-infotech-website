import React, { useState } from "react";
import "./IndustriesSection.css";
import Healthcare from "../../assets/Industries/Healthcare.jpg";
import RealEastate from "../../assets/Industries/RealEstate.jpg";
import Architects from "../../assets/Industries/Architects.jpg";
import Manufacturing from "../../assets/Industries/Manufacturing.jpg";
import Education from "../../assets/Industries/Education.jpg";
import Hospitality from "../../assets/Industries/Hospitality.jpg";
import Import from "../../assets/Industries/ImportExport.jpg";
import Logistics from "../../assets/Industries/Logistics.jpg";
import Sports from "../../assets/Industries/Sports.jpg";

const industries = [
  {
    title: "Healthcare",
    image:
      Healthcare,
  },
  {
    title: "Real Estate",
    image:
      RealEastate,
  },
  { 
    title: "Architects & Interior",
    image:
      Architects,
  },
  {
    title: "Manufacturing",
    image:
      Manufacturing,
  },
  {
    title: "Education",
    image:
      Education,
  },
  {
    title: "Hospitality",
    image:
      Hospitality,
  },
  {
    title: "Import/Export",
    image:
      Import,
  },
  {
    title: "Logistics",
    image:
      Logistics,
  },
  {
    title: "Sports",
    image:
      Sports,
  },
];

export default function IndustriesSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="industries-section">
      <h2 className="industries-heading">Industries We Serve</h2>

      <div className="industries-container">
        {industries.map((item, index) => (
          <div
            key={index}
            className={`industry-card ${
              activeIndex === index ? "active" : ""
            }`}
            style={{ backgroundImage: `url(${item.image})` }}
            onMouseEnter={() => setActiveIndex(index)}
          >
            <div className="overlay">
              <h3>{item.title}</h3>
              {activeIndex === index && item.description && (
                <p>{item.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}