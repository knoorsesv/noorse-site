import React from 'react'

import Header from './header'
import Footer from './footer'

const Layout = ({ children }) => (
  <div className="flex flex-col justify-between min-h-screen">
    <div>
      <Header />
      <div className="pt-3 px-4">
        <main className="container bg-red-400 h-auto">{children}</main>
      </div>
    </div>
    <div>
      <Footer />
    </div>
  </div>
)

export default Layout
