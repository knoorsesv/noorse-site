import React from 'react'
import { TeamPageWithoutVV } from './team-page-without-vv.jsx'
import { teamFactory } from '../data/team-factory.js'
import { categoryFactory } from '../data/category-factory.js'

const Template = (args) => <TeamPageWithoutVV {...args} />

export default {
  title: 'Pages/TeamPageWithoutVV',
  component: TeamPageWithoutVV,
  args: {
    ploeg: teamFactory({ categorie: categoryFactory() }),
  },
}

export const Default = Template.bind({})
