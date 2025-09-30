import { siteMapFactory } from '../data/sitemap-factory.ts'
import { Layout } from './layout'

export default {
  title: 'Pages/Layout',
  component: Layout,
  args: {
    children: 'Hello world',
    version: '2.0',
    sponsors: [],
    sitemap: siteMapFactory(),
    currentURL: '/',
  },
} satisfies Meta<typeof Layout>

import type { Meta, StoryObj } from '@storybook/react-vite'

type Story = StoryObj<typeof Layout>

export const Default: Story = {}
