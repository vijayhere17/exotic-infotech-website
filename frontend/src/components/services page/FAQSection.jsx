import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import "./FAQSection.css";

const faqs = [
  {
    question: "How much does Java Development cost?",
    answer:
      "The cost of Java development project depends upon various factors which includes scope and complexity of the project, the required technology stack, number of developers necessary, engagement model itself and many different aspects. It is not possible to determine an estimate without knowing the project specifics."
  },
  {
    question:
      "In which areas does Techforce have experience creating Java projects?",
    answer:
      "Our Java programmers have extensive experience developing a wide range of apps in this language. We can build MVPs, custom apps, online and mobile apps, and enterprise solutions. We also assist in migrating legacy applications to Java and integrating with modern technology across industries like fintech, healthcare, education, retail, manufacturing and telecommunications."
  },
  {
    question:
      "Can I hire a Java programmer or a Java development team separately?",
    answer:
      "Yes, you can. Our Java development services cover the entire spectrum. You can hire an independently managed team or a dedicated Java developer depending on your project needs."
  },
  {
    question: "Is Java used for software development?",
    answer: "Yes."
  },
  {
    question: "What big companies use Java?",
    answer:
      "Google, Netflix, Uber, Spotify, eBay, and Goldman Sachs use Java to develop applications, systems and enterprise solutions."
  }
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <h2 className="faq-title">FAQ's</h2>

      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${
              activeIndex === index ? "active" : ""
            }`}
          >
            <div
              className="faq-question"
              onClick={() => toggleFAQ(index)}
            >
              <h3>{faq.question}</h3>
              <span className="icon">
                {activeIndex === index ? <FaMinus /> : <FaPlus />}
              </span>
            </div>

            <div className="faq-answer">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}