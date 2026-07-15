"use client";

import { useRef, type ReactNode } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "motion/react";

/**
 * Tarjeta con inclinación 3D según la posición del cursor y un brillo rojo
 * que sigue al puntero. Se aplana si el usuario prefiere menos movimiento.
 */
export default function TiltCard({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  // Posición del cursor dentro de la tarjeta, normalizada de 0 a 1.
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(py, [0, 1], [7, -7]), {
    stiffness: 150,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(px, [0, 1], [-7, 7]), {
    stiffness: 150,
    damping: 20,
  });

  const glowX = useTransform(px, (v) => `${v * 100}%`);
  const glowY = useTransform(py, (v) => `${v * 100}%`);
  const glow = useTransform(
    [glowX, glowY],
    (latest: string[]) =>
      `radial-gradient(220px circle at ${latest[0]} ${latest[1]}, rgba(204,0,0,0.18), transparent 70%)`,
  );

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    px.set((e.clientX - rect.left) / rect.width);
    py.set((e.clientY - rect.top) / rect.height);
  }

  function reset() {
    px.set(0.5);
    py.set(0.5);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{
        rotateX: reduce ? 0 : rotateX,
        rotateY: reduce ? 0 : rotateY,
        transformPerspective: 800,
      }}
      className="group relative h-full rounded-xl border border-line border-t-2 border-t-accent-dim bg-surface p-7 text-left transition-shadow hover:border-t-accent hover:shadow-[var(--shadow-glow)]"
    >
      {/* Brillo que sigue al cursor */}
      <motion.div
        aria-hidden
        style={{ background: glow }}
        className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
