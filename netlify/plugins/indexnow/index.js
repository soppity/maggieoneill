// Pings IndexNow after a production deploy with the URLs whose content changed.
// The key file lives in public/ so it is served at the site root.
import { execFileSync } from 'node:child_process';
import { readdirSync, readFileSync } from 'node:fs';

const HOST = 'mobtc.co.uk';
const SITE = `https://${HOST}`;

function sitemapUrls(publishDir) {
  return readdirSync(publishDir)
    .filter((f) => /^sitemap-\d+\.xml$/.test(f))
    .flatMap((f) => [...readFileSync(`${publishDir}/${f}`, 'utf8').matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]));
}

function changedUrls(all) {
  const from = process.env.CACHED_COMMIT_REF;
  const to = process.env.COMMIT_REF;
  if (!from || !to || from === to) return all;
  let files;
  try {
    files = execFileSync('git', ['diff', '--name-only', from, to], { encoding: 'utf8' }).split('\n').filter(Boolean);
  } catch {
    return all;
  }
  // A change to shared data, components or layouts can touch every page.
  if (files.some((f) => /^src\/(data|components|layouts|lib|styles)\//.test(f))) return all;
  const paths = files
    .filter((f) => f.startsWith('src/pages/') && f.endsWith('.astro'))
    .map((f) => f.replace(/^src\/pages/, '').replace(/(index)?\.astro$/, '').replace(/\/?$/, '/'));
  return all.filter((u) => paths.includes(new URL(u).pathname));
}

export const onSuccess = async ({ constants, utils }) => {
  if (process.env.CONTEXT !== 'production') return;
  const key = readdirSync(constants.PUBLISH_DIR).find((f) => /^[0-9a-f]{32}\.txt$/.test(f))?.replace('.txt', '');
  if (!key) return utils.status.show({ title: 'IndexNow', summary: 'No key file found, skipped.' });

  const urls = changedUrls(sitemapUrls(constants.PUBLISH_DIR));
  if (!urls.length) return utils.status.show({ title: 'IndexNow', summary: 'No changed URLs to submit.' });

  try {
    const res = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({ host: HOST, key, keyLocation: `${SITE}/${key}.txt`, urlList: urls }),
    });
    utils.status.show({ title: 'IndexNow', summary: `Submitted ${urls.length} URL(s): HTTP ${res.status}` });
  } catch (err) {
    // Never fail a deploy over an indexing ping.
    console.log('IndexNow ping failed:', err);
  }
};
