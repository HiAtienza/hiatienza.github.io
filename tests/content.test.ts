import { describe, expect, it } from "vitest";
import { copy, projects, slugs } from "../lib/site-data";

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
});
