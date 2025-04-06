import { TeamPage } from './team-page.jsx'
import { rankingFactory, serieFactory, teamFactory } from '../data/team-factory'
import { calendar } from '../data/games-factory'
import { categoryFactory } from '../data/category-factory'

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
