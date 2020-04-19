import React from 'react'
import { graphql, Link } from 'gatsby'

import Logo from '../images/Logo_highres.png'
import HeaderLogo from '../images/header-logo.png'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Header extends React.Component {
  siteMap = {
    items: [
      { name: 'Home', link: '/' },
      { name: 'Nieuws', link: '/nieuws' },
      {
        name: 'Info',
        link: '/info',
        subItems: [
          { name: 'Bestuur', link: '/bestuur' },
          { name: 'Clubfiche', link: '/clubfiche' },
          { name: 'Geschiedenis', link: '/geschiedenis' },
          { name: 'Fair Play', link: '/fairplay' },
          { name: 'Lidmaatschap', link: '/lidmaatschap' },
          { name: 'Sponsoring', link: '/sponsoring' },
          { name: 'Documenten', link: '/documenten' },
        ],
      },
      { name: 'Senioren', link: '/senioren' },
      { name: 'Jeugd', link: '/jeugd' },
      { name: 'Dames', link: '/dames' },
      { name: 'Meisjes', link: '/meisjes' },
      { name: 'G-Voetbal', link: '/gvoetbal' },
      { name: 'Contact', link: '/contact' },
    ],
  }

  constructor(props) {
    super(props)
    this.state = { showMenu: false }
  }

  render() {
    return (
      <div >
        <div >
          {/*<StaticQuery*/}
          {/*  query={`${query}`}*/}
          {/*  render={data => (*/}
          {/*    <Img fixed={data.headerImage.childImageSharp.fixed}/>*/}
          {/*  )}*/}
          {/*/>*/}
          <img src={HeaderLogo} alt="Header Noorse" />
        </div>
        {/*todo: make bar stick on mobile*/}
        <div >
          <div >
            <img  />
            <div >Neurse</div>
            <button
              onClick={this.toggleMenu}

            >
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
          <div
            className={`${
              this.state.showMenu ? 'block' : 'hidden'
            } py-1 md:p-0 flex flex-col absolute md:static text-right right-0 md:inset-auto bg-green md:flex md:flex-row md:justify-around `}
          >
            {this.siteMap.items.map(this.menuItem())}
          </div>
        </div>
      </div>
    )
  }

  toggleMenu = () => {
    this.setState({ showMenu: !this.state.showMenu })
  }

  menuItem() {
    return (item) => (
      <div
        key={item.name}

      >
        <Link to={item.link}>{item.name}</Link>
        {item.subItems && (
          <div >
            {item.subItems.map((subItem) => (
              <div key={subItem.name} >
                <Link to={subItem.link}>{subItem.name}</Link>
              </div>
            ))}
          </div>
        )}
      </div>
    )
  }
}

export const query = graphql`
  query {
    headerImage: file(relativePath: { eq: "header-logo.png" }) {
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default Header
