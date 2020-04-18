import PropTypes from 'prop-types'
import React from 'react'
import { graphql, navigate, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const siteMap = {
  items: [
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
    this.headerElement.addEventListener('itemSelected', event => {
      if (event.detail === 'Home') {
        navigate('')
        return
      }
      navigate(
        event.detail
          .replace(' ', '')
          .replace('-', '')
          .toLowerCase()
      )
    })
  }

  render() {
    return (
      <section className="header">
        <div className="header-body">
          <StaticQuery
            query={`${query}`}
            render={data => (
              <Img fixed={data.headerImage.childImageSharp.fixed} />
            )}
          />
        </div>
        <div className="header-foot">
          <div
            ref={elem => (this.headerElement = elem)}
            navigation={JSON.stringify(siteMap)}
          ></div>
        </div>
      </section>
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
