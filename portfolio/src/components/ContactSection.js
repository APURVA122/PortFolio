import React from "react";
import Terminal from "./Terminal";
import { resumeData } from "../data/Data";

export default function ContactSection({ onClose }) {
  const { email, phone, linkedin, github } = resumeData.contact;

  return (
    <Terminal title="C:\PORTFOLIO\CONTACT.EXE" onClose={onClose}>
      <h2 className="term-heading">&gt; CONTACT_</h2>

      <ul className="term-list">
        <li className="term-list-item-plain">
          EMAIL:&nbsp;
          <a className="term-link-inline" href={`mailto:${email}`}>
            {email}
          </a>
        </li>
        <li className="term-list-item-plain">
          PHONE:&nbsp;
          <a className="term-link-inline" href={`tel:${phone}`}>
            {phone}
          </a>
        </li>
        <li className="term-list-item-plain">
          LINKEDIN:&nbsp;
          <a
            className="term-link-inline"
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            {linkedin}
          </a>
        </li>
        <li className="term-list-item-plain">
          GITHUB:&nbsp;
          <a
            className="term-link-inline"
            href={github}
            target="_blank"
            rel="noopener noreferrer"
          >
            {github}
          </a>
        </li>
      </ul>

      <p className="term-text-secondary" style={{ marginTop: "1.5rem" }}>
        &gt; END OF FILE_
      </p>
    </Terminal>
  );
}
