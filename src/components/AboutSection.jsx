import React from "react";
import { resumeData } from "../data/resumeData";

export default function AboutSection() {
  const d = resumeData;
  return (
    <div>
      <div className="sec-hero">
        <div className="sec-avatar">👩‍💻</div>
        <div>
          <div className="sec-name">{d.name}</div>
          <div className="sec-title">{d.title}</div>
          <div className="sec-tagline">"{d.tagline}"</div>
          <div className="highlights">
            {d.highlights.map((h, i) => (
              <span key={i} className="highlight-pill">{h}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="sec-h2">🎓 <span className="sec-h2-accent">Education</span></div>
      {d.education.map((e, i) => (
        <div key={i} className="edu-item">
          <div className="edu-inst">{e.institution}</div>
          <div className="edu-deg">{e.degree}</div>
          <div className="edu-meta">{e.duration} · {e.score}</div>
        </div>
      ))}

      <div className="sec-h2">🤝 <span className="sec-h2-accent">Leadership</span></div>
      {d.leadership.map((l, i) => (
        <div key={i} className="edu-item">
          <div className="edu-inst">{l.role}</div>
          <div className="edu-deg" style={{ fontWeight: 400, color: "#374151" }}>{l.description}</div>
        </div>
      ))}
    </div>
  );
}
