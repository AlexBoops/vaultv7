"use strict";

/**
 * Dynamically resolves the path to uv-sw.js whether hosted at domain root,
 * on GitHub Pages (/vaultv7/), or locally.
 */
const isGitHubPages = location.pathname.includes("/vaultv7");
const stockSW = isGitHubPages ? "/vaultv7/uv-sw.js" : "./uv-sw.js";

/**
 * List of hostnames that are allowed to run serviceworkers on http:
 */
const swAllowedHostnames = ["localhost", "127.0.0.1"];

/**
 * Global util
 * Used in 404.html, index.html, and app subpages
 */
async function registerSW() {
  if (
    location.protocol !== "https:" &&
    !swAllowedHostnames.includes(location.hostname)
  ) {
    throw new Error("Service workers cannot be registered without https.");
  }

  if (!navigator.serviceWorker) {
    throw new Error("Your browser doesn't support service workers.");
  }

  // Ensure __uv$config prefix exists and respects the /vaultv7 subpath if needed
  let scopePrefix = (window.__uv$config && window.__uv$config.prefix) ? window.__uv$config.prefix : "/service/";
  if (isGitHubPages && !scopePrefix.startsWith("/vaultv7")) {
    scopePrefix = "/vaultv7" + (scopePrefix.startsWith("/") ? scopePrefix : "/" + scopePrefix);
  }

  return await navigator.serviceWorker.register(stockSW, {
    scope: scopePrefix,
  });
}
