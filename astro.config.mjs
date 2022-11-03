import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import vue from '@astrojs/vue';
import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
  site: 'https://astro-multi-framework-dashboard.netlify.app',
  integrations: [
    tailwind(),
    react(),
    vue({ appEntrypoint: '/src/pages/_app' }),
    svelte(),
  ],
  vite: {
    ssr: {
      noExternal: ['vuetify', '@smui/**/*'],
    },
  },
});
