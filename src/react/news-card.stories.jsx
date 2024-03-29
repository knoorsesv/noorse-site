import { imageFactory } from './data/image-factory.js'
import {
  newsFactory,
  withOutBlurb,
  withOutImage,
  withOutPublishDate,
} from './data/news-factory.js'
import { NewsCard } from './news-card.jsx'

const Template = (args) => <NewsCard {...args} />

export default {
  title: 'Component/NewsCard',
  component: NewsCard,
  args: {
    newsItem: newsFactory(),
    image: imageFactory(),
  },
}

export const Default = Template.bind({})
export const NoPublishDate = Template.bind({})
export const NoBlurb = Template.bind({})
export const NoImage = Template.bind({})

NoPublishDate.args = { newsItem: withOutPublishDate() }
NoBlurb.args = { newsItem: withOutBlurb() }
NoImage.args = {
  newsItem: withOutImage({ title: 'Should have fallback logo' }),
  image: null,
}
