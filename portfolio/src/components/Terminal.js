import React from "react";


export default function Terminal({ title = "C:\\PORTFOLIO>", onClose, children }) {
  return (
    <div className="terminal-window">
      <div className="terminal-titlebar">
        <span className="terminal-title">{title}</span>
        {onClose && (
          <button className="terminal-close" onClick={onClose} aria-label="Close">
            [ X ]
          </button>
        )}
      </div>
      <div className="terminal-body">{children}</div>
    </div>
  );
}
