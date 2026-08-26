/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_GTM_ID?: string;
  readonly PUBLIC_META_PIXEL_ID?: string;
  readonly PUBLIC_LINKEDIN_PARTNER_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

interface Window {
  gtag?: (...args: unknown[]) => void;
  dataLayer?: unknown[];
}
