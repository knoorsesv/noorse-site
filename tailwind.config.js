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
          lighter: '#dbdbdb4d',
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
        half: '50vh',
        '3/4': '75vh',
        navbar: '75px',
        'navbar-over-cover': '150px',
        'navbar-cover': '70vh',
        'navbar-cover-mobile': '40vh',
        'navbar-logo': '50px',
        logo: '22vh',
      },
      inset: {
        logo: '8vh',
        dropdown: '3rem',
        'mobile-navbar': '8vh',
      },
      maxWidth: {
        '1/3': '33%',
        logo: '30%',
      },
    },
  },
  variants: {
    opacity: ['hover', 'focus', 'group-hover', 'responsive'],
    backgroundColor: ['hover', 'focus', 'group-hover', 'responsive'],
    visibility: ['hover', 'focus', 'group-hover', 'responsive'],
    position: ['hover', 'focus', 'group-hover', 'responsive'],
    display: ['hover', 'focus', 'group-hover', 'responsive'],
  },
  plugins: [],
}
