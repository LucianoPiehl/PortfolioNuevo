import React from "react";
import { useLocation } from "react-router-dom";
 // 🔹 Ajusta la ruta según tu estructura

function WhatsappButton() {
  const location = useLocation();

  // Ocultar el botón si estás en la sección contacto
  if (location.pathname === "/contact") return null;

  const whatsappNumber = "542254414767"; // sin + ni espacios
  const whatsappURL = `https://wa.me/${whatsappNumber}`;

  return (
    <a
      href={whatsappURL}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
    >
      <img src="whatsapp.svg" alt="WhatsApp" className="whatsapp-icon" />
    </a>
  );
}

export default WhatsappButton;
