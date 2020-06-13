import React from 'react'
import Layout from '../components/layout'
import { graphql, StaticQuery } from 'gatsby'
import { Container } from '../components/centeredContainer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { Card } from '../components/cards'

const Content = (data) => {
  return (
    <Container>
      <h1 className={'uppercase title'}>Bestuur</h1>
      <div
        className={
          'flex sm:flex-row flex-col sm:space-around items-center sm:items-stretch sm:flex-wrap'
        }
      >
        {data.allContentfulBestuurslid.edges.map((bestuursLid) => (
          <div
            className={'p-2 w-4/5 md:w-1/3 sm:w-1/2'}
            key={bestuursLid.node.naam}
          >
            <Card header={bestuursLid.node.naam} className={'h-full'}>
              <div className={'text-xs'}>
                <div className={'mb-1'}>{bestuursLid.node.title}</div>
                {bestuursLid.node.email && (
                  <div className={'font-thin'}>
                    <FontAwesomeIcon
                      icon={faAt}
                      className={'mr-1'}
                    ></FontAwesomeIcon>
                    {bestuursLid.node.email}
                  </div>
                )}
                {bestuursLid.node.phone && (
                  <div className={'font-thin'}>
                    <FontAwesomeIcon
                      icon={faPhoneAlt}
                      className={'mr-1'}
                    ></FontAwesomeIcon>

                    {bestuursLid.node.phone}
                  </div>
                )}
              </div>
            </Card>
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
          allContentfulBestuurslid {
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
