"use client";

import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "motion/react";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import Magnetic from "./Magnetic";
import RotatingRole from "./RotatingRole";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <header
      id="inicio"
      className="grid min-h-screen scroll-mt-20 grid-cols-1 items-center gap-10 bg-black px-6 pb-12 pt-28 md:grid-cols-2 md:px-16"
    >
      {/* Panel de texto */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-col items-center text-center md:items-start md:text-left"
      >
        <div className="relative">
          {/* Brillo rojo pulsante detrás del nombre */}
          {!reduce && (
            <motion.div
              aria-hidden
              className="pointer-events-none absolute -inset-x-8 -top-8 -z-10 h-40 rounded-full bg-accent/20 blur-3xl"
              animate={{ opacity: [0.25, 0.55, 0.25], scale: [1, 1.08, 1] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            />
          )}
          <motion.h1
            variants={item}
            className="text-4xl font-bold leading-tight sm:text-5xl"
          >
            Jaime Esteban Huertas Leguizamo
          </motion.h1>
        </div>

        <motion.p
          variants={item}
          className="mt-3 h-6 text-sm font-medium uppercase tracking-[0.2em]"
        >
          <RotatingRole />
        </motion.p>

        <motion.div
          variants={item}
          className="mt-7 flex flex-wrap justify-center gap-4 md:justify-start"
        >
          <Magnetic>
            <a
              href="#contacto"
              className="inline-block rounded-lg bg-accent px-7 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-all hover:bg-accent-strong hover:shadow-[var(--shadow-glow)]"
            >
              Contáctame
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href="/cv.pdf"
              download
              className="inline-flex items-center gap-2 rounded-lg border border-accent-dim px-7 py-3 text-sm font-semibold uppercase tracking-wide transition-colors hover:border-accent hover:text-accent"
            >
              <FaDownload aria-hidden /> Descargar CV
            </a>
          </Magnetic>
        </motion.div>

        <motion.div variants={item} className="mt-7 flex gap-5 text-2xl text-muted">
          <a
            href="https://github.com/estbanislife"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Perfil de GitHub"
            className="transition-transform hover:-translate-y-0.5 hover:text-accent"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/esteban-huertas-dev"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Perfil de LinkedIn"
            className="transition-transform hover:-translate-y-0.5 hover:text-accent"
          >
            <FaLinkedin />
          </a>
        </motion.div>
      </motion.div>

      {/* Foto de perfil con efecto flip 3D */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        className="flex justify-center"
      >
        <div className="flip-card h-[300px] w-[300px] cursor-pointer">
          <div className="flip-card-inner shadow-[0_0_0_3px_var(--color-accent-dim),var(--shadow-glow)]">
            <div className="flip-face">
              <Image
                src="/Foto_Perfil.jpg"
                alt="Foto de perfil de Jaime Esteban Huertas Leguizamo"
                fill
                sizes="300px"
                className="object-cover"
                priority
              />
            </div>
            <div className="flip-face flip-back">
              <Image
                src="/imagen.jpg"
                alt="Easter egg: gato programador"
                fill
                sizes="300px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </header>
  );
}
