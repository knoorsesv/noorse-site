import React from 'react'
import {
  newsFactory,
  withOutBlurb,
  withOutImage,
  withOutPublishDate,
} from './data/news-factory.js'
import { NewsList } from './news-list.jsx'

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
      withOutImage({ title: 'Without provided image' }),
    ],
  },
}

export const Default = Template.bind({})
