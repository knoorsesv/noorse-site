import { calendar } from '../data/games-factory'
import { CalendarPage } from './calendar-page.jsx'

import type { Meta, StoryObj } from '@storybook/react-vite'

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
