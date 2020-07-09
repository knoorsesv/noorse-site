import React from 'react'

import NoorseFooter from './noorseFooter'
import { Navbar } from './navbar'

const Layout = ({ children, coverPhoto }) => {
  return (
    <div className={'flex min-h-screen flex-col'}>
      <Navbar coverPhoto={coverPhoto}/>
      <div
        id="content"
        className={
          'mt-3 mb-12'
        }
      >
        {children}
      </div>
      <NoorseFooter/>
    </div>
  )
}

export default Layout

export const Container = ({ children }) => {
  return (
    <div className={'flex flex-col items-center'}>
      <div className={'px-6 lg:px-12 md:my-5 w-full md:w-5/6 xl:w-3/5'}>
        {children}
      </div>
    </div>
  )
}

export const Section = ({ children, className }) => {
  return <section className={`${className} bg-gray-light md:bg-transparent px-6 pt-4 pb-6 md:pb-2 mb-4 md:mb-2`}>
    {children}
  </section>
}