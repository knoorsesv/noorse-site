import React from 'react'

import NoorseHeader from './noorseHeader'
import NoorseFooter from './noorseFooter'

const Layout = ({ children, coverPhoto }) => (
  <div className={'flex min-h-screen flex-col'}>
    <NoorseHeader coverPhoto={coverPhoto} />
    <div
      id="content"
      className={'flex-1 mt-3 md:mx-3 lg:mx-6 p-3 pl-4 md:px-4 lg:px-10 mb-24'}
    >
      {children}
    </div>
    <NoorseFooter />
  </div>
)

export default Layout
