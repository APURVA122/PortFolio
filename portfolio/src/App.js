import React, { useState } from "react";
import CRTOverlay from "./components/CRTOverlay";
import BootScreen from "./components/BootScreen";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import ExperienceSection from "./components/ExperienceSection";
import SkillsSection from "./components/SkillsSection";
import ContactSection from "./components/ContactSection";
import "./index.css";


const SECTIONS = {
  about: AboutSection,
  projects: ProjectsSection,
  experience: ExperienceSection,
  skills: SkillsSection,
  contact: ContactSection,
};

export default function App() {
  
  const [activeSection, setActiveSection] = useState(null);

  const handleNavigate = (target) => setActiveSection(target);
  const handleClose = () => setActiveSection(null);

  const ActiveComponent = activeSection ? SECTIONS[activeSection] : null;

  return (
    <div className="crt-screen">
      {activeSection === null ? (
        <BootScreen onNavigate={handleNavigate} />
      ) : (
        <ActiveComponent onClose={handleClose} />
      )}
      <CRTOverlay />
    </div>
  );
}
