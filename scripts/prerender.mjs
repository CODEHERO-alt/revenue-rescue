import fs from "node:fs";
import path from "node:path";
import process from "node:process";

import React from "react";
import { renderToString } from "react-dom/server";
import { createServer } from "vite";

import { ROUTES_TO_PRERENDER } from "./prerender.routes.mjs";

const rootDir = process.cwd();
const distDir = path.join(rootDir, "dist");

function fail(msg) {
  console.error(`\n[prerender] ${msg}\n`);
  process.exit(1);
}

function ensureDir(p) {
  fs.mkdirSync(p, { recursive: true });
}

function routeToFile(route) {
  // "/" -> dist/index.html
  // "/pricing" -> dist/pricing/index.html
  if (route === "/") return path.join(distDir, "index.html");
  const clean = route.replace(/^\/+/, "").replace(/\/+$/, "");
  return path.join(distDir, clean, "index.html");
}

const vite = await createServer({
  appType: "custom",
  server: { middlewareMode: true },
  logLevel: "error",
});

try {
  // IMPORTANT:
  // This assumes your marketing pages are implemented as separate React components you can import.
  // Minimal future-proof pattern:
  // Create files like:
  //   src/pages/Index.tsx
  //   src/pages/Pricing.tsx
  //   src/pages/CaseStudies.tsx
  //   src/pages/Contact.tsx
  //
  // And map routes to those modules here:
  const routeToModule = {
    "/": "/src/pages/Index.tsx",
    "/pricing": "/src/pages/Pricing.tsx",
    "/case-studies": "/src/pages/CaseStudies.tsx",
    "/contact": "/src/pages/Contact.tsx",
  };

  for (const route of ROUTES_TO_PRERENDER) {
    const modulePath = routeToModule[route];
    if (!modulePath) fail(`No module mapped for route: ${route}`);

    const mod = await vite.ssrLoadModule(modulePath);
    const Page = mod?.default;
    if (!Page) fail(`No default export found in ${modulePath}`);

    const appHtml = renderToString(React.createElement(Page));

    const outFile = routeToFile(route);
    ensureDir(path.dirname(outFile));

    // Use dist/index.html as template for all routes.
    const templatePath = path.join(distDir, "index.html");
    if (!fs.existsSync(templatePath)) fail("dist/index.html not found. Run `npm run build` first.");
    let html = fs.readFileSync(templatePath, "utf-8");

    // Ensure canonical + og:url can be overridden per route later if you want.
    // (Optional) Keep as-is for now.

    const rootDivRegex = /<div\s+id=\"root\"\s*><\/div>|<div\s+id=\"root\"\s*\/>/;
    if (!rootDivRegex.test(html)) fail('Could not find <div id="root"> in template HTML');

    html = html.replace(rootDivRegex, `<div id="root">${appHtml}</div>`);
    fs.writeFileSync(outFile, html, "utf-8");

    console.log(`[prerender] Wrote ${route} -> ${path.relative(rootDir, outFile)}`);
  }
} finally {
  await vite.close();
}
