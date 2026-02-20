import "./WhatWeDo.css";
import { FaCode, FaServer, FaMobileAlt, FaCloud, FaExchangeAlt, FaUserTie } from "react-icons/fa";

const services = [
  {
    icon: <FaCode />,
    title: "Java Web Development Services",
    desc: "We offer robust Java frameworks like Apache Struts, Spring, Java Server Faces (JSF), JSP-Servlets which provide stability, flexibility and security."
  },
  {
    icon: <FaServer />,
    title: "Java Enterprise Development",
    desc: "Our team has deployed professional solutions using Enterprise Java Beans (EJB), Java Message Service (JMS), Java Persistence API (JPA), and more."
  },
  {
    icon: <FaMobileAlt />,
    title: "Java Desktop & Mobile Applications",
    desc: "We build applications using modern frameworks, modules, widgets and J2EE verticals delivering unique app solutions."
  },
  {
    icon: <FaCloud />,
    title: "Cloud-based Platforms",
    desc: "We design containerized apps running on cloud microservices architecture helping organizations transform digitally."
  },
  {
    icon: <FaExchangeAlt />,
    title: "Migrations and Integrations",
    desc: "We handle database migration, UI migration, application porting and Java upgrades ensuring flawless transition."
  },
  {
    icon: <FaUserTie />,
    title: "Java Consulting",
    desc: "From development to implementation and maintenance, we assist in delivering the most effective Java solutions."
  }
];

export default function WhatWeDo() {
  return (
    <section className="whatwedo">
      <h2 className="section-title">What We do</h2>

      <div className="cards-wrapper">
        {services.map((item, index) => (
          <div className="service-card" key={index}>
            <div className="icon-box">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}