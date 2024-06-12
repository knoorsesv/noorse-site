import config from 'eslint-config-gvdp'
// import globals from 'globals'

import react from 'eslint-plugin-react'
import reactRecommended from 'eslint-plugin-react/configs/recommended.js'
// console.log('globals', globals);

export default [
  {
    ignores: ['.netlify/**', 'dist/**', 'storybook-static/**'],
  },
  ...config,
  {
    files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'],
    ...reactRecommended,
    settings: {
      react: {
        version: 'detect', // React version. "detect" automatically picks the version you have installed.
      },
    },
    languageOptions: {
      ...reactRecommended.languageOptions,
      // globals: {
      // ...globals.serviceworker,
      // ...globals.browser,
      // },
    },
  },
]
