// @ts-check
import { defineConfig } from 'astro/config';
import mkcert from 'vite-plugin-mkcert';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://picyoh.github.io',
  base:'/thang',
  vite: {
    plugins: [tailwindcss(), mkcert()]
  }
});