import React from "react";
import TechStack from "../components/TechStack.jsx";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();

  return (
    <section className="about-section">
      <h2>{t("about.title")}</h2>
      <p className="about-text">{t("about.text")}</p>
      <p className="about-extra">{t("about.extra")}</p>
      <p className="about-values">{t("about.values")}</p>

      <h3>{t("about.techTitle")}</h3>
      <TechStack
        techs={t("about.technologies", { returnObjects: true })}
      />
    </section>
  );
}

export default About;
