#!/usr/bin/env node
// Fails the build if any non-public client name, domain or alias appears in dist/.
// Run after `astro build`. See README: "Publishing a client name".
import { readdir, readFile } from 'node:fs/promises';
import { join, extname } from 'node:path';
import { parse } from 'yaml';

const ROOT = new URL('..', import.meta.url).pathname;
const CONTENT = join(ROOT, 'src/content/work');
const DIST = join(ROOT, 'dist');
const TEXT_EXT = new Set(['.html', '.xml', '.txt', '.json', '.js', '.mjs', '.css', '.svg', '.webmanifest', '.map']);

async function walk(dir) {
  const out = [];
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) out.push(...(await walk(p)));
    else out.push(p);
  }
  return out;
}

// 1. Collect identifying terms for every client that is not public.
const terms = new Map(); // term -> source file
const publicNames = new Set();
for (const file of (await walk(CONTENT)).filter((f) => /\.mdx?$/.test(f))) {
  const src = await readFile(file, 'utf8');
  const fm = src.match(/^---\n([\s\S]*?)\n---/);
  if (!fm) continue;
  const client = parse(fm[1])?.client;
  if (!client) continue;
  if (client.public) {
    publicNames.add(String(client.name).toLowerCase());
    continue;
  }
  const add = (t) => t && String(t).trim().length >= 4 && terms.set(String(t).trim().toLowerCase(), file.replace(ROOT, ''));
  add(client.name);
  if (client.url) add(new URL(client.url).hostname.replace(/^www\./, ''));
  for (const l of client.liveLinks ?? []) add(new URL(l.url).hostname.replace(/^www\./, ''));
  for (const a of client.aliases ?? []) add(a);
}
// A name shared with a public client (e.g. the employer) cannot be a leak.
for (const n of publicNames) terms.delete(n);

if (terms.size === 0) {
  console.log('[leak-check] No private clients configured. Nothing to check.');
  process.exit(0);
}

// 2. Scan every text file in dist/, plus PNG/JPEG metadata as raw bytes.
const files = await walk(DIST).catch(() => {
  console.error('[leak-check] dist/ not found. Run `astro build` first.');
  process.exit(1);
});
const hits = [];
for (const f of files) {
  const ext = extname(f).toLowerCase();
  const isText = TEXT_EXT.has(ext);
  const buf = await readFile(f);
  const hay = (isText ? buf.toString('utf8') : buf.toString('latin1')).toLowerCase();
  for (const [term, source] of terms) {
    const i = hay.indexOf(term);
    if (i !== -1) hits.push({ file: f.replace(ROOT, ''), term, source, context: hay.slice(Math.max(0, i - 40), i + term.length + 40).replace(/\s+/g, ' ') });
  }
}

if (hits.length) {
  console.error(`[leak-check] FAILED: ${hits.length} private client reference(s) found in dist/\n`);
  for (const h of hits) console.error(`  ${h.file}\n    term "${h.term}" (from ${h.source})\n    …${h.context}…\n`);
  process.exit(1);
}
console.log(`[leak-check] OK: ${terms.size} private terms checked across ${files.length} files.`);
