import type { FC } from 'react'
import { BestuurList, SubTitle } from '../index'
import { Page } from './page.jsx'

export const InfoBestuurPage: FC<{
  leden: {
    type: 'deelwerking' | 'bestuursorgaan'
    title: string
    naam?: string
    email: string
  }[]
}> = ({ leden }) => {
  const bestuursLeden = leden
    .filter(({ type }) => type === 'bestuursorgaan')
    .sort((a, b) => {
      if (a.title === 'Voorzitter') return -1
      if (b.title === 'Voorzitter') return 1
      return 0
    })
  const deelwerkingen = leden.filter(({ type }) => type === 'deelwerking')

  return (
    <Page title="Bestuur" centered={false}>
      <SubTitle>Organigram</SubTitle>
      <img
        className="max-w-screen-md m-8 medium:w-[800px]  medium:max-w-full"
        alt="Bestuursorganigram"
        src={
          'https://www.mermaidchart.com/raw/8ba49245-d4d8-455f-ad19-50cccfa42034?version=v0.1&theme=light&format=svg'
        }
      />
      <SubTitle>Bestuursorgaan</SubTitle>
      <BestuurList leden={bestuursLeden} />
      <SubTitle>Deelwerkingen</SubTitle>
      <BestuurList leden={deelwerkingen} />
    </Page>
  )
}
