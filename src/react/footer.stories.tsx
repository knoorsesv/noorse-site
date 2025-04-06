import type { Meta, StoryObj } from '@storybook/react'
import { sponsorList } from './data/sponsor-factory'
import { Footer } from './footer'

const meta: Meta<typeof Footer> = {
  title: 'Component/Footer',
  component: Footer,
}

export default meta

type Story = StoryObj<typeof Footer>

export const Primary: Story = {
  args: {
    version: '1.0.0',
    sponsors: [],
  },
}

export const WithSponsors: Story = {
  args: {
    version: '1.0.0',
    sponsors: sponsorList,
  },
}
