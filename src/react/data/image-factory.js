export const imageFactory = (attrs) => ({
  height: 100 + Math.round(Math.random() * 100),
  width: 100 + Math.round(Math.random() * 100),
  images: { fallback: { src: '' } },
  ...attrs,
})
