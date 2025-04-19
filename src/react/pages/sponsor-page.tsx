import type { FC } from 'react'
import { MarkDown, SponsorWithLogo, SubTitle } from '../index'
import { Page } from './page.jsx'
import type { Sponsor } from '../types/sponsor.js'

export const SponsorPage: FC<{ sponsors: Sponsor[]; description: string }> = ({
  sponsors,
  description,
}) => {
  return (
    <Page title="Sponsors" centered={true}>
      <MarkDown content={description} />

      <SubTitle>Huidige sponsors</SubTitle>

      <ul className="mt-10 w-full list-none">
        {sponsors.map((sponsor) => {
          return (
            <li
              className="mb-8 flex w-full flex-col items-center"
              key={sponsor.naam}
            >
              <h4>{sponsor.naam}</h4>
              <SponsorWithLogo sponsor={sponsor} logoWidth="w-full" />
              {sponsor.omschrijving ? (
                <MarkDown content={sponsor.omschrijving} />
              ) : (
                <></>
              )}
            </li>
          )
        })}
      </ul>
    </Page>
  )
}
