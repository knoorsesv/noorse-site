import React from 'react'
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
  sponsors: [
    {
      naam: 'Sponsor 1',
      websiteUrl: 'www.google.be',
      Image: () => (
        <img src="https://placekitten.com/200/300" alt="Sponsor logo" />
      ),
    },
    {
      naam: 'Sponsor 2',
      websiteUrl: 'www.google.be',
      Image: () => (
        <img src="https://placekitten.com/200/200" alt="Sponsor logo" />
      ),
    },
    {
      naam: 'Sponsor 3',
      websiteUrl: 'www.google.be',
      Image: () => (
        <img
          src="https://dummyimage.com/200x100/87c425/1100ff"
          alt="Sponsor logo"
        />
      ),
    },
  ],
}
