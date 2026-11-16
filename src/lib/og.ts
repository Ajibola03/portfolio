import { readFile } from 'node:fs/promises';
import { createRequire } from 'node:module';
import satori from 'satori';
import sharp from 'sharp';
import { SITE } from './site';

const require = createRequire(import.meta.url);
const font = (pkg: string, file: string) => readFile(require.resolve(`${pkg}/files/${file}`));

let fontsPromise: Promise<Parameters<typeof satori>[1]['fonts']> | undefined;
function loadFonts() {
  fontsPromise ??= Promise.all([
    font('@fontsource/fraunces', 'fraunces-latin-500-normal.woff'),
    font('@fontsource/source-sans-3', 'source-sans-3-latin-400-normal.woff'),
    font('@fontsource/jetbrains-mono', 'jetbrains-mono-latin-400-normal.woff'),
  ]).then(([fraunces, sans, mono]) => [
    { name: 'Fraunces', data: fraunces, weight: 500 as const, style: 'normal' as const },
    { name: 'Source Sans 3', data: sans, weight: 400 as const, style: 'normal' as const },
    { name: 'JetBrains Mono', data: mono, weight: 400 as const, style: 'normal' as const },
  ]);
  return fontsPromise;
}

export interface OgInput {
  kicker: string;
  title: string;
  subtitle?: string;
}

type Node = { type: string; props: Record<string, unknown> };
const h = (type: string, style: Record<string, unknown>, children?: unknown): Node => ({
  type,
  props: { style: { display: 'flex', ...style }, children },
});

const C = { paper: '#FAF8F4', ink: '#16140F', muted: '#6B665C', rule: '#E4DFD5', accent: '#0F6B5C' };

export async function renderOg({ kicker, title, subtitle }: OgInput): Promise<Buffer> {
  const titleSize = title.length > 70 ? 64 : title.length > 40 ? 76 : 96;
  const tree = h(
    'div',
    { width: 1200, height: 630, flexDirection: 'column', background: C.paper, padding: '56px 72px', boxSizing: 'border-box', fontFamily: 'Source Sans 3', color: C.ink },
    [
      h('div', { width: 1056, justifyContent: 'space-between', alignItems: 'center', fontFamily: 'JetBrains Mono', fontSize: 22, color: C.muted, letterSpacing: 1 }, [
        h('div', {}, kicker.toUpperCase()),
        h('div', { color: C.accent }, 'ajibola.dev'),
      ]),
      h('div', { width: 1056, height: 1, background: C.ink, marginTop: 24 }),
      h('div', { width: 1056, flexGrow: 1, flexShrink: 1, minHeight: 0, flexDirection: 'column', justifyContent: 'center' }, [
        h('div', { fontFamily: 'Fraunces', fontSize: titleSize, lineHeight: 1.05, letterSpacing: -1.5 }, title),
        ...(subtitle ? [h('div', { marginTop: 28, fontSize: 32, lineHeight: 1.35, color: C.muted, maxWidth: 940 }, subtitle)] : []),
      ]),
      h('div', { width: 1056, flexShrink: 0, justifyContent: 'space-between', alignItems: 'flex-end', borderTop: `1px solid ${C.rule}`, paddingTop: 22 }, [
        h('div', { fontFamily: 'Fraunces', fontSize: 34 }, [h('span', {}, SITE.name), h('span', { color: C.accent }, '.')]),
        h('div', { fontFamily: 'JetBrains Mono', fontSize: 20, color: C.muted }, `${SITE.jobTitle.toUpperCase()} · PROGRAMMATIC SEO`),
      ]),
    ],
  );
  const svg = await satori(tree as never, { width: 1200, height: 630, fonts: await loadFonts() });
  return sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toBuffer();
}
