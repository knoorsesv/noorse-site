import React from 'react'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => (
  <div >
    <div>
      <FontAwesomeIcon icon={faCopyright} /> {new Date().getFullYear()}, K.
      Noorse S.V.
    </div>
    <div >
      Built with <a href="https://www.gatsbyjs.org">Gatsby</a>
    </div>
    <div>
      <div >
        <FontAwesomeIcon icon={faFacebook} />
      </div>
      <div >
        <FontAwesomeIcon icon={faGithub} />
      </div>
    </div>
  </div>
)

export default Footer
