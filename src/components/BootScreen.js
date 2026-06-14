import React, { useEffect, useState } from "react";
import { resumeData } from "../data/Data";

const BOOT_LINES = [
  "INITIALIZING SYSTEM...",
  `LOADING USER PROFILE: ${resumeData.name.toUpperCase()}...`,
  "B.TECH CSE @ JIIT NOIDA | CGPA 7.92",
  "",
  "SYSTEM READY.",
  "",
  "SELECT A MODULE:",
];

const MENU_ITEMS = [
  { key: "1", label: "ABOUT.EXE", target: "about" },
  { key: "2", label: "PROJECTS.EXE", target: "projects" },
  { key: "3", label: "EXPERIENCE.EXE", target: "experience" },
  { key: "4", label: "SKILLS.EXE", target: "skills" },
  { key: "5", label: "CONTACT.EXE", target: "contact" },
];


export default function BootScreen({ onNavigate }) {
  const [visibleLines, setVisibleLines] = useState(0);
  const [showMenu, setShowMenu] = useState(false);
  const [time, setTime] = useState("");


  useEffect(() => {
    const tick = () => setTime(new Date().toLocaleTimeString());
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  
  useEffect(() => {
    if (visibleLines < BOOT_LINES.length) {
      const id = setTimeout(() => setVisibleLines((v) => v + 1), 180);
      return () => clearTimeout(id);
    } else {
      const id = setTimeout(() => setShowMenu(true), 200);
      return () => clearTimeout(id);
    }
  }, [visibleLines]);

  
  useEffect(() => {
    const handler = (e) => {
      const item = MENU_ITEMS.find((m) => m.key === e.key);
      if (item) onNavigate(item.target);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onNavigate]);

  return (
    <div className="boot-screen">
      <div className="boot-topbar">
        <span>APURVA_OS v1.0</span>
        <span>{time}</span>
      </div>

      <div className="boot-body">
        {BOOT_LINES.slice(0, visibleLines).map((line, i) => (
          <div key={i} className="boot-line">
            {line || "\u00A0"}
          </div>
        ))}

        {showMenu && (
          <div className="boot-menu">
            {MENU_ITEMS.map((item) => (
              <div
                key={item.key}
                className="boot-menu-item"
                onClick={() => onNavigate(item.target)}
              >
                [{item.key}] {item.label}
              </div>
            ))}
          </div>
        )}
      </div>

      {showMenu && (
        <div className="boot-prompt">
          <span>C:\PORTFOLIO&gt;</span>
          <span className="boot-prompt-text">
            TYPE A NUMBER OR CLICK A MODULE TO BEGIN_
          </span>
          <span className="boot-cursor" />
        </div>
      )}
    </div>
  );
}
