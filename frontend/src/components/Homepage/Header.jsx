import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaJava,
  FaPhp,
  FaHtml5,
  FaReact,
  FaAngular,
  FaNodeJs,
  FaWordpress,
  FaApple,
  FaAndroid,
} from "react-icons/fa";
import { SiMagento, SiShopify } from "react-icons/si";
import logo from "../../assets/images/companylogo.png";
import "./Header.css";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const toggleMobile = () => {
    setMobileOpen(!mobileOpen);

    if (mobileOpen) {
      setServicesOpen(false);
    }
  };

  return (
    <header className="header">
      <div className="navbar">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="Exotic Infotech" />
        </Link>

        <div
          className={`hamburger ${mobileOpen ? "active" : ""}`}
          onClick={toggleMobile}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`nav-menu ${mobileOpen ? "open" : ""}`}>
          <li>
            <Link to="/company" className="nav-link">
              Company
            </Link>
          </li>

          <li className="nav-item services-item">
            <div
              className="nav-link services-trigger"
              onClick={() => setServicesOpen(!servicesOpen)}
            >
              Services
              <span className={`mobile-arrow ${servicesOpen ? "rotate" : ""}`}>
                ▼
              </span>
            </div>

            <div className={`mega-menu ${servicesOpen ? "show-mobile" : ""}`}>
              <div className="mega-grid">
                <div>
                  <h4>Web Development</h4>
                  <Link to="/services/java">
                    <FaJava /> Java
                  </Link>
                  <Link to="/services/php">
                    <FaPhp /> PHP
                  </Link>
                  <Link to="/services/html5">
                    <FaHtml5 /> HTML5
                  </Link>
                </div>

                <div>
                  <h4>JavaScript Framework</h4>
                  <Link to="/services/react">
                    <FaReact /> React
                  </Link>
                  <Link to="/services/angular">
                    <FaAngular /> Angular
                  </Link>
                  <Link to="/services/node">
                    <FaNodeJs /> NodeJS
                  </Link>
                </div>

                <div>
                  <h4>Ecommerce</h4>
                  <Link to="/services/wordpress">
                    <FaWordpress /> WordPress
                  </Link>
                  <Link to="/services/magento">
                    <SiMagento /> Magento
                  </Link>
                  <Link to="/services/shopify">
                    <SiShopify /> Shopify
                  </Link>
                </div>

                <div>
                  <h4>Mobile App</h4>
                  <Link to="/services/react-native">
                    <FaReact /> React Native
                  </Link>
                  <Link to="/services/ios">
                    <FaApple /> iOS
                  </Link>
                  <Link to="/services/android">
                    <FaAndroid /> Android
                  </Link>
                </div>
              </div>
            </div>
          </li>

          <li>
            <Link to="/technology" className="nav-link">
              Technology
            </Link>
          </li>
          <li>
            <Link to="/design" className="nav-link">
              Design
            </Link>
          </li>
          <li>
            <Link to="/industries" className="nav-link">
              Industries
            </Link>
          </li>
          <li>
            <Link to="/blog" className="nav-link">
              Blog
            </Link>
          </li>
          <li>
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </li>

          <li>
            <Link to="/letsconnect">
              <button className="contact-btn">Let's Connect</button>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
