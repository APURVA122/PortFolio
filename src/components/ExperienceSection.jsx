import React from "react";
import { resumeData } from "../data/resumeData";

export default function ExperienceSection() {
  return (
    <div>
      <div className="sec-h2" style={{ marginTop: 0 }}>
        💼 <span className="sec-h2-accent">Experience</span>
      </div>
      {resumeData.experience.map((e, i) => (
        <div key={i} className="exp-card">
          <div className="exp-title">{e.title}</div>
          <div className="exp-sub">{e.subtitle} · {e.duration}</div>
          <ul className="exp-points">
            {e.points.map((p, j) => <li key={j}>{p}</li>)}
          </ul>
        </div>
      ))}

      <div className="sec-h2">🏅 <span className="sec-h2-accent">Certifications</span></div>
      <div className="cert-grid">
        {resumeData.certifications.map((c, i) => (
          <div key={i} className="cert-card">
            <div className="cert-icon">{c.icon}</div>
            <div>
              <div className="cert-title">{c.title}</div>
              <div className="cert-issuer">{c.issuer}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
