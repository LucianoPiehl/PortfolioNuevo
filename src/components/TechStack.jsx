import React from "react";

function TechStack({ techs }) {
  return (
    <div className="stack">
      {techs.map((t) => (
        <div key={t.name} className="stack_unidad">
          <img
            src={t.image}
            alt={t.name}
            width="40"
            height="40"
          />
          <span>{t.name}</span>
        </div>
      ))}
    </div>
  );
}

export default TechStack;
