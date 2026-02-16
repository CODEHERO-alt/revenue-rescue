import fs from "node:fs";
import path from "node:path";
import process from "node:process";
import { ROUTES_TO_PRERENDER } from "./prerender.routes.mjs";

const distDir = path.join(process.cwd(), "dist");

function routeToFile(route) {
  if (route === "/") return path.join(distDir, "index.html");
  const clean = route.replace(/^\/+/, "").replace(/\/+$/, "");
  return path.join(distDir, clean, "index.html");
}

let ok = true;

for (const route of ROUTES_TO_PRERENDER) {
  const file = routeToFile(route);
  if (!fs.existsSync(file)) {
    console.error(`[verify] Missing prerendered file for ${route}: ${file}`);
    ok = false;
    continue;
  }

  const html = fs.readFileSync(file, "utf-8");

  // If root is empty, crawlers will see nothing.
  if (html.includes('<div id="root"></div>') || html.includes('<div id="root"/>')) {
    console.error(`[verify] Empty root for ${route} (still SPA shell)`);
    ok = false;
  }

  // Basic sanity: ensure there is at least one H1 somewhere.
  if (!/<h1[\s>]/i.test(html)) {
    console.error(`[verify] No <h1> found for ${route}. Might still be empty or broken.`);
    ok = false;
  }
}

if (!ok) {
  console.error("\n[verify] Prerender verification failed. Blocking deploy.\n");
  process.exit(1);
}

console.log("[verify] Prerender verification passed.");
