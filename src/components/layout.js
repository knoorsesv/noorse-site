import React from 'react'

import NoorseHeader from './noorseHeader'
import NoorseFooter from './noorseFooter'
import { Grommet, Main } from 'grommet'

const theme = {
  global: {
    colors: {
        brand: '#008000',
    },
  },
}

const Layout = ({ children }) => (
  <Grommet theme={theme} full>
    <NoorseHeader/>
    <Main>{children}</Main>
    <NoorseFooter/>
  </Grommet>
)

export default Layout
