// Notify IndexNow (Bing, Yandex, Seznam, Naver …) about every URL in the live
// sitemap after a deploy. Google does not participate in IndexNow, but Bing
// otherwise discovers a small site very slowly.
//
// Usage: node scripts/indexnow.mjs [siteUrl]
// Key file lives at public/<key>.txt (required by the protocol).

const SITE = (process.argv[2] ?? 'https://events.endure-cycling.com').replace(/\/$/, '');
const KEY = '8201ab66fe4da92b2ec19eea40813bc9';
const HOST = new URL(SITE).host;

async function fetchText(url) {
  const res = await fetch(url, { headers: { 'user-agent': 'endure-events-indexnow/1.0' } });
  if (!res.ok) throw new Error(`${url} → HTTP ${res.status}`);
  return res.text();
}

const locs = (xml) => [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());

const index = await fetchText(`${SITE}/sitemap-index.xml`);
const urls = (await Promise.all(locs(index).map(fetchText))).flatMap(locs);
if (urls.length === 0) throw new Error('sitemap contained no URLs');

const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'content-type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `${SITE}/${KEY}.txt`, urlList: urls.slice(0, 10000) }),
});
console.log(`IndexNow: submitted ${urls.length} URLs → HTTP ${res.status}`);
if (res.status >= 400) {
  const body = await res.text();
  console.log(body);
  // Right after a deploy that (re)publishes the key file, IndexNow may not
  // have verified it yet. Not a build problem — the next deploy retries.
  if (body.includes('SiteVerificationNotCompleted')) {
    console.log('::warning::IndexNow key verification pending, will retry on next deploy');
    process.exit(0);
  }
  process.exit(1);
}
