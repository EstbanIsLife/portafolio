import Reveal from "./Reveal";
import TiltCard from "./TiltCard";
import { FaBolt, FaLeaf, FaGlobe, FaArrowRight } from "react-icons/fa";
import type { IconType } from "react-icons";

const projects: { Icon: IconType; title: string; desc: string; url: string }[] = [
  {
    Icon: FaBolt,
    title: "Iluminate",
    desc: "Aplicación de reportes de fallas eléctricas e infraestructura, diseñada para agilizar la gestión de incidencias técnicas.",
    url: "https://github.com/EstbanIsLife/alumbrado-cali",
  },
  {
    Icon: FaLeaf,
    title: "EcoFondo",
    desc: "Plataforma de crowdfunding e inversión para proyectos de energías renovables con foro colaborativo de iniciativas.",
    url: "https://github.com/EstbanIsLife/EnerFondo",
  },
  {
    Icon: FaGlobe,
    title: "Mi Web Personal",
    desc: "Este mismo portafolio, reconstruido con Next.js, TypeScript, Tailwind CSS y Motion.",
    url: "https://github.com/EstbanIsLife/MiWebPersonal",
  },
];

export default function Projects() {
  return (
    <section id="proyectos" className="scroll-mt-20 bg-surface-2 px-6 py-20">
      <div className="mx-auto max-w-6xl text-center">
        <Reveal>
          <h2 className="inline-block border-b-2 border-accent pb-3 text-3xl font-bold sm:text-4xl">
            Proyectos
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map(({ Icon, title, desc, url }, i) => (
            <Reveal key={title} delay={i * 0.1}>
              <TiltCard>
                <div className="mb-3 text-3xl text-accent">
                  <Icon aria-hidden />
                </div>
                <h3 className="mb-2 text-lg font-bold">{title}</h3>
                <p className="text-sm leading-relaxed text-muted">{desc}</p>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Ver proyecto ${title} en GitHub`}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-accent-strong"
                >
                  Ver proyecto
                  <FaArrowRight
                    className="transition-transform group-hover:translate-x-1"
                    aria-hidden
                  />
                </a>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
