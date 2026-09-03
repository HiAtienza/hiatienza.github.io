import { createReadStream, existsSync, statSync } from "node:fs";
import { createServer } from "node:http";
import { extname, join, normalize } from "node:path";

const [root = "out", portValue = "4173"] = process.argv.slice(2);
const port = Number(portValue);
const mime = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".webp": "image/webp",
  ".avif": "image/avif",
  ".pdf": "application/pdf",
  ".xml": "application/xml; charset=utf-8",
  ".txt": "text/plain; charset=utf-8"
};
createServer((request, response) => {
  const pathname = decodeURIComponent(new URL(request.url || "/", "http://localhost").pathname);
  const requested = normalize(join(root, pathname));
  const target =
    requested.startsWith(normalize(root)) && existsSync(requested)
      ? statSync(requested).isDirectory()
        ? join(requested, "index.html")
        : requested
      : join(root, "404.html");
  response.writeHead(target.endsWith("404.html") ? 404 : 200, {
    "content-type": mime[extname(target)] || "application/octet-stream"
  });
  createReadStream(target).pipe(response);
}).listen(port, "127.0.0.1", () =>
  console.log(`Static portfolio available at http://127.0.0.1:${port}`)
);
