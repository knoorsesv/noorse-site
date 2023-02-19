import React from 'react'
import { EventList } from './event-list.jsx'
import { expect } from '@storybook/jest'
import { within } from '@storybook/testing-library'

const Template = (args) => <EventList {...args} />

export default {
  title: 'Component/EventList',
  component: EventList,
  args: {
    events: [
      {
        naam: '6 tegen 6',
        datum: '7 mei 2023',
      },
      {
        naam: 'Jeudg',
        datum: '10 mei',
        eindDatum: '15 mei',
        aankondiging: 'link naar event',
      },
    ],
    EventLink: ({ event }) => <span>{event.aankondiging}</span>,
  },
}

export const Default = Template.bind({})
export const Empty = Template.bind({})

Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  await expect(canvas.getByText('6 tegen 6')).toBeInTheDocument()
  await expect(canvas.getByText('7 mei 2023')).toBeInTheDocument()
  await expect(canvas.getByText('10 mei - 15 mei')).toBeInTheDocument()
  await expect(canvas.getByText('link naar event')).toBeInTheDocument()
}

Empty.args = { events: [] }
Empty.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  await expect(canvas.getByText('Geen evenementen gepland')).toBeInTheDocument()
}
