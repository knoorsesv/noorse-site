import React from 'react'
import { NewsPage } from './news-page.jsx'
import {
  newsFactory,
  withOutBlurb,
  withOutImage,
  withOutPublishDate,
} from '../data/news-factory.js'
import { DummyImage } from '../data/dummy-image.jsx'

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
    fallBackLogo: {},
    Image: DummyImage,
  },
}

export const Default = Template.bind({})
