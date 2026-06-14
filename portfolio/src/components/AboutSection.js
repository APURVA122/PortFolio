import React from "react";
import Terminal from "./Terminal";
import { resumeData } from "../data/Data";

export default function AboutSection({ onClose }) {
  return (
    <Terminal title="C:\PORTFOLIO\ABOUT.EXE" onClose={onClose}>
      <h2 className="term-heading">&gt; ABOUT_</h2>

      <p className="term-text">
        NAME: {resumeData.name}
        <br />
        ROLE: Computer Science Student / Developer
      </p>

      <h3 className="term-subheading">&gt; EDUCATION</h3>
      <ul className="term-list">
        {resumeData.education.map((edu, i) => (
          <li key={i} className="term-list-item">
            <div className="term-list-title">{edu.degree}</div>
            <div className="term-text-secondary">
              {edu.institution} - {edu.location}
            </div>
            <div className="term-text-secondary">
              {edu.duration} | {edu.score}
            </div>
          </li>
        ))}
      </ul>

      <h3 className="term-subheading">&gt; LEADERSHIP &amp; COMMUNITY</h3>
      <ul className="term-list">
        {resumeData.leadership.map((item, i) => (
          <li key={i} className="term-list-item">
            <div className="term-list-title">{item.role}</div>
            <div className="term-text-secondary">{item.description}</div>
          </li>
        ))}
      </ul>
    </Terminal>
  );
}
