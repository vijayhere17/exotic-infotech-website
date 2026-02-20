import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./ServicesSlider.css";

const slides = [
  {
    title: "Java Solutions",
    description:
      "Techforce have delivered many Java solutions throughout the years. Our team has developed robust web applications using Java framework. We help you scale your goals better and build software with updated technologies and budget-focused planning.",
    image: "https://cdn-icons-png.flaticon.com/512/2721/2721297.png",
  },
  {
    title: "Hire Java Developers",
    description:
      "Our Java developers work exclusively on your projects. The team is well versed with the updates and new technology trends in Java and J2EE and will successfully build web apps or software to take your business to the next level.",
    image: "https://cdn-icons-png.flaticon.com/512/2721/2721285.png",
  },
  {
    title: "Java Development Experts",
    description:
      "Java is one of the finest scripting languages. Our quality Java development services let you build custom business solutions. Our team has experience working with frameworks like Spring, JSF, JSP-Servlets and more.",
    image: "https://cdn-icons-png.flaticon.com/512/2721/2721271.png",
  },
];

export default function ServicesSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const autoSlide = setInterval(nextSlide, 5000);
    return () => clearInterval(autoSlide);
  }, []);

  return (
    <section className="services-slider">
      <h2 className="slider-title">
        Top Java Web Development Company
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
            {slides.map((slide, index) => (
              <div className="slide" key={index}>
                <div className="slide-left">
                  <img src={slide.image} alt={slide.title} />
                </div>

                <div className="slide-right">
                  <h3>{slide.title}</h3>
                  <p>{slide.description}</p>
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