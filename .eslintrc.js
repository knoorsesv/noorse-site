module.exports = {
  env: {
    browser: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    // 'plugin:import/recommended', // todo: not sure if this should be reenabled, logged a lot of errors on astro files
    'plugin:jsx-a11y/recommended',
    'plugin:astro/recommended',
  ],
  overrides: [
    {
      files: ['./tests/**', './**.config.js', './**-config.js'],
      env: { node: true },
    },
    {
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
      },
      env: {
        'astro/astro': true,
      },
      rules: {},
    },
  ],
  parser: '@typescript-eslint/parser',

  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaVersion: 'latest',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react', 'jsx-a11y'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off', // will use typescript for this
    'no-console': 'error',
  },
  root: true,
  settings: {
    react: {
      version: 'detect', // React version. "detect" automatically picks the version you have installed.
    },
    'jsx-a11y': {
      components: {
        StaticImage: 'img',
      },
    },
  },
}
