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
      py-8
     bg-gray-light
     w-screen`)

  const contactInfoWrapper = ctl(`
      flex flex-col items-center text-center
      pt-8 medium:p-0 medium:ml-4`)

  return (
    <>
      <div className={wrapperClasses}>
        {/* todo: this shouldnt be an h1 */}
        <Title>K. Noorse S.V.</Title>
        <div className={`large:w-48 large:p-6 w-1/4 pb-12`}>
          <Logo width="100%" height="100%" />
        </div>
        <div className={sponsorListContainer}>
          <SponsorList sponsors={sponsors} />
        </div>
        <div className={contactInfoWrapper}>
          <ContactInfo />
        </div>
      </div>
      <div className={'bg-gray-light py-8 medium:block hidden w-full'}>
        <SponsorList logoWidth={'w-40'} sponsors={sponsors} />
      </div>
    </>
  )
}

const CopyRightFooter: FC<{ version: string }> = ({ version }) => {
  const copyRightWrapper = ctl(`
  flex flex-col justify-start items-center
  bg-green/75
  text-black
  py-3`)

  return (
    <div className={copyRightWrapper}>
      <Version version={version} />
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
