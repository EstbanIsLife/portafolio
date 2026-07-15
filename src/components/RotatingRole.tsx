"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

const roles = [
  "Ingeniero Informático",
  "Desarrollador Web",
  "Desarrollador Frontend",
  "Apasionado por el código",
];

/** Rota entre distintos roles con una transición vertical tipo "cinta". */
export default function RotatingRole() {
  const [index, setIndex] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2600);
    return () => clearInterval(id);
  }, [reduce]);

  if (reduce) {
    return <span className="text-accent">{roles[0]}</span>;
  }

  return (
    <span className="relative inline-flex overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ y: "110%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-110%", opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="inline-block whitespace-nowrap text-accent"
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
