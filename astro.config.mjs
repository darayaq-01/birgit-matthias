import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import netlify from "@astrojs/netlify";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  adapter: netlify(),
  integrations: [svelte()],
  redirects: {
    '/admin': '/admin/index.html'
  }
});