import { navigate } from 'gatsby-link'
import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import { Helmet } from 'react-helmet'
import { NewsList, Title } from '../../components'
import { Container } from '../../components/layout'
import Layout from '../../layouts/layout'
import { getConstrainedLogoData } from '../../queries/constrained-logo'
import { getNewsItems } from '../../queries/news'

const NewsCardImage = ({ image }) => {
  const fallBackLogo = getConstrainedLogoData()

  return (
    <div className={'h-[200px] text-center'}>
      <GatsbyImage
        image={image?.gatsbyImageData || fallBackLogo.gatsbyImageData}
        alt={'Card Header'}
      />
    </div>
  )
}

const Nieuws = () => {
  const goToNews = (newsNode) => {
    navigate(`/nieuws/${newsNode.title}`)
  }
  return (
    <Layout>
      <Helmet>
        <title>Nieuws</title>
      </Helmet>
      <Container>
        <Title>Nieuws</Title>
        <NewsList
          NewsCardImage={NewsCardImage}
          shownNewsItems={getNewsItems()}
          onClick={goToNews}
        />
      </Container>
    </Layout>
  )
}

export default Nieuws
