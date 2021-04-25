import React from 'react'
import Layout, { Container } from '../../components/layout'
import { graphql, useStaticQuery } from 'gatsby'
import { Title } from '../../components/titles'
import { Helmet } from 'react-helmet'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import { TextBlock } from '../../components/text'

const query = graphql`
  query {
    allContentfulRealisatie(sort: { fields: jaar }) {
      nodes {
        kost
        naam
        omschrijving {
          omschrijving
        }
        jaar
      }
    }
  }
`

const Realisaties = () => {
  const data = useStaticQuery(query)

  const formatter = new Intl.NumberFormat('nl-BE', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2,
  })

  const realisaties = data.allContentfulRealisatie.nodes

  const realisatiesPerJaar = realisaties.reduce(
    (realisatiesPerJaar, realisatie) => {
      if (realisatiesPerJaar[realisatie.jaar]) {
        realisatiesPerJaar[realisatie.jaar].push(realisatie)
      } else {
        realisatiesPerJaar[realisatie.jaar] = [realisatie]
      }
      return realisatiesPerJaar
    },
    {}
  )

  console.log(realisatiesPerJaar)

  return (
    <Layout>
      <Helmet>
        <title>Realisaties</title>
      </Helmet>
      <Container>
        <Title>Realisaties en Focus Infrastructuur</Title>
        <TextBlock>
          Intro tekst Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
          enim praesent elementum facilisis. Ipsum nunc aliquet bibendum enim
          facilisis gravida neque convallis. Nisl rhoncus mattis rhoncus urna
          neque viverra justo nec ultrices. At volutpat diam ut venenatis tellus
          in metus vulputate eu. Pharetra convallis posuere morbi leo urna
          molestie at elementum eu. Porta lorem mollis aliquam ut porttitor leo.
          Lacus luctus accumsan tortor posuere ac ut consequat semper viverra.
        </TextBlock>
        <div className={`flex flex-col items-start px-4`}>
          {Object.keys(realisatiesPerJaar).map((jaar, index) => {
            return (
              <React.Fragment>
                <div
                  className={'flex flex-row justify-start w-full'}
                  key={jaar}
                >
                  <h2
                    className={
                      'mb-0 flex-shrink-0 w-24 h-24 p-2 border-4 border-gray-700 rounded-full flex justify-center items-center'
                    }
                  >
                    {jaar}
                  </h2>
                  <ul className={'mb-0 ml-8 max-3/4'}>
                    {realisatiesPerJaar[jaar].map((realisatie) => (
                      <li className={'mb-4'} key={realisatie.naam}>
                        <div className={'font-medium mb-2'}>
                          {realisatie.naam} -{' '}
                          {formatter.format(realisatie.kost)}
                        </div>
                        {realisatie.omschrijving ? (
                          <span className={'italic'}>
                            {realisatie.omschrijving.omschrijving}
                          </span>
                        ) : (
                          ''
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
                {index + 1 < Object.keys(realisatiesPerJaar).length ? (
                  <FontAwesomeIcon
                    className={'my-4 w-24'}
                    size="1x"
                    icon={faEllipsisV}
                  />
                ) : (
                  ''
                )}
              </React.Fragment>
            )
          })}
        </div>
      </Container>
    </Layout>
  )
}

export default Realisaties
