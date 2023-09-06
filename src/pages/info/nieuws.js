import React from 'react'
import Layout, { Container } from '../../layouts/layout'
import { Title } from '../../components/titles.jsx'
import { Helmet } from 'react-helmet'
import { NewsList } from '../../components/newsList'
import { GatsbyImage } from 'gatsby-plugin-image'
import { getNewsItems } from '../../queries/news'
import { getConstrainedLogoData } from '../../queries/constrained-logo'
import { navigate } from 'gatsby-link'

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
