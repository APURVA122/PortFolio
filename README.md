# Apurva Jain — Portfolio v2

Win98 OS simulation portfolio with midnight blue + neon cyan theme.

## Stack
React 18 + Vite. Zero extra dependencies.

## Run
```bash
npm install
npm run dev    # http://localhost:5173
npm run build  # production build for Vercel
```

## Structure
```
src/
├── os/              # OS engine (window manager, Window, Taskbar, StartMenu, DesktopIcon)
├── components/      # Section content + BootScreen
├── data/            # resumeData.js — edit this to update content
├── App.jsx          # Desktop orchestrator
├── index.jsx        # Entry point
└── index.css        # Win98 chrome + section styles
```

## Customizing
- **Content**: `src/data/resumeData.js`
- **Add a window**: add to `WIN_CFGS` and `DESKTOP_ICONS` in `App.jsx`, create a component in `src/components/`
- **Colors**: neon accent is `#00ffff`, purple is `#a78bfa`, green is `#34d399` — search `index.css`

## License
MIT © 2026 Apurva Jain
