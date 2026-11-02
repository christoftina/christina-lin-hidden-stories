import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState, type MouseEvent } from "react";
import heroDay from "@/assets/hero-day.jpg";
import heroHidden from "@/assets/hero-hidden.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Christina Lin — Product Designer" },
      { name: "description", content: "Pixel-flavored portfolio of Christina Lin, a UX/UI and product designer studying Cognitive Science at UC San Diego." },
      { property: "og:title", content: "Christina Lin — Product Designer" },
      { property: "og:description", content: "Case studies and quests from a product designer focused on accessibility." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const STARS = Array.from({ length: 40 }, (_, i) => ({
  top: (i * 37) % 100,
  left: (i * 61) % 100,
  delay: (i % 7) * 0.4,
}));

const CASES = [
  { tag: "Research", title: "Mental Health in Design Lab", org: "MiD Lab @ UCSD", text: "Designing supportive digital experiences grounded in research on wellbeing." },
  { tag: "Product", title: "CSES Project Design", org: "CSES @ UCSD", text: "Leading project design for a student engineering community's digital tools." },
  { tag: "Internship", title: "MixBash", org: "Intern", text: "Shipping product design work in a fast-moving startup environment." },
  { tag: "Research", title: "Language Infant Learning", org: "LiL Lab @ UCSD", text: "Supporting research on how infants learn language, through a cognitive science lens." },
];

const STATS = [
  ["School", "UC San Diego"],
  ["Level", "Senior"],
  ["Expected Grad", "Spring 2027"],
  ["Major", "Cog Sci – Design & Interaction"],
  ["Minor", "Speculative Design"],
];

function RevealHero() {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 50, y: 50, on: false });
  const move = (e: MouseEvent) => {
    const r = ref.current!.getBoundingClientRect();
    setPos({ x: ((e.clientX - r.left) / r.width) * 100, y: ((e.clientY - r.top) / r.height) * 100, on: true });
  };
  const mask = `radial-gradient(circle at ${pos.x}% ${pos.y}%, black ${pos.on ? 22 : 0}%, transparent ${pos.on ? 23 : 0}%)`;
  return (
    <div
      ref={ref}
      onMouseMove={move}
      onMouseLeave={() => setPos((p) => ({ ...p, on: false }))}
      className="relative aspect-[7/9] w-full max-w-sm cursor-crosshair overflow-hidden border-4 border-primary shadow-pixel"
    >
      <img src={heroDay} alt="Pixel art of Christina" width={896} height={1152} className="absolute inset-0 h-full w-full object-cover" />
      <img
        src={heroHidden}
        alt="Hidden wizard designer version of Christina"
        width={896}
        height={1152}
        className="absolute inset-0 h-full w-full object-cover"
        style={{ maskImage: mask, WebkitMaskImage: mask }}
      />
      <span className="font-pixel absolute bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap bg-card px-2 py-1 text-[10px] text-card-foreground">
        {pos.on ? "Secret found!" : "Hover to reveal"}
      </span>
    </div>
  );
}

function Index() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="relative min-h-screen overflow-hidden">
      {STARS.map((s, i) => (
        <span key={i} className="animate-twinkle absolute h-1 w-1 bg-star" style={{ top: `${s.top}%`, left: `${s.left}%`, animationDelay: `${s.delay}s` }} />
      ))}

      <header className="relative mx-auto flex max-w-6xl items-center justify-between border-b-4 border-grass px-6 py-6">
        <span className="font-pixel text-lg text-primary md:text-2xl">CHRISTINA LIN</span>
        <nav className="font-pixel flex gap-3 text-[10px] md:text-xs">
          {["work", "about"].map((id) => (
            <a key={id} href={`#${id}`} className="bg-primary px-3 py-2 uppercase text-primary-foreground shadow-pixel transition-transform hover:-translate-y-1">
              {id}
            </a>
          ))}
        </nav>
      </header>

      <section className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2">
        <div className="flex justify-center"><RevealHero /></div>
        <div>
          <div className="font-pixel animate-bob mb-6 inline-block bg-foreground px-4 py-3 text-xs text-background">HI! I AM CHRISTINA</div>
          <div className="border-8 border-wood bg-card p-8 text-card-foreground shadow-pixel">
            <h1 className="mb-4 text-2xl">WELCOME!</h1>
            <p className="text-xl leading-relaxed">
              I am a Product Designer and I like to design digital experiences with accessibility and how people actually use things in mind.
            </p>
          </div>
        </div>
      </section>

      <section id="work" className="relative mx-auto max-w-6xl px-6 py-16">
        <h2 className="mb-10 text-xl text-primary">▶ QUEST LOG</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {CASES.map((c, i) => (
            <button
              key={c.title}
              onClick={() => setOpen(open === i ? null : i)}
              className="group border-4 border-primary bg-muted p-6 text-left shadow-pixel transition-transform hover:-translate-y-1"
            >
              <span className="font-pixel bg-accent px-2 py-1 text-[10px] text-accent-foreground">{c.tag}</span>
              <h3 className="mt-4 text-sm leading-6">{c.title}</h3>
              <p className="mt-1 text-muted-foreground">{c.org}</p>
              {open === i && <p className="mt-4 text-lg">{c.text}</p>}
              <span className="font-pixel mt-4 block text-[10px] text-primary">{open === i ? "▲ CLOSE" : "▼ OPEN QUEST"}</span>
            </button>
          ))}
        </div>
      </section>

      <section id="about" className="relative mx-auto max-w-6xl px-6 py-16">
        <h2 className="mb-10 text-xl text-primary">▶ STATS</h2>
        <div className="grid gap-6 border-4 border-primary bg-muted p-6 shadow-pixel md:grid-cols-2">
          <dl className="space-y-3">
            {STATS.map(([k, v]) => (
              <div key={k} className="flex justify-between gap-4 border-b border-border pb-2">
                <dt className="font-pixel text-[10px] text-muted-foreground">{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
          <div className="space-y-5">
            {[["HP", 225, 225], ["Magic Power", 80, 100]].map(([k, v, max]) => (
              <div key={k as string}>
                <div className="font-pixel mb-2 flex justify-between text-[10px]"><span>{k}</span><span>{v}/{max}</span></div>
                <div className="h-4 border-2 border-foreground"><div className="h-full bg-accent" style={{ width: `${((v as number) / (max as number)) * 100}%` }} /></div>
              </div>
            ))}
            <p className="font-pixel text-[10px] leading-5 text-muted-foreground">Favorite dishes: Wasabi chicken · Mapo Tofu · Malatang · Pho · Pad KraPao</p>
            <a href="mailto:Christinalin252005@gmail.com" className="font-pixel inline-block bg-primary px-4 py-3 text-[10px] text-primary-foreground shadow-pixel hover:-translate-y-1">
              ✉ SEND MESSAGE
            </a>
          </div>
        </div>
      </section>

      <footer className="grass-strip relative mt-16 h-32" />
    </div>
  );
}
