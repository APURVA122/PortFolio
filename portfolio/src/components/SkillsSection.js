import React from "react";
import Terminal from "./Terminal";
import { resumeData } from "../data/Data";

export default function SkillsSection({ onClose }) {
  const { languages, tools, concepts } = resumeData.skills;

  return (
    <Terminal title="C:\PORTFOLIO\SKILLS.EXE" onClose={onClose}>
      <h2 className="term-heading">&gt; SKILLS_</h2>

      <h3 className="term-subheading">&gt; LANGUAGES</h3>
      <div className="term-tags">
        {languages.map((skill, i) => (
          <span key={i} className="term-tag">
            [{skill}]
          </span>
        ))}
      </div>

      <h3 className="term-subheading">&gt; TOOLS</h3>
      <div className="term-tags">
        {tools.map((tool, i) => (
          <span key={i} className="term-tag">
            [{tool}]
          </span>
        ))}
      </div>

      <h3 className="term-subheading">&gt; CONCEPTS</h3>
      <div className="term-tags">
        {concepts.map((concept, i) => (
          <span key={i} className="term-tag">
            [{concept}]
          </span>
        ))}
      </div>
    </Terminal>
  );
}
