import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef, useState, type MouseEvent } from "react";
import { ArrowUpRight } from "lucide-react";
import heroFront from "@/assets/hero-front.jpg";
import heroReveal from "@/assets/hero-reveal.jpg";
import { PACKD_IMAGES, type CaseImage } from "@/lib/packd-images";
import { INSTACART_IMAGES } from "@/lib/instacart-images";
import acmLogo from "@/assets/acm-projects-team.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Christina Lin — Product Designer" },
      { name: "description", content: "Christina Lin is a product designer studying Cognitive Science at UC San Diego. Selected work includes PackD, a group travel planning app." },
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
    title: "Extending Instacart",
    org: "Instacart",
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
    slug: "mid-lab",
    placeholder: true,
    title: "Designing calmer check-ins for student mental health",
    org: "Mental Health in Design Lab · UC San Diego",
    role: "UX Researcher & Designer",
    timeline: "10 weeks",
    tags: ["User research", "Accessibility", "Mobile"],
    summary: "Students struggled to track their wellbeing without feeling judged. I led interviews and prototyped a low-pressure daily check-in flow.",
    contributions: ["Ran 8 semi-structured interviews", "Synthesized insights into an affinity map", "Designed and tested mid-fi prototypes"],
  },
  {
    n: "04",
    slug: "cses",
    placeholder: true,
    title: "A clearer events hub for an engineering community",
    org: "CSES · UC San Diego",
    role: "Project Designer",
    timeline: "1 quarter",
    tags: ["Product design", "Design systems"],
    summary: "Members missed events because information was scattered. I redesigned the hub so upcoming events and sign-ups live in one place.",
    contributions: ["Audited existing touchpoints", "Built a small component library", "Partnered with engineers on handoff"],
  },
  {
    n: "05",
    slug: "mixbash",
    placeholder: true,
    title: "Streamlining event planning at MixBash",
    org: "MixBash",
    role: "Product Design Intern",
    timeline: "Summer internship",
    tags: ["Startup", "End-to-end"],
    summary: "Hosts dropped off during event setup. I simplified the creation flow and reduced the steps needed to publish an event.",
    contributions: ["Mapped the existing creation flow", "Designed a shorter step-by-step setup", "Validated with usability tests"],
  },
];

const EXPERIENCE = [
  { role: "Product Design Intern", org: "MixBash", when: "Internship" },
  { role: "UX Researcher & Designer", org: "Mental Health in Design (MiD) Lab, UCSD", when: "Research" },
  { role: "Project Designer", org: "CSES @ UCSD", when: "Student org" },
  { role: "Research Assistant", org: "Language Infant Learning (LiL) Lab, UCSD", when: "Research" },
  { role: "Regents Scholar", org: "UC San Diego", when: "Honor" },
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
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
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

function CaseCard({ data }: { data: Case }) {
  const hero = data.images?.[0];
  return (
    <Link to="/case-studies/$slug" params={{ slug: data.slug }} aria-label={`View ${data.org} case study`} className="group block overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
      <article>
        {hero && <div className="border-b border-border bg-secondary p-6 md:p-10"><img src={hero.src} alt={hero.alt} className="mx-auto w-full max-w-3xl" /></div>}
        <div className="grid gap-6 p-6 md:grid-cols-[0.55fr_1.45fr] md:gap-12 md:p-10">
          <div>
            <span className="font-display text-5xl text-primary">{data.n}</span>
            <div className="mt-6 flex flex-wrap gap-2">{data.tags.map((tag) => <span key={tag} className="rounded-full bg-accent px-3 py-1 text-xs">{tag}</span>)}</div>
          </div>
          <div>
            {data.placeholder && <p className="mb-3 text-xs font-medium text-muted-foreground">Placeholder case study · details awaiting confirmation</p>}
            <p className="text-sm text-muted-foreground">{data.org}</p>
            <h3 className="font-display mt-2 text-3xl leading-tight group-hover:text-primary md:text-4xl">{data.title}</h3>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{data.summary}</p>
            <dl className="mt-6 flex flex-wrap gap-x-12 gap-y-4 border-y border-border py-4 text-sm">
              <div><dt className="text-muted-foreground">My role</dt><dd className="mt-1 font-medium">{data.role ?? "Awaiting confirmation"}</dd></div>
              {data.timeline && <div><dt className="text-muted-foreground">Timeline</dt><dd className="mt-1 font-medium">{data.timeline}</dd></div>}
            </dl>
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary">View case study <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></span>
          </div>
        </div>
      </article>
    </Link>
  );
}

function Index() {

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-10 border-b border-border bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="font-display text-2xl">Christina Lin</a>
          <nav className="flex gap-8 text-sm text-muted-foreground">
            <a href="#work" className="hover:text-foreground">Work</a>
            <a href="#experience" className="hover:text-foreground">Experience</a>
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
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-display text-4xl md:text-5xl">Case studies</h2>
          <span className="text-sm text-muted-foreground">{CASES.length} projects</span>
        </div>
        <div className="space-y-10">
          {CASES.map((data) => <CaseCard key={data.n} data={data} />)}
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="font-display mb-12 text-4xl md:text-5xl">Experience</h2>
        <ul className="border-t border-border">
          {EXPERIENCE.map((e) => (
            <li key={e.org} className="grid grid-cols-1 gap-1 border-b border-border py-6 md:grid-cols-[1fr_1fr_auto] md:items-center">
              <span className="font-display text-2xl">{e.role}</span>
              <span className="text-muted-foreground">{e.org}</span>
              <span className="text-sm text-muted-foreground">{e.when}</span>
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
