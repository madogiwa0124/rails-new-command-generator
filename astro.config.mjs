import { defineConfig } from "astro/config";

import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  integrations: [vue()],
  site: "https://madogiwa0124.github.io",
  base: "/rails-new-command-generator",
});
