import { Navbar } from './navbar.tsx'
import { siteMapFactory } from './data/sitemap-factory.js'
import { within, userEvent, expect } from '@storybook/test'

const Template = (args) => (
  <div className="h-[150vh]">
    <Navbar {...args} />
  </div>
)

export default {
  title: 'Component/Navbar',
  component: Navbar,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    pageHasCoverPhoto: false,
    siteMap: siteMapFactory(),
  },
}

export const NavBar = Template.bind({})
NavBar.args = {}
export const OpenedMenu = Template.bind({})
// OpenedMenu.parameters = {
//   autoplay: true
// }
OpenedMenu.parameters = {
  viewport: {
    defaultViewport: 'medium',
  },
}
OpenedMenu.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  await userEvent.click(canvas.getByLabelText('Open menu'))

  await expect(canvas.getByText('Home')).toBeInTheDocument()
}

export const NavBarWithCover = Template.bind({})
NavBarWithCover.args = {
  pageHasCoverPhoto: true,
}

//  todo: make a test which scrolls so that behaviour is also tested
// export const ScrollDown = Template.bind({})
// ScrollDown.args = {
//   pageHasCoverPhoto: true,
// }
