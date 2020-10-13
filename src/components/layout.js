import React from 'react'

import NoorseFooter from './noorseFooter'
import { Navbar } from './navbar'
import { DisclaimerPopup } from './disclaimer'

const Layout = ({ children }) => {
  return (
    <div id="page-wrapper" className={'flex flex-col'}>
      <DisclaimerPopup />

      <Navbar showCoverPhoto={false} />
      <div id="content" className={'min-h-3/4 relative'}>
        {children}
      </div>
      <NoorseFooter />
    </div>
  )
}

export default Layout

export const Container = ({ children, centered = true }) => {
  return (
    <div
      id="content-wrapper"
      className={
        'flex flex-col items-center ' +
        'pt-6 sm:pt-8 md:mx-8 pb-12 ' +
        'bg-gray-light ' +
        'min-h-3/4 h-auto w-auto relative '
      }
    >
      <div
        className={`px-4 md:px-2 sm:w-5/6 xl:w-4/5 ${
          !centered && 'lg:pr-40'
        } max-w-full`}
      >
        {children}
      </div>
    </div>
  )
}
