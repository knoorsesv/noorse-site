import {
  newsFactory,
  withOutBlurb,
  withOutImage,
  withOutPublishDate,
} from '../data/news-factory.js'
import { NewsPage } from './news-page.jsx'

const Template = (args) => <NewsPage {...args} />

export default {
  title: 'Pages/NewsPage',
  component: NewsPage,
  args: {
    newsItems: [
      newsFactory({ title: 'Some good news' }),
      withOutBlurb({ title: 'Some bad news' }),
      withOutImage({ title: 'Some no image news' }),
      withOutPublishDate(),
    ],
  },
}

export const Default = Template.bind({})
