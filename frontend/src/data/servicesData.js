
import java from "../assets/images/java.jpg";

const services = [
  {
    slug: "java",
    themeColor: "#f89820",

    hero: {
      tagline: "We Build Solutions. We Deliver.",
      title: "Java Development",
      description:
        "We provide enterprise-grade Java applications, scalable backend systems, and secure business solutions using modern Java technologies.",
      image: java,
    },

    benefits: [
      {
        title: "Enterprise Ready",
        description: "Robust architecture for large-scale systems.",
      },
      {
        title: "Highly Secure",
        description: "Advanced security implementation for enterprise apps.",
      },
      {
        title: "Scalable",
        description: "Handles high traffic and complex operations.",
      },
    ],

    offerings: [
      "Custom Java Applications",
      "Spring Boot Development",
      "Microservices Architecture",
      "API Development",
      "Migration & Modernization",
    ],

    techStack: [
      "Java",
      "Spring Boot",
      "Hibernate",
      "Kafka",
      "MySQL",
    ],
  },

  {
    slug: "react",
    themeColor: "#61dafb",

    hero: {
      tagline: "Modern UI. Fast Performance.",
      title: "React Development",
      description:
        "We build modern, high-performance web applications using React with scalable frontend architecture.",
      image: "/images/services/react.png",
    },

    benefits: [
      {
        title: "Fast Rendering",
        description: "Virtual DOM ensures blazing fast performance.",
      },
      {
        title: "Reusable Components",
        description: "Efficient development using modular components.",
      },
      {
        title: "SEO Friendly",
        description: "Optimized architecture for better ranking.",
      },
    ],

    offerings: [
      "Custom React Web Apps",
      "SPA Development",
      "Next.js Development",
      "UI/UX Implementation",
      "Frontend Optimization",
    ],

    techStack: [
      "React",
      "Next.js",
      "Redux",
      "Tailwind",
      "Node.js",
    ],
  },
];

export default services;