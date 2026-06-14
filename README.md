# Apurva Jain — Retro Terminal Portfolio

A personal portfolio built with React, styled as an old 2000s CRT computer screen / green-phosphor terminal. Navigate through sections (About, Projects, Experience, Skills, Contact) like running programs on a retro OS.

## Features

- Boot-sequence landing screen with typewriter animation
- Numbered menu navigation (`1`–`5`) — click or use keyboard shortcuts
- CRT effects: scanlines, flicker, and screen glow
- Green phosphor monospace theme (VT323 font)
- Modular section components driven by a single data file

## Project structure
src/

├── components/

│   ├── BootScreen.js       # Boot sequence + main menu

│   ├── Terminal.js          # Reusable terminal window wrapper

│   ├── AboutSection.js

│   ├── ProjectsSection.js

│   ├── ExperienceSection.js

│   ├── SkillsSection.js

│   ├── ContactSection.js

│   └── CRTOverlay.js        # Scanlines + flicker overlay

├── data/

│   └── resumeData.js         # All resume content lives here

├── App.js

├── index.js

└── index.css                 # CRT styling, green phosphor theme