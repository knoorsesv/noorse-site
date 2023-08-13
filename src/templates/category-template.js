import React from 'react'
import Layout, { Container } from '../layouts/layout'
import { Link } from 'gatsby'
import { SubTitle, Title } from '../components/titles'
import { CategoryTeamNavigation } from '../components/team-navigation'
import { Section } from '../components/layout/section.jsx'
import { Helmet } from 'react-helmet'

import { marked } from 'marked'
const CategoryPage = ({ pageContext: { categoryNode } }) => {
  console.log(categoryNode)
  return (
    <Layout>
      <Helmet>
        <title>{categoryNode.naam}</title>
      </Helmet>
      <Container>
        <Title>{categoryNode.naam}</Title>
        <SubTitle>Info</SubTitle>
        {categoryNode?.general_info && (
          <section
            className={'prose mb-4'}
            dangerouslySetInnerHTML={{
              __html: marked(categoryNode?.general_info?.general_info),
            }}
          ></section>
        )}

        <CategoryTeamNavigation
          category={categoryNode}
          header={'Ploegen'}
          TeamLink={({ name, ...props }) => (
            <Link to={`/team/${name.toLowerCase()}`} {...props}>
              {name}
            </Link>
          )}
        />
        <Section className={'flex flex-col items-center'}>
          <SubTitle>Nieuws</SubTitle>
          {categoryNode.news && (
            <ul className={'list-inside list-disc'}>
              {categoryNode.news.map((news) => (
                <li key={news.title}>
                  <Link to={`/nieuws/${news.title}`} className={'underline'}>
                    {news.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </Section>
      </Container>
    </Layout>
  )
}

export default CategoryPage
