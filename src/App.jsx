import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import Experience from "./pages/Experience.jsx";
import Contact from "./pages/Contact.jsx";
import WhatsAppButton from "./components/WhatsappButton";
import Studies from "./pages/Studies";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  useEffect(() => {
  const header = document.querySelector("header");
  const main = document.querySelector("main");

  if (header && main) {
    const headerHeight = header.offsetHeight;
    main.style.paddingTop = `${headerHeight}px`;
  }

  // Recalcular si cambia el tamaño de la ventana
  window.addEventListener("resize", () => {
    const header = document.querySelector("header");
    const main = document.querySelector("main");
    if (header && main) {
      const headerHeight = header.offsetHeight;
      main.style.paddingTop = `${headerHeight}px`;
    }
  });
}, []);
  return (
    <Router>
      <ScrollToTop />
      <div>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/studies" element={<Studies />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/contact" element={<Contact />} />
            
          </Routes>
        </main>
        <WhatsAppButton />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
