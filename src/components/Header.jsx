import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle.jsx";
import LanguageToggle from "./LanguageToggle.jsx";
import { useTranslation } from "react-i18next";

function Header() {
  const { t } = useTranslation();
  const location = useLocation();
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (location.pathname === "/") {
      const handleScroll = () => {
        const sections = document.querySelectorAll("section[id]");
        const scrollY = window.scrollY;
        const header = document.querySelector("header");
        const offset = header ? header.offsetHeight + 20 : 80;

        let current = "";
        sections.forEach((section) => {
          const top = section.offsetTop - offset;
          const bottom = top + section.offsetHeight;
          if (scrollY >= top && scrollY < bottom) current = section.id;
        });
        setActiveSection(current || "home");
      };

      handleScroll();
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    } else {
      setActiveSection(location.pathname.substring(1) || "home");
    }
  }, [location]);

  const navLinks = [
    { path: "/", key: "home" },
    { path: "/about", key: "about" },
    { path: "/studies", key: "studies" },
    { path: "/projects", key: "projects" },
    { path: "/experience", key: "experience" },
    { path: "/contact", key: "contact" },
  ];

  return (
    <header>
      <h1>Luciano Piehl</h1>

      <button
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Menu"
      >
        <span />
        <span />
        <span />
      </button>

      <nav className={menuOpen ? "open" : ""}>
        {navLinks.map(({ path, key }) => (
          <Link
            key={key}
            to={path}
            className={activeSection === key ? "active" : ""}
            onClick={() => setMenuOpen(false)}
          >
            {t(`nav.${key}`)}
          </Link>
        ))}
      </nav>

      <div className="Toggles">
        <LanguageToggle />
        <ThemeToggle />
      </div>
    </header>
  );
}

export default Header;
