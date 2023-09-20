import React from 'react'
import { NewsCard } from './news-card.jsx'

const Template = (args) => <NewsCard {...args} />

export default {
  title: 'Component/NewsCard',
  component: NewsCard,
  args: {
    newsNode: {
      blurb: 'Some headline content',
      category: { naam: 'Senioren' },
      title: 'Nieuws',
      publishDate: new Date().toDateString(),
    },
    NewsCardImage: () => (
      <img src="https://placekitten.com/200/300" alt="Sponsor logo" />
    ),
  },
}

export const Default = Template.bind({})
