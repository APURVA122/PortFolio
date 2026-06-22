import { useState, useCallback, useRef } from "react";

export default function useWindowManager() {
  const [windows, setWindows] = useState([]);
  const zRef = useRef(10);

  const openWindow = useCallback((cfg) => {
    setWindows((prev) => {
      const existing = prev.find((w) => w.id === cfg.id);
      if (existing) {
        zRef.current += 1;
        return prev.map((w) =>
          w.id === cfg.id ? { ...w, minimized: false, z: zRef.current } : w
        );
      }
      zRef.current += 1;
      return [
        ...prev,
        {
          id: cfg.id,
          title: cfg.title,
          icon: cfg.icon ?? "🗂️",
          component: cfg.component,
          x: cfg.x ?? 80 + prev.length * 22,
          y: cfg.y ?? 60 + prev.length * 22,
          width: cfg.width ?? 500,
          height: cfg.height ?? 400,
          minimized: false,
          maximized: false,
          z: zRef.current,
        },
      ];
    });
  }, []);

  const closeWindow = useCallback((id) => {
    setWindows((prev) => prev.filter((w) => w.id !== id));
  }, []);

  const focusWindow = useCallback((id) => {
    zRef.current += 1;
    const z = zRef.current;
    setWindows((prev) => prev.map((w) => (w.id === id ? { ...w, z } : w)));
  }, []);

  const minimizeWindow = useCallback((id) => {
    setWindows((prev) =>
      prev.map((w) => (w.id === id ? { ...w, minimized: true } : w))
    );
  }, []);

  const restoreWindow = useCallback((id) => {
    zRef.current += 1;
    const z = zRef.current;
    setWindows((prev) =>
      prev.map((w) => (w.id === id ? { ...w, minimized: false, z } : w))
    );
  }, []);

  const toggleMaximize = useCallback((id) => {
    setWindows((prev) =>
      prev.map((w) => (w.id === id ? { ...w, maximized: !w.maximized } : w))
    );
  }, []);

  const updateWindow = useCallback((id, patch) => {
    setWindows((prev) =>
      prev.map((w) => (w.id === id ? { ...w, ...patch } : w))
    );
  }, []);

  return {
    windows,
    openWindow,
    closeWindow,
    focusWindow,
    minimizeWindow,
    restoreWindow,
    toggleMaximize,
    updateWindow,
  };
}
