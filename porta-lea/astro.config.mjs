import { defineConfig } from 'astro/config';

// Configuración optimizada para despliegue en Cloudflare Pages / Workers Static Assets
export default defineConfig({
  output: 'static',
  build: {
    assets: '_astro',
  },
});
