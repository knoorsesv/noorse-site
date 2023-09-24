import React from 'react'
import { CategoryPage } from './category-page.jsx'
import { teamFactory } from '../data/team-factory.js'
import { newsFactory } from '../data/news-factory.js'

const Template = (args) => <CategoryPage {...args} />

export default {
  title: 'Pages/CategoryPage',
  component: CategoryPage,
  args: {
    category: {
      naam: 'Senioren',
      ploeg: [
        teamFactory({ naam: 'Ploeg 1' }),
        teamFactory({ naam: 'Andere ploeg' }),
      ],
    },
    Link: ({ to, children }) => <a href={to}>{children}</a>,
  },
}

export const Default = Template.bind({})
export const WithInfo = Template.bind({})
export const WithNews = Template.bind({})

WithInfo.args = {
  category: {
    naam: 'Senioren',
    general_info: {
      general_info: `# Some info
  *In markdown*
  `,
    },
  },
}

WithNews.args = {
  category: {
    naam: 'Met nieuws',
    news: [
      newsFactory({ title: 'Een bericht' }),
      newsFactory({ title: 'nog Een bericht' }),
    ],
  },
}
