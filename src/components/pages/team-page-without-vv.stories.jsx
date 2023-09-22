import React from 'react'
import { TeamPageWithoutVV } from './team-page-without-vv.jsx'

const Template = (args) => <TeamPageWithoutVV {...args} />

export default {
  title: 'Pages/TeamPageWithoutVV',
  component: TeamPageWithoutVV,
  args: {
    ploeg: {},
  },
}

export const Default = Template.bind({})
