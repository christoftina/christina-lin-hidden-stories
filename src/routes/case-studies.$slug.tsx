import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { CASES } from "@/routes/index";
import { Button } from "@/components/ui/button";
import { CaseImageViewer } from "@/components/case-image-viewer";

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
  const sections = [...new Set((study.images ?? []).slice(1).map((image) => image.section))];
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-10 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
          <Link to="/" className="font-display text-2xl">Christina Lin</Link>
          <Button variant="ghost" asChild><Link to="/" hash="work"><ArrowLeft /> All work</Link></Button>
        </div>
      </header>
      <main>
        <section className="mx-auto max-w-6xl px-6 py-12 md:py-20">
          <p className="mb-6 text-sm text-muted-foreground">Case study {study.n} / {study.org}</p>
          {study.placeholder && <p className="mb-6 border-l-2 border-primary pl-4 text-sm text-muted-foreground">Placeholder case study · copy, role and timeline await Christina’s confirmation.</p>}
          <h1 className="font-display max-w-4xl text-4xl leading-tight md:text-6xl">{study.title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">{study.summary}</p>
          <div className="mt-10 grid gap-8 border-t border-border pt-8 md:grid-cols-[1fr_1.6fr]">
            <dl className="space-y-5 text-sm">
              <div><dt className="text-muted-foreground">My role</dt><dd className="mt-1 font-medium">{study.role}</dd></div>
              {study.timeline && <div><dt className="text-muted-foreground">Timeline</dt><dd className="mt-1">{study.timeline}</dd></div>}
              <div className="flex flex-wrap gap-2">{study.tags.map((tag) => <span key={tag} className="rounded-full bg-accent px-3 py-1 text-xs">{tag}</span>)}</div>
            </dl>
            <div>
              <h2 className="mb-4 text-sm font-medium">My contributions</h2>
              <ul className="space-y-3">{study.contributions.map((item) => <li key={item} className="flex gap-3 text-muted-foreground"><span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-primary" />{item}</li>)}</ul>
            </div>
          </div>
          {sections.length > 0 && <nav aria-label="Case study sections" className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-border pt-6 text-sm text-muted-foreground">{sections.map((section, i) => <a key={section} href={`#process-${i}`} className="hover:text-primary">{section}</a>)}</nav>}
        </section>
        {study.images && <CaseImageViewer images={study.images} />}
      </main>
      <footer className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-16 sm:flex-row sm:items-center sm:justify-between">
        <Button variant="outline" asChild><Link to="/" hash="work"><ArrowLeft /> Back to all work</Link></Button>
        {next && <Link to="/case-studies/$slug" params={{ slug: next.slug }} className="flex items-center gap-4 text-primary"><span><span className="block text-xs text-muted-foreground">Next case study</span><span className="font-display text-2xl">{next.org}</span></span><ArrowUpRight className="size-5 shrink-0" /></Link>}
      </footer>
    </div>
  );
}