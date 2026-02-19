import React from "react";
import Hero from "../components/Hero/Hero";
import Services from "../components/Services/ServiceSection";
import Counter from "../components/CounterSection/CounterSection";
import ApproachSection from "../components/ApproachSection/ApproachSection";
import Leader from "../components/Leader/OurLeaders";

export default function Homepage() {
  return (
    <div>
      <Hero />
      <Services />
      <Counter />
      <ApproachSection />
      <Leader />
    </div>
  );
}
