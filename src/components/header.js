import PropTypes from 'prop-types'
import React from 'react'
import { navigate } from 'gatsby'


const siteMap = {
  items:
    [
      { name: 'Home' },
      {
        name: 'Info',
        subItems: [
          { name: 'Bestuur' },
          { name: 'Clubfiche' },
          { name: 'Geschiedenis' },
          { name: 'Fair Play' },
          { name: 'Lidmaatschap' },
          { name: 'Sponsoring' },
          { name: 'Documenten' },
        ],
      },
      { name: 'Senioren' },
      { name: 'Jeugd' },
      { name: 'Dames' },
      { name: 'Meisjes' },
      { name: 'G-Voetbal' },
      { name: 'Contact' },
    ],
}

class Header extends React.Component {


  componentDidMount() {
    this.headerElement.addEventListener('itemSelected', (event) => {
      if (event.detail === 'Home') {
        navigate('')
        return
      }
      navigate(event.detail.replace(' ', '').replace('-', '').toLowerCase())
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
