import React from "react";
import ProjectCard from "../components/ProjectCard.jsx";
import { useTranslation } from "react-i18next";

function Projects() {
  const { t } = useTranslation();

  // 🔥 Devuelve el array completo de proyectos
  const projects = t("projects.project", { returnObjects: true });

  return (
    <section>
      <h2>{t("projects.title")}</h2>
      <div>
        {projects.map((p) => (
          <ProjectCard key={p.nameProject} {...p} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
