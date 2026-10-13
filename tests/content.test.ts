import { describe, expect, it } from "vitest";
import { aboutPages, copy, projects, route, slugs, isProjectSlug } from "../lib/site-data";
import { linkedInBadgeIntegrationState, officialLinkedInBadgeMarkup } from "../lib/linkedin-badge";
import { videoRescueAssets, videoRescueStory } from "../lib/video-rescue-data";

describe("public portfolio content", () => {
  it("keeps the agreed flagship-project order in both languages", () => {
    expect(slugs).toEqual(["lock-in", "video-rescue", "setline"]);
    for (const locale of ["en", "es"] as const)
      expect(slugs.map((slug) => projects[locale][slug].name)).toEqual([
        "LockIn",
        "VIDEO-RESCUE",
        "Setline"
      ]);
  });
  it("keeps high-risk product claims bounded", () => {
    expect(projects.en["video-rescue"].limitation).toMatch(/No field deployment/);
    expect(projects.en["lock-in"].limitation).toMatch(/emulator captures/);
    expect(projects.en["lock-in"].facts.at(-1)?.text).toMatch(
      /does not grade or change Anki reviews/
    );
    expect(projects.en.setline.limitation).toMatch(/estimate, not a measured maximum/);
    expect(projects.en.setline.limitation).toMatch(/Google Calendar connection is web-only/);
  });
  it("removes the retired project content and rejects its slugs", () => {
    for (const slug of ["cybermastery", "lifemap", "lock-calendar"])
      expect(isProjectSlug(slug)).toBe(false);
    expect(JSON.stringify({ copy, projects, aboutPages })).not.toMatch(
      /CyberMastery|LifeMap|Lock Calendar/i
    );
  });
  it("publishes complete English and Spanish navigation", () => {
    for (const locale of ["en", "es"] as const)
      expect(Object.values(copy[locale].nav)).toHaveLength(5);
  });
  it("separates VIDEO-RESCUE illustrations, demonstration captures and preliminary findings", () => {
    expect(videoRescueAssets.workflow.en.caption).toMatch(/not a screenshot/);
    expect(videoRescueAssets.workspace.en.label).toMatch(/Fictional demonstration/);
    expect(videoRescueAssets.assistant.en.caption).toMatch(/not independently verified/);
    expect(videoRescueStory.en.findingsStatus).toMatch(/Fuller analysis ongoing/);
    expect(videoRescueStory.es.findingsStatus).toMatch(/Análisis más completo en curso/);
    expect(projects.en["video-rescue"].limitation).toMatch(/does not directly access map data/);
    expect(projects.es["video-rescue"].limitation).toMatch(
      /no accede directamente a datos del mapa/
    );
    for (const locale of ["en", "es"] as const) {
      expect(videoRescueStory[locale].steps).toHaveLength(4);
      expect(videoRescueStory[locale].findings).toHaveLength(3);
      for (const asset of Object.values(videoRescueAssets)) {
        expect(asset[locale].alt.length).toBeGreaterThan(40);
        expect(asset.src).toMatch(/^\/images\/video-rescue-.*\.webp$/);
      }
    }
  });
  it("keeps the new positioning and About story aligned across languages", () => {
    expect(copy.en.hero.title).toMatch(/complex signals/);
    expect(copy.es.hero.title).toMatch(/señales complejas/);
    expect(copy.en.hero.lead).toMatch(/Software Engineering/);
    expect(copy.en.hero.lead).toMatch(/Human-Centered AI/);
    expect(copy.en.hero.lead).toMatch(/Behavioral Technology/);
    expect(copy.en.hero.lead).toMatch(/Human-AI Interaction/);
    expect(copy.en.specialization.intro).toMatch(/actively expand into Human-Centered AI/);
    expect(copy.es.specialization.intro).toMatch(/amplío activamente/);
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
    expect(route("es", "/projects/setline/")).toBe("/es/projects/setline/");
    expect(route("en", "projects/lock-in")).toBe("/projects/lock-in/");
    expect(route("es", "/about?view=cv#journey")).toBe("/es/about/?view=cv#journey");
    expect(route("es", "/#work")).toBe("/es/#work");
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
