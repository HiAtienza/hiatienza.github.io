import { describe, expect, it } from "vitest";
import { aboutPages, copy, projects, route, slugs } from "../lib/site-data";
import { linkedInBadgeIntegrationState, officialLinkedInBadgeMarkup } from "../lib/linkedin-badge";

describe("public portfolio content", () => {
  it("keeps the agreed flagship-project order in both languages", () => {
    expect(slugs).toEqual(["video-rescue", "cybermastery", "lifemap"]);
    for (const locale of ["en", "es"] as const)
      expect(slugs.map((slug) => projects[locale][slug].name)).toEqual([
        "VIDEO-RESCUE",
        "CyberMastery",
        "LifeMap"
      ]);
  });
  it("keeps high-risk product claims bounded", () => {
    expect(projects.en["video-rescue"].limitation).toMatch(/No field deployment/);
    expect(projects.en.cybermastery.limitation).toMatch(/private/);
    expect(projects.en.lifemap.limitation).toMatch(/not a Play Store release/);
  });
  it("publishes complete English and Spanish navigation", () => {
    for (const locale of ["en", "es"] as const)
      expect(Object.values(copy[locale].nav)).toHaveLength(5);
  });
  it("keeps the new positioning and About story aligned across languages", () => {
    expect(copy.en.hero.title).toMatch(/complex signals/);
    expect(copy.es.hero.title).toMatch(/señales complejas/);
    expect(copy.en.hero.lead).toMatch(/Software Engineer/);
    expect(copy.en.hero.lead).toMatch(/Human-Centered AI/);
    expect(copy.en.hero.lead).toMatch(/Behavioral Technology/);
    expect(copy.en.hero.lead).toMatch(/Human-AI Interaction/);
    expect(copy.en.specialization.intro).toMatch(/not claiming finished expertise/);
    expect(copy.es.specialization.intro).toMatch(/especialización ya consolidada/);
    expect(aboutPages.en.story.join(" ")).toMatch(/July 2028/);
    expect(aboutPages.es.story.join(" ")).toMatch(/julio de 2028/);
  });
  it("keeps recruiter-facing skills ordered around the approved identity", () => {
    expect(copy.en.skills.priorities.slice(0, 5)).toEqual([
      "Software Engineering",
      "Human-Centered AI",
      "Product Development",
      "Human-AI Interaction",
      "Human-Computer Interaction"
    ]);
  });
  it("maps equivalent English and Spanish routes", () => {
    expect(route("en", "/about/")).toBe("/about/");
    expect(route("es", "/about/")).toBe("/es/about/");
    expect(route("es", "/projects/cybermastery/")).toBe("/es/projects/cybermastery/");
  });
  it("uses the supplied official LinkedIn public-profile badge markup", () => {
    expect(linkedInBadgeIntegrationState).toBe("OFFICIAL_MARKUP_CONFIGURED");
    expect(officialLinkedInBadgeMarkup).toContain('class="badge-base LI-profile-badge"');
    expect(officialLinkedInBadgeMarkup).toContain('data-locale="en_US"');
    expect(officialLinkedInBadgeMarkup).toContain('data-size="medium"');
    expect(officialLinkedInBadgeMarkup).toContain('data-theme="light"');
    expect(officialLinkedInBadgeMarkup).toContain('data-type="VERTICAL"');
    expect(officialLinkedInBadgeMarkup).toContain('data-vanity="inmunozatienza"');
    expect(officialLinkedInBadgeMarkup).toContain('data-version="v1"');
    expect(officialLinkedInBadgeMarkup).toContain(
      'href="https://cn.linkedin.com/in/inmunozatienza?trk=profile-badge"'
    );
  });
});
