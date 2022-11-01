module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:import/recommended',
    'plugin:jsx-a11y/recommended',
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
          'error',
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
  plugins: ['react', 'jsx-a11y'],
  rules: {
    'react/prop-types': 'off', // will use typescript for this
  },
  root: true,
  settings: {
    react: {
      version: 'detect', // React version. "detect" automatically picks the version you have installed.
    },
    'jsx-a11y': {
      components: {
        GatsbyImage: 'img',
        StaticImage: 'img',
      },
    },
  },
}
