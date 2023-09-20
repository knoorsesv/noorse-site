import React from 'react'
import { Link } from 'gatsby'
import Layout from '../layouts/layout'
import { Seo } from '../components'
import { TextBlock } from '../components/text.jsx'
import { Title } from '../components/titles.jsx'

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <Title>Not found</Title>
    <TextBlock>
      De pagina die je zoekt bestaat niet.
      <p>
        <Link to={'/'}>Go Home</Link>
      </p>
    </TextBlock>
  </Layout>
)

export default NotFoundPage
