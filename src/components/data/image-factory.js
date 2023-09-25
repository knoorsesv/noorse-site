export const imageFactory = (attrs) => ({
  gatsbyImageData: {
    height: 100 + Math.round(Math.random() * 100),
    width: 100 + Math.round(Math.random() * 100),
    images: { fallback: { src: '' } },
    ...attrs,
  },
})
