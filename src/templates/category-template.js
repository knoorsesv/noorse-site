import { Link } from 'gatsby'
import React from 'react'
import { Helmet } from 'react-helmet'
import { Section } from '../components/layout/section.jsx'
import { MarkDown } from '../components/markdown.jsx'
import { CategoryTeamNavigation } from '../components/team-navigation'
import { SubTitle, Title } from '../components/titles.jsx'
import Layout, { Container } from '../layouts/layout'

const CategoryPage = ({ pageContext: { categoryNode } }) => {
  return (
    <Layout>
      <Helmet>
        <title>{categoryNode.naam}</title>
      </Helmet>
      <Container>
        <Title>{categoryNode.naam}</Title>
        {categoryNode?.general_info && (
          <>
            <SubTitle>Info</SubTitle>
            <MarkDown>{categoryNode?.general_info?.general_info}</MarkDown>
          </>
        )}

        <CategoryTeamNavigation
          category={categoryNode}
          header={'Ploegen'}
          TeamLink={({ name, ...props }) => (
            <Link
              to={`/team/${categoryNode.naam.toLowerCase()}/${name.toLowerCase()}`}
              {...props}
            >
              {name}
            </Link>
          )}
        />
        {categoryNode?.news?.length ? (
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
        ) : (
          <></>
        )}
      </Container>
    </Layout>
  )
}

export default CategoryPage
