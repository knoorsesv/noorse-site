import React from 'react'
import { CategoryPage } from './category-page.jsx'

const Template = (args) => <CategoryPage {...args} />

export default {
  title: 'Pages/CategoryPage',
  component: CategoryPage,
  args: {
    category: {
      naam: 'Senioren',
      ploeg: [{ naam: 'Ploeg 1' }, { naam: 'Andere Ploeg' }],
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
    news: [{ title: 'Een bericht' }, { title: 'nog Een bericht' }],
  },
}
