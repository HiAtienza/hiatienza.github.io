import { chromium } from "@playwright/test";
import { fileURLToPath, pathToFileURL } from "node:url";
import { resolve } from "node:path";

const root = fileURLToPath(new URL("../", import.meta.url));
const browser = await chromium.launch();
try {
  for (const style of ["ATS", "Visual"]) {
    const page = await browser.newPage();
    const filename = `Adrian_Munoz_Atienza_CV_Public_${style}`;
    await page.goto(pathToFileURL(resolve(root, `docs/cv/${filename}.html`)).href);
    await page.emulateMedia({ media: "print" });
    await page.evaluate(() => document.fonts.ready);
    const loaded = await page.evaluate(() =>
      [...document.images].every((image) => image.complete && image.naturalWidth > 0)
    );
    if (!loaded) throw new Error(`${style}: a CV image failed to load`);
    await page.pdf({
      path: resolve(root, `public/cv/${filename}.pdf`),
      preferCSSPageSize: true,
      printBackground: true,
      tagged: true,
      outline: true
    });
    await page.close();
    console.log(`${style}: public PDF generated`);
  }
} finally {
  await browser.close();
}
