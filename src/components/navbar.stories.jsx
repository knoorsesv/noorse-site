import React from 'react'
import { Navbar } from './navbar.jsx'
import { siteMapFactory } from './data/sitemap-factory.js'

const Template = (args) => (
  <div className="m-2 h-[200vh] border border-solid border-red-100">
    <Navbar {...args} />
  </div>
)

export default {
  title: 'Component/Navbar',
  component: Navbar,
  args: {
    pageHasCoverPhoto: false,
    siteMap: siteMapFactory(),
  },
}

export const NavBar = Template.bind({})
NavBar.args = {}

export const NavBarWithCover = Template.bind({})
NavBarWithCover.args = {
  pageHasCoverPhoto: true,
}
