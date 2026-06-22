import React, { useEffect, useRef } from "react";

export default function StartMenu({ items, onClose }) {
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) onClose();
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [onClose]);

  return (
    <div className="start-menu" ref={ref}>
      <div className="menu-banner">Apurva</div>
      <div className="menu-items">
        {items.map((item, i) =>
          item.separator ? (
            <div key={i} className="menu-sep" />
          ) : (
            <div
              key={i}
              className="menu-item"
              onClick={() => { item.onClick(); onClose(); }}
            >
              <span className="menu-glyph">{item.icon}</span>
              <span>{item.label}</span>
            </div>
          )
        )}
      </div>
    </div>
  );
}
