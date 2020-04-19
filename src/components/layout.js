import React from 'react'

import Header from './header'
import Footer from './footer'

const Layout = ({ children }) => (
  <div >
    <div>
      <Header />
      <div >
        <main >{children}</main>
      </div>
    </div>
    <div>
      <Footer />
    </div>
  </div>
)

export default Layout
