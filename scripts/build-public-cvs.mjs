import { chromium } from "@playwright/test";
import { createHash } from "node:crypto";
import { copyFile, readFile } from "node:fs/promises";
import { fileURLToPath, pathToFileURL } from "node:url";
import { resolve } from "node:path";

const root = fileURLToPath(new URL("../", import.meta.url));
const prefix = "Adrian_Munoz_Atienza_CV_Public";
const source = resolve(root, `docs/cv/source/${prefix}_Visual_EN.pdf`);
const sourceHash = "14d7fc02ace17b46ad8bf5d86c99f56362c5aaa2d9566e754195504e91d345c1";
if (
  createHash("sha256")
    .update(await readFile(source))
    .digest("hex") !== sourceHash
) {
  throw new Error("The supplied English CV has changed; review its provenance before rebuilding.");
}
// The priority English visual CV is the owner's exact supplied PDF, not a rerender.
await copyFile(source, resolve(root, `public/cv/${prefix}_Visual_EN.pdf`));
await copyFile(source, resolve(root, `public/cv/${prefix}_Visual.pdf`));
const browser = await chromium.launch();
try {
  for (const variant of ["ATS_EN", "ATS_ES", "Visual_ES"]) {
    const page = await browser.newPage();
    const filename = `${prefix}_${variant}`;
    await page.goto(pathToFileURL(resolve(root, `docs/cv/${filename}.html`)).href);
    await page.emulateMedia({ media: "print" });
    await page.evaluate(() => document.fonts.ready);
    const loaded = await page.evaluate(() =>
      [...document.images].every((image) => image.complete && image.naturalWidth > 0)
    );
    if (!loaded) throw new Error(`${variant}: a CV image failed to load`);
    await page.pdf({
      path: resolve(root, `public/cv/${filename}.pdf`),
      preferCSSPageSize: true,
      printBackground: true,
      tagged: true,
      outline: true
    });
    await page.close();
    console.log(`${variant}: public PDF generated`);
  }
} finally {
  await browser.close();
}
await copyFile(
  resolve(root, `public/cv/${prefix}_ATS_EN.pdf`),
  resolve(root, `public/cv/${prefix}_ATS.pdf`)
);
console.log("Visual_EN: exact owner-supplied PDF preserved; legacy English URLs refreshed");
