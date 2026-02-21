import { useState } from "react";
import "./Categories.css";

const categoriesData = [
  "AI",
  "Angular",
  "AWS",
  "Banking",
  "Blockchain",
  "Cloud Infrastructure",
  "Cryptocurrency",
  "Database",
  "Devops",
  "E-commerce",
  "Extended Team",
  "Fintech",
  "Insurance",
  "Java",
  "Metaverse",
  "Mobile App",
  "MySQL",
  "NFT",
  "Node JS",
  "PHP",
  "React JS",
  "React Native",
  "Retail",
  "software development",
  "Tokenomics",
  "UI/UX",
  "Web Design",
  "Web Development",
  "Web3",
];

export default function Categories() {
  const [active, setActive] = useState("E-commerce");

  return (
    <div className="categories-section">
      <h2 className="categories-title">Categories</h2>

      <div className="categories-wrapper">
        {categoriesData.map((item, index) => (
          <button
            key={index}
            className={`category-btn ${active === item ? "active" : ""}`}
            onClick={() => setActive(item)}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}