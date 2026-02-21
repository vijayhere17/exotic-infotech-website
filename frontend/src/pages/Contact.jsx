import ContactSection from "../components/AboutUs/ContactSection";
import ConsultSection from "../components/ContactUs/ConsultSection";

function Contact() {
  return (
    <div style={{ padding: "100px 40px" }}>
      <h1>Contact Us</h1>
      <p>Get in touch with us.</p>
      <ContactSection />  
      <ConsultSection />
    </div>
  );
}

export default Contact;
