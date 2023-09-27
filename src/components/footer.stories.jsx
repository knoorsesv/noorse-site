import React from 'react'
import { Footer } from './footer.jsx'
import { Logo } from './logo.jsx'
import { imageFactory } from './data/image-factory'

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

const sponsorFactory = (attrs) => ({
  naam: 'Sponsor',
  websiteUrl: 'www.google.be',
  logo: imageFactory(),
  ...attrs,
})

export const Default = Template.bind({})
export const WithSponsors = Template.bind({})

WithSponsors.args = {
  sponsors: [
    sponsorFactory(),
    sponsorFactory({ naam: 'Sponsor 2' }),
    sponsorFactory({ naam: 'Sponsor 3' }),
  ],
}
