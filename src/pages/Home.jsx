import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";


function Home() {
  const { t } = useTranslation();

  return (
    <section className="home-section">
      <div className="home-content">
        <h1 className="home-title">
          {t("home.greeting", { name: "Luciano Piehl" })}
        </h1>
        <h2 className="home-subtitle">{t("home.role")}</h2>
        <p className="home-description">{t("home.description")}</p>

        <div className="home-buttons">
          <Link to="/projects" className="btn primary-btn">
            {t("home.viewProjects")}
          </Link>
          <a href="https://www.linkedin.com/in/luciano-piehl" className="btn secondary-btn">
            {t("home.linkedin")}
          </a>
            <a href="https://github.com/LucianoPiehl" className="btn secondary-btn">
            {t("home.github")}
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;
