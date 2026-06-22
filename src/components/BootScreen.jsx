import React, { useEffect, useState, useRef } from "react";

const LINES = [
  "APURVA_OS  [Version 2026.1.0]",
  "(C) Apurva Jain. All rights reserved.",
  "",
  "BIOS Version 1.00  PG  07/15/1999",
  "Copyright (C) 1985-1999, Apurva Corp.",
  "",
  "Memory Test:  65536K OK",
  "CPU: Intel Pentium III  500MHz",
  "",
  "Detecting IDE drives...",
  "  Primary Master  : PROJECTS-HDD  [OK]",
  "  Primary Slave   : SKILLS-SSD    [OK]",
  "  Secondary Master: EXPERIENCE-CD [OK]",
  "",
  "Loading APURVA_OS...",
  "Starting Windows 98...",
];

export default function BootScreen({ onDone }) {
  const [lines, setLines] = useState([]);
  const [fading, setFading] = useState(false);
  const idxRef = useRef(0);

  const finish = () => {
    setFading(true);
    setTimeout(onDone, 600);
  };

  useEffect(() => {
    const run = () => {
      if (idxRef.current < LINES.length) {
        setLines((prev) => [...prev, LINES[idxRef.current]]);
        idxRef.current += 1;
        setTimeout(run, 120);
      } else {
        setTimeout(finish, 400);
      }
    };
    setTimeout(run, 200);
  }, []);

  return (
    <div
      className="boot-screen"
      style={{ opacity: fading ? 0 : 1 }}
      onClick={finish}
    >
      {lines.map((line, i) => (
        <div key={i} className="boot-line">
          {line || "\u00A0"}
        </div>
      ))}
      {idxRef.current >= LINES.length && (
        <span className="boot-cursor" />
      )}
      <div className="boot-skip">Click anywhere to skip →</div>
    </div>
  );
}
