import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useParams } from "react-router-dom";
import services from "../../data/servicesData";
import "./ServicesSlider.css";

export default function ServicesSlider() {
  const { slug } = useParams();
  const otherServices = services.filter((service) => service.slug !== slug);

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === otherServices.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? otherServices.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const autoSlide = setInterval(nextSlide, 5000);
    return () => clearInterval(autoSlide);
  }, [otherServices.length]);

  if (otherServices.length === 0) {
    return null;
  }

  const currentService = otherServices[currentIndex];

  return (
    <section className="services-slider">
      <h2 className="slider-title">
        Our Other Services
      </h2>

      <div className="slider-wrapper">
        <button className="nav-arrow left" onClick={prevSlide}>
          <FaChevronLeft />
        </button>

        <div className="slide-track">
          <div
            className="slides"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {otherServices.map((service, index) => (
              <div className="slide" key={index}>
                <div className="slide-left">
                  <img src={service.hero.image} alt={service.hero.title} />
                </div>

                <div className="slide-right">
                  <h3>{service.hero.title}</h3>
                  <p>{service.hero.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button className="nav-arrow right" onClick={nextSlide}>
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
}