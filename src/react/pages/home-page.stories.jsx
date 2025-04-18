import { allNewsItems } from '../data/news-factory'
import { sponsorList } from '../data/sponsor-factory.js'
import { HomePage } from './home-page.jsx'
import { eventList } from '../data/event-factory'
import { siteMapFactory } from '../data/sitemap-factory.js'

const Template = (args) => <HomePage {...args} />

export default {
  title: 'Pages/HomePage',
  component: HomePage,
  args: {
    version: '1.0.0',
    sponsors: sponsorList,
    newsItems: allNewsItems,
    siteMap: siteMapFactory(),
    events: eventList,
    links: { newsletterLink: '/test-newsletter', webshopLink: '/test-webshop' },
  },
}

export const Default = Template.bind({})
