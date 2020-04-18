import PropTypes from 'prop-types'
import React from 'react'
import { graphql, Link, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'


class Header extends React.Component {

  siteMap = {
    items: [
      { name: 'Home', link: '/' },
      { name: 'Nieuws', link: '/nieuws' },
      {
        name: 'Info',
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

  render() {
    return (
      <section>
        <div>
          <StaticQuery
            query={`${query}`}
            render={data => (
              <Img fixed={data.headerImage.childImageSharp.fixed}/>
            )}
          />
        </div>
        <div>
          <div>
            {this.siteMap.items.map(this.menuItem())}
          </div>
        </div>
      </section>
    )
  }

  menuItem() {
    return (item) => (
      <div>
        <Link to={item.link}>{item.name}</Link>
        {item.subItems &&
        <div>{item.subItems.map(this.menuItem())}</div>
        }
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
