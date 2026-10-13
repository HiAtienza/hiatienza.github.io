import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { join, resolve } from "node:path";

const root = resolve("out");
const origin = "https://hiatienza.github.io";
const htmlFiles = [];
const failures = new Set();
const idCache = new Map();

function visit(directory) {
  for (const item of readdirSync(directory)) {
    const file = join(directory, item);
    if (statSync(file).isDirectory()) visit(file);
    else if (file.endsWith(".html")) htmlFiles.push(file);
  }
}

function check(value, from, base, checkFragment = false) {
  const url = new URL(value.replaceAll("&amp;", "&"), base);
  if (url.origin !== origin) return;
  const pathname = decodeURIComponent(url.pathname);
  const target = join(root, pathname.endsWith("/") ? `${pathname}index.html` : pathname);
  if (!existsSync(target) || !statSync(target).isFile()) {
    failures.add(`${from}: missing exported file for ${value}`);
    return;
  }
  if (checkFragment && url.hash && target.endsWith(".html")) {
    if (!idCache.has(target)) {
      idCache.set(
        target,
        new Set(
          [...readFileSync(target, "utf8").matchAll(/\bid="([^"]+)"/g)].map((match) => match[1])
        )
      );
    }
    if (!idCache.get(target).has(decodeURIComponent(url.hash.slice(1)))) {
      failures.add(`${from}: missing fragment ${value}`);
    }
  }
}

visit(root);
if (!existsSync(join(root, ".nojekyll"))) failures.add("Export is missing .nojekyll");
for (const file of htmlFiles) {
  const path = file.slice(root.length).replace(/index\.html$/, "");
  const base = new URL(path, origin);
  const html = readFileSync(file, "utf8");
  for (const match of html.matchAll(/\b(href|src)="([^"]+)"/g)) {
    check(match[2], file, base, match[1] === "href");
  }
  for (const match of html.matchAll(/\bsrc[Ss]et="([^"]+)"/g)) {
    for (const candidate of match[1].split(","))
      check(candidate.trim().split(/\s+/)[0], file, base);
  }
}
if (failures.size) {
  console.error([...failures].join("\n"));
  process.exit(1);
}
console.log(
  `Checked ${htmlFiles.length} HTML files; page links, fragments and responsive assets resolve.`
);
