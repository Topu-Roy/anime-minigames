/* global window */
// Google Analytics 4 init - runs inside the Partytown web worker
// (loaded via <script src="/gtag-init.js" type="text/partytown"> in Layout.astro).
// dataLayer/gtag calls are forwarded to the main thread by the
// partytown forward config in astro.config.mjs.
window.dataLayer = window.dataLayer || [];
window.gtag = function (...args) {
  window.dataLayer.push(args);
};
window.gtag("js", new Date());
window.gtag("config", "G-7BGSVX7GR0");
