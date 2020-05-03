import React from 'react'

import NoorseHeader from './noorseHeader'
import NoorseFooter from './noorseFooter'

const Layout = ({ children, coverPhoto }) => (
  <div className={'flex min-h-screen flex-col'}>
    <NoorseHeader coverPhoto={coverPhoto} />
    <div className={'flex-1 mx-6 p-5 mb-24'}>{children}</div>
    <NoorseFooter />
  </div>
)

export default Layout
