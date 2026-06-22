import React from "react";
import { resumeData } from "../data/resumeData";

export default function SkillsSection() {
  return (
    <div>
      <div className="sec-h2" style={{ marginTop: 0 }}>
        ⚙️ <span className="sec-h2-accent">Technical Skills</span>
      </div>
      {Object.entries(resumeData.skills).map(([group, tags]) => (
        <div key={group} className="skill-group">
          <div className="skill-group-title">{group}</div>
          <div className="skill-tags">
            {tags.map((t, i) => (
              <span key={i} className="skill-tag">{t}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
