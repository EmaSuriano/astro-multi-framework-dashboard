import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import vue from '@astrojs/vue';
import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
  site: 'https://emasuriano.github.io',
  base: '/astro-multi-framework-dashboard',
  integrations: [tailwind(), react(), vue(), svelte()],
});
