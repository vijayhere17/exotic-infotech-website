import React from "react";
import "./TechnologyStack.css";

import {
  FaJava,
  FaNodeJs,
  FaPhp,
  FaPython,
  FaLaravel,
  FaReact,
  FaAngular,
  FaHtml5,
  FaCss3Alt,
  FaMobileAlt,
  FaAndroid,
  FaApple,
  FaShoppingCart,
} from "react-icons/fa";

import { SiNextdotjs, SiFlutter, SiMagento, SiShopify } from "react-icons/si";

const TechnologyStack = () => {
  return (
    <section className="core-section">
      <div className="core-container">

        <span className="core-label">TECH STACK</span>

        <h2 className="core-title">
          Core Development Technologies
        </h2>

        <p className="core-description">
          We design systems that are built to evolve with your business.
        </p>

        <div className="core-grid">

          {/* Backend */}
          <div className="core-card">
            <div className="card-top-line"></div>
            <h3>Backend Engineering</h3>
            <ul>
              <li><FaJava className="java" /> Java</li>
              <li><FaNodeJs className="node" /> Node.js</li>
              <li><FaPhp className="php" /> PHP</li>
              <li><FaPython className="python" /> Python</li>
              <li><FaLaravel className="laravel" /> Laravel</li>
            </ul>
            <p>
              Secure and high-performance server-side applications for enterprise platforms, automation systems, APIs, and SaaS products.
            </p>
          </div>

          {/* Frontend */}
          <div className="core-card">
            <div className="card-top-line"></div>
            <h3>Frontend Development</h3>
            <ul>
              <li><FaReact className="react" /> React</li>
              <li><FaAngular className="angular" /> Angular</li>
              <li><SiNextdotjs className="next" /> Next.js</li>
              <li><FaHtml5 className="html" /> HTML5</li>
              <li><FaCss3Alt className="css" /> Modern CSS</li>
            </ul>
            <p>
              Responsive, high-performance user interfaces focused on speed, usability, and seamless experience.
            </p>
          </div>

          {/* Mobile */}
          <div className="core-card">
            <div className="card-top-line"></div>
            <h3>Mobile & Cross-Platform</h3>
            <ul>
              <li><FaReact className="react" /> React Native</li>
              <li><SiFlutter className="flutter" /> Flutter</li>
              <li><FaAndroid className="android" /> Native Android</li>
              <li><FaApple className="apple" /> Native iOS</li>
            </ul>
            <p>
              Scalable mobile applications built for performance, security, and long-term maintainability.
            </p>
          </div>

          {/* eCommerce */}
          <div className="core-card">
            <div className="card-top-line"></div>
            <h3>eCommerce & Marketplace</h3>
            <ul>
              <li><SiMagento className="magento" /> Magento</li>
              <li><SiShopify className="shopify" /> Shopify</li>
              <li><FaShoppingCart className="custom" /> Custom Platforms</li>
              <li><FaMobileAlt className="headless" /> Headless Commerce</li>
            </ul>
            <p>
              High-performance commerce platforms designed for growth, scalability, and integration flexibility.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TechnologyStack;