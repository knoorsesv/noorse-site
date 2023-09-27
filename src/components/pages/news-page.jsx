import React from 'react'
import { Helmet } from 'react-helmet'
import { NewsList, Title } from '../../components'
import { Container } from '../../components/layout'

export const NewsPage = ({ newsItems, fallbackLogo }) => {
  return (
    <>
      <Helmet>
        <title>Nieuws</title>
      </Helmet>
      <Container>
        <Title>Nieuws</Title>
        <NewsList fallbackLogo={fallbackLogo} shownNewsItems={newsItems} />
      </Container>
    </>
  )
}
