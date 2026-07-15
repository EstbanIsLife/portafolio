"use client";

import { useState, type FormEvent } from "react";
import { FaPaperPlane } from "react-icons/fa";
import Reveal from "./Reveal";
import Magnetic from "./Magnetic";

const EMAIL = "Estbancolombia@gmail.com";

export default function Contact() {
  const [form, setForm] = useState({ nombre: "", email: "", mensaje: "" });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Mensaje de ${form.nombre}`);
    const body = encodeURIComponent(
      `De: ${form.nombre}\nCorreo: ${form.email}\n\n${form.mensaje}`,
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contacto" className="scroll-mt-20 bg-background px-6 py-20">
      <Reveal className="mx-auto max-w-xl text-center">
        <h2 className="inline-block border-b-2 border-accent pb-3 text-3xl font-bold sm:text-4xl">
          Contacto
        </h2>
        <p className="mt-6 text-lg text-muted">
          ¿Tienes un proyecto en mente? ¡Hablemos!
        </p>

        <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-4 text-left">
          <label className="flex flex-col gap-1.5 text-xs font-semibold uppercase tracking-wide text-muted">
            Tu nombre
            <input
              type="text"
              required
              value={form.nombre}
              onChange={(e) => setForm({ ...form, nombre: e.target.value })}
              placeholder="Tu nombre"
              className="rounded-lg border border-line bg-surface px-4 py-3 text-base font-normal normal-case tracking-normal text-foreground outline-none transition-all focus:border-accent focus:shadow-[0_0_10px_rgba(204,0,0,0.2)]"
            />
          </label>
          <label className="flex flex-col gap-1.5 text-xs font-semibold uppercase tracking-wide text-muted">
            Tu correo
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="Tu correo electrónico"
              className="rounded-lg border border-line bg-surface px-4 py-3 text-base font-normal normal-case tracking-normal text-foreground outline-none transition-all focus:border-accent focus:shadow-[0_0_10px_rgba(204,0,0,0.2)]"
            />
          </label>
          <label className="flex flex-col gap-1.5 text-xs font-semibold uppercase tracking-wide text-muted">
            Tu mensaje
            <textarea
              required
              rows={5}
              value={form.mensaje}
              onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
              placeholder="Tu mensaje..."
              className="resize-y rounded-lg border border-line bg-surface px-4 py-3 text-base font-normal normal-case tracking-normal text-foreground outline-none transition-all focus:border-accent focus:shadow-[0_0_10px_rgba(204,0,0,0.2)]"
            />
          </label>
          <Magnetic className="mt-1 self-center">
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-all hover:bg-accent-strong hover:shadow-[var(--shadow-glow)]"
            >
              Enviar mensaje <FaPaperPlane aria-hidden />
            </button>
          </Magnetic>
        </form>
      </Reveal>
    </section>
  );
}
