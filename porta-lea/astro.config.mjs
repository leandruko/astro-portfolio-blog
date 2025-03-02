import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel'; // Aquí quitamos "/serverless"

export default defineConfig({
  output: 'server',
  adapter: vercel({
    webAnalytics: {
      enabled: true, // Activa Vercel Analytics
    },
  }),
});
