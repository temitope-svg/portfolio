export const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
export const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
export const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const missing = [
  !EMAILJS_PUBLIC_KEY && "VITE_EMAILJS_PUBLIC_KEY",
  !EMAILJS_SERVICE_ID && "VITE_EMAILJS_SERVICE_ID",
  !EMAILJS_TEMPLATE_ID && "VITE_EMAILJS_TEMPLATE_ID",
].filter(Boolean);

if (import.meta.env.DEV && missing.length > 0) {
  console.error(
    `[EmailJS] Missing env: ${missing.join(", ")}. Copy .env.example to .env and restart the dev server.`
  );
}

export function assertEmailJsConfig() {
  if (missing.length > 0) {
    throw new Error(
      `EmailJS is not configured. Set ${missing.join(", ")} in .env and restart the dev server.`
    );
  }
}
