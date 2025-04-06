import { calendar } from '../data/games-factory.js'
import { CalendarPage } from './calendar-page.jsx'
//
// const Template = (args) => <CalendarPage {...args} />

// export default {
//   title: 'Pages/CalendarPage',
//   component: CalendarPage,
//   args: {
//     games: calendar(),
//   },
// }

// export const Default = Template.bind({})

// import { CalendarPage } from './game-table.tsx'
// import { gamesFactory } from './data/games-factory.js'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof CalendarPage> = {
  title: 'Pages/CalendarPage',
  component: CalendarPage,
}

export default meta

type Story = StoryObj<typeof CalendarPage>

export const Primary: Story = {
  args: {
    games: calendar(),
  },
}
