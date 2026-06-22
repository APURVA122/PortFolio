import React from "react";

export default function DesktopIcon({ icon, label, onOpen, selected, onSelect }) {
  return (
    <div
      className={`d-icon${selected ? " sel" : ""}`}
      tabIndex={0}
      onClick={onSelect}
      onDoubleClick={onOpen}
      onKeyDown={(e) => e.key === "Enter" && onOpen()}
    >
      <div className="d-icon-glyph">{icon}</div>
      <div className="d-icon-label">{label}</div>
    </div>
  );
}
