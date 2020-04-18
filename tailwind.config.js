module.exports = {
  theme: {
    extend: {
      transitionProperty: {
        visibility: 'visible, hidden'
      }
    },
  },
  variants: {
    opacity: ['hover', 'focus', 'group-hover', 'responsive'],
    visibility: ['hover', 'focus', 'group-hover', 'responsive'],
    display: ['hover', 'focus', 'group-hover', 'responsive'],
  },
  plugins: [],
}
