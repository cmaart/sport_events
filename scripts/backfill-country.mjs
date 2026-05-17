#!/usr/bin/env node
// One-off: adds "country": "AT" to all existing event JSON files that don't have it yet.
// Insert position: right after the "categories" array, before "dates".
import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const dir = new URL('../src/content/events/', import.meta.url);
const files = readdirSync(dir).filter((f) => f.endsWith('.json') && !f.startsWith('_'));

let changed = 0;
for (const file of files) {
  const path = join(dir.pathname, file);
  const raw = readFileSync(path, 'utf8');
  const data = JSON.parse(raw);
  if (data.country) continue;
  const ordered = {};
  for (const [k, v] of Object.entries(data)) {
    ordered[k] = v;
    if (k === 'categories') ordered.country = 'AT';
  }
  writeFileSync(path, JSON.stringify(ordered, null, 2) + '\n');
  changed++;
}
console.log(`Backfilled country=AT in ${changed}/${files.length} files.`);
