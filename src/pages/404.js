import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { TextBlock } from '../components/text'
import { Title } from '../components/titles'

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
