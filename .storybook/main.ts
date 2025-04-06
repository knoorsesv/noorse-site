import type { StorybookConfig } from '@storybook/react-vite'

const confg: StorybookConfig = {
  stories: ['../src/react/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
  ],
  framework: '@storybook/react-vite',
  staticDirs: ['../public/images'],
  docs: {},
  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
}

export default confg
