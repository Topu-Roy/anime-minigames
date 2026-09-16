// @ts-check
import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import partytown from "@astrojs/partytown";
import AstroPWA from "@vite-pwa/astro";

// https://astro.build/config
export default defineConfig({
  // Required by @astrojs/sitemap; replaced with the real domain at deploy time.
  site: "https://animeminigames.com",
  integrations: [
    svelte(),
    // Noindexed pages (style previews) stay out of the sitemap - listing
    // them contradicts their robots directives.
    sitemap(),
    partytown(),
    // Service worker: forced CacheFirst for character art (header-independent,
    // persistent ~30 days / 250 faces). App shell precached by default.
    // Scope is caching only - no install manifest yet.
    AstroPWA({
      registerType: "autoUpdate",
      includeAssets: [
        "favicon.ico",
        "favicon.svg",
        "favicon-96x96.png",
        "apple-touch-icon.png",
        "site.webmanifest",
        "web-app-manifest-192x192.png",
        "web-app-manifest-512x512.png",
      ],
      workbox: {
        runtimeCaching: [
          {
            urlPattern: ({ url }) =>
              url.hostname === "res.cloudinary.com" && url.pathname.includes("/anime-draft/"),
            handler: "CacheFirst",
            options: {
              cacheName: "anime-faces",
              expiration: { maxEntries: 250, maxAgeSeconds: 30 * 24 * 60 * 60 },
              cacheableResponse: { statuses: [0, 200] },
            },
          },
        ],
      },
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
