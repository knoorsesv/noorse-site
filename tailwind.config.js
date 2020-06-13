module.exports = {
  important: true,
  purge: {
    content: ['./src/**/*.js'],
  },
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
        '1p': '1px',
        '2p': '2px',
        '4p': '4px',
        '8p': '8px',
        '16p': '16px',
        '32p': '32px',
        '38p': '38px',
        '64p': '64px',
        '96p': '96px',
        '128p': '128px',
        '1v': '1vh',
        '2v': '2vh',
        '4v': '4vh',
        '8v': '8vh',
        '10v': '10vh',
        '12v': '12vh',
        '16v': '16vh',
        '32v': '32vh',
        '64v': '64vh',
        '128v': '128vh',
        '150': '150%',
        '80': '80%',
        '70': '70%',
        '20': '20%',
        'video-desktop': '300px',
        'video-tablet': '180px',
      },
      width: {
        '1/10': '10%',
        'video-desktop': '500px',
        'video-tablet': '280px',
      },
      inset: {
        '1p': '1px',
        '2p': '2px',
        '4p': '4px',
        '8p': '8px',
        '16p': '16px',
        '32p': '32px',
        '64p': '64px',
        '128p': '128px',
        '1v': '1vh',
        '2v': '2vh',
        '4v': '4vh',
        '8v': '8vh',
        '12v': '12vh',
        '16v': '16vh',
        '32v': '32vh',
        '64v': '64vh',
        '128v': '128vh',
      },
      maxWidth: {
        '1/3': '33%',
        logo: '30%',
      },
    },
    linearGradientColors: (theme) => theme('colors'),
  },
  variants: {
    backgroundOpacity: ['hover', 'focus', 'group-hover', 'responsive'],
    opacity: ['hover', 'focus', 'group-hover', 'responsive'],
    backgroundColor: ['hover', 'focus', 'group-hover', 'responsive'],
    visibility: ['hover', 'focus', 'group-hover', 'responsive'],
    position: ['hover', 'focus', 'group-hover', 'responsive'],
    width: ['hover', 'focus', 'group-hover', 'responsive'],
    display: ['hover', 'focus', 'group-hover', 'responsive'],
  },
  plugins: [
    require('tailwindcss-gradients'),
    require('tailwindcss-elevation')(['responsive']),
  ],
}
