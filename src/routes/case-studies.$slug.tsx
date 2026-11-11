import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { CASES, type StorySection } from "@/routes/index";
import { Button } from "@/components/ui/button";
import { CaseImageViewer } from "@/components/case-image-viewer";

function StoryBlock({ section }: { section: StorySection }) {
  return (
    <section id={section.id} className="scroll-mt-24 border-b border-border py-12 md:py-16">
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
            <div key={item.text} className="rounded-lg border border-border bg-card p-5">
              <p className="text-xs font-medium tracking-wide text-primary uppercase">{item.label}</p>
              <p className="mt-2 leading-relaxed text-muted-foreground">{item.text}</p>
            </div>
          ))}
        </div>
      )}
    </section>
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
  const index = CASES.findIndex((item) => item.slug === study.slug);
  const next = CASES[(index + 1) % CASES.length];
  const sections = [...new Set((study.images ?? []).slice(study.imagesHaveOverview === false ? 0 : 1).map((image) => image.section))];
  const nav = [
    ...(study.story ?? []).map((section) => ({ href: `#${section.id}`, label: section.title })),
    ...sections.map((section, i) => ({ href: `#process-${i}`, label: section })),
  ];
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-10 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
          <Link to="/" className="font-display text-2xl">Christina Lin<span className="text-primary">.</span></Link>
          <Button variant="ghost" asChild><Link to="/" hash="work"><ArrowLeft /> All work</Link></Button>
        </div>
      </header>
      <main>
        <section className="mx-auto max-w-6xl px-6 py-12 md:py-20">
          <p className="label-ui mb-6 text-primary">Case study · {study.org}</p>
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
          {nav.length > 0 && (
            <nav aria-label="Case study sections" className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-border pt-6 text-sm text-muted-foreground">
              {nav.map((item) => <a key={item.href} href={item.href} className="hover:text-primary">{item.label}</a>)}
            </nav>
          )}
        </section>
        <div className="mx-auto max-w-6xl px-6">
          {(study.story ?? []).map((section) => <StoryBlock key={section.id} section={section} />)}
        </div>
        {study.images && <CaseImageViewer images={study.images} hasOverview={study.imagesHaveOverview} />}
        {study.placeholder && (
          <section className="mx-auto max-w-6xl px-6">
            <div className="rounded-2xl border border-dashed border-border bg-lavender-soft p-8 md:p-12">
              <h2 className="font-display text-3xl md:text-4xl">The full story is on its way.</h2>
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">I'm still writing this one up. In the meantime, I'm happy to walk you through the work directly.</p>
              <a href="mailto:Christinalin252005@gmail.com" className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 font-sans text-sm font-medium text-primary-foreground transition hover:opacity-90">Ask me about it <ArrowUpRight className="size-4" /></a>
            </div>
          </section>
        )}
      </main>
      <footer className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-16 sm:flex-row sm:items-center sm:justify-between">
        <Button variant="outline" asChild><Link to="/" hash="work"><ArrowLeft /> Back to all work</Link></Button>
        {next && <Link to="/case-studies/$slug" params={{ slug: next.slug }} className="flex items-center gap-4 text-primary"><span><span className="block text-xs text-muted-foreground">Next case study</span><span className="font-display text-2xl">{next.title}</span></span><ArrowUpRight className="size-5 shrink-0" /></Link>}
      </footer>
    </div>
  );
}