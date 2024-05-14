import contentful from 'contentful'

const environment =
  import.meta.env.CONTENTFUL_ENV ||
  (import.meta.env.PROD ? 'master' : 'staging')

const contentfulPreview = import.meta.env.CONTENTFUL_PREVIEW === 'true'
const accessToken = contentfulPreview
  ? import.meta.env.CONTENTFUL_TOKEN_PREVIEW
  : import.meta.env.CONTENTFUL_TOKEN

const space = import.meta.env.CONTENTFUL_SPACE_ID

export const contentfulClient = contentful.createClient({
  space,
  accessToken,
  environment,
  host: contentfulPreview ? 'preview.contentful.com' : 'cdn.contentful.com',
})
