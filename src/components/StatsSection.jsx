import React, { useEffect, useRef, useState } from "react";
import { resumeData } from "../data/resumeData";

function useCountUp(target, duration = 1200) {
  const [val, setVal] = useState(0);
  const numTarget = parseInt(target.toString().replace(/\D/g, ""), 10);

  useEffect(() => {
    let start = null;
    const step = (ts) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setVal(Math.floor(eased * numTarget));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [numTarget, duration]);

  const suffix = target.toString().replace(/[0-9]/g, "");
  return val.toLocaleString() + suffix;
}

function AnimStat({ label, value, color }) {
  const displayed = useCountUp(value);
  return (
    <div className="stat-card" style={{ "--c": color }}>
      <div className="stat-val" style={{ color }}>{displayed}</div>
      <div className="stat-lbl">{label}</div>
    </div>
  );
}

export default function StatsSection() {
  return (
    <div>
      <div className="sec-h2" style={{ marginTop: 0 }}>
        📊 <span className="sec-h2-accent">Coding Stats</span>
      </div>

      <div className="stats-grid">
        {resumeData.stats.map((s, i) => (
          <AnimStat key={i} label={s.label} value={s.value} color={s.color} />
        ))}
      </div>

      <div className="sec-h2">🏆 <span className="sec-h2-accent">Platforms</span></div>
      {resumeData.competitive.map((p, i) => (
        <div key={i} className="platform-card" style={{ borderLeft: `3px solid ${p.color}` }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ fontSize: 18 }}>{p.icon}</span>
            <span className="platform-name" style={{ color: p.color }}>{p.platform}</span>
          </div>
          <div className="platform-stats">
            {p.maxRating && (
              <div className="platform-stat">
                <div className="platform-stat-val" style={{ color: p.color }}>{p.maxRating}</div>
                <div className="platform-stat-lbl">Max Rating</div>
              </div>
            )}
            {p.problems && (
              <div className="platform-stat">
                <div className="platform-stat-val">{p.problems}</div>
                <div className="platform-stat-lbl">Solved</div>
              </div>
            )}
            {p.contests && (
              <div className="platform-stat">
                <div className="platform-stat-val">{p.contests}</div>
                <div className="platform-stat-lbl">Contests</div>
              </div>
            )}
            {p.rank && (
              <div className="platform-stat">
                <div className="platform-stat-val" style={{ fontSize: 12 }}>{p.rank}</div>
                <div className="platform-stat-lbl">Rank</div>
              </div>
            )}
          </div>
        </div>
      ))}

      <div style={{ marginTop: 14, padding: "10px 14px", background: "#f9fafb", borderRadius: 8, fontSize: 12, color: "#374151" }}>
        🔗 Codolio Profile: <a className="contact-val" href="https://codolio.com/profile/@apurva9/card" target="_blank" rel="noopener noreferrer">codolio.com/profile/@apurva9</a>
        &nbsp;·&nbsp; Global Rank: <strong>#12,960</strong>
      </div>
    </div>
  );
}
