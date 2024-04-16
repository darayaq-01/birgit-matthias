import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";
import mdx from "@astrojs/mdx"
import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), svelte(), mdx()],
  experimental: {
    contentCollectionCache: true,
    // optimizeHoistedScript: true
  },
  output: "server",
  adapter: netlify()
});