import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://usatsflighttraining.com/",
  integrations: [tailwind(), partytown(), sitemap(), react()],
  redirects: {
    "/pages/about-our-flight-school": "/about-us",
    "/pages/application-process-for-aspiring-pilots": "/enroll-now",
    "/pages/flight-school-gallery": "/about-us",
  },
});
