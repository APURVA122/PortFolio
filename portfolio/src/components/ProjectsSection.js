import React from "react";
import Terminal from "./Terminal";
import { resumeData } from "../data/Data";

export default function ProjectsSection({ onClose }) {
  return (
    <Terminal title="C:\PORTFOLIO\PROJECTS.EXE" onClose={onClose}>
      <h2 className="term-heading">&gt; PROJECTS_</h2>

      {resumeData.projects.map((project, i) => (
        <div key={i} className="term-card">
          <div className="term-list-title">{project.title}</div>
          <div className="term-text-secondary">
            {project.date} | {project.tech.join(", ")}
          </div>

          <ul className="term-list">
            {project.points.map((point, j) => (
              <li key={j} className="term-list-item-plain">
                - {point}
              </li>
            ))}
          </ul>

          {project.link && (
            <a
              className="term-link"
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              [ VIEW PROJECT &gt;&gt; ]
            </a>
          )}
        </div>
      ))}
    </Terminal>
  );
}
