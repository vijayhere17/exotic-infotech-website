import { useParams } from "react-router-dom";
import services from "../data/servicesData";
import Servicepage from "../components/services page/Servicepage";
import WhatWeDo from "../components/services page/WhatWeDo";
import ServicesSlider from "../components/services page/ServicesSlider";
import FAQSection from "../components/services page/FAQSection";
import ContactSection from "../components/AboutUs/ContactSection";

const ServiceDetails = () => {
  const { slug } = useParams();

  console.log("Slug from URL:", slug);
  console.log("Available services:", services);

  const service = services.find(
    (item) => item.slug === slug
  );

  if (!service) {
    return <h2>Service Not Found</h2>;
  }

  return (
    <>
      <Servicepage service={service} />
      <WhatWeDo />
      <ServicesSlider />
      <FAQSection />  
      <ContactSection />
    </>
  );
};

export default ServiceDetails;