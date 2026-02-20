import React from "react";
import "./ServiceSection.css";

const services = [
  {
    title: "WordPress Development",
    image: "https://meshvtechnology.com/wp-content/uploads/2024/07/wordpress.png",
    desc: "WordPress is the most popular content management system (CMS) for website development."
  },
  {
    title: "Joomla Development",
    image: "https://meshvtechnology.com/wp-content/uploads/2024/07/joomla.png",
    desc: "Utilize the open-source framework to maintain a razor-sharp focus on user convenience."
  },
  {
    title: "UI/UX Development",
    image: "https://meshvtechnology.com/wp-content/uploads/2024/07/ui-ux.png",
    desc: "UI and UX are crucial for engaging visitors and creating lasting impressions."
  },
  {
    title: "Laravel Development",
    image: "https://meshvtechnology.com/wp-content/uploads/2024/07/laravel.png",
    desc: "Laravel is a full-stack framework for building robust web applications."
  },
  {
    title: "Angular Development",
    image: "https://meshvtechnology.com/wp-content/uploads/2024/07/angular.png",
    desc: "Comprehensive Angular web development services tailored for your business."
  },
  {
    title: "Flutter Development",
    image: "https://meshvtechnology.com/wp-content/uploads/2024/07/flutter.png",
    desc: "Build mobile apps for both Android and iOS using Flutter."
  },
  {
    title: "Node JS Development",
    image: "https://meshvtechnology.com/wp-content/uploads/2024/07/nodejs.png",
    desc: "NodeJS helps build scalable and high-performance applications."
  },
  {
    title: "React Native Development",
    image: "https://meshvtechnology.com/wp-content/uploads/2024/07/react-native.png",
    desc: "Cross-platform mobile apps built efficiently using React Native."
  },
  {
    title: "Shopify Development",
    image: "https://meshvtechnology.com/wp-content/uploads/2024/07/shopify.png",
    desc: "Build powerful and attractive Shopify eCommerce websites."
  },
  {
    title: "Magento Development",
    image: "https://meshvtechnology.com/wp-content/uploads/2024/07/megento.png",
    desc: "Robust and scalable Magento eCommerce development solutions."
  }
];

const ServiceSection = () => {
  return (
   <section id="service" className="service-section">
  <div className="service-wrapper">

    
    <div className="service-left">
      <span className="small-title">Ready To Start With Us?</span>
      <h2>Our Services</h2>
      <p>
        Empower your business with cutting-edge technologies
        to help it expand and thrive.
      </p>
      <a href="/service" className="btn-primary">Read More</a>
    </div>

    
    <div className="service-right">
      <div className="services-grid">
        {services.map((service) => (
          <div className="service-card" key={service.title}>
            <img src={service.image} alt={service.title} />
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </div>

  </div>
</section>

  );
};

export default ServiceSection;
