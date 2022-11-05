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
    CoverImage: ({ children, className, ...props }) => (
      <img
        // todo: the object-cover should be passed down, not redefined here? Or in actual GatsbyImage CoverImage functio
        alt="test cover"
        className={`object-cover ${className}`}
        {...props}
        src="https://images.ctfassets.net/5t2yp7qsooos/42LqCeeQUGOgPkOtzLFBN0/16d40f93bebf49d2c7c7393605e1f904/noorse_aerial.png?w=1920&h=1080&q=50&fm=webp"
      >
        {children}
      </img>
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
