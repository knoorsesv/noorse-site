import React from 'react'
import { NewsList } from './news-list.jsx'

const Template = (args) => (
  <NewsList {...args}>Extra info of ne link ofzo</NewsList>
)

export default {
  title: 'Component/NewsList',
  component: NewsList,
  args: {
    shownNewsItems: [
      {
        blurb: 'Some headline content',
        category: { naam: 'Senioren' },
        title: 'Nieuws',
        publishDate: new Date().toDateString(),
      },
      {
        blurb: 'Some headline content',
        category: { naam: 'Senioren' },
        title: 'Nieuws',
        publishDate: new Date().toDateString(),
      },
      {
        blurb: 'Some headline content',
        category: { naam: 'Senioren' },
        title: 'Nieuws',
        publishDate: new Date().toDateString(),
      },
    ],
    NewsCardImage: () => (
      <img src="https://placekitten.com/100/100" alt="Sponsor logo" />
    ),
  },
}

export const Default = Template.bind({})
