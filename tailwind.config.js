module.exports = {
  theme: {
    extend: {
      colors: {
        green: {
          default: '#098800',
          light: '#51b93c',
          dark: '#005900',
        },
        yellow: {
          default: '#fffd00',
          dark: '#c7ca00',
          light: '#ffff59',
        },
      },
    },
  },
  variants: {
    opacity: ['hover', 'focus', 'group-hover', 'responsive'],
    backgroundColor: ['hover', 'focus', 'group-hover', 'responsive'],
    visibility: ['hover', 'focus', 'group-hover', 'responsive'],
    display: ['hover', 'focus', 'group-hover', 'responsive'],
  },
  plugins: [],
}
