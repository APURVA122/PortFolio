import React from "react";
import { resumeData } from "../data/resumeData";

const ROWS = [
  { icon: "📧", label: "Email", val: resumeData.contact.email, href: `mailto:${resumeData.contact.email}` },
  { icon: "📱", label: "Phone", val: resumeData.contact.phone, href: `tel:${resumeData.contact.phone}` },
  { icon: "💼", label: "LinkedIn", val: "linkedin.com/in/apurva-jain-9462a7330", href: resumeData.contact.linkedin },
  { icon: "🐙", label: "GitHub", val: "github.com/APURVA122", href: resumeData.contact.github },
  { icon: "📍", label: "Location", val: resumeData.contact.location, href: null },
];

export default function ContactSection() {
  return (
    <div>
      <div className="sec-h2" style={{ marginTop: 0 }}>
        📬 <span className="sec-h2-accent">Contact</span>
      </div>
      {ROWS.map((r, i) => (
        <div key={i} className="contact-row">
          <span className="contact-icon">{r.icon}</span>
          <div style={{ flex: 1 }}>
            <div className="contact-label">{r.label}</div>
            {r.href ? (
              <a className="contact-val" href={r.href} target="_blank" rel="noopener noreferrer">
                {r.val}
              </a>
            ) : (
              <span style={{ fontSize: 13, color: "#111" }}>{r.val}</span>
            )}
          </div>
        </div>
      ))}

      <div style={{
        marginTop: 20,
        padding: "12px 16px",
        background: "linear-gradient(135deg, #eff6ff, #f5f3ff)",
        borderRadius: 8,
        border: "1px solid #bfdbfe",
        fontSize: 12,
        color: "#1e40af",
        textAlign: "center",
      }}>
        👋 Open to internships, collaborations, and interesting problems.<br />
        <strong>Let's build something great.</strong>
      </div>
    </div>
  );
}
