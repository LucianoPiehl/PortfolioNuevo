import React from "react";

function ExperienceCard({ position, company, type, date, location, description, skills }) {
  return (
    <div className="experience-card">
      <h3>{position}</h3>
      <h4>{company} · {type}</h4>
      <p className="experience-meta">{date} · {location}</p>
      <p className="experience-description">{description}</p>

      <div className="experience-skills">
        {skills.map((s) => (
          <div key={s.name} className="skill-item">
            <img src={s.image} alt={s.name} />
            <span>{s.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExperienceCard;
