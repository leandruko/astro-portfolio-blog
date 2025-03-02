import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';
 
export default defineConfig({
  output: 'server',
  adapter: vercel({
    webAnalytics: {
      enabled: true, // set to false when using @vercel/analytics@1.4.0
    },
  }),
});