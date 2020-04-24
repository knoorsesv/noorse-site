import React from 'react'

import NoorseHeader from './noorseHeader'
import Footer from './footer'
import { Grommet } from 'grommet'

const theme = {
  global: {
    colors: {
      brand: '#008000',
    },
  },
}

const Layout = ({ children }) => (
  <Grommet theme={theme}>
    <div>
      <NoorseHeader/>
      <div>
        <main>{children}</main>
      </div>
    </div>
    <div>
      <Footer/>
    </div>
  </Grommet>
)

export default Layout
