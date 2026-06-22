import React, { useState, useCallback, useMemo } from "react";
import BootScreen from "./components/BootScreen";
import DesktopIcon from "./os/DesktopIcon";
import Window from "./os/Window";
import Taskbar from "./os/Taskbar";
import StartMenu from "./os/StartMenu";
import useWindowManager from "./os/useWindowManager";

import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import StatsSection from "./components/StatsSection";
import SkillsSection from "./components/SkillsSection";
import ExperienceSection from "./components/ExperienceSection";
import ContactSection from "./components/ContactSection";

import "./index.css";

// Window definitions
const WIN_CFGS = {
  projects:   { id: "projects",   title: "Projects.exe",    icon: "📁", component: ProjectsSection,   width: 540, height: 520, x: 180, y: 50  },
  about:      { id: "about",      title: "About.exe",       icon: "👤", component: AboutSection,       width: 460, height: 440, x: 80,  y: 80  },
  stats:      { id: "stats",      title: "Stats.exe",       icon: "📊", component: StatsSection,       width: 460, height: 440, x: 220, y: 70  },
  skills:     { id: "skills",     title: "Skills.exe",      icon: "⚙️", component: SkillsSection,      width: 400, height: 360, x: 260, y: 90  },
  experience: { id: "experience", title: "Experience.exe",  icon: "💼", component: ExperienceSection,  width: 500, height: 440, x: 150, y: 60  },
  contact:    { id: "contact",    title: "Contact.exe",     icon: "📧", component: ContactSection,     width: 400, height: 360, x: 300, y: 80  },
};

const DESKTOP_ICONS = [
  { key: "about",      icon: "👤", label: "About Me"    },
  { key: "projects",   icon: "📁", label: "Projects"    },
  { key: "stats",      icon: "📊", label: "Stats.exe"   },
  { key: "skills",     icon: "⚙️", label: "Skills"      },
  { key: "experience", icon: "💼", label: "Experience"  },
  { key: "contact",    icon: "📧", label: "Contact"     },
];

// Generate star data once
function makeStars(n) {
  return Array.from({ length: n }, (_, i) => ({
    id: i,
    top: Math.random() * 100,
    left: Math.random() * 100,
    size: Math.random() * 2 + 0.5,
    dur: (Math.random() * 3 + 2).toFixed(1),
    op: (Math.random() * 0.6 + 0.2).toFixed(2),
  }));
}

export default function App() {
  const [booted, setBooted] = useState(false);
  const [startOpen, setStartOpen] = useState(false);
  const [selIcon, setSelIcon] = useState(null);
  const stars = useMemo(() => makeStars(120), []);

  const {
    windows, openWindow, closeWindow, focusWindow,
    minimizeWindow, restoreWindow, toggleMaximize, updateWindow,
  } = useWindowManager();

  const launch = useCallback((key) => {
    if (WIN_CFGS[key]) openWindow(WIN_CFGS[key]);
  }, [openWindow]);

  const activeWin = windows.filter((w) => !w.minimized).sort((a, b) => b.z - a.z)[0];
  const activeId = activeWin?.id ?? null;

  const handleTaskbarApp = (id) => {
    const w = windows.find((w) => w.id === id);
    if (!w) return;
    if (w.minimized) restoreWindow(id);
    else if (activeId === id) minimizeWindow(id);
    else focusWindow(id);
  };

  const startItems = [
    { icon: "👤", label: "About Me",    onClick: () => launch("about")      },
    { icon: "📁", label: "Projects",    onClick: () => launch("projects")    },
    { icon: "📊", label: "Stats.exe",   onClick: () => launch("stats")       },
    { icon: "⚙️", label: "Skills",      onClick: () => launch("skills")      },
    { icon: "💼", label: "Experience",  onClick: () => launch("experience")  },
    { icon: "📧", label: "Contact",     onClick: () => launch("contact")     },
    { separator: true },
    {
      icon: "🔌",
      label: "Shut Down...",
      onClick: () => {
        if (window.confirm("Shut down Apurva_OS?")) {
          document.body.style.transition = "opacity 0.7s";
          document.body.style.opacity = "0";
          setTimeout(() => {
            document.body.innerHTML =
              `<div style="background:#000;color:#00ff66;height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;font-family:monospace;gap:12px">
                <div style="font-size:22px">It is now safe to close this browser tab.</div>
                <div style="font-size:13px;opacity:0.5">Thanks for visiting Apurva's portfolio.</div>
              </div>`;
            document.body.style.opacity = "1";
          }, 700);
        }
      },
    },
  ];

  if (!booted) return <BootScreen onDone={() => setBooted(true)} />;

  return (
    <div
      className="desktop"
      onClick={() => { setSelIcon(null); if (startOpen) setStartOpen(false); }}
    >
      {/* Star field */}
      <div className="stars">
        {stars.map((s) => (
          <div
            key={s.id}
            className="star"
            style={{
              top: `${s.top}%`,
              left: `${s.left}%`,
              width: s.size,
              height: s.size,
              "--dur": `${s.dur}s`,
              "--op": s.op,
            }}
          />
        ))}
      </div>

      {/* Wallpaper hero — only visible when no windows are open */}
      {windows.every((w) => w.minimized) && (
        <div className="wallpaper-hero">
          <div className="hero-name">APURVA JAIN</div>
          <div className="hero-subtitle">CS Undergrad · MERN-Stack Dev · Competitive Programmer</div>
          <div className="hero-divider" />
          <div className="hero-stats">
            {[
              { val: "484+",  lbl: "Problems Solved" },
              { val: "10+",     lbl: "Projects Built"         },
             
        
            ].map((s) => (
              <div key={s.lbl} className="hero-stat">
                <div className="hero-stat-val">{s.val}</div>
                <div className="hero-stat-lbl">{s.lbl}</div>
              </div>
            ))}
          </div>
          <div className="hero-divider" />
          <div className="hero-hint">DOUBLE-CLICK AN ICON TO EXPLORE ↑</div>
        </div>
      )}

      {/* Desktop icons */}
      <div className="desktop-icons">
        {DESKTOP_ICONS.map((item) => (
          <DesktopIcon
            key={item.key}
            icon={item.icon}
            label={item.label}
            selected={selIcon === item.key}
            onSelect={(e) => { e.stopPropagation(); setSelIcon(item.key); }}
            onOpen={() => launch(item.key)}
          />
        ))}
      </div>

      {/* Windows */}
      {windows.map((win) => {
        const Comp = win.component;
        return (
          <Window
            key={win.id}
            win={win}
            isActive={activeId === win.id}
            onClose={closeWindow}
            onFocus={focusWindow}
            onMinimize={minimizeWindow}
            onMaximize={toggleMaximize}
            onUpdate={updateWindow}
          >
            <Comp />
          </Window>
        );
      })}

      {/* Start menu */}
      {startOpen && (
        <StartMenu items={startItems} onClose={() => setStartOpen(false)} />
      )}

      {/* Taskbar */}
      <Taskbar
        windows={windows}
        activeId={activeId}
        startOpen={startOpen}
        onStartClick={(e) => { e.stopPropagation(); setStartOpen((v) => !v); }}
        onAppClick={handleTaskbarApp}
      />
    </div>
  );
}
