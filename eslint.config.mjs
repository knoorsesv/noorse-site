import js from '@eslint/js'
import eslintPluginAstro from 'eslint-plugin-astro'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import reactPlugin from 'eslint-plugin-react'
import globals from 'globals'
import tseslint from 'typescript-eslint'

// todo: add tailwind css plugin import tailwind from 'eslint-plugin-tailwindcss'

export default [
  {
    ignores: [
      '.netlify/**',
      'dist/**',
      'storybook-static/**',
      '*[.-]config.{js,mjs}',
      '.eslintrc.js',
      '.prettierrc.js',
      '.storybook/main.js',
      'loadershim.js', // todo: is this file even needed?
      'src/env.d.ts',
    ],
  },
  js.configs.recommended,
  jsxA11y.flatConfigs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  ...eslintPluginAstro.configs.recommended,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    files: ['**/tests/**/*.js', 'fetch-vv.mjs'],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
  {
    rules: {
      'no-console': ['error', { allow: ['warn', 'error'] }],
    },
  },
  {
    files: ['**/*.spec.js', '**/*.config.js'],
    rules: {
      '@typescript-eslint/no-require-imports': 'off',
    },
  },
  {
    files: ['**/*.{js,jsx,astro,mjs}'],
    ...tseslint.configs.disableTypeChecked,
  },
  {
    files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],
    ...reactPlugin.configs.flat.recommended,
    languageOptions: {
      ...reactPlugin.configs.flat.recommended.languageOptions,
      globals: {
        ...globals.serviceworker,
        ...globals.browser,
      },
    },
    rules: {
      ...reactPlugin.configs.flat.recommended.rules,
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off', // will use typescript for this
      // todo: see what this does and if it is needed
      'react/display-name': 'off',
    },
  },
]
