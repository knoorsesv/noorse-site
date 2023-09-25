import React from 'react'
import { NewsList } from './news-list.jsx'
import {
  newsFactory,
  withOutBlurb,
  withOutPublishDate,
} from './data/news-factory.js'

const Template = (args) => (
  <NewsList {...args}>Extra info of ne link ofzo</NewsList>
)

export default {
  title: 'Component/NewsList',
  component: NewsList,
  args: {
    shownNewsItems: [
      newsFactory({ title: 'Some good news' }),
      withOutBlurb({ title: 'Some bad news' }),
      withOutPublishDate(),
    ],
    // todo: add 1 for fallbacklogo
  },
}

export const Default = Template.bind({})
