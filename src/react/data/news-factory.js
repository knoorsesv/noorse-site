import { imageFactory } from './image-factory'

export const newsFactory = (attrs) => ({
  title: 'Good News Everyone',
  image: imageFactory(),
  blurb: 'Some headline content in the form of a blurb',
  category: { naam: 'Senioren' },
  publishDate: new Date('2023-09-01').toDateString(),
  createdAt: new Date('2022-08-07').toDateString(),
  inhoud: { inhoud: 'Some very interesting content \n next line' },
  attachment: [
    {
      ...imageFactory(),
      title: 'some picture',
      file: { contentType: 'image/jpeg' },
    },
    {
      ...imageFactory(),
      title: 'some other picture',
      file: { contentType: 'image/jpeg' },
    },
    {
      ...imageFactory(),
      title: 'some more picture',
      file: { contentType: 'image/jpeg' },
    },
  ],
  ...attrs,
})

export const withOutPublishDate = (attrs) =>
  newsFactory({ publishDate: null, ...attrs })
export const withOutBlurb = (attrs) => newsFactory({ blurb: null, ...attrs })
export const withOutImage = (attrs) => newsFactory({ image: null, ...attrs })
export const withOutAttachments = (attrs) =>
  newsFactory({ attachment: null, ...attrs })

export const allNewsItems = [
  newsFactory({ title: 'Some good news' }),
  withOutBlurb({ title: 'Some bad news' }),
  withOutPublishDate(),
  withOutImage({ title: 'Without provided image' }),
]
