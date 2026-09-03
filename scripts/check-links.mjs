import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { join, normalize } from "node:path";
const root = "out";
const htmlFiles = [];
function visit(directory) {
  for (const item of readdirSync(directory)) {
    const file = join(directory, item);
    statSync(file).isDirectory() ? visit(file) : file.endsWith(".html") && htmlFiles.push(file);
  }
}
function localTarget(href) {
  const path = href.split("#")[0].split("?")[0];
  if (!path || !path.startsWith("/")) return null;
  return normalize(join(root, path.endsWith("/") ? `${path}index.html` : path));
}
visit(root);
const failures = [];
for (const file of htmlFiles) {
  for (const match of readFileSync(file, "utf8").matchAll(/(?:href|src)="([^"]+)"/g)) {
    const target = localTarget(match[1]);
    if (target && !existsSync(target)) failures.push(`${file}: ${match[1]}`);
  }
}
if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}
console.log(`Checked ${htmlFiles.length} HTML files; all internal links and assets resolve.`);
