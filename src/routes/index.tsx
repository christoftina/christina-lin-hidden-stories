import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState, type MouseEvent } from "react";
import { ArrowUpRight, Plus, Minus } from "lucide-react";
import heroFront from "@/assets/hero-front.jpg";
import heroReveal from "@/assets/hero-reveal.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Christina Lin — Product Designer" },
      { name: "description", content: "Christina Lin is a product designer studying Cognitive Science at UC San Diego, designing accessible digital experiences." },
      { property: "og:title", content: "Christina Lin — Product Designer" },
      { property: "og:description", content: "Selected work and experience from a product designer focused on accessibility and real behavior." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const WORK = [
  { n: "01", title: "Mental Health in Design Lab", org: "MiD Lab · UC San Diego", tags: ["Research", "UX"], text: "Designing supportive digital experiences grounded in research on wellbeing." },
  { n: "02", title: "CSES Project Design", org: "CSES · UC San Diego", tags: ["Product", "Visual"], text: "Leading project design for a student engineering community's digital tools." },
  { n: "03", title: "MixBash", org: "Design Intern", tags: ["Product", "Startup"], text: "Shipping product design work in a fast-moving startup environment." },
  { n: "04", title: "Language Infant Learning", org: "LiL Lab · UC San Diego", tags: ["Research"], text: "Supporting research on how infants learn language, through a cognitive science lens." },
];

const FACTS = [
  ["Education", "UC San Diego"],
  ["Major", "Cognitive Science — Design & Interaction"],
  ["Minor", "Speculative Design"],
  ["Graduating", "Spring 2027"],
  ["Honors", "Regents Scholar"],
];

function RevealImage() {
  const ref = useRef<HTMLDivElement>(null);
  const [p, setP] = useState({ x: 50, y: 50, on: false });
  const move = (e: MouseEvent) => {
    const r = ref.current!.getBoundingClientRect();
    setP({ x: e.clientX - r.left, y: e.clientY - r.top, on: true });
  };
  const size = p.on ? 160 : 0;
  const mask = `radial-gradient(circle ${size}px at ${p.x}px ${p.y}px, black 98%, transparent 100%)`;
  return (
    <div
      ref={ref}
      onMouseMove={move}
      onMouseLeave={() => setP((s) => ({ ...s, on: false }))}
      className="relative aspect-[4/5] w-full cursor-none overflow-hidden rounded-2xl shadow-soft"
    >
      <img src={heroFront} alt="A designer's desk" width={1200} height={1504} className="absolute inset-0 h-full w-full object-cover" />
      <img
        src={heroReveal}
        alt="The same desk revealing wireframes, user flows and an affinity map"
        width={1200}
        height={1504}
        className="absolute inset-0 h-full w-full object-cover transition-[mask-size] duration-300"
        style={{ maskImage: mask, WebkitMaskImage: mask }}
      />
      <span className="absolute bottom-4 left-4 rounded-full bg-card/90 px-3 py-1.5 text-xs font-medium text-card-foreground backdrop-blur">
        {p.on ? "The process behind the polish" : "Hover to see the process"}
      </span>
    </div>
  );
}

function Index() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-10 border-b border-border bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="font-display text-2xl">Christina Lin</a>
          <nav className="flex gap-8 text-sm text-muted-foreground">
            <a href="#work" className="hover:text-foreground">Work</a>
            <a href="#about" className="hover:text-foreground">About</a>
            <a href="mailto:Christinalin252005@gmail.com" className="hover:text-foreground">Contact</a>
          </nav>
        </div>
      </header>

      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-[1.2fr_1fr] md:py-28">
        <div className="animate-rise">
          <p className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-primary" /> Open to 2026 product design internships
          </p>
          <h1 className="font-display text-5xl leading-[1.05] md:text-7xl">
            Designing for how people <em className="text-primary">actually</em> use things.
          </h1>
          <p className="mt-8 max-w-lg text-lg leading-relaxed text-muted-foreground">
            I'm a product designer studying Cognitive Science at UC San Diego, focused on accessible, research-driven digital experiences.
          </p>
          <div className="mt-10 flex gap-4">
            <a href="#work" className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90">View work</a>
            <a href="mailto:Christinalin252005@gmail.com" className="rounded-full border border-border px-6 py-3 text-sm font-medium transition hover:bg-secondary">Get in touch</a>
          </div>
        </div>
        <div className="animate-rise [animation-delay:150ms]"><RevealImage /></div>
      </section>

      <section id="work" className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-12 flex items-end justify-between">
          <h2 className="font-display text-4xl md:text-5xl">Selected work</h2>
          <span className="text-sm text-muted-foreground">2023 — Present</span>
        </div>
        <ul className="border-t border-border">
          {WORK.map((w, i) => (
            <li key={w.n} className="border-b border-border">
              <button onClick={() => setOpen(open === i ? null : i)} className="group grid w-full grid-cols-[3rem_1fr_auto] items-center gap-4 py-8 text-left">
                <span className="text-sm text-muted-foreground">{w.n}</span>
                <span>
                  <span className="font-display block text-2xl transition-colors group-hover:text-primary md:text-3xl">{w.title}</span>
                  <span className="mt-1 block text-sm text-muted-foreground">{w.org}</span>
                </span>
                {open === i ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
              </button>
              {open === i && (
                <div className="animate-rise grid gap-6 pb-10 pl-16 md:grid-cols-[1fr_auto]">
                  <p className="max-w-xl text-lg text-muted-foreground">{w.text}</p>
                  <div className="flex items-start gap-2">
                    {w.tags.map((t) => (
                      <span key={t} className="rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">{t}</span>
                    ))}
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </section>

      <section id="about" className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2">
        <div>
          <h2 className="font-display text-4xl md:text-5xl">About</h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            I'm an aspiring UX/UI and product designer who blends cognitive science with design practice. I care about accessibility, evidence over assumptions, and the small details that make a product feel effortless.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Off-screen, I'm usually hunting for the best mapo tofu, malatang or pho in town.
          </p>
        </div>
        <dl className="rounded-2xl border border-border bg-card p-8 shadow-soft">
          {FACTS.map(([k, v]) => (
            <div key={k} className="flex justify-between gap-6 border-b border-border py-4 last:border-0">
              <dt className="text-sm text-muted-foreground">{k}</dt>
              <dd className="text-right text-sm font-medium">{v}</dd>
            </div>
          ))}
        </dl>
      </section>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-16 md:flex-row md:items-end md:justify-between">
          <h2 className="font-display text-4xl md:text-6xl">Let's build something<br />thoughtful.</h2>
          <a href="mailto:Christinalin252005@gmail.com" className="inline-flex items-center gap-2 text-lg font-medium text-primary hover:underline">
            Christinalin252005@gmail.com <ArrowUpRight className="h-5 w-5" />
          </a>
        </div>
      </footer>
    </div>
  );
}
