import React from 'react'
import { Facebook, Github, Instagram } from './icons/icons.jsx'
import { EmailLink, ExternalLink } from './text.jsx'

export const ContactInfo = () => {
  return (
    <div id="contact-info" className={`flex flex-col items-center`}>
      <span>Frans de Peuterstraat 50</span>
      <span>2950 Kapellen</span>
      <span>03/664.44.11</span>
      <span>
        <EmailLink address="info@noorse.be" />
      </span>
      <div className={'mt-6 flex flex-row items-center space-x-3'}>
        <ExternalLink
          url="https://www.facebook.com/noorsesv/"
          altText={'Link to Facebook'}
          styled={false}
          icon={false}
        >
          <Facebook />
        </ExternalLink>
        <ExternalLink
          url="https://www.instagram.com/knoorsesv/"
          altText={'Link to Instagram'}
          styled={false}
          icon={false}
        >
          <Instagram />
        </ExternalLink>
        <ExternalLink
          url="https://github.com/knoorsesv/noorse-site/"
          altText={'Link to Github'}
          styled={false}
          icon={false}
        >
          <Github />
        </ExternalLink>
      </div>
    </div>
  )
}
