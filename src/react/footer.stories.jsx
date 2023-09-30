import React from 'react'
import { sponsorList } from './data/sponsor-factory.js'
import { Footer } from './footer.jsx'
import { Logo } from './logo.jsx'

const Template = (args) => <Footer {...args} />

export default {
  title: 'Component/Footer',
  component: Footer,
  args: {
    version: '1.0.0',
    sponsors: [],
    Logo: Logo,
  },
}

export const Default = Template.bind({})
export const WithSponsors = Template.bind({})

WithSponsors.args = {
  sponsors: sponsorList,
}
