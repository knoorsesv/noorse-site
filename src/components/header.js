import PropTypes from 'prop-types'
import React from 'react'
import { navigate } from 'gatsby'


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

class Header extends React.Component {


  componentDidMount() {
    this.headerElement.addEventListener('itemSelected', (event) => {
      navigate(event.detail.toLowerCase())
    })
  }

  render() {

    return <section className="hero">


      <div className="hero-body">
        <h1>Noorse</h1>
      </div>
      <div className="hero-foot">

        <noorse-navbar ref={elem => this.headerElement = elem} navigation={JSON.stringify(siteMap)}></noorse-navbar>
      </div>
    </section>
  }

}


Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
