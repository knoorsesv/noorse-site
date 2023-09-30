import React from 'react'
import { allNewsItems } from './data/news-factory.js'
import { NewsList } from './news-list.jsx'

const Template = (args) => (
  <NewsList {...args}>Extra info of ne link ofzo</NewsList>
)

export default {
  title: 'Component/NewsList',
  component: NewsList,
  args: {
    shownNewsItems: allNewsItems,
  },
}

export const Default = Template.bind({})
