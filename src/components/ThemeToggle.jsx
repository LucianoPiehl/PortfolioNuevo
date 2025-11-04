import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

function ThemeToggle() {
  const { t } = useTranslation();
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    const initialTheme = savedTheme || (prefersDark ? "dark" : "light");
    setTheme(initialTheme);
    document.body.classList.toggle("dark", initialTheme === "dark");
  }, []);

  const toggleTheme = () => {
  const oldTheme = theme;
  const newTheme = theme === "light" ? "dark" : "light";
  setTheme(newTheme);
  document.body.classList.toggle("dark", newTheme === "dark");
  localStorage.setItem("theme", newTheme);

  // Overlay
  const overlay = document.createElement("div");
  overlay.className = "theme-overlay";
  overlay.style.color = oldTheme === "light" ? "#fff" : "#2c2c2c";

  const hole = document.createElement("div");
  hole.className = "hole";

  if (newTheme === "dark") {
    hole.classList.add("luna"); // media luna
  }
  overlay.appendChild(hole);
  document.body.appendChild(overlay);

  setTimeout(() => {
    document.body.removeChild(overlay);
  }, 2000);
};


  return (
    <button className="theme-toggle" onClick={toggleTheme}>
      {theme === "light" ? `🌙 ${t("theme.dark")}` : `☀️ ${t("theme.light")}`}
    </button>
  );
}

export default ThemeToggle;
