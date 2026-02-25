import "./WhatWeDo.css";
import { useParams } from "react-router-dom";
import services from "../../data/servicesData";

export default function WhatWeDo() {
  const { slug } = useParams();

  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return <h2>Service not found</h2>;
  }

  const data = service.benefits;

  if (!data || data.length === 0) {
    return null;
  }

  return (
    <section className="whatwedo">
      <h2 className="section-title">What We Do</h2>

      <div className="cards-wrapper">
        {data.map((item, index) => (
          <div key={index} className="service-card">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
