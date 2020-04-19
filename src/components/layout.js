

import React from 'react'

import Header from './header'
import Footer from './footer'

const Layout = ({ children }) => (
  <div className="">
    <Header/>
    <div>
      <main>{children}</main>
    </div>
    <Footer/>
  </div>
)



export default Layout
