import React from 'react'
import { TeamPage } from './team-page.jsx'

const Template = (args) => <TeamPage {...args} />

export default {
  title: 'Pages/TeamPage',
  component: TeamPage,
  args: {
    ploeg: {},
  },
}

export const Default = Template.bind({})
