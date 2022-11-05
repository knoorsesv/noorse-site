import '../src/styles/global.css'
import '../src/styles/tailwind-import.css'
import typography from '../src/utils/typography'
// todo: maybe the storybook shouldn't rely on this? there are "reset" classes on ul tags for example without which the components dont look good isolated
typography.injectStyles()

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds: { default: 'light' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
