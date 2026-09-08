export const siteOrigin =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://aarnav-11.github.io';

export function sitePath(path: string) {
  return `${process.env.NEXT_PUBLIC_BASE_PATH || ''}${path}`;
}
