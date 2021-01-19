import React from 'react'
import Layout, { Container } from '../components/layout'
import { graphql, StaticQuery } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { Card } from '../components/cards'
import { Title } from '../components/titles'

function getCard(bestuursLid) {
  return (
    <Card header={bestuursLid.node.naam} className={'h-full sm:mx-2'}>
      <div className={'text-xs'}>
        <div className={'mb-1'}>{bestuursLid.node.title}</div>
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

const Content = (data) => {
  return (
    <Container>
      <Title>Bestuur</Title>
      <div
        className={
          'flex sm:flex-row flex-col sm:space-around items-center sm:items-stretch sm:flex-wrap'
        }
      >
        {data.allContentfulBestuurslid.edges.map((bestuursLid) => (
          <div
            className={'py-2 w-full md:w-1/3 sm:w-1/2'}
            key={bestuursLid.node.naam}
          >
            {getCard(bestuursLid)}
          </div>
        ))}
      </div>
    </Container>
  )
}

const BestuurPage = () => (
  <Layout>
    <StaticQuery
      query={graphql`
        query {
          allContentfulBestuurslid(sort: { fields: naam }) {
            edges {
              node {
                naam
                email
                phone
                title
              }
            }
          }
        }
      `}
      render={Content}
    />
  </Layout>
)

export default BestuurPage
