import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const pages = [
  "/",
  "/es/",
  "/about/",
  "/es/about/",
  "/projects/lock-in/",
  "/es/projects/lock-in/",
  "/projects/video-rescue/",
  "/projects/setline/",
  "/es/projects/video-rescue/",
  "/es/projects/setline/",
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
    "LockIn",
    "VIDEO-RESCUE",
    "Setline"
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
  await expect(page.locator("#work .project-feature")).toHaveCount(3);
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

test("LockIn explains its concept with accessible example controls at 375px", async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  for (const locale of ["en", "es"] as const) {
    await page.goto(locale === "en" ? "/projects/lock-in/" : "/es/projects/lock-in/");
    await expect(page.getByRole("heading", { name: "LockIn", exact: true })).toBeVisible();
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
      locale === "en" ? "Google Play internal testing" : "pruebas internas"
    );
    expect(
      await page.locator(".lock-week").evaluate((week) => week.scrollWidth <= week.clientWidth)
    ).toBeTruthy();
    expect(
      await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)
    ).toBeTruthy();
  }
});

test("day picker supports arrows, boundary keys and reduced motion with usable targets", async ({
  page
}) => {
  await page.setViewportSize({ width: 320, height: 812 });
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/projects/lock-in/");
  const monday = page.getByRole("button", { name: "Mon 10", exact: true });
  await monday.focus();
  await page.keyboard.press("ArrowLeft");
  const friday = page.getByRole("button", { name: "Fri 14", exact: true });
  await expect(friday).toBeFocused();
  await expect(friday).toHaveAttribute("aria-pressed", "true");
  await expect(page.locator(".lock-clock")).toContainText("Friday, August 14");
  await page.keyboard.press("Home");
  await expect(monday).toBeFocused();
  await page.keyboard.press("End");
  await expect(friday).toBeFocused();
  for (const button of await page.locator(".lock-week button").all()) {
    const box = await button.boundingBox();
    expect(box?.width).toBeGreaterThanOrEqual(44);
    expect(box?.height).toBeGreaterThanOrEqual(44);
  }
  expect(
    await page.locator(".lock-agenda ul").evaluate((el) => getComputedStyle(el).animationName)
  ).toBe("none");
});

test("static routes survive direct loads and reloads; all pages pass WCAG AA scans", async ({
  page
}) => {
  for (const path of pages) {
    const response = await page.goto(path);
    expect(response?.status()).toBe(200);
    const reload = await page.reload();
    expect(reload?.status()).toBe(200);
    await expect(page.locator("main")).toHaveCount(1);
    await expect(page.locator("h1")).toHaveCount(1);
    const scan = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
      .analyze();
    expect(scan.violations, path).toEqual([]);
  }
  const unknown = await page.goto("/projects/unknown-project/");
  expect(unknown?.status()).toBe(404);
});

test("LockIn fits narrow screens without overflow", async ({ page }) => {
  for (const width of [320, 375]) {
    await page.setViewportSize({ width, height: 812 });
    for (const path of ["/", "/es/", "/projects/lock-in/", "/es/projects/lock-in/"]) {
      await page.goto(path);
      expect(
        await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth),
        `${width}px ${path}`
      ).toBeTruthy();
      expect(
        await page
          .locator(".lock-week")
          .evaluateAll((elements) =>
            elements.every((element) => element.scrollWidth <= element.clientWidth)
          ),
        `${width}px ${path}`
      ).toBeTruthy();
    }
  }
});

test("current captures load and Setline explains its platform boundaries", async ({ page }) => {
  for (const locale of ["en", "es"] as const) {
    await page.goto(locale === "en" ? "/projects/setline/" : "/es/projects/setline/");
    await expect(page.getByRole("heading", { name: "Setline", exact: true })).toBeVisible();
    await expect(page.locator(".product-capture")).toHaveCount(5);
    await expect(page.locator(".setline-example")).toContainText("91 kg");
    for (const image of await page.locator(".product-capture img").all()) {
      await image.scrollIntoViewIfNeeded();
      await expect
        .poll(() => image.evaluate((el) => (el as HTMLImageElement).naturalWidth))
        .toBeGreaterThan(0);
      expect(
        (await page.request.get((await image.locator("..").getAttribute("href"))!)).ok()
      ).toBeTruthy();
    }
    await page
      .getByText(
        locale === "en"
          ? "How do calendars and rest alerts work?"
          : "¿Cómo funcionan calendarios y alertas de descanso?",
        { exact: true }
      )
      .click();
    await expect(page.locator("details[open]")).toContainText(
      locale === "en" ? "only on the web" : "solo está disponible en web"
    );
    await page.goto(locale === "en" ? "/projects/lock-in/" : "/es/projects/lock-in/");
    await expect(page.locator(".product-capture")).toHaveCount(8);
    for (const image of await page.locator(".product-capture img").all()) {
      await image.scrollIntoViewIfNeeded();
      await expect
        .poll(() => image.evaluate((el) => (el as HTMLImageElement).naturalWidth))
        .toBeGreaterThan(0);
    }
  }
});

test("retired routes return 404 and old calendar bookmarks reach LockIn", async ({ page }) => {
  for (const prefix of ["", "/es"]) {
    for (const slug of ["cybermastery", "lifemap"]) {
      const response = await page.goto(`${prefix}/projects/${slug}/`);
      expect(response?.status()).toBe(404);
    }
    await page.goto(`${prefix}/projects/lock-calendar/`);
    await expect(page).toHaveURL(new RegExp(`${prefix}/projects/lock-in/$`));
    await expect(page.getByRole("heading", { name: "LockIn", exact: true })).toBeVisible();
  }
});

test("old bookmarks retain a working static link without JavaScript", async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  for (const prefix of ["", "/es"]) {
    const response = await page.goto(`http://127.0.0.1:4173${prefix}/projects/lock-calendar/`);
    expect(response?.status()).toBe(200);
    const link = page.getByRole("link", { name: prefix ? "Conoce LockIn" : "Explore LockIn" });
    await expect(link).toHaveAttribute("href", `${prefix}/projects/lock-in/`);
    await link.click();
    await expect(page.getByRole("heading", { name: "LockIn", exact: true })).toBeVisible();
  }
  await context.close();
});
