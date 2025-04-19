import { Page } from './page.jsx'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Pages/Page',
  component: Page,
} satisfies Meta<typeof Page>

type Story = StoryObj<typeof Page>

export const Default: Story = {}
