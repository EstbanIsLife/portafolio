import Reveal from "./Reveal";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPython,
  FaGitAlt,
  FaDatabase,
} from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiTailwindcss } from "react-icons/si";
import type { IconType } from "react-icons";

const skills: { name: string; Icon: IconType }[] = [
  { name: "HTML5", Icon: FaHtml5 },
  { name: "CSS3", Icon: FaCss3Alt },
  { name: "JavaScript", Icon: FaJs },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "React", Icon: FaReact },
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "Tailwind CSS", Icon: SiTailwindcss },
  { name: "Python", Icon: FaPython },
  { name: "Git", Icon: FaGitAlt },
  { name: "SQL", Icon: FaDatabase },
];

export default function Skills() {
  return (
    <section id="habilidades" className="scroll-mt-20 bg-background px-6 py-20">
      <Reveal className="mx-auto max-w-4xl text-center">
        <h2 className="inline-block border-b-2 border-accent pb-3 text-3xl font-bold sm:text-4xl">
          Habilidades
        </h2>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {skills.map(({ name, Icon }) => (
            <span
              key={name}
              className="flex items-center gap-2 rounded-full border border-accent-dim px-5 py-2.5 text-sm font-medium transition-all hover:border-accent hover:text-accent hover:shadow-[var(--shadow-glow)]"
            >
              <Icon className="text-accent" aria-hidden />
              {name}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
