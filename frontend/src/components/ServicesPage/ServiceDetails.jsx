import { useParams } from "react-router-dom";

const serviceData = {
  java: {
    title: "Java Development",
    desc: "We build scalable enterprise Java applications."
  },
  php: {
    title: "PHP Development",
    desc: "Robust and dynamic PHP solutions."
  },
  html5: {
    title: "HTML5 Development",
    desc: "Modern and responsive web interfaces."
  },
  react: {
    title: "React Development",
    desc: "High-performance frontend applications."
  },
  angular: {
    title: "Angular Development",
    desc: "Enterprise Angular applications."
  },
  node: {
    title: "NodeJS Development",
    desc: "Backend systems with high scalability."
  },
  wordpress: {
    title: "WordPress Development",
    desc: "Custom WordPress website development."
  },
  magento: {
    title: "Magento Development",
    desc: "Powerful eCommerce platforms."
  },
  shopify: {
    title: "Shopify Development",
    desc: "Scalable Shopify eCommerce stores."
  },
  "react-native": {
    title: "React Native Development",
    desc: "Cross-platform mobile applications."
  },
  ios: {
    title: "iOS Native Development",
    desc: "Premium iOS applications."
  },
  android: {
    title: "Android Native Development",
    desc: "Custom Android mobile apps."
  },
  aws: {
    title: "AWS Cloud Services",
    desc: "Cloud infrastructure solutions."
  },
  azure: {
    title: "Azure Cloud Services",
    desc: "Microsoft Azure cloud deployments."
  },
  "google-cloud": {
    title: "Google Cloud Services",
    desc: "Google cloud architecture solutions."
  },
  ai: {
    title: "AI Integration",
    desc: "Artificial Intelligence solutions."
  },
  powerbi: {
    title: "Power BI Solutions",
    desc: "Advanced business analytics dashboards."
  },
  blockchain: {
    title: "Blockchain Development",
    desc: "Secure decentralized applications."
  }
};


const ServiceDetails = () => {
  const { slug } = useParams();
  const service = serviceData[slug];

  if (!service) {
    return <h2 style={{ padding: "120px" }}>Service Not Found</h2>;
  }

  return (
    <div style={{ padding: "120px" }}>
      <h1>{service.title}</h1>
      <p>{service.desc}</p>
    </div>
  );
};


export default ServiceDetails;