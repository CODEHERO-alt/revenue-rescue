// scripts/prerender.mjs
// Build-time prerendering for Vite + React (no Puppeteer).
// Generates static HTML in dist so crawlers can read real content.

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

function routeToOutFile(route) {
  // "/" -> dist/index.html
  // "/pricing" -> dist/pricing/index.html
  if (route === "/") return path.join(distDir, "index.html");
  const clean = route.replace(/^\/+/, "").replace(/\/+$/, "");
  return path.join(distDir, clean, "index.html");
}

// Template is dist/index.html after Vite build
const templatePath = path.join(distDir, "index.html");
if (!fs.existsSync(templatePath)) {
  fail("dist/index.html not found. Run `npm run build` first.");
}

// Map routes to page components (add as you create files)
const routeToModule = {
  "/": "/src/pages/Index.tsx",
  "/pricing": "/src/pages/Pricing.tsx",
  "/case-studies": "/src/pages/CaseStudies.tsx",
  "/contact": "/src/pages/Contact.tsx",
};

// Only prerender routes that:
// 1) are listed in ROUTES_TO_PRERENDER
// 2) have a mapping in routeToModule
// 3) the file actually exists in the repo
const routes = ROUTES_TO_PRERENDER.filter((route) => {
  const modulePath = routeToModule[route];
  if (!modulePath) {
    console.log(`[prerender] Skipping ${route} (no module mapping)`);
    return false;
  }

  const fsPath = path.join(rootDir, modulePath.replace(/^\//, ""));
  const exists = fs.existsSync(fsPath);

  if (!exists) {
    console.log(`[prerender] Skipping ${route} (missing ${modulePath})`);
  }
  return exists;
});

if (routes.length === 0) {
  fail("No routes to prerender. Check scripts/prerender.routes.mjs and route mappings.");
}

// Create a Vite server in middleware SSR mode so we can import TS/TSX via ssrLoadModule
const vite = await createServer({
  appType: "custom",
  server: { middlewareMode: true },
  logLevel: "error",
});

try {
  for (const route of routes) {
    const modulePath = routeToModule[route];

    // Load the page module through Vite SSR
    const mod = await vite.ssrLoadModule(modulePath);
    const Page = mod?.default;
    if (!Page) fail(`No default export found in ${modulePath}`);

    // Render page HTML
    const appHtml = renderToString(React.createElement(Page));

    // Read template and inject
    let html = fs.readFileSync(templatePath, "utf-8");

    const rootDivRegex = /<div\s+id="root"\s*><\/div>|<div\s+id="root"\s*\/>/;
    if (!rootDivRegex.test(html)) {
      fail('Could not find <div id="root"></div> in dist/index.html');
    }

    html = html.replace(rootDivRegex, `<div id="root">${appHtml}</div>`);

    // Write output
    const outFile = routeToOutFile(route);
    ensureDir(path.dirname(outFile));
    fs.writeFileSync(outFile, html, "utf-8");

    console.log(`[prerender] Wrote ${route} -> ${path.relative(rootDir, outFile)}`);
  }
} finally {
  await vite.close();
}
