import React, { useEffect, useState } from "react";

export default function Taskbar({ windows, activeId, startOpen, onStartClick, onAppClick }) {
  const [time, setTime] = useState({ t: "", d: "" });

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setTime({
        t: now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        d: now.toLocaleDateString([], { month: "short", day: "numeric" }),
      });
    };
    tick();
    const id = setInterval(tick, 10000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="taskbar">
      <div
        className={`start-btn bevel-raised${startOpen ? " pressed" : ""}`}
        onClick={onStartClick}
      >
        <span style={{ fontSize: 15 }}>🪟</span>
        <span>Start</span>
      </div>

      <div className="tb-divider" />

      <div className="tb-apps">
        {windows.map((w) => (
          <div
            key={w.id}
            className={`tb-app${activeId === w.id && !w.minimized ? " active" : ""}`}
            onClick={() => onAppClick(w.id)}
          >
            <span>{w.icon}</span>
            <span style={{ overflow: "hidden", textOverflow: "ellipsis" }}>{w.title}</span>
          </div>
        ))}
      </div>

      <div className="tb-clock">
        <div style={{ fontWeight: 600 }}>{time.t}</div>
        <div style={{ fontSize: 10, opacity: 0.7 }}>{time.d}</div>
      </div>
    </div>
  );
}
