import React from 'react'
import { Navbar } from './navbar.jsx'

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
    siteMap: { items: [{ name: 'Home', link: '/' }] },
    InfoPageLink: ({ item, className }) => (
      <a className={className} href={item.link}>
        {item.name}
      </a>
    ),
    Logo: ({ className }) => (
      <img
        alt="test logo"
        className={className}
        src="https://www.noorse.be/static/4bf10272fbe05968077c354cd02ce7ff/2b921/Logo_highres.webp"
      />
    ),
  },
}

export const NavBar = Template.bind({})
NavBar.args = {}

export const NavBarWithCover = Template.bind({})
NavBarWithCover.args = {
  pageHasCoverPhoto: true,
}
