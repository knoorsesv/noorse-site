import React from 'react'
import renderer from 'react-test-renderer'

import { Navbar } from './navbar'
import { useStaticQuery } from 'gatsby'

useStaticQuery.mockReturnValue({ cover: 'coverImageProps' })

const siteMap = {
  items: [
    { name: 'Top Level Link', link: '/' },
    { name: 'Top Level External Link', extLink: 'http://top-link' },
    {
      name: 'Top Level met Sub Items',
      subItems: [
        { name: 'Sub Item Link', link: '/sub' },
        { name: 'Sub Item Ext Link', extLink: 'http://sub-link' },
      ],
    },
  ],
}

jest.mock('./images', () => ({ Logo: () => <logo-mock /> }))

describe('Navbar', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Navbar siteMap={siteMap} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
