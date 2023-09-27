import React from 'react'
import { NewsList } from './news-list.jsx'
import {
  newsFactory,
  withOutBlurb,
  withOutImage,
  withOutPublishDate,
} from './data/news-factory.js'
import { imageFactory } from './data/image-factory.js'

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
    fallbackLogo: imageFactory({ src: 'https://placehold.co/600x400' }),
    // todo: add 1 for fallbackLogo
  },
}

export const Default = Template.bind({})
