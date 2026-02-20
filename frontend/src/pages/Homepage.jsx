import React from "react";
import Hero from "../components/Homepage/Hero";
import Services from "../components/Homepage/ServiceSection";
import Counter from "../components/Homepage/CounterSection";
import ApproachSection from "../components/Homepage/ApproachSection";
import Leader from "../components/Homepage/OurLeaders";

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
