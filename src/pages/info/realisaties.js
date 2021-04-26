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
        <section className={`flex flex-col items-center px-4 mt-10`}>
          {Object.keys(realisatiesPerJaar).map((jaar, index) => (
            <RealisationsForYear
              realisatiesPerJaar={realisatiesPerJaar}
              index={index}
              jaar={jaar}
            />
          ))}
        </section>
      </Container>
    </Layout>
  )
}

const Year = ({ jaar }) => {
  return (
    <h2
      className={
        'mb-0 bg-grey-300 border-opacity-40 ring-2 ring-grey-700 flex-shrink-0 color-grey-300  w-24 h-24 p-2 border-4 border-gray-700 rounded-full flex justify-center items-center'
      }
    >
      {jaar}
    </h2>
  )
}

const Realisation = ({ realisatie }) => {
  const formatter = new Intl.NumberFormat('nl-BE', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2,
  })

  return (
    <li
      className={'list-none text-center lg:text-left my-2 md:w-3/4'}
      key={realisatie.naam}
    >
      <div className={'font-bold mb-2'}>
        <div className={'underline'}>{realisatie.naam}</div>
        <div>{formatter.format(realisatie.kost)}</div>
      </div>
      {realisatie.omschrijving ? (
        <span className={'italic'}>
          {' '}
          {realisatie.omschrijving.omschrijving}{' '}
        </span>
      ) : (
        ''
      )}
    </li>
  )
}

const RealisationsForYear = ({ jaar, realisatiesPerJaar }) => {
  return (
    <React.Fragment>
      <article
        className={
          'flex flex-col lg:flex-row items-center justify-start lg:justify-center lg:items-start w-full lg:px-24'
        }
        key={jaar}
      >
        <Year jaar={jaar} />
        <Ellipsis className={'lg:hidden'} />
        <ul className={'mb-0 w-full flex flex-col items-center'}>
          {realisatiesPerJaar[jaar].map((realisatie) => (
            <React.Fragment>
              <Realisation realisatie={realisatie} />
              <Ellipsis className={'lg:hidden'} />
            </React.Fragment>
          ))}
        </ul>
      </article>
      <div
        className={'border-b-2 border-gray-700 w-1/4 hidden lg:block my-8'}
      />
    </React.Fragment>
  )
}

const Ellipsis = ({ className }) => {
  return (
    <FontAwesomeIcon
      className={className + ' my-4 w-24'}
      size="1x"
      icon={faEllipsisV}
    />
  )
}

export default Realisaties
