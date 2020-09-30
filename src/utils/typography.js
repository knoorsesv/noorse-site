import Typography from 'typography'

const typography = new Typography({
  title: 'Neurse',
  scaleRatio: 1.8,
  baseFontSize: '14px',
  googleFonts: [
    {
      name: 'Lato&display=swap',
      styles: ['400', '500', '700'],
    },
    {
      name: 'Montserrat&display=swap',
      styles: ['400', '500', '700'],
    },
    {
      name: 'Rubik&display=swap',
      styles: ['400', '500', '700'],
    },
  ],
  headerFontFamily: ['Lato', 'Rubik', 'Helvetica Neue', 'Arial', 'sans-serif'],
  headerWeight: '700',
  bodyFontFamily: ['Montserrat', 'Arial', 'sans-serif'],
})

export default typography
