import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useEffect, useState, type CSSProperties } from "react";
import { ArrowLeft, ArrowUp, ArrowUpRight } from "lucide-react";
import { CASES, type StorySection } from "@/routes/index";
import { Button } from "@/components/ui/button";
import { CaseImageViewer, InlineGallery } from "@/components/case-image-viewer";
import { SanDiegoClock } from "@/components/san-diego-clock";

function StoryBlock({ section }: { section: StorySection }) {
  return (
    <section id={section.id} className="scroll-mt-40 py-3 lg:scroll-mt-24">
      <div className="rounded-3xl border border-border bg-card p-6 shadow-soft md:p-10">
      <h2 className="font-display text-3xl md:text-4xl">{section.title}</h2>
      {section.problem && (
        <p className="font-display mt-6 max-w-3xl border-l-2 border-primary pl-6 text-2xl leading-snug md:text-3xl">{section.paragraphs?.[0]}</p>
      )}
      {section.paragraphs?.slice(section.problem ? 1 : 0).map((paragraph) => (
        <p key={paragraph} className="mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">{paragraph}</p>
      ))}
      {section.bullets && (
        <ul className="mt-6 max-w-3xl space-y-3">
          {section.bullets.map((bullet) => (
            <li key={bullet} className="flex gap-3 text-lg leading-relaxed text-muted-foreground">
              <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-primary" />{bullet}
            </li>
          ))}
        </ul>
      )}
      {section.items && (
        <div className="mt-6 max-w-3xl space-y-4">
          {section.items.map((item) => (
            <div key={item.text} className="rounded-2xl bg-baby-soft p-5">
              <p className="text-xs font-medium tracking-wide text-primary-ink uppercase">{item.label}</p>
              <p className="mt-2 leading-relaxed text-muted-foreground">{item.text}</p>
            </div>
          ))}
        </div>
      )}
      {section.images && <InlineGallery images={section.images} />}
      </div>
    </section>
  );
}

type NavItem = { href: string; label: string };

type Video = NonNullable<(typeof CASES)[number]["video"]>;

/** Demo recording, framed as a phone (rounded corners) or inside a laptop mockup. */
function DemoVideo({ video }: { video: Video }) {
  const player = (className: string, style?: CSSProperties) => (
    <video
      src={video.src}
      poster={video.poster}
      width={video.width}
      height={video.height}
      controls
      muted
      loop
      playsInline
      autoPlay={video.device === "laptop"}
      preload="metadata"
      aria-label={video.caption}
      className={className}
      style={{ aspectRatio: `${video.width} / ${video.height}`, ...style }}
    />
  );
  return (
    <section id="demo" className="scroll-mt-40 py-3 lg:scroll-mt-24">
      <div className="rounded-3xl border border-border bg-card p-6 shadow-soft md:p-10">
        <h2 className="font-display text-3xl md:text-4xl">Demo video</h2>
        <figure className="mt-8 flex flex-col items-center">
          {video.device === "laptop" ? (
            <div className="w-full max-w-4xl px-[4%]">
              <div className="relative rounded-t-[1.1rem] border border-[#3a3f47] bg-[#1d2127] px-[2.2%] pb-[2.6%] pt-[3%] shadow-soft">
                <span aria-hidden="true" className="absolute left-1/2 top-[1.1%] size-1.5 -translate-x-1/2 rounded-full bg-[#4a515b]" />
                {player("block h-auto w-full rounded-[3px] bg-black")}
              </div>
              <div aria-hidden="true" className="relative left-1/2 h-3 w-[110%] -translate-x-1/2 rounded-b-[1.2rem] bg-gradient-to-b from-[#e4e7ec] to-[#aab1bb] shadow-soft md:h-4">
                <span className="absolute left-1/2 top-0 h-1.5 w-[15%] -translate-x-1/2 rounded-b-md bg-[#9aa2ad]" />
              </div>
            </div>
          ) : (
            player("h-auto max-h-[80vh] w-auto max-w-full shadow-soft", { borderRadius: video.radius })
          )}
          <figcaption className="mt-5 text-sm text-muted-foreground">{video.caption}</figcaption>
        </figure>
      </div>
    </section>
  );
}

/** Sticky "Jump to" menu: a side list on large screens, a scrollable chip row on small ones. Highlights the section in view. */
function CaseNav({ items }: { items: NavItem[] }) {
  const [active, setActive] = useState(items[0]?.href ?? "");
  const key = items.map((item) => item.href).join("|");
  useEffect(() => {
    const targets = items
      .map((item) => document.getElementById(item.href.slice(1)))
      .filter((el): el is HTMLElement => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(`#${visible[0].target.id}`);
      },
      { rootMargin: "-25% 0px -65% 0px" },
    );
    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);
  useEffect(() => {
    document.querySelector(`[data-nav-chip="${active}"]`)?.scrollIntoView({ block: "nearest", inline: "center" });
  }, [active]);
  if (items.length === 0) return null;
  return (
    <nav aria-label="Jump to a section" className="sticky top-[4.75rem] z-10 py-3 lg:top-24 lg:self-start">
      <div className="rounded-2xl border border-border bg-card/95 p-2 shadow-soft backdrop-blur lg:p-4">
        <p className="label-ui hidden px-2 pb-2 text-primary-ink lg:block">Jump to</p>
        <ol className="flex gap-1.5 overflow-x-auto [scrollbar-width:none] lg:flex-col lg:gap-0.5 lg:overflow-visible">
          {items.map((item) => {
            const on = item.href === active;
            return (
              <li key={item.href} className="shrink-0">
                <a
                  href={item.href}
                  data-nav-chip={item.href}
                  aria-current={on ? "location" : undefined}
                  className={`block whitespace-nowrap rounded-full px-3 py-1.5 font-sans text-sm transition lg:whitespace-normal lg:rounded-lg lg:border-l-2 lg:py-2 ${on ? "bg-primary text-primary-foreground lg:border-primary lg:bg-baby-soft lg:text-foreground" : "text-muted-foreground hover:bg-baby-soft hover:text-foreground lg:border-transparent"}`}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ol>
        <a href="#overview" className="mt-2 hidden items-center gap-1.5 border-t border-border px-2 pt-3 font-sans text-xs text-muted-foreground hover:text-primary-ink lg:flex">
          <ArrowUp className="size-3.5" /> Back to top
        </a>
      </div>
    </nav>
  );
}

export const Route = createFileRoute("/case-studies/$slug")({
  loader: ({ params }) => {
    const study = CASES.find((item) => item.slug === params.slug);
    if (!study) throw notFound();
    return study;
  },
  head: ({ loaderData: study }) => ({
    meta: [
      { title: study ? `${study.slug === "packd" ? "PackD" : study.org} — Case Study | Christina Lin` : "Case study unavailable | Christina Lin" },
      { name: "description", content: study?.summary ?? "Case studies by Christina Lin." },
      { property: "og:title", content: study ? `${study.title} | Christina Lin` : "Case study unavailable | Christina Lin" },
      { property: "og:description", content: study?.summary ?? "Case studies by Christina Lin." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
      ...(study?.placeholder || !study ? [{ name: "robots", content: "noindex" }] : []),
    ],
  }),
  component: CaseStudyPage,
});

function CaseStudyPage() {
  const study = Route.useLoaderData();
  const caseStudies = CASES.filter((item) => !item.placeholder && !item.sideProject);
  const index = caseStudies.findIndex((item) => item.slug === study.slug);
  const next = caseStudies[(index + 1) % caseStudies.length];
  const sections = [...new Set((study.images ?? []).slice(study.imagesHaveOverview === false ? 0 : 1).map((image) => image.section))];
  const nav: NavItem[] = [
    { href: "#overview", label: "Overview" },
    ...(study.sideProject && study.video ? [{ href: "#demo", label: "Demo video" }] : []),
    ...(study.story ?? []).map((section) => ({ href: `#${section.id}`, label: section.title })),
    ...sections.map((section, i) => ({ href: `#process-${i}`, label: section })),
    ...(!study.sideProject && study.video ? [{ href: "#demo", label: "Demo video" }] : []),
  ];
  return (
    <div className="min-h-screen px-0">
      <header className="sticky top-0 z-10 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-4">
            <Link to="/" className="font-wordmark text-2xl leading-none md:text-3xl">Christina Lin</Link>
            <SanDiegoClock className="sm:rounded-full sm:border sm:border-border sm:bg-card/80 sm:px-3 sm:py-1" />
          </div>
          <Button variant="ghost" asChild><Link to="/" hash="work"><ArrowLeft /> All work</Link></Button>
        </div>
      </header>
      <main>
        <section id="overview" className="mx-auto max-w-6xl scroll-mt-28 px-6 pb-3 pt-10 md:pt-14">
          <div className="rounded-3xl border border-border bg-card p-6 shadow-soft md:p-10">
          <p className="label-ui mb-6 text-primary-ink">{study.sideProject ? "Side project" : "Case study"} · {study.org}</p>
          {study.orgLogo && <img src={study.orgLogo.src} alt={study.orgLogo.alt} width={585} height={367} className="mb-6 h-auto w-48 rounded-lg" />}
          {study.placeholder && <p className="label-ui mb-6 inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1.5 text-accent-foreground"><span className="size-1.5 rounded-full bg-primary" /> Full case study in progress</p>}
          <h1 className="font-display max-w-4xl text-4xl leading-tight md:text-6xl">{study.title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">{study.summary}</p>
          <div className="mt-10 grid gap-8 border-t border-border pt-8 md:grid-cols-[1fr_1.6fr]">
            <dl className="space-y-5 text-sm">
              {study.role && <div><dt className="label-ui text-muted-foreground">My role</dt><dd className="mt-1 font-medium">{study.role}</dd></div>}
              {study.timeline && <div><dt className="label-ui text-muted-foreground">Timeline</dt><dd className="mt-1">{study.timeline}</dd></div>}
              {study.tools && <div><dt className="label-ui text-muted-foreground">Tools</dt><dd className="mt-1">{study.tools.join(", ")}</dd></div>}
              <div className="flex flex-wrap gap-2">{study.tags.map((tag) => <span key={tag} className="rounded-full bg-accent px-3 py-1 font-sans text-xs text-accent-foreground">{tag}</span>)}</div>
            </dl>
            {study.contributions.length > 0 && <div>
              <h2 className="label-ui mb-4 text-muted-foreground">My contributions</h2>
              <ul className="space-y-3">{study.contributions.map((item) => <li key={item} className="flex gap-3 text-muted-foreground"><span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-primary" />{item}</li>)}</ul>
            </div>}
          </div>
          {study.prototype && (
            <a href={study.prototype} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition hover:bg-secondary">
              {study.prototypeLabel ?? "Open the Figma prototype"} <ArrowUpRight className="size-4" />
            </a>
          )}
          </div>
        </section>
        <div className="mx-auto max-w-6xl px-6 lg:grid lg:grid-cols-[13rem_minmax(0,1fr)] lg:gap-6">
          <CaseNav items={nav} />
          <div className="min-w-0">
        {study.sideProject && study.video && <DemoVideo video={study.video} />}
        {(study.story ?? []).map((section) => <StoryBlock key={section.id} section={section} />)}
        {study.images && <CaseImageViewer images={study.images} hasOverview={study.imagesHaveOverview} />}
        {!study.sideProject && study.video && <DemoVideo video={study.video} />}
        {study.placeholder && (
          <section className="py-3">
            <div className="rounded-2xl border border-dashed border-border bg-baby-soft p-8 md:p-12">
              <h2 className="font-display text-3xl md:text-4xl">The full story is on its way.</h2>
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">I'm still writing this one up. In the meantime, I'm happy to walk you through the work directly.</p>
              <a href="mailto:Christinalin252005@gmail.com" className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 font-sans text-sm font-medium text-primary-foreground transition hover:opacity-90">Ask me about it <ArrowUpRight className="size-4" /></a>
            </div>
          </section>
        )}
          </div>
        </div>
      </main>
      <footer className="mx-auto my-12 flex max-w-6xl flex-col gap-8 rounded-3xl border border-border bg-card p-6 shadow-soft sm:flex-row sm:items-center sm:justify-between md:p-8">
        <Button variant="outline" asChild><Link to="/" hash="work"><ArrowLeft /> Back to all work</Link></Button>
        {next && <Link to="/case-studies/$slug" params={{ slug: next.slug }} className="flex items-center gap-4 text-primary-ink"><span><span className="block text-xs text-muted-foreground">{study.sideProject ? "Back to the case studies" : "Next case study"}</span><span className="font-display text-2xl">{next.title}</span></span><ArrowUpRight className="size-5 shrink-0" /></Link>}
      </footer>
    </div>
  );
}