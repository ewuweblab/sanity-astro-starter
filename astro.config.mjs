// @ts-check
import { defineConfig } from 'astro/config';

import sanity from '@sanity/astro';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [sanity({
    projectId: 'rv7l5v16',
    dataset: 'production',
    // Set useCdn to false if you're building statically.
    useCdn: false,
  })
  , react()]
});