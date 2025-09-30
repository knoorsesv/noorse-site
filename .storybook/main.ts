import type { StorybookConfig } from '@storybook/react-vite'

const confg: StorybookConfig = {
  stories: ['../src/react/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
  ],
  framework: '@storybook/react-vite',
  staticDirs: ['../public/images'],
  docs: {},
  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
}

export default confg
