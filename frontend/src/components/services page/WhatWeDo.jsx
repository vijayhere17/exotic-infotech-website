import "./WhatWeDo.css";
import { useParams } from "react-router-dom";
import services from "../../data/servicesData";

export default function WhatWeDo() {
  const { slug } = useParams();

  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return <h2>Service not found</h2>;
  }

  const data = service.whatwedo || service.benefits;

  if (!data) {
    return null;
  }

  return (
    <section className="whatwedo">
      <h2 className="section-title">What We Do</h2>

      <div className="cards-wrapper">
        {data[0] && (
          <div className="service-card">
            <h3>{data[0].title}</h3>
            <p>{data[0].description}</p>
          </div>
        )}

        {data[1] && (
          <div className="service-card">
            <h3>{data[1].title}</h3>
            <p>{data[1].description}</p>
          </div>
        )}

        {data[2] && (
          <div className="service-card">
            <h3>{data[2].title}</h3>
            <p>{data[2].description}</p>
          </div>
        )}
        {data[3] && (
          <div className="service-card">
            <h3>{data[2].title}</h3>
            <p>{data[2].description}</p>
          </div>
        )}
        {data[4] && (
          <div className="service-card">
            <h3>{data[2].title}</h3>
            <p>{data[2].description}</p>
          </div>
        )}
        {data[5] && (
          <div className="service-card">
            <h3>{data[2].title}</h3>
            <p>{data[2].description}</p>
          </div>
        )}
      </div>
    </section>
  );
}
