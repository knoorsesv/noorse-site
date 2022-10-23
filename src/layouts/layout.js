import React from 'react'

import { Footer } from '../components/footer'
import { Navbar } from '../components/navbar'
import Seo from '../components/seo'
import ctl from '@netlify/classnames-template-literals'
import { getVersion } from '../queries/version'
import { getLogoUrl } from '../queries/resized-logo'

const Layout = ({ children }) => {
  return (
    <div id="page-wrapper" className={'flex flex-col'}>
      <Seo>
        <meta property="og:image" content={getLogoUrl()} />
      </Seo>

      <Navbar />
      {/* todo: should this be a main tag? */}
      <div id="content" className={'relative flex min-h-[75vh] justify-center'}>
        {children}
      </div>
      <Footer version={getVersion()} />
    </div>
  )
}

export default Layout

export const Container = ({ children }) => {
  const containerWrapperClasses = ctl(`
    flex flex-col items-center
    pt-6 medium:mx-8 pb-20
    bg-gray-light
    min-h-[75vh] h-auto w-11/12 medium:w-5/6 large:w-3/4
    relative`)
  const childrenWrapper = ctl(`px-4 medium:px-10 large:px-20
                              pt-4
                              max-w-full`)

  return (
    <div id="content-wrapper" className={containerWrapperClasses}>
      <div className={childrenWrapper}>{children}</div>
    </div>
  )
}
