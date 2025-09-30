import { Navbar } from './navbar.tsx'
import { siteMapFactory } from './data/sitemap-factory.js'
import { within, userEvent, expect } from 'storybook/test'

export default {
  title: 'Component/Navbar',
  component: Navbar,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    siteMap: siteMapFactory(),
  },
  render: (args) => (
    <div className="h-[150vh]">
      <Navbar {...args} />
    </div>
  ),
} satisfies Meta<typeof Navbar>

import type { Meta, StoryObj } from '@storybook/react-vite'
type Story = StoryObj<typeof Navbar>

export const Default: Story = {}

export const OpenedMenu: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'medium',
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await userEvent.click(canvas.getByLabelText('Open menu'))

    await expect(canvas.getByText('Home')).toBeInTheDocument()
  },
}

//  todo: make a test which scrolls so that behaviour is also tested
// export const ScrollDown: Story = {
// ScrollDown.args = {
//   pageHasCoverPhoto: true,
// }
