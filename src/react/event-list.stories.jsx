import React from 'react'
import { EventList } from './event-list.jsx'
import { expect } from '@storybook/jest'
import { within } from '@storybook/testing-library'
import { eventList } from './data/event-factory.js'

const Template = (args) => <EventList {...args} />

export default {
  title: 'Component/EventList',
  component: EventList,
  args: {
    events: eventList,
  },
}

export const Default = Template.bind({})
export const Empty = Template.bind({})

Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  await expect(canvas.getByText('6 tegen 6')).toBeInTheDocument()
  await expect(canvas.getByText('7 mei 2023')).toBeInTheDocument()
  await expect(canvas.getByText('8 mei 2023 - 15 mei')).toBeInTheDocument()
  await expect(canvas.getByText('Met een aankondiging')).toBeInTheDocument()
}

Empty.args = { events: [] }
Empty.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  await expect(canvas.getByText('Geen evenementen gepland')).toBeInTheDocument()
}
