import { TeamPage } from './team-page.jsx'
import {
  rankingFactory,
  serieFactory,
  teamFactory,
} from '../data/team-factory.js'
import { calendar } from '../data/games-factory.js'
import { categoryFactory } from '../data/category-factory.js'

const Template = (args) => <TeamPage {...args} />

export default {
  title: 'Pages/TeamPage',
  component: TeamPage,
  args: {
    ploeg: teamFactory({ categorie: categoryFactory() }),
    series: [serieFactory(), serieFactory({ name: 'Beker' })],
    rankings: [
      rankingFactory(),
      rankingFactory({ name: 'beker' }),
      rankingFactory({ name: 'bva' }),
    ],
    teamCalendar: calendar(),
  },
}

export const Default = Template.bind({})
