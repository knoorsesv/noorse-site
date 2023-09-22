import React from 'react'
import { CalendarPage } from './calendar-page.jsx'

const Template = (args) => <CalendarPage {...args} />

export default {
  title: 'Pages/CalendarPage',
  component: CalendarPage,
  args: {
    games: [],
  },
}

export const Default = Template.bind({})
