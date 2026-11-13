import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test("curriculum pages prioritize the visual CV and switch document language", async ({ page }) => {
  for (const locale of ["en", "es"] as const) {
    const prefix = locale === "es" ? "/es" : "";
    const response = await page.goto(`${prefix}/cv/`);
    expect(response?.status()).toBe(200);
    await expect(page.locator("main")).toHaveAttribute("lang", locale);
    await expect(page.locator("h1")).toHaveText(
      locale === "en" ? "Curriculum vitae" : "Currículum"
    );
    const visual = `/cv/Adrian_Munoz_Atienza_CV_Public_Visual_${locale.toUpperCase()}.pdf`;
    const ats = `/cv/Adrian_Munoz_Atienza_CV_Public_ATS_${locale.toUpperCase()}.pdf`;
    await expect(page.locator(".cv-introduction .button")).toHaveAttribute("href", visual);
    await expect(page.locator(".cv-ats a")).toHaveAttribute("href", ats);
    for (const url of [visual, ats]) {
      const pdf = await page.request.get(url);
      expect(pdf.status()).toBe(200);
      expect(pdf.headers()["content-type"]).toContain("application/pdf");
      expect((await pdf.body()).subarray(0, 5).toString()).toBe("%PDF-");
    }
    await expect
      .poll(() =>
        page.locator(".cv-preview img").evaluate((el) => (el as HTMLImageElement).naturalWidth)
      )
      .toBeGreaterThan(0);
    await expect(page.locator(".cv-project")).toHaveCount(3);
    for (const link of await page.locator(".cv-project a").all()) {
      expect(await link.getAttribute("href")).toMatch(new RegExp(`^${prefix}/projects/`));
    }
    const scan = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
      .analyze();
    expect(scan.violations).toEqual([]);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(
      true
    );
    await page
      .locator(".cv-languages")
      .getByRole("link", { name: locale === "en" ? "Español" : "English" })
      .click();
    await expect(page).toHaveURL(locale === "en" ? /\/es\/cv\/$/ : /(?<!es)\/cv\/$/);
  }
});

test("every public CV entry point follows its page locale", async ({ page }) => {
  for (const locale of ["en", "es"] as const) {
    const prefix = locale === "es" ? "/es" : "";
    for (const route of [
      "/",
      "/about/",
      "/research/",
      "/projects/lock-in/",
      "/projects/setline/",
      "/projects/video-rescue/"
    ]) {
      await page.goto(`${prefix}${route}`);
      for (const link of await page.locator('a[href^="/cv/"][href$=".pdf"]').all()) {
        expect(await link.getAttribute("href")).toMatch(
          new RegExp(`_${locale.toUpperCase()}\\.pdf$`)
        );
        await expect(link).toHaveAttribute("hreflang", locale);
      }
      for (const link of await page.locator(".nav-cv").all())
        await expect(link).toHaveAttribute("href", `${prefix}/cv/`);
    }
  }
});
