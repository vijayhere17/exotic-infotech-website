import ContactSection from "../components/Letsconnect/ContactSection";
import ApiSystemIntegrationSection from "../components/Technologies/ApiSystemIntegrationSection";
import TechnologiesSection from "../components/Technologies/TechnologiesSection";
import TechnologyExpertise from "../components/Technologies/TechnologyExpertise";
import TechnologyStack from "../components/Technologies/TechnologyStack";
import TechStrategySection from "../components/Technologies/TechStrategySection";

function Technology() {
  return (
    <div style={{}}>
      <TechnologiesSection />
      <TechnologyExpertise />
      <TechnologyStack />
      <ApiSystemIntegrationSection />
      <TechStrategySection />
      <ContactSection />
    </div>
  );
}

export default Technology;
