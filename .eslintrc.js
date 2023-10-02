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
    "plugin:astro/recommended",
  ],
  overrides: [
    {
      files: [
        './tests/**',
        './**.config.js',
        './**-config.js'
      ],
      env: { node: true },
    },
    {
      // Define the configuration for `.astro` file.
      files: ["*.astro"],
      // Allows Astro components to be parsed.
      parser: "astro-eslint-parser",
      // Parse the script in `.astro` as TypeScript by adding the following configuration.
      // It's the setting you need when using TypeScript.
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
      rules: {
        // override/add rules settings here, such as:
        // "astro/no-set-html-directive": "error"
        'react/react-in-jsx-scope': 'off'
      },
    },
  ],
  parserOptions: {
    parser: "@typescript-eslint/parser",
    // extraFileExtensions: [".astro"],
  },
  // parserOptions: {
  //   ecmaVersion: 'latest',
  //   ecmaFeatures: {
  //     jsx: true,
  //   },
  //   sourceType: 'module',
  // },
  plugins: ['react', 'jsx-a11y'],
  rules: {
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
        GatsbyImage: 'img',
        StaticImage: 'img',
      },
    },
  },
}
