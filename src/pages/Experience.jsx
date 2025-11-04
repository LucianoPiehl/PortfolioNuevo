import React from "react";
import { useTranslation } from "react-i18next";
import ExperienceCard from "../components/ExperienceCard.jsx";

function Experience() {
  const { t } = useTranslation();
  const experiences = t("experience.jobs", { returnObjects: true });

  return (
    <section>
      <h2>{t("experience.title")}</h2>
      <div className="experience-grid">
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} {...exp} />
        ))}
      </div>
    </section>
  );
}

export default Experience;
