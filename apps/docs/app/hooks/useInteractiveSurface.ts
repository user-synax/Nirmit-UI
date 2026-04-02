"use client";

import React from "react";

type SurfaceEvent = React.MouseEvent<HTMLElement>;

export function useInteractiveSurface() {
  const rafRef = React.useRef<number | null>(null);
  const pendingRef = React.useRef<{
    target: HTMLElement;
    xPercent: number;
    yPercent: number;
  } | null>(null);
  const [enabled, setEnabled] = React.useState(false);

  React.useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = window.matchMedia("(pointer: fine)");

    const updateEnabled = () => {
      setEnabled(!reducedMotion.matches && finePointer.matches);
    };

    updateEnabled();
    reducedMotion.addEventListener("change", updateEnabled);
    finePointer.addEventListener("change", updateEnabled);

    return () => {
      reducedMotion.removeEventListener("change", updateEnabled);
      finePointer.removeEventListener("change", updateEnabled);
      if (rafRef.current !== null) {
        window.cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  const flushFrame = React.useCallback(() => {
    rafRef.current = null;

    const pending = pendingRef.current;
    if (!pending) {
      return;
    }

    const { target, xPercent, yPercent } = pending;
    target.style.setProperty("--mouse-x", `${xPercent}%`);
    target.style.setProperty("--mouse-y", `${yPercent}%`);

    const tiltY = ((xPercent - 50) / 50) * 3.5;
    const tiltX = ((50 - yPercent) / 50) * 3.5;
    target.style.setProperty("--tilt-x", `${tiltX}deg`);
    target.style.setProperty("--tilt-y", `${tiltY}deg`);
  }, []);

  const handleMouseMove = React.useCallback(
    (event: SurfaceEvent) => {
      if (!enabled) {
        return;
      }

      const target = event.currentTarget;
      const rect = target.getBoundingClientRect();
      const xPercent = ((event.clientX - rect.left) / rect.width) * 100;
      const yPercent = ((event.clientY - rect.top) / rect.height) * 100;

      pendingRef.current = { target, xPercent, yPercent };
      if (rafRef.current === null) {
        rafRef.current = window.requestAnimationFrame(flushFrame);
      }
    },
    [enabled, flushFrame],
  );

  const handleMouseLeave = React.useCallback(
    (event: SurfaceEvent) => {
      if (!enabled) {
        return;
      }

      const target = event.currentTarget;
      target.style.setProperty("--tilt-x", "0deg");
      target.style.setProperty("--tilt-y", "0deg");
      target.style.setProperty("--mouse-x", "50%");
      target.style.setProperty("--mouse-y", "50%");
    },
    [enabled],
  );

  return {
    enabled,
    handleMouseMove,
    handleMouseLeave,
  };
}
