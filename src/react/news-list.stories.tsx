import { allNewsItems } from './data/news-factory'
import { NewsList } from './news-list'

import type { Meta, StoryObj } from '@storybook/react-vite'

const meta: Meta<typeof NewsList> = {
  title: 'Component/NewsList',
  component: NewsList,
  render: ({ ...args }) => (
    <NewsList {...args}>Extra info of ne link ofzo </NewsList>
  ),
}

export default meta
type Story = StoryObj<typeof NewsList>

export const Primary: Story = {
  args: {
    shownNewsItems: allNewsItems,
  },
}
