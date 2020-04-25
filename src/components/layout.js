import React from 'react'

import NoorseHeader from './noorseHeader'
import NoorseFooter from './noorseFooter'


const Layout = ({ children }) => (
  <div>
    <NoorseHeader/>
    <div>{children}</div>
    <NoorseFooter/>
  </div>
)

export default Layout
