import type { Meta, StoryObj } from '@storybook/react'
import { categoryFactory } from '../data/category-factory'
import { newsFactory } from '../data/news-factory'
import { CategoryPage } from './category-page'
import { teamFactory } from '../data/team-factory.js'

const meta: Meta<typeof CategoryPage> = {
  title: 'Pages/CategoryPage',
  component: CategoryPage,
}

export default meta

type Story = StoryObj<typeof CategoryPage>

export const Primary: Story = {
  args: {
    category: categoryFactory(),
  },
}

export const WithInfo: Story = {
  args: {
    category: categoryFactory({
      name: 'Senioren',
      general_info: `# Some info
    *In markdown*
    `,
    }),
  },
}

export const WithNews: Story = {
  args: {
    category: categoryFactory({
      name: 'Met nieuws',
    }),
    newsItems: [
      newsFactory({ title: 'Een bericht' }),
      newsFactory({ title: 'nog Een bericht' }),
    ],
  },
}

export const WithMultipleBouws: Story = {
  args: {
    category: categoryFactory({}),
    teams: [
      teamFactory({ name: 'Ploeg 1', bouw: 'bouw boven' }),
      teamFactory({ name: 'Ploeg 2', bouw: 'bouw onder' }),
    ],
  },
}
