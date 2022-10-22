import React from 'react'
import Layout, { Container } from '../../layouts/layout'
import { Title } from '../../components/titles'
import { Helmet } from 'react-helmet'
import { NewsList } from '../../components/newsList'

const Nieuws = () => {
  return (
    <Layout>
      <Helmet>
        <title>Nieuws</title>
      </Helmet>
      <Container>
        <Title>Nieuws</Title>
        <NewsList />
      </Container>
    </Layout>
  )
}

export default Nieuws
