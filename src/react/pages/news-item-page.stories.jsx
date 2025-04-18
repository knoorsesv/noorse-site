import { NewsItemPage } from './news-item-page.jsx'
import { newsFactory, withOutAttachments } from '../data/news-factory'

const Template = (args) => <NewsItemPage {...args} />

export default {
  title: 'Pages/NewsItemPage',
  component: NewsItemPage,
  args: {
    newsItem: withOutAttachments(),
  },
}

export const Default = Template.bind({})
export const WithShownImage = Template.bind({})
export const WithAttachmentImages = Template.bind({})

WithShownImage.args = {
  newsItem: withOutAttachments({ showImageOnPage: true }),
}
WithAttachmentImages.args = { newsItem: newsFactory() }
