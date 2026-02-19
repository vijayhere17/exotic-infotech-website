import React from "react";
import "./ContactSection.css";
import { FaStar, FaCalendarAlt, FaEnvelope } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-form-card">
          <h3>Let's Innovate Together!</h3>
          <p>
            Let's collaborate to create something amazing! We are dedicated to
            delivering fast and transforming solutions to address your challenges.
          </p>

          <form>
            <div className="form-row">
              <input type="text" placeholder="First Name *" />
              <input type="text" placeholder="Last Name *" />
            </div>

            <div className="form-row">
              <input type="email" placeholder="Email Address *" />
              <input type="text" placeholder="Phone Number *" />
            </div>

            <select>
              <option>Select Option *</option>
              <option>Web Development</option>
              <option>Mobile App</option>
              <option>UI/UX Design</option>
            </select>

            <textarea placeholder="Project Description *" rows="4"></textarea>

            <button type="submit">Submit</button>
          </form>
        </div>

        <div className="contact-info">
          <div className="badge">
            <FaStar /> Connect with Us
          </div>

          <h2>
            Get in touch and bring your tech ideas to life!
          </h2>

          <div className="country-cards">
            <div className="country-card">
              <div className="icon">🗿</div>
              <h4>India</h4>
              <p>+91+91 8511624907</p>
            </div>
          <div className="contact-bottom">
            <div className="appointment">
              <FaCalendarAlt className="bottom-icon blue" />
              <span>Book an Appointment</span>
            </div>

            <div className="email">
              <FaEnvelope className="bottom-icon orange" />
              <span>Info@exoticinfo.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
