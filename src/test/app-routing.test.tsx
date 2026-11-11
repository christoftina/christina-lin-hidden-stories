import { QueryClient } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { routeTree } from "@/routeTree.gen";
import { CASES } from "@/routes/index";

// Match routes without running loaders or rendering: loaders may need a server or
// network the test run lacks, and jsdom never loads the stylesheets React waits on.
describe("App routing", () => {
  it.each(["packd", "instacart", "aria", "mc-honeyhive", "mid-lab", "cses", "mixbash"])("opens a dedicated case study page for %s", (slug) => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });
    const matches = router.matchRoutes(`/case-studies/${slug}`);
    expect(matches.at(-1)?.routeId).toBe("/case-studies/$slug");
    expect(matches.at(-1)?.params).toEqual({ slug });
  });

  it("matches a page for / instead of falling back to not found", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });

    const matches = router.matchRoutes("/");

    expect(matches.at(-1)?.routeId).not.toBe(rootRouteId);
  });

  it("carries Christina's PackD story and prototype link", () => {
    const packd = CASES.find((item) => item.slug === "packd");
    const titles = (packd?.story ?? []).map((section) => section.title);
    expect(titles).toEqual([
      "Problem statement",
      "Goals",
      "Competitive analysis",
      "User research",
      "Solution",
      "Usability findings & iterations",
      "Next steps",
    ]);
    expect(packd?.story?.[0]?.paragraphs?.[0]).toContain("How might we create a mobile app");
    expect(packd?.prototype).toBe("https://www.figma.com/proto/WOFoOSwVJpeSL3k9uMkjjO/ACM-SP26-Projects?page-id=70%3A12&node-id=138-41&viewport=-2721%2C-987%2C0.48&t=bKOpByEoYr97WXC9-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=138%3A41&show-proto-sidebar=1");
  });

  it("records PackD's confirmed ACM affiliation and Spring 2026 timeline", () => {
    const packd = CASES.find((item) => item.slug === "packd");
    expect(packd?.org).toBe("ACM project");
    expect(packd?.orgLogo?.src).toMatch(/acm-projects-team\.png$/);
    expect(packd?.timeline).toBe("Spring 2026");
  });

  it("keeps unfinished case studies flagged as placeholders without invented contributions", () => {
    for (const slug of ["mixbash", "cses", "mid-lab"]) {
      const study = CASES.find((item) => item.slug === slug);
      expect(study?.placeholder).toBe(true);
      expect(study?.contributions).toEqual([]);
    }
  });

  it("uses Instacart's role and timeline from Christina's portfolio without inventing contributions", () => {
    const instacart = CASES.find((item) => item.slug === "instacart");
    expect(instacart?.role).toBe("UI/UX Designer & Researcher");
    expect(instacart?.timeline).toBe("Spring 2026");
    expect(instacart?.contributions).toEqual([]);
    expect(instacart?.prototype).toMatch(/^https:\/\/www\.figma\.com\/proto\//);
  });

  it("has unique slugs for every case study", () => {
    const slugs = CASES.map((item) => item.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });
});
