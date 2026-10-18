export const SITE_NAME = "Temi Forge";

export const DEFAULT_TITLE = "Temi Forge | Frontend & Mobile Developer";

export const DEFAULT_DESCRIPTION =
  "Temi Forge — freelance frontend and mobile developer. React, React Native, and TypeScript work across marketplaces, brand sites, and product apps.";

export const DEFAULT_IMAGE_PATH = "/projects/portfolio.jpg";

export function getSiteOrigin() {
  const configured = import.meta.env.VITE_SITE_URL?.replace(/\/$/, "");
  if (configured) return configured;
  if (typeof window !== "undefined") return window.location.origin;
  return "";
}

export function absoluteUrl(path = "/") {
  if (!path) return getSiteOrigin();
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  const origin = getSiteOrigin();
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${origin}${normalized}`;
}
