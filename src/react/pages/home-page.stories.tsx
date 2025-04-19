import { allNewsItems } from '../data/news-factory.js'
import { sponsorList } from '../data/sponsor-factory.js'
import { HomePage } from './home-page.jsx'
import { eventList } from '../data/event-factory.js'
import { siteMapFactory } from '../data/sitemap-factory.js'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Pages/HomePage',
  component: HomePage,
  args: {
    version: '1.0.0',
    sponsors: sponsorList,
    newsItems: allNewsItems,
    siteMap: siteMapFactory(),
    events: eventList,
    links: { newsletterLink: '/test-newsletter', webshopLink: '/test-webshop' },
  },
} satisfies Meta<typeof HomePage>

type Story = StoryObj<typeof HomePage>

export const Default: Story = {}
