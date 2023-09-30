import React from 'react'
import { MarkDownPage } from '../layout'

export const InfoLidmaatschapPage = ({ content }) => {
  return (
    <MarkDownPage
      title={'Lid Worden'}
      description={`Wil je lid worden van één van onze jeugd- of meisjesploegen? Hier vindt je alle info.`}
      attachment={content?.attachment}
    >
      {content?.body?.body}
    </MarkDownPage>
  )
}
