import React from "react";
import "./ContactSection.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section className="contact-section">
      <div className="contact-header">
        <h2>Get in touch and bring your tech ideas to life!</h2>
      </div>
      <div className="contact-container">
        <div className="contact-form-card">
          <h3>Let's Innovate Together!</h3>
          <p>
            Let's collaborate to create something amazing! We are dedicated to
            delivering fast and transforming solutions to address your
            challenges.
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
          <div className="contact-map">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.10613387445!2d73.00929131533171!3d21.726450985649984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa5f37090d7fa0243%3A0xe1b2f9f6e0afd119!2sExotic%20Infotech!5e0!3m2!1sen!2sin!4v1708425600000"
              width="100%"
              height="585"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>

          
          
          {/* <div className="contact-bottom">
            <span>+91 8511624907</span>
            <span>Book an Appointment</span>
            <span>Info@exoticinfo.com</span>
          </div> */}
        </div>
      </div>
    </section>
  );
}
