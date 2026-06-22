import React from "react";
import { resumeData } from "../data/resumeData";

export default function ProjectsSection() {
  return (
    <div>
      <div className="sec-h2" style={{ marginTop: 0 }}>
        📁 <span className="sec-h2-accent">Projects</span>
        <span style={{ marginLeft: "auto", fontSize: 11, color: "#6b7280", fontWeight: 400 }}>
          {resumeData.projects.length} projects
        </span>
      </div>

      {resumeData.projects.map((p) => (
        <div key={p.id} className="proj-card" style={{ "--accent": p.accent }}>
          <div className="proj-header">
            <span className="proj-emoji">{p.emoji}</span>
            <span className="proj-title">{p.title}</span>
          </div>
          <div className="proj-tagline">{p.tagline}</div>
          <div className="proj-summary">{p.summary}</div>

          <ul className="proj-features">
            {p.features.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>

          <div className="tech-row">
            {p.tech.map((t, i) => (
              <span key={i} className="tech-pill">{t}</span>
            ))}
          </div>

          <div className="proj-links">
            {p.links.map((l, i) => (
              <a
                key={i}
                className="proj-link"
                href={l.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ background: p.accent, color: p.accent === "#00ffff" ? "#000" : "#fff" }}
              >
                {l.label} ↗
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
