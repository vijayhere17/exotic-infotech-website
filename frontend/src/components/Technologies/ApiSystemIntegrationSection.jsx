import React from "react";
import "./ApiSystemIntegrationSection.css";

import {
  FaDatabase,
  FaShieldAlt,
  FaLock,
  FaUserShield,
  FaKey,
  FaProjectDiagram,
} from "react-icons/fa";

import {
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiRedis,
  SiStripe,
} from "react-icons/si";

import { BsGearFill } from "react-icons/bs";
import { MdPayment, MdApi } from "react-icons/md";
import { RiCustomerService2Fill } from "react-icons/ri";

const ApiSystemIntegrationSection = () => {
  return (
    <section className="integration-section">
      <div className="integration-wrapper">

        <div className="integration-header">
          <span className="section-label">SYSTEM CAPABILITIES</span>
          <h2 className="gradient-title">
            API, Data & Security Infrastructure
          </h2>
          <p>
            We create unified, secure, and scalable digital ecosystems for
            enterprise-grade applications.
          </p>
        </div>

        <div className="integration-grid">

          {/* API & Integrations */}
          <div className="integration-card">
            <div className="top-line"></div>

            <div className="card-header">
              <FaProjectDiagram className="main-icon" />
              <h3>API & System Integrations</h3>
            </div>

            <ul>
              <li><MdApi className="icon blue" /> REST APIs</li>
              <li><MdPayment className="icon green" /> Payment Gateways</li>
              <li><BsGearFill className="icon purple" /> ERP Systems</li>
              <li><RiCustomerService2Fill className="icon orange" /> CRM Platforms</li>
              <li><SiStripe className="icon stripe" /> Third-party Integrations</li>
            </ul>

            <p className="card-desc">
              Creating unified digital ecosystems.
            </p>
          </div>

          {/* Database */}
          <div className="integration-card">
            <div className="top-line"></div>

            <div className="card-header">
              <FaDatabase className="main-icon" />
              <h3>Data & Database Technologies</h3>
            </div>

            <ul>
              <li><SiPostgresql className="icon postgres" /> PostgreSQL</li>
              <li><SiMysql className="icon mysql" /> MySQL</li>
              <li><SiMongodb className="icon mongo" /> MongoDB</li>
              <li><SiRedis className="icon redis" /> Redis</li>
            </ul>

            <p className="card-desc">
              Optimized for performance, reliability, and structured data management.
            </p>
          </div>

          {/* Security */}
          <div className="integration-card full-width">
            <div className="top-line"></div>

            <div className="card-header">
              <FaShieldAlt className="main-icon" />
              <h3>Security & Compliance Awareness</h3>
            </div>

            <ul>
              <li><FaUserShield className="icon blue" /> Role-based access control</li>
              <li><FaLock className="icon red" /> Data encryption</li>
              <li><FaKey className="icon gold" /> Secure authentication systems</li>
              <li><FaShieldAlt className="icon blue" /> GDPR-conscious architecture</li>
              <li><FaProjectDiagram className="icon purple" /> NDA-ready project engagement</li>
            </ul>

            <p className="card-desc">
              Security is integrated into development, not added later.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ApiSystemIntegrationSection;