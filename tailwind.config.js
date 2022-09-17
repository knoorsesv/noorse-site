const colors = require('tailwindcss/colors')

module.exports = {
  corePlugins: {
    preflight: false,
  },
  important: true,
  content: ['./src/**/*.js'],
  theme: {
    screens: {
      medium: '640px',
      large: '1024px',
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    extend: {
      colors: {
        black: {
          DEFAULT: '#000000',
        },
        gray: {
          DEFAULT: '#ada8a869',
          dark: '#000000b3',
          darker: '#9E9E9E',
          'darker-readable': '#696969',
          lighter: '#dbdbdb4d',
          light: '#f5f5f5',
        },
        grey: colors.neutral,
        green: {
          DEFAULT: '#098800',
          light: '#51b93c',
          matte: '#4caf50b8',
          dark: '#005900',
        },
        yellow: {
          DEFAULT: '#fffd00',
          dark: '#c7ca00',
          light: '#ffff59',
        },
      },
      height: {
        '1p': '1px',
        '2p': '2px',
        '4p': '4px',
        '8p': '8px',
        '16p': '16px',
        '32p': '32px',
        '38p': '38px',
        '64p': '64px',
        '80p': '80px',
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
        '48v': '48vh',
        '64v': '64vh',
        '128v': '128vh',
      },
      minHeight: {
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
      },
      maxHeight: {
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
        '256p': '256px',
        '260p': '260px',
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
        150: '150%',
        80: '80%',
        70: '70%',
        20: '20%',
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
        '800p': '800px',
        '-100p': '-100px',
        '-800p': '-800px',
        '1v': '1vh',
        '2v': '2vh',
        '3w': '3vw',
        '4w': '4vw',
        '4v': '4vh',
        '8v': '8vh',
        '12v': '12vh',
        '12w': '12vw',
        '16vh': '16vh',
        '16w': '16vw',
        '32vh': '32vh',
        '64v': '64vh',
        '128v': '128vh',
      },
    },
  },
  plugins: [
    require('tailwindcss-elevation')(['responsive']),
    require('@tailwindcss/typography'),
  ],
}
