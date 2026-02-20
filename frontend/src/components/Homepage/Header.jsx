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
  FaAws,
  FaMicrosoft,
} from "react-icons/fa";

import { SiMagento, SiShopify, SiGooglecloud } from "react-icons/si";

import "./Header.css";

const Header = () => {
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="header">
      <div className="container-fluid">
        <nav className="navbar">
         
          <Link className="navbar-brand" to="/">
            <img
              src="https://exoticinfotech.com/Company%20%20Logo.png"
              alt="Exotic Infotech"
            />
          </Link>

          <ul className="nav-menu">
          
            <li className="nav-item">
              <Link to="/company" className="nav-link">
                Company
              </Link>
            </li>

           
            <li
              className="nav-item"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
             <button className="nav-link">Services</button>


              <div className={`mega-menu ${servicesOpen ? "show" : ""}`}>
                <div className="mega-grid">
                  <div>
                    <h4>Web Development</h4>
                    <Link to="/services/java">
                      <FaJava /> Java Development
                    </Link>
                    <Link to="/services/php">
                      <FaPhp /> PHP Development
                    </Link>
                    <Link to="/services/html5">
                      <FaHtml5 /> HTML5
                    </Link>
                  </div>

                  <div>
                    <h4>JavaScript Framework</h4>
                    <Link to="/services/react">
                      <FaReact /> React Development
                    </Link>
                    <Link to="/services/angular">
                      <FaAngular /> Angular Development
                    </Link>
                    <Link to="/services/node">
                      <FaNodeJs /> NodeJS Development
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
                      <FaApple /> iOS Native
                    </Link>
                    <Link to="/services/android">
                      <FaAndroid /> Android Native
                    </Link>
                  </div>

                  <div>
                    <h4>Cloud & DevOps</h4>
                    <Link to="/services/aws">
                      <FaAws /> AWS
                    </Link>
                    <Link to="/services/azure">
                      <FaMicrosoft /> Azure
                    </Link>
                    <Link to="/services/google-cloud">
                      <SiGooglecloud /> Google Cloud
                    </Link>
                  </div>

                  <div>
                    <h4>Trending Tech</h4>
                    <Link to="/services/ai">
                      <FaReact /> AI Integration
                    </Link>
                    <Link to="/services/powerbi">
                      <FaMicrosoft /> Power BI
                    </Link>
                    <Link to="/services/blockchain">
                      <FaNodeJs /> Blockchain
                    </Link>
                  </div>
                </div>
              </div>
            </li>
             <li className="nav-item">
              <Link to="/technology" className="nav-link">
                Technology
              </Link>
            </li>
           
            <li className="nav-item">
              <Link to="/design" className="nav-link">
                Design
              </Link>
            </li>

               <li className="nav-item">
              <Link to="/industries" className="nav-link">
                Industries
              </Link>
            </li>

         
            <li className="nav-item">
              <Link to="/blog" className="nav-link">
                Blog
              </Link>
            </li>

      

           
           
            <li>
              <Link to="/contact">
                <button className="contact-btn">Let's Connect</button>
              </Link>
            </li>

            
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
