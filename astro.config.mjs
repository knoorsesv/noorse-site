import { defineConfig } from 'astro/config'

import react from '@astrojs/react'
import { imagetools } from 'vite-imagetools'

import tailwindcss from '@tailwindcss/vite'

// https://astro.build/config
export default defineConfig({
  integrations: [react()],

  vite: {
    plugins: [tailwindcss(), imagetools()],
    resolve: {
      tsconfigPaths: false,
    },
  },
})
