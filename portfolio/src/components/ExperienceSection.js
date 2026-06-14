import React from "react";
import Terminal from "./Terminal";
import { resumeData } from "../data/Data";

export default function ExperienceSection({ onClose }) {
  return (
    <Terminal title="C:\PORTFOLIO\EXPERIENCE.EXE" onClose={onClose}>
      <h2 className="term-heading">&gt; EXPERIENCE_</h2>

      {resumeData.experience.map((exp, i) => (
        <div key={i} className="term-card">
          <div className="term-list-title">{exp.title}</div>
          <div className="term-text-secondary">
            {exp.subtitle} | {exp.duration}
          </div>
          <ul className="term-list">
            {exp.points.map((point, j) => (
              <li key={j} className="term-list-item-plain">
                - {point}
              </li>
            ))}
          </ul>
        </div>
      ))}

      <h3 className="term-subheading">&gt; CERTIFICATES &amp; ACHIEVEMENTS</h3>
      <ul className="term-list">
        {resumeData.certificates.map((cert, i) => (
          <li key={i} className="term-list-item-plain">
            - {cert}
          </li>
        ))}
      </ul>
    </Terminal>
  );
}
