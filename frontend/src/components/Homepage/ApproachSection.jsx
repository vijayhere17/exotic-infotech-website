import {
  ClipboardList,
  Palette,
  Code2,
  Rocket,
  Settings
} from "lucide-react";

import "./ApproachSection.css";

const steps = [
  {
    num: "01",
    title: "Requirement Understanding",
    desc: "Once you have dropped an inquiry, we take a call with you and understand your requirements for your project. We discuss your project goals and strategic direction.",
    color: "blue-soft",
    side: "right",
    icon: ClipboardList,
  },
  {
    num: "02",
    title: "Design and Prototyping",
    desc: "Our UI/UX team designs visually compelling interfaces and prototypes that ensure seamless user experiences and engagement.",
    color: "green-soft",
    side: "left",
    icon: Palette,
  },
  {
    num: "03",
    title: "Development & Quality Assurance",
    desc: "We build scalable web and mobile applications using modern technologies while ensuring high performance and reliability.",
    color: "blue-soft",
    side: "right",
    icon: Code2,
  },
  {
    num: "04",
    title: "Deployment",
    desc: "We deploy your application securely to production environments and ensure smooth performance across all platforms.",
    color: "green-soft",
    side: "left",
    icon: Rocket,
  },
  {
    num: "05",
    title: "Maintenance & Upgrades",
    desc: "We provide ongoing support, updates, and feature enhancements to keep your product competitive and future-ready.",
    color: "blue-soft",
    side: "right",
    icon: Settings,
  },
];

export default function ApproachSection() {
  return (
    <section className="approach">
      <div className="homebadge">Why Choose Exotic Infotech?</div>
      <div className="hometitle">Exotic Infotech is your strategic partner for cutting-edge digital solutions. We specialize in end-to-end Web Development, robust Software Development, and innovative Mobile Application Development. We bring all your digital needs under one roof.</div>
      

      <div className="homeapproach-list">
        {steps.map((step, i) => {
          const Icon = step.icon;
          return (
            <div key={i} className={`homerow ${step.side}`}>
              <div className={`homecard ${step.color}`}>
                <div className="icon">
                  <Icon size={26} />
                </div>

                <div className="number">{step.num}.</div>

                <div className="homecontent">
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </div>

            
            </div>
          );
        })}
      </div>

      <div className="hometech-visual">
        <div className="floating-box"></div>
        <div className="floating-box small"></div>
      </div>
    </section>
  );
}
