import React from 'react'
import { CategoryTeamNavigation } from './team-navigation.jsx'

const Template = (args) => <CategoryTeamNavigation {...args} />

export default {
  title: 'Component/CategoryTeamNavigation',
  component: CategoryTeamNavigation,
  args: {
    category: {
      naam: 'Category',
      ploeg: [{ naam: 'Ploeg 1' }, { naam: 'Ploeg 2' }, { naam: 'Ploeg' }],
    },
    header: 'Header',
    TeamLink: ({ name }) => {
      return <span>link naar team: {name}</span>
    },
  },
}

export const Default = Template.bind({})
