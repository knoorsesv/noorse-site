import React from 'react'

import NoorseHeader from './noorseHeader'
import NoorseFooter from './noorseFooter'


const Layout = ({ children }) => (
  <div className={'flex min-h-screen flex-col'}>
    <NoorseHeader/>
    <div className={'flex-1 mx-6 p-5'}>{children}</div>
    <NoorseFooter/>
  </div>
)

export default Layout
