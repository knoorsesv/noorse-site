export const newsFactory = (attrs) => ({
  title: 'Good News Everyone',
  image: { gatsbyImageData: { images: { fallback: { src: '' } } } },
  blurb: 'Some headline content in the form of a blurb',
  category: { naam: 'Senioren' },
  publishDate: new Date('2023-09-01').toDateString(),
  createdAt: new Date('2022-08-07').toDateString(),
  inhoud: { inhoud: 'Some very interesting content \n next line' },
  attachment: [{ file: { contentType: 'image/jpeg' } }],
  ...attrs,
})

export const withOutPublishDate = (attrs) =>
  newsFactory({ publishDate: null, ...attrs })
export const withOutBlurb = (attrs) => newsFactory({ blurb: null, ...attrs })
export const withOutImage = (attrs) => newsFactory({ image: null, ...attrs })
