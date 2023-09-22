import React from 'react'
import { Helmet } from 'react-helmet'
import { NewsList, Title } from '../../components'
import { Container } from '../../components/layout'

export const NewsPage = ({ Image, newsItems, fallBackLogo }) => {
  const NewsCardImage = ({ image }) => {
    return (
      <div className={'h-[200px] text-center'}>
        <Image
          image={image?.gatsbyImageData || fallBackLogo.gatsbyImageData}
          alt={'Card Header'}
        />
      </div>
    )
  }

  return (
    <>
      <Helmet>
        <title>Nieuws</title>
      </Helmet>
      <Container>
        <Title>Nieuws</Title>
        <NewsList NewsCardImage={NewsCardImage} shownNewsItems={newsItems} />
      </Container>
    </>
  )
}
