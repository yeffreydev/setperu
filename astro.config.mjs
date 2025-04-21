import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

import robotsTxt from "astro-robots-txt";

const _dirname = path.dirname(url.fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
  site: import.meta.env.DEV
    ? "http://localhost:4321"
    : "https://luna-landing-rust.vercel.app/",
  integrations: [tailwind(), sitemap(), robotsTxt()],
  resolve: {
    alias: {
      "@assets": `${_dirname}/src/assets`,
      "@components": `${_dirname}/src/components`,
      "@content": `${_dirname}/src/content`,
    },
  },
});
