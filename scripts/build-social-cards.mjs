import { chromium } from "@playwright/test";
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { resolve } from "node:path";

const root = fileURLToPath(new URL("../", import.meta.url));
const portrait = (await readFile(resolve(root, "public/images/profile-400.webp"))).toString(
  "base64"
);
const browser = await chromium.launch();
try {
  for (const locale of ["en", "es"]) {
    const en = locale === "en";
    const page = await browser.newPage({
      viewport: { width: 1200, height: 630 },
      deviceScaleFactor: 1
    });
    await page.setContent(`<!doctype html><html lang="${locale}"><meta charset="utf-8"><style>
      *{box-sizing:border-box}body{margin:0;width:1200px;height:630px;background:#fffdf8;color:#0b2340;font-family:Arial,sans-serif;border-bottom:14px solid #e4865a;padding:58px;display:flex;align-items:center;justify-content:space-between;gap:45px}main{width:705px}header{font-size:25px;color:#2d6390;margin-bottom:28px}h1{font-size:70px;letter-spacing:-3px;line-height:1.08;margin:0 0 28px}p{font-size:26px;color:#38506a;line-height:1.35;margin:0}.projects{font-size:22px;margin-top:34px;color:#0b2340}footer{font-size:20px;color:#2d6390;margin-top:15px}img{width:285px;height:285px;object-fit:cover;border-radius:12px}
      </style><main><header>Adrián Muñoz Atienza · XJTLU</header><h1>${en ? "Useful software.<br>People first." : "Software útil.<br>Personas primero."}</h1><p>${en ? "Android · Web · Human-centered AI research" : "Android · Web · Investigación persona-IA"}</p><p class="projects">LockIn · Setline · VIDEO-RESCUE</p><footer>hiatienza.github.io</footer></main><img alt="" src="data:image/webp;base64,${portrait}"></html>`);
    await page.evaluate(async () => {
      await document.fonts.ready;
      await Promise.all([...document.images].map((image) => image.decode()));
    });
    await page.screenshot({ path: resolve(root, `public/social-profile-${locale}.png`) });
    await page.close();
    console.log(`${locale}: static social card generated`);
  }
} finally {
  await browser.close();
}
