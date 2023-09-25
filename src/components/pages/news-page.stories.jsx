import React from 'react'
import { NewsPage } from './news-page.jsx'
import {
  newsFactory,
  withOutBlurb,
  withOutImage,
  withOutPublishDate,
} from '../data/news-factory.js'
import { DummyImage } from '../data/dummy-image.jsx'
import { imageFactory } from '../data/image-factory.js'

const Template = (args) => <NewsPage {...args} />

export default {
  title: 'Pages/NewsPage',
  component: NewsPage,
  args: {
    newsItems: [
      newsFactory({ title: 'Some good news' }),
      withOutBlurb({ title: 'Some bad news' }),
      withOutImage({ title: 'Some no image news' }),
      withOutPublishDate(),
    ],
    fallBackLogo: imageFactory(), // todo: distinguish this from the dummy kittens so its obviously the fallback
    Image: DummyImage,
  },
}

export const Default = Template.bind({})
