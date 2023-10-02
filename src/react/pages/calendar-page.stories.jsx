import { calendar } from '../data/games-factory.js'
import { CalendarPage } from './calendar-page.jsx'

const Template = (args) => <CalendarPage {...args} />

export default {
  title: 'Pages/CalendarPage',
  component: CalendarPage,
  args: {
    games: calendar(),
  },
}

export const Default = Template.bind({})
