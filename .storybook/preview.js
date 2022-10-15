import '../src/styles/global.scss'
import '../src/styles/tailwind-import.css'

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
