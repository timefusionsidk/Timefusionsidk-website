# Timefusions

Static homepage and tool directory for https://timefusionsidk.com. No runtime dependencies, database or account system.

## Build and verify

Run `npm run build`, then `npm test`. Node 20 or newer is required. Output is in `dist/`.

## Vercel

Import this repository, select the Other framework preset, use `npm run build` and output directory `dist`. Add `timefusionsidk.com` and optionally `www.timefusionsidk.com` in Domains; redirect www to the root domain. Use Vercel's supplied DNS values. Existing app subdomains remain on their own projects.

The generated sitemap is https://timefusionsidk.com/sitemap.xml. Submit it alongside the five app sitemaps. Unknown paths use the generated 404 page.

## Analytics

The directory loads GA4 `G-F653VYXS68` only after visitors accept optional analytics. Cookie preferences are local to this origin. This does not change consent behavior on the five independently deployed apps. No ads are configured and no placeholder publisher ID is shipped.

Edit the tools and page text in `build.mjs`, styles in `style.css`, and preference behavior in `analytics.js`.
