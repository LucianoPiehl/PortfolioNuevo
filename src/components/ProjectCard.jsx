import React from "react";

function ProjectCard({ nameProject, description, techImages = [], linkGithub }) {
  return (
    <div className="project-card" style={{ textAlign: "center", margin: "1.5rem 0" }}>
      <div
        className="project-techs"
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "0.5rem",
          flexWrap: "wrap",
          marginBottom: "0.75rem",
        }}
      >
        {techImages.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`${nameProject} tech ${index + 1}`}
            width="40"
            height="40"
            style={{ borderRadius: "6px" }}
          />
        ))}
      </div>

      <h3 style={{ marginBottom: "0.5rem" }}>{nameProject}</h3>
      <p style={{ marginBottom: "0.75rem" }}>{description}</p>

      {linkGithub && (
        <a
          href={linkGithub}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#007bff",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Ver proyecto →
        </a>
      )}
    </div>
  );
}

export default ProjectCard;
