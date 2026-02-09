import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

import react from '@astrojs/react';

export default defineConfig({
  output: 'server',

  adapter: vercel({
    webAnalytics: {
      enabled: false, // disabled because using @vercel/analytics@1.5.0 with Analytics component
    },
  }),

  integrations: [react()],
});