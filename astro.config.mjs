import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import netlify from "@astrojs/netlify";


// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), mdx()],
  experimental: {
    contentCollectionCache: true
    // optimizeHoistedScript: true
  },
  output: "server",
  adapter: netlify(),
  vite: {
    envPrefix: "KEY_FORM"
  }
});