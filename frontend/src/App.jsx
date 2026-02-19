import { Routes, Route } from "react-router-dom";

import Headersection from "./components/HeaderSection/HeaderSection";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Footersection from "./components/FooterSection/FooterSection";

import Homepage from "./pages/Homepage";
import AboutUsPage from "./pages/aboutuspage";
import Portfolio from "./pages/Portfolio";
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
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/contact" element={<Contact />} />

      
        <Route path="*" element={<div>404 Page Not Found</div>} />
      </Routes>
      <WhatsAppButton />

      <Footer />
      <Footersection />
    </>
  );
}

export default App;
