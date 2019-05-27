import PropTypes from 'prop-types'
import React from 'react'


const siteMap = {
  items:
    [
      { name: 'Home', href: '/' },
      {
        name: 'Info',
        subItems: [
          { name: 'Bestuur', href: '/bestuur' },
          { name: 'Clubfiche', href: '/clubfiche' },
          { name: 'Geschiedenis', href: '/geschiedenis' },
          { name: 'Fair Play', href: '/fairplay' },
          { name: 'Lidmaatschap', href: '/lidmaatschap' },
          { name: 'Sponsoring', href: '/sponsoring' },
          { name: 'Documenten', href: '/documenten' },
        ],
      },
      { name: 'Senioren', href: '/senioren' },
      { name: 'Jeugd', href: '/jeugd' },
      { name: 'Dames', href: '/dames' },
      { name: 'Meisjes', href: '/meisjes' },
      { name: 'G-Voetbal', href: '/gvoetbal' },
      { name: 'Contact', href: '/contact' },
    ],
}

const Header = ({ siteTitle }) => (
  <noorse-header navigation={JSON.stringify(siteMap)}></noorse-header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
