import type { CollectionEntry } from 'astro:content';

type WorkEntry = CollectionEntry<'work'>;
type Client = NonNullable<WorkEntry['data']['client']>;

export interface DisplayClient {
  /** Text to show for the client: real name when public, descriptor otherwise. */
  label: string;
  isPublic: boolean;
  /** Only set when the client is public. */
  url?: string;
  liveLinks: { label: string; url: string }[];
}

/**
 * The only place allowed to read `client.name`, `client.url` and `client.liveLinks`.
 * When `public` is false, nothing identifying leaves this function.
 */
export function displayClient(entry: WorkEntry | { data: { client?: Client } }): DisplayClient | undefined {
  const c = entry.data.client;
  if (!c) return undefined;
  if (!c.public) return { label: c.descriptor, isPublic: false, liveLinks: [] };
  return { label: c.name, isPublic: true, url: c.url, liveLinks: c.liveLinks };
}

/** Descriptor with a leading capital, for use at the start of a line. */
export function capitalize(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}
