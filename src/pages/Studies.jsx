import React from "react";
import { useTranslation } from "react-i18next";


function Studies() {
  const { t } = useTranslation();
  const studies = t("studies.items", { returnObjects: true });

  return (
    <section className="studies-section">
      <h2>{t("studies.title")}</h2>
      <div className="studies-list">
        {studies.map((study, index) => (
          <div className="study-card" key={index}>
            <h3 className="study-institution">{study.institution}</h3>
            <p className="study-degree">{study.degree}</p>
            <p className="study-period">{study.period}</p>
            {study.note && <p className="study-note">{study.note}</p>}
            <p className="study-grade">{study.grade}</p>

            <div className="study-skills">
              {study.skills.map((skill, i) => (
                <span className="study-skill" key={i}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Studies;
