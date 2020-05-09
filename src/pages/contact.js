import React from 'react'
import Layout from '../components/layout'
import { Title } from '../components/titles'
import { SpacedInfo } from '../components/text'

const Block = ({ children }) => {
  return (
    <div
      className={
        'my-3 w-full flex flex-col items-center sm:w-1/2 md:w-2/5 lg:w-1/3 lg:mb-6'
      }
    >
      {children}
    </div>
  )
}

const ContactPage = () => (
  <Layout>
    <div
      className={
        'mb-3 lg:w-4/5 lg:m-auto flex flex-col items-center md:flex-row md:flex-wrap md:justify-between md:items-stretch lg:justify-around'
      }
    >
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
        <Title>Adres</Title>
        <div className={'text-center'}>Frans De Peuterstraat 50</div>
        <div className={'text-center'}>2950 Kapellen</div>
      </Block>
      <Block>
        <Title>Contact</Title>
        <SpacedInfo
          items={[
            { label: 'Algemeen', value: 'secretariaat@noorse.be' },
            { label: 'Jeugd', value: 'jeugd@noorse.be' },
            { label: 'Senioren', value: 'senioren@noorse.be' },
            { label: 'Dames / Meisjes', value: 'meisjesendames@noorse.be' },
            { label: 'G-voetbal', value: 'gvoetbal@noorse.be' },
            { label: 'Tel', value: '03 664 44 12' },
          ]}
        />
      </Block>
      <Block>
        <Title>Bereikbaarheid</Title>
        <div className={'text-center'}>
          Frans De Peuterstraat, Kapellen. A12 Haven – Bergen op Zoom blijven
          volgen tot afrit Hoevenen / Kapellen. 2e straat rechts aan Texaco
          Station (Klein Heiken) inslaan daarna 5e straat links (Heizoomlaan)
          deze geeft uit op de terreinen.
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
        <div className={'text-center mt-3'}>
          Wil je checken of kantine open is? Check even via socceronline of bel
          naar onze kantine.
        </div>
      </Block>
    </div>
  </Layout>
)

export default ContactPage
