import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const pages = [
  "/",
  "/es/",
  "/about/",
  "/es/about/",
  "/projects/video-rescue/",
  "/projects/cybermastery/",
  "/projects/lifemap/",
  "/es/projects/video-rescue/",
  "/es/projects/cybermastery/",
  "/es/projects/lifemap/",
  "/research/",
  "/es/research/",
  "/privacy/",
  "/es/privacy/"
];

test("public routes load with no console errors or horizontal overflow", async ({ page }) => {
  const errors: string[] = [];
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(message.text());
  });
  for (const path of pages) {
    await page.goto(path);
    await expect(page.locator("h1")).toBeVisible();
    expect(
      await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)
    ).toBeTruthy();
  }
  expect(errors).toEqual([]);
});

test("core navigation is keyboard reachable and public pages have no automated axe violations", async ({
  page
}) => {
  await page.goto("/");
  await page.keyboard.press("Tab");
  await expect(page.locator(":focus")).not.toHaveCount(0);
  await page.keyboard.press("Enter");
  await expect(page.locator("main")).toBeFocused();
  const scan = await new AxeBuilder({ page }).analyze();
  expect(scan.violations).toEqual([]);
});

test("project hierarchy, language switching and public CV links work", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator(".project-feature h3")).toHaveText([
    "VIDEO-RESCUE",
    "CyberMastery",
    "LifeMap"
  ]);

  const desktopLanguageLink = page.locator(".desktop-nav .language-link");
  if (await desktopLanguageLink.isVisible()) {
    await desktopLanguageLink.click();
  } else {
    await page.locator(".nav-menu summary").click();
    await page.locator(".nav-menu .language-link").click();
  }
  await expect(page).toHaveURL(/\/es\/$/);
  await expect(page.locator("main")).toHaveAttribute("lang", "es");

  const ats = await page.request.get("/cv/Adrian_Munoz_Atienza_CV_Public_ATS.pdf");
  const visual = await page.request.get("/cv/Adrian_Munoz_Atienza_CV_Public_Visual.pdf");
  expect(ats.ok()).toBeTruthy();
  expect(visual.ok()).toBeTruthy();

  const linkedInFallback = page.locator(
    '#contact a[href="https://www.linkedin.com/in/inmunozatienza"]'
  );
  await expect(linkedInFallback).toHaveAccessibleName(
    /View Adrián Muñoz Atienza on LinkedIn|Ver el perfil de Adrián Muñoz Atienza en LinkedIn/
  );
  await expect(
    page.locator('script[src="https://platform.linkedin.com/badges/js/profile.js"]')
  ).toHaveCount(0);
});

test("reduced motion preserves the complete experience", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await expect(page.locator("#hero-title")).toBeVisible();
  await expect(page.locator("#work .project-feature")).toHaveCount(3);
  await expect(page.locator(".specialization-path li")).toHaveCount(4);
});

test("unknown paths use the public 404 page", async ({ page }) => {
  await page.goto("/not-a-public-page/");
  await expect(page.getByRole("heading", { name: "That page is not here." })).toBeVisible();
});
