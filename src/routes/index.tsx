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
  prototypeLabel?: string;
  tools?: string[];
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
    tools: ["Figma", "FigJam"],
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
    role: "Designer, Interaction & Researcher",
    timeline: "Spring 2026",
    tools: ["Figma", "FigJam"],
    prototype: "https://www.figma.com/proto/Wd4vPqo0PTWwZmV4tvMGz8/Cogs-127---Instacart-Extension?node-id=507-2383&p=f&viewport=1501%2C-3313%2C0.35&t=Lpj6gnd9LW2hmA6Y-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=507%3A2383&page-id=0%3A1",
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
      {
        id: "usability", title: "Usability findings & iterations",
        items: [
          { label: "Finding", text: "Participants responded positively to both budget widget concepts. They appreciated the detailed spending information in the larger widget while also valuing the smaller widget's reduced visual footprint." },
          { label: "Solution", text: "We created a hybrid design that combines the visibility of the larger concept with a more compact layout, and moved the widget closer to the bottom of the screen to improve thumb reachability while browsing meals." },
          { label: "Finding", text: "Participants preferred a simpler approach to dietary preferences and suggested adding cuisine-based filtering. Earlier designs used dedicated screens with large visual elements." },
          { label: "Solution", text: "The final design condenses these selections into a compact filter menu on the browse meals page, creating a more streamlined experience without adding extra steps to the flow." },
        ],
      },
    ],
  },
  {
    n: "03",
    slug: "aria",
    title: "A.R.I.A — an AI Readiness Interview Assistant",
    org: "Hackathon project",
    role: "Lead Designer, Interaction & Researcher",
    timeline: "Apr 4 – 5 · 2-day hackathon",
    tools: ["Figma", "FigJam", "Claude API", "ElevenLabs"],
    tags: ["AI", "Interaction design", "Hackathon"],
    summary: "This technical interview agent elevates your pre-interview experience — a live, voice-driven AI interviewer that watches you code and gives feedback.",
    contributions: [],
    prototype: "https://youtu.be/lW5jPb4g7Nw",
    prototypeLabel: "Watch the demo video",
    story: [
      { id: "problem", title: "Problem statement", problem: true, paragraphs: ["How could we create a user-friendly application that is unique to what is already in the current market?"] },
      {
        id: "goals", title: "Goals",
        bullets: [
          "Make a user-friendly space where, while coding, users have ample room to see both live feedback and their code",
          "Showcase consolidated feedback",
          "Create an option to see all verbal exchanges in text format",
        ],
      },
      {
        id: "user-research", title: "User research",
        paragraphs: [
          "Our team began with an idea for an application that helps people seeking jobs, which grew into an interview prep AI bot. To elevate it, we looked for apps that combine a bot that reads code live with immediate feedback. There was little out there as niche as our idea, which — given our limited time frame — we deemed sufficient research.",
          "While there are plenty of interview preparation resources, we found it difficult to find one with technical aspects embedded in the software. As a team of four students with computer science experience, we felt a live technical interview bot would be extremely helpful.",
        ],
      },
      {
        id: "pain-points", title: "Pain points",
        paragraphs: ["Interviewees struggled with:"],
        bullets: ["Receiving quick feedback on their coding assignments", "Finding interview prep that tells them what they did well and what they did poorly"],
      },
      {
        id: "solution", title: "Solution",
        paragraphs: ["A technical interview bot that operates live with you. It can hear your audio and track your movements, which lets it give feedback at the end of the session — grading whether you explained your code correctly and even whether you had good posture — preparing you for real-world technical interviews."],
      },
      {
        id: "what-it-does", title: "What it does",
        paragraphs: [
          "ARIA simulates a full technical coding interview with a voice-driven AI interviewer. You configure your session by question style (LeetCode, system design, debugging), difficulty, interviewer persona (from friendly coach to tough pressure) and time limit. Then you're dropped into a live interview: the AI introduces itself, gives you a problem, and listens as you explain your thinking — asking and answering clarifying questions and pushing back on incorrect assumptions as you code in the Monaco editor.",
          "Once you finish, ARIA generates a detailed scorecard across six dimensions (correctness, algorithm choice, communication clarity, confidence and more), follows up with system design trade-off questions when relevant, and gives you a full transcript and an optimal-solution comparison. If enabled, it uses Google's MediaPipe and OpenCV to track gaze and presence for an extra layer of realism.",
        ],
      },
      {
        id: "how-we-built-it", title: "How we built it",
        bullets: [
          "Next.js 16 + React 19 for the full-stack framework",
          "Claude API for real-time interviewer responses and post-session scoring",
          "ElevenLabs TTS with three distinct voices, one per persona",
          "Browser Web Speech API for in-browser speech-to-text",
          "Monaco Editor for the in-browser code editor",
          "MediaPipe for optional camera-based gaze tracking and presence scoring",
          "Tailwind CSS v4, shadcn/ui and Allotment for the resizable split-panel layout",
          "Framer Motion for animated scorecard reveals",
        ],
      },
      {
        id: "challenges", title: "Challenges",
        paragraphs: [
          "The hardest part was managing the async voice loop without race conditions. Speech-to-text fires interim and final transcript events continuously, and our pipeline (speech-to-text → Claude → ElevenLabs → playback) has multiple async stages that can collide. We used React refs instead of state for in-flight values and added guards so a single utterance is never processed twice.",
          "Parsing structured scorecard data out of a streamed response was also messy — we needed reliable JSON extraction and had to handle malformed arrays and inconsistent field names across question types. Getting ElevenLabs latency low enough to feel conversational took tuning too: we proxied it server-side and cached audio on the client.",
        ],
      },
      {
        id: "notes", title: "Notes",
        paragraphs: ["This was a hackathon project, and the design changed a lot over the weekend. My original design was created within the hackathon time frame and later morphed into a different design during the build. The bot ran locally on our computers, so there's no public prototype link — the demo video shows it in action."],
      },
    ],
  },
  {
    n: "04",
    slug: "mc-honeyhive",
    title: "MC HoneyHive — safer, more dignified shelter rooms for women",
    org: "Design-a-thon project",
    role: "Designer, Interaction & Researcher",
    timeline: "May 9 – 10 · 2-day design-a-thon",
    tools: ["Figma", "FigJam", "Spline"],
    tags: ["Spatial design", "Research", "Social impact"],
    summary: "Dignify San Diego women's shelters with a sleek, innovative shelter room design that ensures comfort, privacy and — most importantly — safety.",
    contributions: [],
    prototype: "https://app.spline.design/file/e03baf11-4e01-486a-9349-bb50a30de2a3",
    prototypeLabel: "Explore the 3D model in Spline",
    story: [
      { id: "problem", title: "Problem statement", problem: true, paragraphs: ["How might we redesign the homeless shelter experience in San Diego so women from diverse circumstances feel safe in a space that communicates dignity and provides access to necessary resources?"] },
      { id: "goals", title: "Goals", bullets: ["Increase safety", "Ensure those with disabilities have equal access", "Improve morale and dignity"] },
      {
        id: "current-situation", title: "Current situation",
        paragraphs: [
          "Most homeless shelters in San Diego offer little to no privacy and low safety, and can only house a limited number of residents. Women seeking refuge have often already escaped harrowing situations, such as domestic abuse and sexual violence.",
          "Overcrowded sleeping areas, limited supervision and the mixing of people with very different backgrounds and struggles can lead to theft, violence, harassment, or exposure to drug use and mental health crises. Residents often have little control over who they're placed near, and some shelters lack the staff or resources to respond to conflicts or emergencies.",
          "Storage is another frequently reported issue: most shelters have a one-to-two bag limit. When losing a home is already devastating, having to give up belongings adds further distress.",
        ],
      },
      {
        id: "competitive-analysis", title: "Competitive analysis",
        paragraphs: ["Looking through multiple women-centered shelters in the San Diego area, we found pros and cons for each."],
        items: [
          { label: "Rachel's Promise Center for Women and Children", text: "A women-only, family-centered shelter operated by Catholic Charities of San Diego, with about 50 beds for adult women (109 for single women and 101 for families overall). It operates 24/7 and offers trauma-informed care, case management, therapy and life-skills workshops, aiming to transition women into permanent housing." },
          { label: "Father Joe's Bishop Maher Center", text: "Houses single adult women (18+, no families). With about 28 beds, space is more limited, but Father Joe's Village adds valuable resources like childcare, job training and meals to help residents secure income and housing." },
          { label: "Haven Interim Housing", text: "More limited: housing requires a referral with no guarantee through the application. Up to 72 beds across its apartments, prioritizing short-term transitional housing for single women and families." },
        ],
      },
      {
        id: "user-research", title: "User research",
        paragraphs: ["Time constraints shaped our research, as this was a weekend design-a-thon and the shelter we hoped to call was unavailable. Instead, we read reviews left by real visitors and residents of the shelters."],
      },
      { id: "pain-points", title: "Pain points", paragraphs: ["Residents struggled most with:"], bullets: ["Disability and accessibility features", "Lack of transparency and trust", "Staff treatment and dignity", "Cleanliness and basic working living conditions"] },
      { id: "wishes", title: "Wishes and desires", paragraphs: ["Residents wanted to see:"], bullets: ["Support in case management", "Safer and cleaner environments", "A greater sense of dignity in their living environment", "More storage options", "Better accommodations for people with disabilities"] },
      {
        id: "solution", title: "Solution",
        paragraphs: [
          "A hive pod rooming system. Its unique shape lets pods stack to increase bed capacity with safety in mind, while each small room has a semi-see-through frosted folding acrylic door that balances privacy with safety. Each one-bed room also allows secure storage. For residents with disabilities, the first-floor rooms are designed specifically for accessibility.",
          "Our two-tier layout was chosen for structural efficiency: stacking pods doubles resident capacity without doubling floor space, adjacent pods share walls to reduce material needs, and the uniform design enables offsite batch construction, lowering labor costs and build time.",
        ],
      },
      {
        id: "budget", title: "Budget feasibility",
        paragraphs: [
          "According to the San Diego Housing Commission's 2024 presentation, Rachel's Promise Center operates at roughly $5,034,981 a year for 210 beds — about $24,000 per bed per year, or around $2,000 per bed each month. Yet resident reviews and public records point to persistent issues with safety, discrimination and limited housing placement.",
          "Trauma-informed, dignity-centered design increases service engagement and housing placement, making every dollar spent on case management more effective. The question isn't whether we can afford to build this — it's whether we can afford to keep spending $5 million a year on spaces that aren't working.",
        ],
      },
    ],
  },
  {
    n: "05",
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
    n: "06",
    slug: "cses",
    placeholder: true,
    title: "Designing the SanD Hacks webpage",
    org: "CSES · UC San Diego",
    role: "Project Designer",
    tools: ["Figma"],
    tags: ["Web design", "Student org"],
    summary: "A mockup hackathon page for UCSD's Computer Science and Engineering Society, designed in Figma with generated assets.",
    contributions: [],
    prototype: "https://www.figma.com/proto/xspGjPS4nd64mlXlmT6s6P/my-draft---CSES-Website-2026-Redesign--Copy-?node-id=2062-457&viewport=173%2C-275%2C0.19&t=xbVozAXlS9e1s7NL-1&scaling=min-zoom&content-scaling=fixed&page-id=166%3A145",
  },
  {
    n: "07",
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
  { role: "Project Designer", org: "CSES @ UCSD", when: "Student org", kind: "Design", note: "Designed a mockup SanD Hacks hackathon page.", slug: "cses" },
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
  { icon: Gamepad2, title: "Gaming", back: "Always down for a co-op session — currently jamming to the Clair Obscur: Expedition 33 soundtrack." },
  { icon: Tv, title: "Anime & TV", back: "One Piece, Hunter x Hunter, Winx Club, Hello My Twenties, Bloodhounds." },
  { icon: Soup, title: "Food hunts", back: "Craving wasabi chicken, mapo tofu, malatang, pho or pad kra pao — then boba with friends." },
  { icon: CupSoda, title: "Crafts & scrolling", back: "Trying new crafts with friends, plus some ‘academic’ competitive analysis of TikToks and Reels." },
];

const SIDE_PROJECTS = [
  { title: "Describe My Drawing!", status: "Work in progress", text: "A Roblox game built to expand my AI skill set. I connected Roblox's MCP servers to Codex to lay down the physical spaces, used Claude to fix bugs, add widgets and build a sub-server players can teleport into, and drew the cartoony thumbnail in Procreate.", tools: ["Codex", "Claude", "Procreate"] },
  { title: "Google Tree Stamps", status: "Concept", text: "A concept for Google Search: each time you search a new country, you unlock its national tree stamp to place anywhere on your search page — and Google plants one tree seed to help fight deforestation and forest fires.", tools: ["Figma"], link: "https://www.figma.com/proto/D5woPzQozfdCQa3wg0vx6n/Google-Tree-Stamps?node-id=2-5&p=f&viewport=1634%2C-1393%2C1.62&t=IJdaWMsu7tdGajhd-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A5&page-id=0%3A1" },
];

const SOCIALS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/christina-lin2/" },
  { label: "Instagram", href: "https://www.instagram.com/_ch.ristinaa/" },
];

const ROTATING = ["actually use things.", "plan trips together.", "budget their groceries.", "prep for interviews."];

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

function StatBar({ label, value, max }: { label: string; value: number; max: number }) {
  return (
    <div>
      <div className="flex justify-between font-sans text-xs">
        <span className="label-ui text-muted-foreground">{label}</span>
        <span className="tabular-nums">{value}/{max}</span>
      </div>
      <div className="mt-1.5 h-2.5 overflow-hidden rounded-full bg-secondary" role="progressbar" aria-label={label} aria-valuenow={value} aria-valuemin={0} aria-valuemax={max}>
        <div className="h-full rounded-full bg-gradient-to-r from-lavender to-primary transition-[width] duration-700 ease-out" style={{ width: `${(value / max) * 100}%` }} />
      </div>
    </div>
  );
}

function CharacterSheet() {
  const [mp, setMp] = useState(80);
  const full = mp >= 100;
  const rows: [string, string][] = [
    ["Level", "Senior"],
    ["School", "UC San Diego"],
    ["Class", "Aspiring UX/UI & Product Designer"],
    ["Skill", "Figma Design"],
    ["Accessory", "Silver jewelry"],
    ["Armor", "Something comfy"],
    ["Weapon", "My black tote bag"],
  ];
  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-soft md:p-8">
      <div className="flex items-center justify-between gap-4">
        <p className="label-ui text-primary">Player stats</p>
        <span className="font-sans text-xs text-muted-foreground">Christina · Lv. 4</span>
      </div>
      <div className="mt-5 space-y-4">
        <StatBar label="HP" value={225} max={225} />
        <StatBar label="Magic power" value={mp} max={100} />
      </div>
      <button
        type="button"
        onClick={() => setMp((v) => (v >= 100 ? 80 : Math.min(100, v + 10)))}
        className="mt-4 inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 font-sans text-sm transition hover:border-lavender hover:bg-lavender-soft"
      >
        <CupSoda className="size-4 text-primary" />
        {full ? "MP full — ready to design! (reset)" : "Drink boba (+10 MP)"}
      </button>
      <dl className="mt-6 grid grid-cols-1 gap-x-6 sm:grid-cols-2">
        {rows.map(([k, v]) => (
          <div key={k} className="flex justify-between gap-4 border-b border-border py-2.5">
            <dt className="label-ui self-center text-muted-foreground">{k}</dt>
            <dd className="text-right">{v}</dd>
          </div>
        ))}
      </dl>
      <p className="mt-5 text-sm text-muted-foreground">
        <span className="label-ui mr-2">Jamming to</span>
        <a href="https://soundcloud.com/lorien26/clair-obscur-expedition-33-clair-obscur" target="_blank" rel="noreferrer" className="text-primary underline-offset-4 hover:underline">Clair Obscur: Expedition 33 OST</a>
      </p>
    </div>
  );
}

function SideProjects() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {SIDE_PROJECTS.map((p) => (
        <article key={p.title} onPointerMove={trackSpotlight} className="spotlight flex flex-col rounded-2xl border border-border bg-card p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-lavender md:p-8">
          <span className="label-ui text-primary">{p.status}</span>
          <h3 className="font-display mt-3 text-3xl">{p.title}</h3>
          <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">{p.text}</p>
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
            <Tags tags={p.tools} />
            {p.link && (
              <a href={p.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 font-sans text-sm font-medium text-primary hover:underline">
                Try it <ArrowUpRight className="size-4" />
              </a>
            )}
          </div>
        </article>
      ))}
    </div>
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

      <section id="playground" className="mx-auto max-w-6xl scroll-mt-20 px-6 pb-12">
        <p className="label-ui mb-3 text-primary">Just for fun</p>
        <h2 className="font-display mb-10 text-4xl md:text-5xl">Playground</h2>
        <SideProjects />
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
              My path runs through research labs, student design teams, hackathons and a summer at a YC startup in Tokyo. Today I design with PMC, mentor ACM project teams and do qualitative analysis at the Mental Health in Design Lab.
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
            <span className="font-sans text-sm text-muted-foreground">Hover or tap a card · drink some boba</span>
          </div>
          <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr]">
            <CharacterSheet />
            <div className="grid grid-cols-2 gap-4 self-start">
              {HOBBIES.map((h) => <HobbyCard key={h.title} {...h} />)}
            </div>
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
          <div className="flex flex-col gap-3 md:items-end">
            <a href={`mailto:${EMAIL}`} className="group inline-flex items-center gap-2 text-lg font-medium text-primary">
              <span className="border-b border-transparent transition group-hover:border-primary">{EMAIL}</span>
              <ArrowUpRight className="size-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </a>
            <div className="flex gap-3 font-sans text-sm">
              {SOCIALS.map((link) => (
                <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="rounded-full border border-border bg-card px-4 py-1.5 transition hover:border-lavender hover:text-primary">{link.label}</a>
              ))}
            </div>
          </div>
        </div>
        <p className="relative mx-auto max-w-6xl px-6 pb-8 font-sans text-xs text-muted-foreground">© 2026 Christina Lin · Designed with lavender &amp; too much boba</p>
      </footer>
    </div>
  );
}
