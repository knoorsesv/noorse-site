import PropTypes from 'prop-types'
import React from 'react'
import { graphql, Link } from 'gatsby'

import Logo from '../images/Logo_highres.png'
import HeaderLogo from '../images/header-logo.png'

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
          { name: 'Fair Play', link: 'fairplay' },
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
    console.log('rendering')
    return (
      <div className="w-full md:flex md:flex-col md:items-center">
        <div className="hidden md:block py-4">
          {/*<StaticQuery*/}
          {/*  query={`${query}`}*/}
          {/*  render={data => (*/}
          {/*    <Img fixed={data.headerImage.childImageSharp.fixed}/>*/}
          {/*  )}*/}
          {/*/>*/}
          <img src={HeaderLogo} />
        </div>
        <div className="fixed w-full bg-green-800 md:w-4/5 md:relative md:rounded">
          <div className="flex items-center justify-between px-3 py-2 md:hidden">
            <img className="h-10" src={Logo} />
            <div>Neurse</div>
            <button onClick={this.toggleMenu} className="w-10 bg-green-400">
              H
            </button>
          </div>
          <div
            className={`${
              this.state.showMenu ? 'block' : 'hidden'
            } py-3 flex flex-col md:flex md:flex-row md:justify-around `}
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
    return item => (
      <div className="px-2 group relative inline-block hover:bg-yellow-200">
        <Link to={item.link}>{item.name}</Link>
        {item.subItems && (
          <div className="md:absolute md:hidden md:group-hover:block md:left-0 md:bg-green-700 md:rounded md:shadow md:p-1">
            {item.subItems.map(subItem => (
              <div className="px-2 hover:bg-yellow-200">
                <Link to={subItem.link}>{subItem.name}</Link>
              </div>
            ))}
          </div>
        )}
      </div>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
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
