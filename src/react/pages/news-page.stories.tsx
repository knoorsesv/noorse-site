import {
  newsFactory,
  withOutBlurb,
  withOutImage,
  withOutPublishDate,
} from '../data/news-factory'
import { NewsPage } from './news-page'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Pages/NewsPage',
  component: NewsPage,
  args: {
    newsItems: [
      newsFactory({ title: 'Some good news' }),
      withOutBlurb({ title: 'Some bad news' }),
      withOutImage({ title: 'Some no image news' }),
      withOutPublishDate(),
    ],
  },
} satisfies Meta<typeof NewsPage>

type Story = StoryObj<typeof NewsPage>

export const Default: Story = {}
