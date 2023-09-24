import React from 'react'
import { NewsItemPage } from './news-item-page.jsx'
import { DummyImage } from '../data/dummy-image.jsx'
import { newsFactory } from '../data/news-factory.js'

const Template = (args) => <NewsItemPage {...args} />

export default {
  title: 'Pages/NewsItemPage',
  component: NewsItemPage,
  args: {
    newsItem: newsFactory(),
    Image: DummyImage,
  },
}

export const Default = Template.bind({})
