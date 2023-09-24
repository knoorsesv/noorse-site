import React from 'react'
import { categoryFactory } from '../data/category-factory.js'
import { newsFactory } from '../data/news-factory.js'
import { CategoryPage } from './category-page.jsx'

const Template = (args) => <CategoryPage {...args} />

export default {
  title: 'Pages/CategoryPage',
  component: CategoryPage,
  args: {
    category: categoryFactory(),
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
