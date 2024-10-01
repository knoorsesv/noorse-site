import { expect, within } from '@storybook/test'
import { eventList } from './data/event-factory.js'
import { EventList } from './event-list.jsx'

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
  await expect(canvas.getByText('07/05/23')).toBeInTheDocument()
  await expect(canvas.getByText('07/05/23 - 15/05/23')).toBeInTheDocument()
  await expect(canvas.getByText('Met een aankondiging')).toBeInTheDocument()
}

Empty.args = { events: [] }
Empty.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  await expect(canvas.getByText('Geen evenementen gepland')).toBeInTheDocument()
}
