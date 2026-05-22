// Prefixes internal absolute paths with the site's base URL (set in
// astro.config.mjs). External URLs, mailto:, tel:, and # anchors pass
// through unchanged so this helper is safe to wrap any href/src.
export function withBase(path: string): string {
  if (!path) return path;
  if (
    path.startsWith('http://') ||
    path.startsWith('https://') ||
    path.startsWith('mailto:') ||
    path.startsWith('tel:') ||
    path.startsWith('#') ||
    path.startsWith('data:')
  ) {
    return path;
  }
  // Normalize: drop trailing slashes from base, ensure leading slash on path.
  // This handles both "/website" and "/website/" forms of BASE_URL.
  const base = import.meta.env.BASE_URL.replace(/\/+$/, '');
  const cleaned = path.startsWith('/') ? path : '/' + path;
  return base + cleaned;
}
