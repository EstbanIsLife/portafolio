import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-accent-dim bg-black px-6 py-8 text-center">
      <p className="text-sm tracking-wide text-muted">
        © 2026 Jaime Esteban Huertas. Hecho con{" "}
        <FaHeart className="inline text-accent" aria-hidden />
      </p>
      <div className="mt-3 flex justify-center gap-5 text-xl text-muted">
        <a
          href="https://github.com/estbanislife"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="transition-colors hover:text-accent"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/esteban-huertas-dev/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="transition-colors hover:text-accent"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:Estbancolombia@gmail.com"
          aria-label="Enviar correo electrónico"
          className="transition-colors hover:text-accent"
        >
          <FaEnvelope />
        </a>
      </div>
    </footer>
  );
}
