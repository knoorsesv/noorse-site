import '../src/styles/global.css'
import '../src/styles/tailwind.css'
// todo: maybe the storybook shouldn't rely on this? there are "reset" classes on ul tags for example without which the components dont look good isolated
import '../src/styles/typography.css'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'centered',
  backgrounds: {
    default: 'none',
    values: [
      {
        name: 'light',
        value: '#f1f5f9',
      },
      {
        name: 'white',
        value: '#ffffff',
      },
      {
        name: 'dark',
        value: '##27272a',
      },
    ],
  },
  viewport: {
    viewports: {
      small: {
        name: 'Small',
        styles: {
          width: '512px',
          height: '963px',
        },
      },
      medium: {
        name: 'Medium',
        styles: {
          width: '680px',
          height: '963px',
        },
      },
      large: {
        name: 'Large',
        styles: {
          width: '1024px',
          height: '963px',
        },
      },
      extralarge: {
        name: 'Extra Large',
        styles: {
          width: '1400px',
          height: '1200px',
        },
      },
    },
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
export const tags = ['autodocs']
