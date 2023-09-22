import React from 'react'
import { NewsPage } from './news-page.jsx'

const Template = (args) => <NewsPage {...args} />

export default {
  title: 'Pages/NewsPage',
  component: NewsPage,
  args: {
    newsItems: [
      {
        category: {},
        image: {},
        title: 'Good news everyone',
        // todo: needs more test data
      },
    ],
    fallBackLogo: {},
    Image: () => <img src="https://placekitten.com/200/300" alt="Some cat" />,
  },
}

export const Default = Template.bind({})
