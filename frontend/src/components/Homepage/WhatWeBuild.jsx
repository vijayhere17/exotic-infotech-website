import React from "react";
import {
  Settings,
  Cloud,
  ShoppingCart,
  Smartphone,
  BarChart3,
  Link2,
  Workflow,
} from "lucide-react";
import "./WhatWeBuild.css";

const services = [
  {
    icon: <Settings size={48} />,
    title: "Custom Business Software",
    desc: "Tailored digital solutions designed specifically for your operations and long-term growth strategy.",
  },
  {
    icon: <Cloud size={48} />,
    title: "SaaS Product Development",
    desc: "End-to-end SaaS solutions built with scalability, performance, and security in mind.",
  },
  {
    icon: <ShoppingCart size={48} />,
    title: "Web & E-Commerce Platforms",
    desc: "High-performance platforms built for credibility, scalability, and business growth.",
  },
  {
    icon: <Smartphone size={48} />,
    title: "Mobile Applications",
    desc: "Secure and scalable mobile apps designed to enhance engagement and operations.",
  },
  {
    icon: <BarChart3 size={48} />,
    title: "Digital Marketing",
    desc: "Data-driven marketing strategies focused on measurable and sustainable growth.",
  },
  {
    icon: <Link2 size={48} />,
    title: "API Integrations",
    desc: "Seamless system integrations to connect tools into a unified digital ecosystem.",
  },
  {
    icon: <Workflow size={48} />,
    title: "Process Automation",
    desc: "Streamline workflows and eliminate repetitive tasks with smart automation.",
  },
];

const WhatWeBuild = () => {
  return (
    <section className="wwb-section">
      <div className="wwb-container">
        
        <div className="wwb-left">
          <h2 className="wwb-title">What We Build</h2>
          <p className="wwb-description">
            We build digital ecosystems that empower businesses to innovate, scale, and lead in a competitive world.
          </p>
          <div className="build-ctaa">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=Info@exoticinfotech.com&su=Project%20Discussion&body=Hi%2C%20I%20would%20like%20to%20discuss%20my%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="cta-buttonn"
          >
            Discuss Your Project
          </a>
        </div>
        </div>

        <div className="wwb-grid">
          {services.map((service, index) => (
            <div className="wwb-card" key={index}>
              <div className="wwb-icon">{service.icon}</div>
              <h4 className="wwb-card-title">{service.title}</h4>
              <p className="wwb-card-desc">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeBuild;