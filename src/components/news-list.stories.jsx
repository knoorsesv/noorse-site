import React from 'react'
import { NewsList } from './news-list.jsx'
import {
  newsFactory,
  withOutBlurb,
  withOutImage,
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
    NewsCardImage: () => (
      <img src="https://placekitten.com/200/100" alt="Sponsor logo" />
    ),
  },
}

export const Default = Template.bind({})
