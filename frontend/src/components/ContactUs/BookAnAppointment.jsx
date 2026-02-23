import React from "react";
import "./BookAnAppointment.css";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

export default function BookAnAppointment() {
  const phoneNumber = "918511624907";
  const message = "Hello! I would like to know more about your services.";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message,
  )}`;

  return (
    <div className="book-section">
      <div className="book-box">
        <div className="book-content">
          <h2>Schedule a meeting with our team today!</h2>
        </div>

        <div className="book-action">
          <iframe
            src="https://lottie.host/embed/83797e48-8db4-4296-8ad0-a23574598951/On1yLnQ4EY.lottie"
            style={{ border: "none" }}
            title="Booking Animation"
          ></iframe>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="book-btn"
          >
            Book An Appointment
          </a>
        </div>
      </div>

      <div className="book-contact-bar">
        <div className="book-contact-item">
          <FaEnvelope className="book-contact-icon" />
          <span>Info@exoticinfo.com</span>
        </div>

        <div className="book-contact-item">
          <FaPhoneAlt className="book-contact-icon" />
          <span>+91 8511624907</span>
        </div>
      </div>
    </div>
  );
}
