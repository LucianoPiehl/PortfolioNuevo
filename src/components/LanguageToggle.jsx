import React, { useState } from "react";
import { useTranslation } from "react-i18next";

function LanguageToggle() {
  const { i18n } = useTranslation();
  const [animating, setAnimating] = useState(false);

  const currentLang = i18n.language || "es";

  const toggleLanguage = () => {
    if (animating) return; // bloquea clicks mientras la animación corre

    const newLang = currentLang === "es" ? "en" : "es";
    setAnimating(true);

    // Creamos overlay
    const overlay = document.createElement("div");
    overlay.className = "lang-overlay";

    const flagImg = document.createElement("img");
    flagImg.src = newLang === "es"
      ? "https://flagcdn.com/es.svg"
      : "https://flagcdn.com/us.svg";
    flagImg.className = "lang-overlay-flag";

    overlay.appendChild(flagImg);
    document.body.appendChild(overlay);

    // Forzamos reflow para que la animación funcione
    overlay.getBoundingClientRect();

    // Iniciamos animación
    overlay.classList.add("animate");

    setTimeout(() => {
      i18n.changeLanguage(newLang);
      localStorage.setItem("lang", newLang);
    }, 200); // cambiamos idioma casi al inicio para que no se note delay

    // Eliminamos overlay después de animación
    setTimeout(() => {
      document.body.removeChild(overlay);
      setAnimating(false);
    }, 2200); // misma duración que la animación
  };

  // Mostramos la bandera del idioma *alternativo* en el botón
  const flag = currentLang === "es"
    ? "https://flagcdn.com/us.svg"
    : "https://flagcdn.com/es.svg";

  return (
    <button className="lang-toggle" onClick={toggleLanguage}>
      <img src={flag} alt="Cambiar idioma" className="lang-flag" />
    </button>
  );
}

export default LanguageToggle;
