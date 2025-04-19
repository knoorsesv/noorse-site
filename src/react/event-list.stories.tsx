import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { eventList } from './data/event-factory'
import { EventList } from './event-list'

const meta: Meta<typeof EventList> = {
  title: 'Component/EventList',
  component: EventList,
}

export default meta
type Story = StoryObj<typeof EventList>

export const Primary: Story = {
  args: {
    events: eventList,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText('6 tegen 6')).toBeInTheDocument()
    await expect(canvas.getByText('07/05/23')).toBeInTheDocument()
    await expect(canvas.getByText('07/05/23 - 15/05/23')).toBeInTheDocument()
    await expect(canvas.getByText('Met een aankondiging')).toBeInTheDocument()
  },
}
export const Empty: Story = {
  args: {
    events: [],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(
      canvas.getByText('Geen evenementen gepland')
    ).toBeInTheDocument()
  },
}
