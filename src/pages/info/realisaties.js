import React from 'react'
import Layout, { Container } from '../../components/layout'
import { graphql, useStaticQuery } from 'gatsby'
import { Title } from '../../components/titles'
import { Helmet } from 'react-helmet'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import { TextBlock } from '../../components/text'
import ctl from '@netlify/classnames-template-literals'

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
        sponsoredBy
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
          De voorbije jaren koos Noorse ervoor om in het kader van onze groei
          als club te blijven investeren in infrastructuur. Hieronder vindt u
          een overzicht van de gemaakte investeringen de afgelopen jaren alsook
          een preview van wat nog gepland is.
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
  const yearClasses = ctl(`
    border-opacity-40 ring-2 ring-grey-700 border-4 border-gray-700 rounded-full
    bg-grey-300 color-grey-300  
    mb-0 w-24 h-24 p-2 
    flex justify-center items-center flex-shrink-0
    `)
  return <h2 className={yearClasses}>{jaar} </h2>
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
        <div className={'italic mb-4'}>
          {realisatie.omschrijving.omschrijving}{' '}
        </div>
      ) : (
        ''
      )}
      {realisatie.sponsoredBy ? (
        <div className={'text-sm'}>
          <div className={'italic'}>{'Mogelijk gemaakt door: '}</div>
          <div>
            {realisatie.sponsoredBy.map((sponsor, index) => (
              <span className={'font-semibold'}>
                {sponsor}
                {index + 1 < realisatie.sponsoredBy.length ? ', ' : ''}
              </span>
            ))}
          </div>
        </div>
      ) : (
        ''
      )}
    </li>
  )
}

const RealisationsForYear = ({ jaar, realisatiesPerJaar }) => {
  const articleClasses = ctl(`
  flex flex-col lg:flex-row items-center justify-start lg:justify-center lg:items-start
   w-full lg:px-24  `)
  const dividerClasses = 'border-b-2 border-gray-700 w-1/4 hidden lg:block my-8'
  return (
    <React.Fragment>
      <article className={articleClasses} key={jaar}>
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
      <div className={dividerClasses} />
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
