const routeToModule = {
  "/": "/src/pages/Index.tsx",
  "/pricing": "/src/pages/Pricing.tsx",
  "/case-studies": "/src/pages/CaseStudies.tsx",
  "/contact": "/src/pages/Contact.tsx",
};

// Filter to routes that actually exist in the repo
const routes = ROUTES_TO_PRERENDER.filter((route) => {
  const modulePath = routeToModule[route];
  if (!modulePath) return false;

  const fsPath = path.join(rootDir, modulePath.replace(/^\//, ""));
  const exists = fs.existsSync(fsPath);

  if (!exists) {
    console.log(`[prerender] Skipping ${route} (missing ${modulePath})`);
  }
  return exists;
});

for (const route of routes) {
  // ... existing render loop ...
}
