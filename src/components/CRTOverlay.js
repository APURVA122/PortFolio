import React from "react";
import "../index.css";

export default function CRTOverlay() {
  return (
    <div className="crt-overlay">
      <div className="crt-scanlines" />
      <div className="crt-flicker" />
      <div className="crt-vignette" />
    </div>
  );
}
