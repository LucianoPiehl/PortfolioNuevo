import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

function Contact() {
  const { t } = useTranslation();
  const contact = t("contact", { returnObjects: true });
  const cleanNumber = contact.wpp.replace(/[^0-9]/g, "");
  const whatsappUrl = `https://wa.me/${cleanNumber}`;

  const [isDarkMode, setIsDarkMode] = useState(
    document.body.classList.contains("dark")
  );

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDarkMode(document.body.classList.contains("dark"));
    });

    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);


  return (
    <section className="contact-section">
      <h2>{contact.title}</h2>
      <p className="contact-intro">{contact.text}</p>

      <div className="contact-links">
        {/* Mail */}
        <a href={`mailto:${contact.mail}`} className="contact-item">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
            alt="Mail icon"
          />
          <span>Mail</span>
        </a>

        {/* WhatsApp */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-item"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp icon"
          />
          <span>WhatsApp</span>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/lucianopiehl/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-item"
        >
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
            alt="LinkedIn icon"
          />
          <span>LinkedIn</span>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/lucianopiehl"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-item"
        >
          <img src="githubNegro.svg" alt="GitHub icon" />
          <span>GitHub</span>
        </a>
      </div>

      <p className="contact-footer">
        {t("contact.line")}
      </p>
    </section>
  );
}

export default Contact;
