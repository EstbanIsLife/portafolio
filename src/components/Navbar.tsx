"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "motion/react";

const links = [
  { id: "inicio", label: "Inicio" },
  { id: "sobre-mi", label: "Sobre Mí" },
  { id: "habilidades", label: "Habilidades" },
  { id: "proyectos", label: "Proyectos" },
  { id: "contacto", label: "Contacto" },
];

export default function Navbar() {
  const [active, setActive] = useState("inicio");
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  // Oculta la barra al bajar y la muestra al subir.
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) setHidden(true);
    else setHidden(false);
  });

  // Resalta la sección visible.
  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.4 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav
      variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 z-50 w-full border-b border-accent-dim bg-black/90 backdrop-blur"
      aria-label="Navegación principal"
    >
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-6 py-4">
        <span
          className="text-xl font-bold tracking-[0.2em] text-accent"
          style={{ textShadow: "var(--shadow-glow)" }}
        >
          JE
        </span>
        <ul className="flex flex-wrap items-center justify-center gap-5 sm:gap-6">
          {links.map((link) => (
            <li key={link.id} className="relative">
              <a
                href={`#${link.id}`}
                className={`text-xs uppercase tracking-wide transition-colors hover:text-accent sm:text-sm ${
                  active === link.id ? "text-accent" : "text-muted"
                }`}
              >
                {link.label}
              </a>
              {active === link.id && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute -bottom-1.5 left-0 h-0.5 w-full rounded-full bg-accent"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
            </li>
          ))}
          <li>
            {/* Salta a la versión vanilla original alojada como estático. */}
            <a
              href="/classic"
              className="inline-flex items-center gap-1.5 rounded-full border border-accent-dim px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-muted transition-colors hover:border-accent hover:text-accent sm:text-sm"
            >
              <span aria-hidden="true">🕹️</span> Versión clásica
            </a>
          </li>
        </ul>
      </div>
    </motion.nav>
  );
}
