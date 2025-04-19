import type { NewsItem } from '../types/news'
import type { Factory } from './factory'
import { imageFactory, simpleImageFactory } from './image-factory'

export const newsFactory: Factory<NewsItem> = (attrs) => ({
  title: 'Good News Everyone',
  image: simpleImageFactory(),
  blurb: 'Some headline content in the form of a blurb',
  categoryName: 'Senioren',
  publishDate: new Date('2023-09-01').toDateString(),
  createdAt: new Date('2022-08-07').toDateString(),
  inhoud: 'Some very interesting content \n next line',
  attachment: [
    {
      ...imageFactory(),
      title: 'some picture',
      file: {
        contentType: 'image/jpeg',
        fileName: 'some picture',
        url: 'https://picsum.photos/520/320',
      },
    },
    {
      ...imageFactory(),
      title: 'some other picture',
      file: {
        contentType: 'image/jpeg',
        fileName: 'some picture',
        url: 'https://picsum.photos/520/320',
      },
    },
    {
      ...imageFactory(),
      title: 'some more picture',
      file: {
        contentType: 'image/jpeg',
        fileName: 'some picture',
        url: 'https://picsum.photos/520/320',
      },
    },
  ],
  ...attrs,
})

export const withOutPublishDate: Factory<NewsItem> = (attrs) =>
  newsFactory({ publishDate: undefined, ...attrs })
export const withOutBlurb: Factory<NewsItem> = (attrs) =>
  newsFactory({ blurb: undefined, ...attrs })
export const withOutImage: Factory<NewsItem> = (attrs) =>
  newsFactory({ image: undefined, ...attrs })
export const withOutAttachments: Factory<NewsItem> = (attrs) =>
  newsFactory({ attachment: undefined, ...attrs })

export const allNewsItems = [
  newsFactory({ title: 'Some good news' }),
  withOutBlurb({ title: 'Some bad news' }),
  withOutPublishDate(),
  withOutImage({ title: 'Without provided image' }),
]
