import { MarkDown, SponsorWithLogo, SubTitle } from '../index'
import { Page } from './page.jsx'

export const SponsorPage = ({ sponsors, description }) => {
  return (
    <Page title="Sponsors" centered={true}>
      <MarkDown>{description}</MarkDown>

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
                <MarkDown>{sponsor.omschrijving}</MarkDown>
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
