import React from 'react'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => (
  <div className="border-t h-12 text-center flex flex-row text-sm justify-between items-center px-2">
    <div>
      <FontAwesomeIcon icon={faCopyright}/> {new Date().getFullYear()}, K. Noorse S.V.
    </div>
    <div className="hidden md:visible">
      Built with <a href="https://www.gatsbyjs.org">Gatsby</a>
    </div>
    <div>
      <div className="inline-block ml-2">
        <FontAwesomeIcon icon={faFacebook}/>
      </div>
      <div className="inline-block ml-2">
        <FontAwesomeIcon icon={faGithub}/>
      </div>
    </div>
  </div>
)

export default Footer
