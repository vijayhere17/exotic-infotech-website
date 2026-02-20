import { Routes, Route } from "react-router-dom";

import Headersection from "./components/Homepage/HeaderSection";
import Header from "./components/Homepage/Header";
import Footer from "./components/Homepage/Footer";
import Footersection from "./components/Homepage/FooterSection";
import ServiceDetails from "./pages/ServiceDetails";

import Homepage from "./pages/Homepage";
import Company from "./pages/aboutuspage";
import Design from "./pages/Portfolio";
import Blog from "./pages/Blog";
import Industries from "./pages/Industries";
import Contact from "./pages/Contact";
import WhatsAppButton from "./components/WhatsAppButton/WhatsAppButton";

function App() {
  return (
    <>
      <Headersection />
      <Header />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/company" element={<Company />} />
        <Route path="/design" element={<Design />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services/:slug" element={<ServiceDetails />} />

        <Route path="*" element={<div>404 Page Not Found</div>} />
      </Routes>
      <WhatsAppButton />

      <Footer />
      <Footersection />
    </>
  );
}

export default App;
