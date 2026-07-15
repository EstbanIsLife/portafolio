"use client";

import { useRef, type ReactNode } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "motion/react";

type MagneticProps = {
  children: ReactNode;
  className?: string;
  /** Intensidad del efecto magnético (0–1). */
  strength?: number;
};

/**
 * Envuelve un botón/enlace y lo hace "magnético": se acerca sutilmente al
 * cursor y regresa con física de resorte. Añade un pequeño scale al presionar.
 * Se desactiva si el usuario prefiere menos movimiento.
 */
export default function Magnetic({
  children,
  className,
  strength = 0.35,
}: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 15, mass: 0.3 });
  const springY = useSpring(y, { stiffness: 200, damping: 15, mass: 0.3 });

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - (rect.left + rect.width / 2)) * strength);
    y.set((e.clientY - (rect.top + rect.height / 2)) * strength);
  }

  function reset() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ x: springX, y: springY }}
      whileTap={{ scale: 0.95 }}
      className={`inline-block ${className ?? ""}`}
    >
      {children}
    </motion.div>
  );
}
