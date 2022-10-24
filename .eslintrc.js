module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:import/recommended',
  ],
  overrides: [
    {
      files: [
        './tests/**',
        './**.config.js',
        './**-config.js',
        './gatsby-node.js',
        './fake-vv.js',
      ],
      env: { node: true },
    },
    {
      files: ['./src/components/**'],
      rules: {
        'no-restricted-imports': [
          'warn',
          {
            patterns: ['gatsby*'],
          },
        ],
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/prop-types': 'off', // will use typescript for this
  },
  root: true,
  settings: {
    react: {
      version: 'detect', // React version. "detect" automatically picks the version you have installed.
    },
  },
}