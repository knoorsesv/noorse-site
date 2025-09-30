import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  newsFactory,
  withOutBlurb,
  withOutImage,
  withOutPublishDate,
} from './data/news-factory'
import { NewsCard } from './news-card'

const meta: Meta<typeof NewsCard> = {
  title: 'Component/NewsCard',
  component: NewsCard,
  args: {
    newsItem: newsFactory(),
    // image: simpleImageFactory(),
  },
}

export default meta
type Story = StoryObj<typeof NewsCard>

export const Primary: Story = {}
export const NoPublishDate: Story = {
  args: { newsItem: withOutPublishDate() },
}
export const NoBlurb: Story = {
  args: { newsItem: withOutBlurb() },
}
export const NoImage: Story = {
  args: {
    newsItem: withOutImage({ title: 'Should have fallback logo', image: {} }),
    // image: undefined,
  },
}
