import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="sobre-mi" className="scroll-mt-20 bg-surface-2 px-6 py-20">
      <Reveal className="mx-auto max-w-3xl text-center">
        <h2 className="inline-block border-b-2 border-accent pb-3 text-3xl font-bold sm:text-4xl">
          Sobre Mí
        </h2>
        <p className="mt-6 text-lg leading-relaxed">
          Hola, soy <strong className="text-foreground">Jaime Esteban</strong>. Me
          apasiona <em className="text-accent not-italic">el desarrollo y la programación</em>.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          Soy un desarrollador comprometido con crear soluciones tecnológicas
          innovadoras y de calidad, siempre aprendiendo las herramientas que mueven
          la industria hoy.
        </p>
      </Reveal>
    </section>
  );
}
