import React from 'react'
import { NewsCard } from './news-card.jsx'
import {
  newsFactory,
  withOutBlurb,
  withOutPublishDate,
} from './data/news-factory.js'

const Template = (args) => <NewsCard {...args} />

export default {
  title: 'Component/NewsCard',
  component: NewsCard,
  args: {
    newsNode: newsFactory(),
    NewsCardImage: () => (
      <img src="https://placekitten.com/200/300" alt="Sponsor logo" />
    ),
  },
}

export const Default = Template.bind({})
export const NoPublishDate = Template.bind({})
export const NoBlurb = Template.bind({})

NoPublishDate.args = { newsNode: withOutPublishDate() }
NoBlurb.args = { newsNode: withOutBlurb() }
