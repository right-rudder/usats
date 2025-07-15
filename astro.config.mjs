import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://usatsflighttraining.com/",
  integrations: [
    tailwind(),
    partytown({
      config: {
        forward: ["gtag", "dataLayer.push"],
      },
    }),
    sitemap({
      // Customize URLs in the sitemap
      customPages: [
        "https://usatsflighttraining.com/pages/about-our-flight-school",
        "https://usatsflighttraining.com/pages/application-process-for-aspiring-pilots",
        "https://usatsflighttraining.com/pages/flight-school-gallery",
      ],
      // Filter out certain pages
      filter: (page) => {
        // Exclude admin, private, and dynamic query pages
        if (
          page.includes("/admin/") ||
          page.includes("/private/") ||
          page.includes("?") ||
          page.includes("#") ||
          page.includes("/404") ||
          page.includes("/confirmation")
        ) {
          return false;
        }
        return true;
      },
      // Entry point mapping for priority and change frequency
      entryLimit: 45000,
      // Use serialize function instead of transform for newer versions
      serialize: (item) => {
        const url = new URL(item.url);
        const path = url.pathname;

        // Homepage - highest priority, changes frequently
        if (path === "/" || path === "/index.html") {
          return {
            url: item.url,
            changefreq: "daily",
            priority: 1.0,
            lastmod: new Date().toISOString().split("T")[0],
          };
        }

        // Main service pages - high priority
        if (
          path.includes("/airplane-training/") ||
          path.includes("/helicopter-training/") ||
          path.includes("/flight-training/") ||
          path.includes("/services/")
        ) {
          return {
            url: item.url,
            changefreq: "weekly",
            priority: 0.9,
            lastmod: new Date().toISOString().split("T")[0],
          };
        }

        // Location pages - high priority for local SEO
        if (path.includes("/pilot-training/")) {
          return {
            url: item.url,
            changefreq: "monthly",
            priority: 0.8,
            lastmod: new Date().toISOString().split("T")[0],
          };
        }

        // Blog posts - medium-high priority, updated less frequently
        if (path.includes("/blog/")) {
          return {
            url: item.url,
            changefreq: "monthly",
            priority: 0.7,
            lastmod: new Date().toISOString().split("T")[0],
          };
        }

        // About us pages - medium priority
        if (path.includes("/about-us/")) {
          return {
            url: item.url,
            changefreq: "monthly",
            priority: 0.6,
            lastmod: new Date().toISOString().split("T")[0],
          };
        }

        // Contact and static pages - lower priority
        if (
          path.includes("/contact-us") ||
          path.includes("/privacy-policy") ||
          path.includes("/terms-of-service")
        ) {
          return {
            url: item.url,
            changefreq: "yearly",
            priority: 0.5,
            lastmod: new Date().toISOString().split("T")[0],
          };
        }

        // Default for other pages
        return {
          url: item.url,
          changefreq: "monthly",
          priority: 0.5,
          lastmod: new Date().toISOString().split("T")[0],
        };
      },
    }),
    react(),
  ],
  redirects: {
    "/pages/about-our-flight-school": "/about-us",
    "/pages/application-process-for-aspiring-pilots": "/enroll-now",
    "/pages/flight-school-gallery": "/about-us",
  },
  // Performance and SEO optimizations
  output: "static",
  build: {
    inlineStylesheets: "auto",
    assets: "_astro",
  },
  compressHTML: true,
  // Security headers and SEO enhancements
  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ["react", "react-dom"],
            utils: ["lodash", "date-fns"],
          },
        },
      },
    },
    server: {
      headers: {
        "X-Content-Type-Options": "nosniff",
        "X-Frame-Options": "DENY",
        "X-XSS-Protection": "1; mode=block",
        "Referrer-Policy": "strict-origin-when-cross-origin",
        "Permissions-Policy": "camera=(), microphone=(), geolocation=(self)",
      },
    },
  },
  // Image optimization for SEO
  image: {
    domains: ["usatsflighttraining.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "usatsflighttraining.com",
      },
    ],
  },
});
