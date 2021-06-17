import React from 'react'

import { Footer } from './footer'
import { Navbar } from './navbar'
import Seo from './seo'
import ctl from '@netlify/classnames-template-literals'

const Layout = ({ children }) => {
  return (
    <div id="page-wrapper" className={'flex flex-col'}>
      <Seo keywords={[`noorse`]} />

      <Navbar />
      <div id="content" className={'min-h-[75vh] relative flex justify-center'}>
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout

export const Container = ({ children }) => {
  const containerWrapperClasses = ctl(`flex flex-col items-center 
    pt-6 sm:pt-8 md:mx-8 pb-12 
    bg-gray-light 
    min-h-[75vh] h-auto w-11/12 sm:w-5/6 xl:w-3/5 
    relative`)
  const childrenWrapper = ctl(`px-8 md:px-10 lg:px-20 
                              pt-4
                              max-w-full`)
  return (
    <div id="content-wrapper" className={containerWrapperClasses}>
      <div className={childrenWrapper}>{children}</div>
    </div>
  )
}
