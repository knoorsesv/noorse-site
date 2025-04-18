import { NewsItemPage } from './news-item-page.jsx'
import { newsFactory, withOutAttachments } from '../data/news-factory.js'

export default {
  title: 'Pages/NewsItemPage',
  component: NewsItemPage,
  args: {
    newsItem: withOutAttachments(),
  },
} satisfies Meta<typeof NewsItemPage>

import type { Meta, StoryObj } from '@storybook/react'
type Story = StoryObj<typeof NewsItemPage>

export const Default: Story = {}

export const WithShownImage: Story = {
  args: {
    newsItem: withOutAttachments({ showImageOnPage: true }),
  },
}
export const WithAttachmentImages: Story = { args: { newsItem: newsFactory() } }
