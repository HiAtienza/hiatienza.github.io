import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const pages = [
  "/",
  "/es/",
  "/about/",
  "/es/about/",
  "/projects/lock-calendar/",
  "/es/projects/lock-calendar/",
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
    "Lock Calendar",
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
    '#contact a[href="https://www.linkedin.com/in/hiatienza/"]'
  );
  await expect(linkedInFallback).toHaveAccessibleName(
    /View Adrián Muñoz Atienza on LinkedIn|Ver el perfil de Adrián Muñoz Atienza en LinkedIn/
  );
  await expect(
    page.locator('script[src="https://platform.linkedin.com/badges/js/profile.js"]')
  ).toHaveCount(1);
  const linkedInBadge = page.locator('[data-linkedin-badge="official"] .LI-profile-badge');
  await expect(linkedInBadge).toHaveAttribute("data-size", "medium");
  await expect(linkedInBadge).toHaveAttribute("data-theme", "light");
  await expect(linkedInBadge).toHaveAttribute("data-type", "VERTICAL");
  await expect(linkedInBadge).toHaveAttribute("data-vanity", "inmunozatienza");
  await expect(
    linkedInBadge.locator('a[href="https://cn.linkedin.com/in/inmunozatienza?trk=profile-badge"]')
  ).toHaveCount(1);
});

test("reduced motion preserves the complete experience", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await expect(page.locator("#hero-title")).toBeVisible();
  await expect(page.locator("#work .project-feature")).toHaveCount(4);
  await expect(page.locator(".specialization-path li")).toHaveCount(4);
});

test("unknown paths use the public 404 page", async ({ page }) => {
  await page.goto("/not-a-public-page/");
  await expect(page.getByRole("heading", { name: "That page is not here." })).toBeVisible();
});

test("VIDEO-RESCUE visuals load, retain evidence boundaries and are accessible", async ({
  page
}) => {
  const originalViewport = page.viewportSize()!;
  for (const locale of ["en", "es"] as const) {
    await page.setViewportSize(originalViewport);
    await page.goto(locale === "en" ? "/projects/video-rescue/" : "/es/projects/video-rescue/");
    await expect(page.locator(".rescue-figure")).toHaveCount(3);
    await expect(page.locator(".rescue-steps li")).toHaveCount(4);
    await expect(page.locator(".rescue-research-status")).toContainText(
      locale === "en" ? "Fuller analysis ongoing" : "Análisis más completo en curso"
    );
    await expect(page.locator(".rescue-geographic-boundary")).toContainText(
      locale === "en" ? "future integration work" : "futuras integraciones"
    );
    await expect(page.locator(".rescue-figure-assistant figcaption")).toContainText(
      locale === "en" ? "not independently verified truth" : "no una verdad verificada"
    );
    for (const image of await page.locator(".rescue-figure img").all()) {
      await image.scrollIntoViewIfNeeded();
      await expect(image).toBeVisible();
      await expect
        .poll(() => image.evaluate((element) => (element as HTMLImageElement).naturalWidth))
        .toBeGreaterThan(0);
      const fullSize = image.locator("..").getByRole("link");
      expect((await page.request.get((await fullSize.getAttribute("href"))!)).ok()).toBeTruthy();
    }
    const scan = await new AxeBuilder({ page }).analyze();
    expect(scan.violations).toEqual([]);
    await page.setViewportSize({ width: 375, height: 812 });
    expect(
      await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)
    ).toBeTruthy();
    const requests: string[] = [];
    page.on("request", (request) => requests.push(request.url()));
    await page.goto(locale === "en" ? "/research/" : "/es/research/");
    await expect(page.locator(".rescue-figure-workspace")).toHaveCount(1);
    const researchScan = await new AxeBuilder({ page }).analyze();
    expect(researchScan.violations).toEqual([]);
    await page.locator(".rescue-case-link").click();
    await expect(page).toHaveURL(/\/projects\/video-rescue\/$/);
    expect(requests.every((url) => new URL(url).origin === "http://127.0.0.1:4173")).toBeTruthy();
  }
});

test("Lock Calendar explains its concept with accessible example controls at 375px", async ({
  page
}) => {
  await page.setViewportSize({ width: 375, height: 812 });
  for (const locale of ["en", "es"] as const) {
    await page.goto(locale === "en" ? "/projects/lock-calendar/" : "/es/projects/lock-calendar/");
    await expect(page.getByRole("heading", { name: "Lock Calendar", exact: true })).toBeVisible();
    const monday = page.getByRole("button", {
      name: locale === "en" ? "Mon 10" : "Lun 10",
      exact: true
    });
    await monday.click();
    await expect(monday).toHaveAttribute("aria-pressed", "true");
    await expect(page.locator(".lock-agenda")).toContainText(
      locale === "en" ? "Algorithms" : "Algoritmos"
    );
    const darkScan = await new AxeBuilder({ page }).analyze();
    expect(darkScan.violations).toEqual([]);
    await page
      .getByRole("button", { name: locale === "en" ? "Light theme" : "Tema claro" })
      .click();
    const lightScan = await new AxeBuilder({ page }).analyze();
    expect(lightScan.violations).toEqual([]);
    await page
      .getByText(locale === "en" ? "Can I download it now?" : "¿Ya puedo descargarla?", {
        exact: true
      })
      .click();
    await expect(page.locator(".lock-faq details[open]")).toContainText(
      locale === "en" ? "active Android development" : "desarrollo activo"
    );
    expect(
      await page.locator(".lock-week").evaluate((week) => week.scrollWidth <= week.clientWidth)
    ).toBeTruthy();
    expect(
      await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)
    ).toBeTruthy();
  }
});
