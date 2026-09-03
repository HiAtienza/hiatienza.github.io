import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const pages = [
  "/",
  "/es/",
  "/projects/video-rescue/",
  "/projects/cybermastery/",
  "/projects/lifemap/",
  "/research/",
  "/privacy/"
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

test("unknown paths use the public 404 page", async ({ page }) => {
  await page.goto("/not-a-public-page/");
  await expect(page.getByRole("heading", { name: "That page is not here." })).toBeVisible();
});
