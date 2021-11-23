import React from 'react'
import Layout, { Container } from '../../components/layout'
import { graphql, useStaticQuery } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAt } from '@fortawesome/free-solid-svg-icons'
import { Card, SubHeader } from '../../components/cards'
import { Title } from '../../components/titles'
import { EmailLink } from '../../components/text'
import { Helmet } from 'react-helmet'
import ctl from '@netlify/classnames-template-literals'

const query = graphql`
  query {
    allContentfulBestuurslid(sort: { fields: naam }) {
      edges {
        node {
          naam
          email
          title
          sponsorVerantwoordelijke
          category {
            naam
          }
        }
      }
    }
  }
`

const BestuursCard = ({ bestuursLid }) => {
  return (
    <Card
      header={bestuursLid.node.naam}
      headerHeight={'small'}
      className={'h-48 medium:w-2/5 medium:mx-2 my-2'}
    >
      <div className={'text-xs'}>
        <SubHeader>
          {bestuursLid.node.category && (
            <span>{bestuursLid.node.category.naam}</span>
          )}
        </SubHeader>

        <div className={'mb-1'}>{bestuursLid.node.title}</div>
        {bestuursLid.node.sponsorVerantwoordelijke && (
          <div className={'mb-1'}>Sponsor Verantwoordelijke</div>
        )}
        {bestuursLid.node.email && (
          <div className={'font-extralight truncate'}>
            <FontAwesomeIcon icon={faAt} className={'mr-1'}></FontAwesomeIcon>
            <EmailLink address={bestuursLid.node.email} />
          </div>
        )}
      </div>
    </Card>
  )
}

const Bestuur = () => {
  const data = useStaticQuery(query)

  const bestuursListClasses = ctl(`flex flex-col medium:flex-row
            medium:flex-wrap medium:justify-between large:justify-center`)
  return (
    <Layout>
      <Helmet>
        <title>Bestuur</title>
      </Helmet>
      <Container>
        <Title>Bestuur</Title>
        <div className={bestuursListClasses}>
          {data.allContentfulBestuurslid.edges.map((bestuursLid) => {
            return (
              <BestuursCard
                bestuursLid={bestuursLid}
                key={bestuursLid.node.naam}
              />
            )
          })}
        </div>
      </Container>
    </Layout>
  )
}

export default Bestuur
