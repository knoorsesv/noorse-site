import React from 'react'
import { NewsItemPage } from './news-item-page.jsx'

const Template = (args) => <NewsItemPage {...args} />

export default {
  title: 'Pages/NewsItemPage',
  component: NewsItemPage,
  args: {
    newsItem: {
      title: 'Good news everyone',
      // todo: needs more test data
    },
    Image: () => <img src="https://placekitten.com/200/300" alt="Some cat" />,
  },
}

export const Default = Template.bind({})
