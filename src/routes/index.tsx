import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState, type PointerEvent } from "react";
import { ArrowUpRight, CupSoda, Gamepad2, Soup, Tv, type LucideIcon } from "lucide-react";
import heroFront from "@/assets/hero-front.jpg";
import heroReveal from "@/assets/hero-reveal.jpg";
import { PACKD_IMAGES, type CaseImage } from "@/lib/packd-images";
import { INSTACART_IMAGES } from "@/lib/instacart-images";
import acmLogo from "@/assets/acm-projects-team.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Christina Lin — Product Designer" },
      { name: "description", content: "Christina Lin is an aspiring product designer studying Cognitive Science (Design & Interaction) at UC San Diego. Selected work includes PackD, a group travel app, and a budgeting extension for Instacart." },
      { property: "og:title", content: "Christina Lin — Product Designer" },
      { property: "og:description", content: "Selected work and experience from a product designer focused on research, accessibility and real behavior." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

export type StorySection = {
  id: string;
  title: string;
  problem?: boolean;
  paragraphs?: string[];
  bullets?: string[];
  items?: { label: string; text: string }[];
};

export type Case = {
  slug: string;
  placeholder?: boolean;
  n: string;
  title: string;
  org: string;
  role?: string;
  orgLogo?: { src: string; alt: string };
  timeline?: string;
  tags: string[];
  summary: string;
  contributions: string[];
  images?: CaseImage[];
  imagesHaveOverview?: boolean;
  story?: StorySection[];
  prototype?: string;
};

export const CASES: Case[] = [
  {
    n: "01",
    slug: "packd",
    title: "PackD — planning large group trips in one place",
    org: "ACM project",
    orgLogo: { src: acmLogo.url, alt: "ACM Projects Team #1 design logo" },
    role: "UI/UX Designer & Researcher",
    timeline: "Spring 2026",
    tags: ["User research", "UI/UX design", "Prototyping", "Mobile"],
    summary:
      "Planning large group trips are difficult, discover trending destinations, save money, time and communicate with ease using PackD.",
    contributions: [
      "Designed and created the home page",
      "Designed and created the messaging page",
      "Designed and created the smart search features",
      "Led the showcase presentation",
    ],
    images: PACKD_IMAGES,
    prototype: "https://www.figma.com/proto/WOFoOSwVJpeSL3k9uMkjjO/ACM-SP26-Projects?page-id=70%3A12&node-id=138-41&viewport=-2721%2C-987%2C0.48&t=bKOpByEoYr97WXC9-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=138%3A41&show-proto-sidebar=1",
    story: [
      {
        id: "problem",
        title: "Problem statement",
        problem: true,
        paragraphs: ["How might we create a mobile app that simplifies the trip planning process for young adults so that planning trips is more budget and group friendly?"],
      },
      {
        id: "goals",
        title: "Goals",
        bullets: [
          "Simplify group trip planning",
          "Encourage budgeting",
          "Improve communication",
          "Reduce cognitive load on navigating through multiple apps",
        ],
      },
      {
        id: "competitive-analysis",
        title: "Competitive analysis",
        paragraphs: [
          "Most solutions excel at organizing travel logistics but fall short in supporting group coordination. Users often rely on multiple tools to manage availability, communicate preferences, and make decisions collectively.",
          "These findings informed our design direction for PackD: a unified platform that streamlines both trip planning and group collaboration, reducing friction throughout the travel planning process.",
        ],
      },
      {
        id: "user-research",
        title: "User research",
        paragraphs: [
          "User research was conducted via surveys. We discovered that users disliked needing to navigate through multiple apps and having a messy system that easily overwhelms them.",
          "The majority preferred features such as splitting expenses, curated destination suggestions, and clean itineraries, while disliking cluttered user interfaces.",
        ],
      },
      {
        id: "solution",
        title: "Solution",
        paragraphs: [
          "My team and I addressed user concerns and created PackD, a centralized travel planning mobile app where users can collaborate on destinations, split expenses (as well as remembering who owes whom and for what expense), use a group itinerary editable calendar, and a personal messaging hub within the app.",
          "With a simple interface, users can navigate easily without struggling with confusing features.",
        ],
      },
      {
        id: "usability",
        title: "Usability findings & iterations",
        items: [
          { label: "Finding", text: "Users thought the front page looked too static and plain." },
          { label: "Solution", text: "Added a texturized background." },
          { label: "Finding", text: "The original navigation bar design seemed confusing for users, as the indicator for which page they were on was not clearly defined." },
          { label: "Solution", text: "Changed into a bubble style where the icon's color inverted when the user is on the page." },
        ],
      },
      {
        id: "next-steps",
        title: "Next steps",
        bullets: [
          "Gather information from a broader, more diverse group of users for their input on the app",
          "More emphasis on the discover page of the app — making different features, changing the layout, etc.",
          "Fleshing out the finance page more for app consistency",
          "Emphasis on creating easier steps for user flow",
          "Integrate a map feature with all the stops",
        ],
      },
    ],
  },
  {
    n: "02",
    slug: "instacart",
    title: "Extending Instacart with a budget-aware meal planner",
    org: "COGS 127 · UC San Diego",
    tags: ["Meal planning", "Budgeting", "User research"],
    summary: "Young adults are having difficulty budgeting their grocery money for the week, let's make sure they don't overspend.",
    contributions: [],
    images: INSTACART_IMAGES,
    imagesHaveOverview: false,
    story: [
      {
        id: "problem", title: "Problem statement", problem: true,
        paragraphs: ["Rising grocery costs and busy schedules make meal planning difficult, leaving many people uncertain about what to cook and concerned about overspending on groceries."],
      },
      {
        id: "goals", title: "Goals",
        bullets: ["Simplify meal planning", "Help users stay within budget while grocery shopping", "Enhance Instacart's value for budget conscious shoppers", "Increase confidence in user purchasing decisions"],
      },
      {
        id: "competitive-analysis", title: "Competitive analysis",
        paragraphs: [
          "My team conducted a competitive analysis of several grocery and meal-planning platforms, including HelloFresh, Too Good To Go, and Thrive Market, to identify features that could improve the grocery shopping experience. We evaluated each platform's strengths and limitations and explored opportunities to incorporate valuable features into an existing grocery delivery service such as Instacart.",
          "HelloFresh provides users with curated meal recipes and pre-portioned ingredients, helping reduce the effort required for meal planning. However, users have limited flexibility in modifying included ingredients and seasonings, and the service does not currently accept EBT payments.",
          "TooGoodToGo focuses on affordability and sustainability by connecting users with discounted surplus food from local businesses. While the platform helps users save money and reduce food waste, food selections are often limited and may come as surprise bags with only general descriptions of their contents.",
          "Thrive Market offers a wide selection of pantry staples, frozen foods, and specialty dietary products at discounted prices. While it excels at providing affordable grocery options, it offers limited fresh produce compared to traditional grocery delivery services.",
          "Through this analysis, we identified three key opportunities for Instacart: integrating meal-planning support, improving budget-conscious shopping options, and helping users discover affordable grocery alternatives while maintaining the flexibility to choose their own products. These insights informed the development of our proposed meal-planning extension.",
        ],
      },
      {
        id: "user-research", title: "User research",
        paragraphs: [
          "Through user interviews, we discovered that budget concerns heavily influenced grocery shopping decisions. Participants consistently prioritized affordability and often second-guessed purchases out of fear of exceeding their budget.",
          "Time constraints also played a significant role in meal planning behavior. Limited time reduced how often participants were able to plan meals or shop for groceries, leading them to rely on whatever ingredients were available at home. As a result, meals became less intentional, repetitive, and often less balanced. Participants also struggled to create meals that felt both filling and nutritious while staying within budget. Many felt forced to sacrifice nutritional quality in order to purchase enough food to meet their needs.",
        ],
      },
      {
        id: "pain-points", title: "Pain points",
        paragraphs: ["Users struggled most with:"],
        bullets: ["Keeping track of spending while shopping", "Planning groceries consistently with limited time", "Creating meals that feel complete within a limited budget"],
      },
      {
        id: "wishes", title: "Wishes and desires",
        paragraphs: ["Users wanted to see:"],
        bullets: ["Clear visibility into how much they are spending in real time", "Support in building affordable but filling meals", "A more efficient and less stressful planning process"],
      },
      {
        id: "solution", title: "Solution",
        paragraphs: ["To address users' concerns around budgeting and meal planning, we designed a budget-aware meal planning feature for Instacart. The feature helps users build affordable, filling meals while tracking costs in real time, making grocery shopping more efficient, less stressful, and financially predictable."],
      },
    ],
  },
  {
    n: "03",
    slug: "mixbash",
    placeholder: true,
    title: "Product design & marketing at a YC startup in Tokyo",
    org: "MixBash · Tokyo",
    role: "Product Design & Marketing Intern",
    timeline: "Jul – Aug 2026",
    tags: ["Startup", "Product design", "Marketing"],
    summary: "I spent summer 2026 in Tokyo as a Product Design and Marketing intern at a Y Combinator startup.",
    contributions: [],
  },
  {
    n: "04",
    slug: "cses",
    placeholder: true,
    title: "Designing the SanD Hacks webpage",
    org: "CSES · UC San Diego",
    role: "Project Designer",
    tags: ["Web design", "Student org"],
    summary: "As a Project Designer at CSES, I helped design the webpage for SanD Hacks.",
    contributions: [],
  },
  {
    n: "05",
    slug: "mid-lab",
    placeholder: true,
    title: "Qualitative research at the Mental Health in Design Lab",
    org: "Mental Health in Design Lab · UC San Diego",
    role: "Research Assistant",
    timeline: "Spring 2026 – present",
    tags: ["Qualitative analysis", "Research"],
    summary: "I support the lab's research through qualitative analysis.",
    contributions: [],
  },
];

type Kind = "Design" | "Research" | "Leadership & honors";

type Experience = {
  role: string;
  org: string;
  when: string;
  kind: Kind;
  current?: boolean;
  note?: string;
  slug?: string;
};

const EXPERIENCE: Experience[] = [
  { role: "UX/UI Designer", org: "Product Management Club (PMC) @ UCSD", when: "Fall 2026 – present", kind: "Design", current: true },
  { role: "Design Mentor", org: "ACM Projects @ UCSD", when: "Fall 2026 – present", kind: "Leadership & honors", current: true, note: "Mentoring this quarter's ACM project teams on design." },
  { role: "Product Design & Marketing Intern", org: "MixBash · YC startup, Tokyo", when: "Jul – Aug 2026", kind: "Design", slug: "mixbash" },
  { role: "Research Assistant", org: "Mental Health in Design (MiD) Lab, UCSD", when: "Spring 2026 – present", kind: "Research", current: true, note: "Qualitative analysis.", slug: "mid-lab" },
  { role: "UI/UX Designer & Researcher", org: "ACM Projects @ UCSD — PackD", when: "Spring 2026", kind: "Design", note: "Designed PackD, a group travel planning app.", slug: "packd" },
  { role: "Project Designer", org: "CSES @ UCSD", when: "Student org", kind: "Design", note: "Helped design the SanD Hacks webpage.", slug: "cses" },
  { role: "Research Assistant", org: "Language Infant Learning (LiL) Lab, UCSD", when: "Fall 2025 – Winter 2026", kind: "Research" },
  { role: "Regents Scholar", org: "UC San Diego", when: "Honor", kind: "Leadership & honors" },
];

const FILTERS: ("All" | Kind)[] = ["All", "Design", "Research", "Leadership & honors"];

const FACTS = [
  ["Education", "UC San Diego"],
  ["Year", "4th year · transfer student"],
  ["Major", "Cognitive Science — Design & Interaction"],
  ["Minor", "Speculative Design"],
  ["Graduating", "Spring 2027"],
  ["Honors", "Regents Scholar"],
];

const NOW = [
  "UX/UI Designer at PMC",
  "Design Mentor for ACM Projects",
  "Research Assistant at the MiD Lab",
  "Project Designer at CSES",
  "Regents Scholar",
  "Previously: product design & marketing at a YC startup in Tokyo",
];

const HOBBIES: { icon: LucideIcon; title: string; back: string }[] = [
  { icon: Gamepad2, title: "Gaming", back: "Always down for a co-op session — ask me what I'm playing right now." },
  { icon: Tv, title: "Anime", back: "Usually mid-season on something. Recommendations are very welcome." },
  { icon: CupSoda, title: "Boba runs", back: "The best study break is a boba run with friends." },
  { icon: Soup, title: "Malatang", back: "Building the perfect malatang bowl is a design problem, too." },
];

const ROTATING = ["actually use things.", "plan trips together.", "budget their groceries.", "find their people."];

const EMAIL = "Christinalin252005@gmail.com";

function usePrefersReducedMotion() {
  const [reduce, setReduce] = useState(false);
  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduce(query.matches);
    const onChange = () => setReduce(query.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);
  return reduce;
}

function RotatingWords({ words }: { words: string[] }) {
  const reduce = usePrefersReducedMotion();
  const [index, setIndex] = useState(0);
  const [text, setText] = useState(words[0] ?? "");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index] ?? "";
    let timer: number;
    if (reduce) {
      timer = window.setTimeout(() => {
        const next = (index + 1) % words.length;
        setIndex(next);
        setText(words[next] ?? "");
      }, 3000);
    } else if (!deleting && text === word) {
      timer = window.setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && text === "") {
      timer = window.setTimeout(() => {
        setDeleting(false);
        setIndex((value) => (value + 1) % words.length);
      }, 250);
    } else {
      timer = window.setTimeout(
        () => setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1)),
        deleting ? 35 : 75,
      );
    }
    return () => window.clearTimeout(timer);
  }, [text, deleting, index, words, reduce]);

  return (
    <span className="block min-h-[2.1em] md:min-h-[1.1em]">
      <span className="sr-only">{words.join(" ")}</span>
      <em aria-hidden="true" className="text-primary">
        {text}
        <span className="animate-caret ml-0.5 inline-block h-[0.8em] w-[3px] translate-y-[0.08em] rounded-full bg-lavender" />
      </em>
    </span>
  );
}

function RevealImage() {
  const ref = useRef<HTMLDivElement>(null);
  const [p, setP] = useState({ x: 50, y: 50, on: false });
  const move = (e: PointerEvent) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    setP({ x: e.clientX - r.left, y: e.clientY - r.top, on: true });
  };
  const size = p.on ? 160 : 0;
  const mask = `radial-gradient(circle ${size}px at ${p.x}px ${p.y}px, black 98%, transparent 100%)`;
  return (
    <div className="relative">
      <div aria-hidden="true" className="animate-drift absolute -right-6 -top-6 size-40 rounded-full bg-lavender/60 blur-2xl" />
      <div aria-hidden="true" className="animate-drift absolute -bottom-8 -left-8 size-48 rounded-full bg-accent blur-2xl [animation-delay:-6s]" />
      <div
        ref={ref}
        onPointerMove={move}
        onPointerDown={move}
        onPointerLeave={() => setP((s) => ({ ...s, on: false }))}
        className="relative aspect-[4/5] w-full touch-pan-y overflow-hidden rounded-2xl shadow-soft md:cursor-none"
      >
        <img src={heroFront} alt="A designer's desk" width={1200} height={1504} className="absolute inset-0 h-full w-full object-cover" />
        <img
          src={heroReveal}
          alt="The same desk revealing wireframes, user flows and an affinity map"
          width={1200}
          height={1504}
          className="absolute inset-0 h-full w-full object-cover"
          style={{ maskImage: mask, WebkitMaskImage: mask }}
        />
        {p.on && (
          <span
            aria-hidden="true"
            className="pointer-events-none absolute size-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full ring-2 ring-lavender/80"
            style={{ left: p.x, top: p.y }}
          />
        )}
        <span className="label-ui absolute bottom-4 left-4 rounded-full bg-card/90 px-3 py-1.5 text-card-foreground backdrop-blur">
          {p.on ? "The process behind the polish" : "Hover or drag to see the process"}
        </span>
      </div>
    </div>
  );
}

function trackSpotlight(e: PointerEvent<HTMLElement>) {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
}

function Tags({ tags }: { tags: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span key={tag} className="rounded-full bg-accent px-3 py-1 font-sans text-xs text-accent-foreground">{tag}</span>
      ))}
    </div>
  );
}

function CaseCard({ data }: { data: Case }) {
  const hero = data.images?.[0];
  return (
    <Link
      to="/case-studies/$slug"
      params={{ slug: data.slug }}
      aria-label={`View ${data.title} case study`}
      onPointerMove={trackSpotlight}
      className="spotlight group block overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition duration-300 hover:-translate-y-1 hover:border-lavender focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <article>
        {hero && (
          <div className="overflow-hidden border-b border-border bg-secondary p-6 md:p-10">
            <img src={hero.src} alt={hero.alt} className="mx-auto w-full max-w-3xl transition duration-500 group-hover:scale-[1.02]" />
          </div>
        )}
        <div className="grid gap-6 p-6 md:grid-cols-[0.55fr_1.45fr] md:gap-12 md:p-10">
          <div className="space-y-6">
            {data.orgLogo && <img src={data.orgLogo.src} alt={data.orgLogo.alt} width={585} height={367} className="h-auto w-32 rounded-lg" />}
            <Tags tags={data.tags} />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">{data.org}</p>
            <h3 className="font-display mt-2 text-3xl leading-tight transition-colors group-hover:text-primary md:text-4xl">{data.title}</h3>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{data.summary}</p>
            {(data.role || data.timeline) && (
              <dl className="mt-6 flex flex-wrap gap-x-12 gap-y-4 border-y border-border py-4 text-sm">
                {data.role && <div><dt className="label-ui text-muted-foreground">My role</dt><dd className="mt-1 font-medium">{data.role}</dd></div>}
                {data.timeline && <div><dt className="label-ui text-muted-foreground">Timeline</dt><dd className="mt-1 font-medium">{data.timeline}</dd></div>}
              </dl>
            )}
            <span className="mt-6 inline-flex items-center gap-2 font-sans text-sm font-medium text-primary">
              View case study <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}

function ComingSoonCard({ data }: { data: Case }) {
  return (
    <Link
      to="/case-studies/$slug"
      params={{ slug: data.slug }}
      aria-label={`Preview ${data.title}`}
      onPointerMove={trackSpotlight}
      className="spotlight group flex h-full flex-col rounded-2xl border border-dashed border-border bg-card/60 p-6 transition duration-300 hover:-translate-y-1 hover:border-lavender hover:bg-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <span className="label-ui inline-flex items-center gap-2 text-primary">
        <span className="size-1.5 rounded-full bg-lavender" /> Case study in progress
      </span>
      <h3 className="font-display mt-4 text-2xl leading-tight transition-colors group-hover:text-primary">{data.title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{data.role} · {data.org}</p>
      <p className="mt-4 flex-1 leading-relaxed text-muted-foreground">{data.summary}</p>
      <div className="mt-6 flex items-center justify-between gap-4">
        <span className="font-sans text-xs text-muted-foreground">{data.timeline ?? ""}</span>
        <ArrowUpRight className="size-4 text-primary transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
      </div>
    </Link>
  );
}

function NowMarquee() {
  const items = [...NOW, ...NOW];
  return (
    <div className="group overflow-hidden border-y border-border bg-lavender-soft py-4" aria-label="What I'm doing now">
      <ul className="animate-marquee flex w-max gap-10 group-hover:[animation-play-state:paused]">
        {items.map((item, i) => (
          <li key={`${item}-${i}`} aria-hidden={i >= NOW.length} className="flex items-center gap-10 whitespace-nowrap font-display text-xl italic text-accent-foreground md:text-2xl">
            {item}
            <span className="text-lavender">✦</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ExperienceList() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");
  const shown = EXPERIENCE.filter((e) => filter === "All" || e.kind === filter);
  return (
    <>
      <div role="group" aria-label="Filter experience" className="mb-8 flex flex-wrap gap-2">
        {FILTERS.map((f) => {
          const count = f === "All" ? EXPERIENCE.length : EXPERIENCE.filter((e) => e.kind === f).length;
          const active = filter === f;
          return (
            <button
              key={f}
              type="button"
              aria-pressed={active}
              onClick={() => setFilter(f)}
              className={`rounded-full border px-4 py-2 font-sans text-sm transition ${active ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card hover:border-lavender hover:bg-lavender-soft"}`}
            >
              {f} <span className={active ? "opacity-80" : "text-muted-foreground"}>{count}</span>
            </button>
          );
        })}
      </div>
      <ul className="border-t border-border">
        {shown.map((e) => {
          const body = (
            <>
              <span className="absolute inset-y-0 left-0 w-1 origin-top scale-y-0 rounded-full bg-primary transition-transform duration-300 group-hover:scale-y-100" />
              <span>
                <span className="font-display flex items-center gap-3 text-2xl">
                  {e.role}
                  {e.current && (
                    <span className="relative flex size-2" title="Current">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lavender opacity-75" />
                      <span className="relative inline-flex size-2 rounded-full bg-primary" />
                    </span>
                  )}
                </span>
                {e.note && <span className="mt-1 block text-muted-foreground">{e.note}</span>}
              </span>
              <span className="text-muted-foreground">{e.org}</span>
              <span className="flex items-center gap-2 font-sans text-sm text-muted-foreground md:justify-end">
                {e.when}
                {e.slug && <ArrowUpRight className="size-4 text-primary transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />}
              </span>
            </>
          );
          const cls = "group relative grid grid-cols-1 gap-1 py-6 pl-5 transition-colors md:grid-cols-[1.3fr_1fr_12rem] md:items-center md:gap-6 hover:bg-lavender-soft/60";
          return (
            <li key={`${e.role}-${e.org}`} className="border-b border-border">
              {e.slug ? (
                <Link to="/case-studies/$slug" params={{ slug: e.slug }} className={cls}>{body}</Link>
              ) : (
                <div className={cls}>{body}</div>
              )}
            </li>
          );
        })}
      </ul>
    </>
  );
}

function HobbyCard({ icon: Icon, title, back }: { icon: LucideIcon; title: string; back: string }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <button
      type="button"
      aria-pressed={flipped}
      aria-label={`${title}: ${back}`}
      onClick={() => setFlipped((v) => !v)}
      data-flipped={flipped}
      className="flip block h-44 w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-2xl"
    >
      <span className="flip-inner block">
        <span className="flip-face flex flex-col justify-between rounded-2xl border border-border bg-card p-5 shadow-soft">
          <span className="flex size-11 items-center justify-center rounded-full bg-accent text-accent-foreground"><Icon className="size-5" /></span>
          <span>
            <span className="font-display block text-2xl">{title}</span>
            <span className="label-ui text-muted-foreground">Flip me</span>
          </span>
        </span>
        <span className="flip-face flip-back flex items-center rounded-2xl bg-primary p-5 text-primary-foreground shadow-soft">
          <span className="font-display text-xl leading-snug">{back}</span>
        </span>
      </span>
    </button>
  );
}

function Index() {
  const featured = CASES.filter((c) => !c.placeholder);
  const upcoming = CASES.filter((c) => c.placeholder);

  return (
    <div className="min-h-screen overflow-x-clip">
      <header className="sticky top-0 z-20 border-b border-border bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="font-display text-2xl">Christina Lin<span className="text-primary">.</span></a>
          <nav className="flex items-center gap-5 font-sans text-sm text-muted-foreground md:gap-8">
            {[["#work", "Work"], ["#experience", "Experience"], ["#about", "About"]].map(([href, label]) => (
              <a key={href} href={href} className="relative hidden after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-primary after:transition-transform hover:text-foreground hover:after:scale-x-100 sm:inline">{label}</a>
            ))}
            <a href={`mailto:${EMAIL}`} className="rounded-full bg-primary px-4 py-1.5 text-primary-foreground transition hover:opacity-90">Contact</a>
          </nav>
        </div>
      </header>

      <section className="mx-auto grid max-w-6xl items-center gap-14 px-6 py-16 md:grid-cols-[1.2fr_1fr] md:py-24">
        <div className="animate-rise">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 font-sans text-sm text-muted-foreground">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lavender opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-primary" />
            </span>
            Open to 2027 product design roles
          </p>
          <h1 className="font-display text-5xl leading-[1.05] md:text-7xl">
            Designing for how people
            <RotatingWords words={ROTATING} />
          </h1>
          <p className="mt-6 max-w-lg text-xl leading-relaxed text-muted-foreground">
            Hi, I'm Christina — an aspiring product designer studying Cognitive Science (Design &amp; Interaction) at UC San Diego. I pair research with craft so products feel effortless to use.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 font-sans">
            <a href="#work" className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:-translate-y-0.5 hover:opacity-90">View my work</a>
            <a href={`mailto:${EMAIL}`} className="rounded-full border border-border bg-card px-6 py-3 text-sm font-medium transition hover:-translate-y-0.5 hover:border-lavender hover:bg-lavender-soft">Say hello</a>
          </div>
        </div>
        <div className="animate-rise [animation-delay:150ms]"><RevealImage /></div>
      </section>

      <NowMarquee />

      <section id="work" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-20">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="label-ui mb-3 text-primary">Selected work</p>
            <h2 className="font-display text-4xl md:text-5xl">Case studies</h2>
          </div>
          <span className="font-sans text-sm text-muted-foreground">{featured.length} full · {upcoming.length} in progress</span>
        </div>
        <div className="space-y-10">
          {featured.map((data) => <CaseCard key={data.slug} data={data} />)}
        </div>
        {upcoming.length > 0 && (
          <>
            <h3 className="font-display mb-6 mt-16 text-3xl">More on the way</h3>
            <div className="grid gap-6 md:grid-cols-3">
              {upcoming.map((data) => <ComingSoonCard key={data.slug} data={data} />)}
            </div>
          </>
        )}
      </section>

      <section id="experience" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-20">
        <p className="label-ui mb-3 text-primary">Where I've been</p>
        <h2 className="font-display mb-10 text-4xl md:text-5xl">Experience</h2>
        <ExperienceList />
      </section>

      <section id="about" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-20">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <p className="label-ui mb-3 text-primary">A little about me</p>
            <h2 className="font-display text-4xl md:text-5xl">About</h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              I'm a 4th-year transfer student and Regents Scholar at UC San Diego, majoring in Cognitive Science with a specialization in Design &amp; Interaction. I'm drawn to product design because it sits right where my two interests meet: understanding how people think, and making things that fit how they actually behave.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              My path runs through research labs, student design teams and a summer at a YC startup in Tokyo. Today I design with PMC, mentor ACM project teams and do qualitative analysis at the Mental Health in Design Lab.
            </p>
          </div>
          <dl className="self-start rounded-2xl border border-border bg-card p-8 shadow-soft">
            {FACTS.map(([k, v]) => (
              <div key={k} className="flex justify-between gap-6 border-b border-border py-4 last:border-0">
                <dt className="label-ui self-center text-muted-foreground">{k}</dt>
                <dd className="text-right font-medium">{v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-20">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
            <h3 className="font-display text-3xl md:text-4xl">Off the clock</h3>
            <span className="font-sans text-sm text-muted-foreground">Hover or tap a card</span>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {HOBBIES.map((h) => <HobbyCard key={h.title} {...h} />)}
          </div>
        </div>
      </section>

      <footer className="relative overflow-hidden border-t border-border bg-lavender-soft">
        <div aria-hidden="true" className="animate-drift absolute -right-20 -top-20 size-72 rounded-full bg-lavender/50 blur-3xl" />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-20 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="font-display text-4xl md:text-6xl">Let's build something<br /><em className="text-primary">thoughtful</em>.</h2>
            <p className="mt-4 text-muted-foreground">Bonus points if we talk about it over boba.</p>
          </div>
          <a href={`mailto:${EMAIL}`} className="group inline-flex items-center gap-2 text-lg font-medium text-primary">
            <span className="border-b border-transparent transition group-hover:border-primary">{EMAIL}</span>
            <ArrowUpRight className="size-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </a>
        </div>
        <p className="relative mx-auto max-w-6xl px-6 pb-8 font-sans text-xs text-muted-foreground">© 2026 Christina Lin · Designed with lavender &amp; too much boba</p>
      </footer>
    </div>
  );
}
