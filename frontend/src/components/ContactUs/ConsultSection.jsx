import React from "react";
import "./ConsultSection.css";
import { FaPhoneAlt } from "react-icons/fa";

const stats = [
  { number: "24*7", text: "Fast Reply" },
  { number: "10+ Year", text: "Of Experience" },
  { number: "400+", text: "Solutions Delivered" },
  { number: "100+", text: "Experts in Team" },
];

const contacts = [
  {
    title: "Business Consultant",
    phone: "+1 (630) 296-6606",
    email: "Info@exoticinfo.com",
  },
  {
    title: "HR Manager",
    phone: "+91 7405303954",
    email: "Info@exoticinfo.com",
  },
  {
    title: "Business Consultant India",
    phone: "+91 (79) 48904529",
    email: "Info@exoticinfo.com",
  },
];

const ConsultSection = () => {
  return (
    <div className="consult-wrapper">
  
      <div className="stats-section">
        <div className="stats-container">
          {stats.map((item, index) => (
            <div className="stat-box" key={index}>
              <h2>{item.number}</h2>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="consult-section">
        <h2 className="consult-heading">
          Would You Like To Consult For Sales, Career, Or Other?
        </h2>

        <div className="consult-cards">
          {contacts.map((item, index) => (
            <div className="consult-card" key={index}>
              <h3>{item.title}</h3>
              <div className="contact-info">
                <p>
                  <FaPhoneAlt className="phone-icon" />
                  {item.phone}
                </p>
                <p>{item.email}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ConsultSection;