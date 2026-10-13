// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { execFileSync } from 'node:child_process';
import { existsSync } from 'node:fs';

const site = 'https://mobtc.co.uk';

// Real <lastmod> per URL: the last commit that touched the page file or the facts it reads (SEO spec 2.2).
// Netlify builds from a git clone, so history is available. If it isn't, lastmod is left out rather than faked.
/** @param {string} pathname */
function lastModified(pathname) {
  const clean = pathname.replace(/^\/|\/$/g, '');
  const candidates = clean
    ? [`src/pages/${clean}/index.astro`, `src/pages/${clean}.astro`, `src/pages/${clean}/index.md`]
    : ['src/pages/index.astro'];
  const page = candidates.find((f) => existsSync(f));
  if (!page) return undefined;
  try {
    const out = execFileSync('git', ['log', '-1', '--format=%cI', '--', page, 'src/data/facts.ts'], { encoding: 'utf8' }).trim();
    return out || undefined;
  } catch {
    return undefined;
  }
}

export default defineConfig({
  site,
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [
    sitemap({
      // Unlisted operator licence pages (guide, lease form, wrong-borough page) and the thank-you pages are noindex: keep them out.
      filter: (page) => !page.includes('/404') && !page.includes('/thank-you/') && !/\/operators-licence\/.+/.test(new URL(page).pathname),
      serialize(item) {
        const lastmod = lastModified(new URL(item.url).pathname);
        if (lastmod) item.lastmod = lastmod;
        return item;
      },
    }),
  ],
});
