import React from "react";
import { Link } from "react-router-dom";
import services from "../data/servicesData";

const Services = () => {
  return (
    <section style={{ padding: "120px 8%", background: "#f8f9fb" }}>
      <h1 style={{ textAlign: "center", marginBottom: "60px" }}>Our Services</h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "40px" }}>
        {services.map((service) => (
          <div key={service.slug} style={{ background: "#fff", padding: "30px", borderRadius: "8px", boxShadow: "0 2px 10px rgba(0,0,0,0.1)", textAlign: "center" }}>
            <img src={service.hero.image} alt={service.hero.title} style={{ width: "80px", height: "80px", marginBottom: "20px" }} />
            <h3 style={{ marginBottom: "10px" }}>{service.hero.title}</h3>
            <p style={{ marginBottom: "20px", color: "#666" }}>{service.hero.description}</p>
            <Link to={`/services/${service.slug}`} style={{ background: service.themeColor, color: "#fff", padding: "10px 20px", textDecoration: "none", borderRadius: "5px", display: "inline-block" }}>Learn More</Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;