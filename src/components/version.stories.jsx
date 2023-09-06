import React from 'react'
import { Version } from './version.jsx'

const Template = (args) => <Version {...args} />

export default {
  title: 'Component/Version',
  component: Version,
  args: {
    version: '1.0.0',
  },
}

export const Default = Template.bind({})
