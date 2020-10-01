import { ExternalLink } from './text'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import React from 'react'

export const ContactInfo = () => {
  return (
    <div className={`flex flex-col items-center`}>
      <span>Frans de Peuterstraat 50</span>
      <span>2950 Kapellen</span>
      {/*todo: move to contentful*/}
      <span>03/664.44.11</span>
      <span>
        <ExternalLink url="mailto:info@noorse.be" icon={false}>
          info@noorse.be
        </ExternalLink>
      </span>
      <div className={'flex flex-row items-center mt-6 space-x-3'}>
        <ExternalLink
          url="https://www.facebook.com/noorsesv/"
          altText={'Facebook'}
          styled={false}
          icon={false}
        >
          <FontAwesomeIcon size="2x" icon={faFacebook} />
        </ExternalLink>
      </div>
    </div>
  )
}
