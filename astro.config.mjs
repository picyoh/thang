// @ts-check
import { defineConfig } from 'astro/config';
import mkcert from 'vite-plugin-mkcert';
import tailwindcss from '@tailwindcss/vite';
import icon from "astro-icon"

// https://astro.build/config
export default defineConfig({
  site: 'https://picyoh.github.io',
  base:'/thang',
  integrations: [icon()],
  vite: {
    plugins: [tailwindcss(), mkcert()]
  }
});