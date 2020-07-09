import React from 'react'
import Layout, { Section } from '../components/layout'
import { Link } from 'gatsby'
import { SubTitle, Title } from '../components/titles'

const ListLink = (link) => {
  return (<Link
      key={link.text}
      to={link.link}
      className={'underline truncate max-w-full'}
    >
      {link.text}
    </Link>
  )
}

export default ({ pageContext: { categoryNode } }) => {
  return (
    <Layout>
        <Title>{categoryNode.naam}</Title>
        <div className={'flex flex-col lg:grid grid-cols-2'}>
          <Section className={'col-span-1 flex flex-col sm:items-center'}>
            <SubTitle>Ploegen</SubTitle>
            {categoryNode.ploeg && categoryNode.ploeg
              .map(ploegNode => ({ text: ploegNode.naam, link: `/team/${ploegNode.naam.toLowerCase()}` }))
              .map(ListLink)}
          </Section>
          <Section className={'col-span-1 flex flex-col sm:items-center'}>
            <SubTitle>Nieuws</SubTitle>
            {categoryNode.news && categoryNode.news
              .map(newsNode => ({ text: newsNode.title, link: `/nieuws/${newsNode.title}` }))
              .map(ListLink)}
          </Section>
        </div>
    </Layout>
  )
}
