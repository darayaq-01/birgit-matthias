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
    define: {
      'process.env.KEY_FORM': JSON.stringify(process.env.KEY_FORM),
      'process.env.PUBLIC_API_FORM': JSON.stringify(process.env.PUBLIC_API_FORM)
    }
  },
});