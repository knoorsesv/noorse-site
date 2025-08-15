import { defineConfig } from 'astro/config'

import react from '@astrojs/react'
import { astroImageTools } from 'astro-imagetools'

import tailwindcss from '@tailwindcss/vite'

// https://astro.build/config
export default defineConfig({
  integrations: [react(), astroImageTools],

  vite: {
    plugins: [tailwindcss()],
  },
})
