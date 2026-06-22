import React, { useRef, useCallback } from "react";

export default function Window({
  win, isActive, onClose, onFocus, onMinimize, onMaximize, onUpdate, children,
}) {
  const dragRef = useRef(null);
  const resizeRef = useRef(null);

  const onTitleMouseDown = useCallback(
    (e) => {
      if (e.target.closest(".titlebar-btns")) return;
      if (win.maximized) return;
      e.preventDefault();
      onFocus(win.id);
      dragRef.current = { sx: e.clientX, sy: e.clientY, ox: win.x, oy: win.y };
      const move = (ev) => {
        if (!dragRef.current) return;
        onUpdate(win.id, {
          x: Math.max(0, dragRef.current.ox + ev.clientX - dragRef.current.sx),
          y: Math.max(0, dragRef.current.oy + ev.clientY - dragRef.current.sy),
        });
      };
      const up = () => {
        dragRef.current = null;
        window.removeEventListener("mousemove", move);
        window.removeEventListener("mouseup", up);
      };
      window.addEventListener("mousemove", move);
      window.addEventListener("mouseup", up);
    },
    [win, onUpdate, onFocus]
  );

  const onResizeMouseDown = useCallback(
    (e) => {
      e.stopPropagation();
      if (win.maximized) return;
      onFocus(win.id);
      resizeRef.current = { sx: e.clientX, sy: e.clientY, ow: win.width, oh: win.height };
      const move = (ev) => {
        if (!resizeRef.current) return;
        onUpdate(win.id, {
          width: Math.max(280, resizeRef.current.ow + ev.clientX - resizeRef.current.sx),
          height: Math.max(200, resizeRef.current.oh + ev.clientY - resizeRef.current.sy),
        });
      };
      const up = () => {
        resizeRef.current = null;
        window.removeEventListener("mousemove", move);
        window.removeEventListener("mouseup", up);
      };
      window.addEventListener("mousemove", move);
      window.addEventListener("mouseup", up);
    },
    [win, onUpdate, onFocus]
  );

  if (win.minimized) return null;

  const style = win.maximized
    ? { top: 0, left: 0, right: 0, bottom: 32, width: "auto", height: "auto", zIndex: win.z }
    : { top: win.y, left: win.x, width: win.width, height: win.height, zIndex: win.z };

  return (
    <div
      className="win98-window bevel-window"
      style={style}
      onMouseDown={() => onFocus(win.id)}
    >
      {/* Title bar */}
      <div
        className={`titlebar${isActive ? " active" : " inactive"}`}
        onMouseDown={onTitleMouseDown}
        onDoubleClick={() => onMaximize(win.id)}
      >
        <div className="titlebar-left">
          <span className="titlebar-icon">{win.icon}</span>
          <span className="titlebar-text">{win.title}</span>
        </div>
        <div className="titlebar-btns">
          <button
            className="titlebar-btn"
            onClick={(e) => { e.stopPropagation(); onMinimize(win.id); }}
            title="Minimize"
          >—</button>
          <button
            className="titlebar-btn"
            onClick={(e) => { e.stopPropagation(); onMaximize(win.id); }}
            title="Maximize"
          >{win.maximized ? "❐" : "□"}</button>
          <button
            className="titlebar-btn close-btn"
            onClick={(e) => { e.stopPropagation(); onClose(win.id); }}
            title="Close"
          >✕</button>
        </div>
      </div>

      {/* Content */}
      <div className="window-body">{children}</div>

      {/* Resize handle */}
      {!win.maximized && (
        <div className="resize-handle" onMouseDown={onResizeMouseDown} />
      )}
    </div>
  );
}
