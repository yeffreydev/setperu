import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel";
import { defineConfig } from "astro/config";
import path from "path";
import url from "url";

import robotsTxt from "astro-robots-txt";

const _dirname = path.dirname(url.fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
  adapter: vercel(),
  site: import.meta.env.DEV
    ? "http://localhost:4321"
    : "https://luna-landing-rust.vercel.app/",
  integrations: [tailwind(), sitemap(), robotsTxt()],
});
