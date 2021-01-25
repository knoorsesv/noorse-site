import React from 'react'
import Layout, { Container } from '../components/layout'
import { graphql, useStaticQuery } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { Card, SubHeader } from '../components/cards'
import { Title } from '../components/titles'

const query = graphql`
  query {
    allContentfulBestuurslid(sort: { fields: naam }) {
      edges {
        node {
          naam
          email
          phone
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
  console.log(bestuursLid)
  return (
    <Card
      header={bestuursLid.node.naam}
      key={bestuursLid.node.naam}
      className={'h-48 sm:w-2/5 lg:w-1/4 lg:mx-2 my-2'}
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
            {bestuursLid.node.email}
          </div>
        )}
        {bestuursLid.node.phone && (
          <div className={'font-extralight'}>
            <FontAwesomeIcon
              icon={faPhoneAlt}
              className={'mr-1'}
            ></FontAwesomeIcon>

            {bestuursLid.node.phone}
          </div>
        )}
      </div>
    </Card>
  )
}

export default () => {
  const data = useStaticQuery(query)

  return (
    <Layout>
      <Container>
        <Title>Bestuur</Title>
        <div
          className={`flex flex-col sm:flex-row sm:flex-wrap sm:justify-between lg:justify-center `}
        >
          {data.allContentfulBestuurslid.edges.map((bestuursLid) => {
            return <BestuursCard bestuursLid={bestuursLid} />
          })}
        </div>
      </Container>
    </Layout>
  )
}
