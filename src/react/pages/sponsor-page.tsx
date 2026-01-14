import type { FC } from 'react'
import { MarkDown, SponsorWithLogo, SubTitle } from '../index'
import { Page } from './page.jsx'
import type { Sponsor, SponsorType } from '../types/sponsor.js'
import { DocumentLink } from '../links/document-link.js'

export const SponsorPage: FC<{
  sponsors: Sponsor[]
  description: string
  brochure?: { file: { url: string; fileName: string } }
}> = ({ sponsors, description, brochure }) => {
  const types = ['goud', 'zilver', 'brons', 'shirt', undefined] as SponsorType[]
  return (
    <Page title="Sponsoring" centered={true}>
      <div className="divide flex w-full flex-col justify-start divide-y-2 divide-gray-200">
        <section className="py-10">
          <MarkDown content={description} />

          {brochure && (
            <DocumentLink
              url={brochure.file.url}
              fileName="Download onze sponsorbrochure"
            />
          )}
        </section>

        <section className="py-10">
          <SubTitle>Huidige sponsors</SubTitle>

          {types.map((type) => {
            const filteredSponsors = sponsors.filter(
              (sponsor) => sponsor.type === type
            )
            return filteredSponsors.length ? (
              <div key={type} className="flex w-full flex-col items-center">
                <h3 className="mb-6 text-2xl capitalize">{`${type || 'Overig'}`}</h3>
                <ul className="mb-10 flex w-full list-none flex-wrap items-center justify-center gap-6">
                  {filteredSponsors.map((sponsor) => {
                    return (
                      <li
                        className="flex size-[250px] flex-col items-center rounded-lg bg-gray-100 p-4 drop-shadow-lg"
                        key={sponsor.naam}
                      >
                        <h4 className="underline">{sponsor.naam}</h4>
                        <div className="flex w-full flex-col items-start justify-center gap-8">
                          <SponsorWithLogo
                            sponsor={sponsor}
                            logoWidth="w-full h-[100px] text-center"
                            maxWidth=""
                          />
                          {sponsor.description ? (
                            <MarkDown content={sponsor.description} />
                          ) : (
                            <></>
                          )}
                        </div>
                      </li>
                    )
                  })}
                </ul>
              </div>
            ) : (
              <></>
            )
          })}
        </section>
      </div>
    </Page>
  )
}
