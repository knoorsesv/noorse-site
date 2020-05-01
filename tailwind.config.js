module.exports = {
  important: true,
  theme: {
    extend: {
      colors: {
        black: {
          default: '#000000',
        },
        gray: {
          default: '#ada8a869',
          dark: '#000000b3',
          darker: '#0000006b',
          lighter: '#dbdbdb4d'
        },
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
      height: {
        'half': '50vh',
        '3/4': '75vh',
        '75': '75px',
        '160': '160px',
      },
      inset: {
        '80': '80px',
      },
    },
    maxWidth: {
      '1/3': '33%',
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
