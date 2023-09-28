import React from 'react'
import { HomePage } from './home-page.jsx'

const Template = (args) => <HomePage {...args} />

export default {
  title: 'Pages/HomePage',
  component: HomePage,
  args: {
    Link: () => <a href="/test">TestLink</a>,
    version: '1.0.0',
    sponsors: [],
    newsItems: [],
    siteMap: { items: [] },
    events: [],
    links: [],
  },
}

export const Default = Template.bind({})
