import React from 'react'
import Layout, { Container } from '../components/layout'
import { Title } from '../components/titles'
import { SpacedInfo } from '../components/text'
import { Helmet } from 'react-helmet'
import ctl from '@netlify/classnames-template-literals'

const Block = ({ children }) => {
  const blockClass = ctl(`
  flex flex-col items-center
  my-3  large:mb-6
  w-full medium:w-4/5
  `)
  return <div className={blockClass}>{children}</div>
}

const ContactPage = () => {
  const containerClasses = ctl(`
    flex flex-col items-center large:flex-row large:flex-wrap large:items-stretch large:justify-around
    mb-3 large:m-auto
    large:w-4/5`)
  return (
    <Layout>
      <Helmet>
        <title>Contact</title>
      </Helmet>
      <Container>
        <div className={containerClasses}>
          <Block>
            <Title>Koninklijke Noorse SV</Title>
            <SpacedInfo
              items={[
                { label: 'Opgericht', value: 1914 },
                { label: 'Stamnummer', value: 61017 },
                { label: 'Kleuren', value: 'Geel-Groen' },
              ]}
            />
          </Block>
          <Block>
            <Title>Contact</Title>
            <SpacedInfo
              items={[
                {
                  label: 'Algemeen',
                  value: 'secretariaat@noorse.be',
                  email: true,
                },
                { label: 'Jeugd', value: 'jeugd@noorse.be', email: true },
                { label: 'Senioren', value: 'senioren@noorse.be', email: true },
                {
                  label: 'Dames / Meisjes',
                  value: 'meisjesendames@noorse.be',
                  email: true,
                },
                {
                  label: 'G-voetbal',
                  value: 'gvoetbal@noorse.be',
                  email: true,
                },
              ]}
            />
          </Block>
          <Block>
            <Title>Bereikbaarheid</Title>
            <div className={'text-center'}>
              Frans De Peuterstraat, Kapellen. A12 Haven – Bergen op Zoom
              blijven volgen tot afrit Hoevenen / Kapellen. 2e straat rechts aan
              Texaco Station (Klein Heiken) inslaan daarna 5e straat links
              (Heizoomlaan) deze geeft uit op de terreinen.
            </div>
          </Block>
          <Block>
            <Title>Kantine</Title>
            <SpacedInfo
              items={[
                { label: 'Woensdag', value: '16u30 – 23u00' },
                { label: 'Donderdag', value: '18u00 – 23u00' },
                { label: 'Vrijdag', value: '18u00 – 23u00' },
              ]}
            />
            <div className={'mt-3 text-center'}>
              Wil je checken of kantine open is? Check even via socceronline of
              bel naar onze kantine.
            </div>
          </Block>
        </div>
      </Container>
    </Layout>
  )
}

export default ContactPage
