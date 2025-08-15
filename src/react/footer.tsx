import ctl from '@netlify/classnames-template-literals'
import type { FC } from 'react'
import { Title, Version } from './index'
import { ContactInfo } from './index.js'
import { EmailLink } from './links'
import { ExternalLink } from './links/external-link'
import { Logo } from './logo.jsx'
import { SponsorWithLogo } from './sponsor-with-logo.tsx'
import type { Sponsor } from './types/sponsor'

const SponsorList: FC<{ logoWidth?: string; sponsors: Sponsor[] }> = ({
  logoWidth,
  sponsors,
}) => {
  return (
    <div
      className={
        'flex w-full flex-row flex-wrap content-between items-center justify-center'
      }
      title={'List of Sponsors'}
    >
      {sponsors?.map((sponsor) => {
        return (
          <SponsorWithLogo
            key={sponsor.naam}
            sponsor={sponsor}
            logoWidth={logoWidth}
          />
        )
      })}
    </div>
  )
}

const ContactAndSponsorFooter: FC<{ sponsors: Sponsor[] }> = ({ sponsors }) => {
  const wrapperClasses = ctl(`
    flex flex-col items-center
    medium:flex medium:flex-row medium:align-center medium:justify-between
    pt-12 pb-6 medium:px-6 large:px-32
    bg-green/75`)

  const sponsorListContainer = ctl(`flex flex-col items-center medium:hidden
      py-4
     bg-gray-light
     w-screen  medium:w-2/3 large:w-1/2`)

  const contactInfoWrapper = ctl(`
      flex flex-col items-center text-center
      pt-8 medium:p-0 medium:ml-4`)

  return (
    <>
      <div className={wrapperClasses}>
        {/* todo: this shouldnt be an h1 */}
        <Title>K. Noorse S.V.</Title>
        <div className={`w-1/4 pb-12 large:w-48 large:p-6`}>
          <Logo width="100%" height="100%" />
        </div>
        <div className={sponsorListContainer}>
          <SponsorList sponsors={sponsors} />
        </div>
        <div className={contactInfoWrapper}>
          <ContactInfo />
        </div>
      </div>
      <div className={'hidden w-full bg-gray-light medium:block'}>
        <SponsorList logoWidth={'medium:w-32 large:w-40'} sponsors={sponsors} />
      </div>
    </>
  )
}

const CopyRightFooter: FC<{ version: string }> = ({ version }) => {
  const copyRightWrapper = ctl(`
  flex flex-col justify-start items-center
  bg-green-dark/75
  text-black
  py-3`)

  return (
    <div className={copyRightWrapper}>
      <div className={'px-4 text-center'}>
        Suggesties, verbeteringen? Laat het ons gerust weten op{' '}
        <EmailLink address={'website@noorse.be'} />
      </div>
      <div>
        <Version version={version} />
      </div>
      <div>
        Powered by
        <ExternalLink textColor={'text-black'} href="https://www.astro.build">
          Astro
        </ExternalLink>
        and
        <ExternalLink textColor={'text-black'} href="https://tailwindcss.com/">
          Tailwind
        </ExternalLink>
      </div>
    </div>
  )
}

export const Footer: FC<{ version: string; sponsors: Sponsor[] }> = ({
  version,
  sponsors,
}) => {
  return (
    <footer id="footer">
      <ContactAndSponsorFooter sponsors={sponsors} />
      <CopyRightFooter version={version} />
    </footer>
  )
}
