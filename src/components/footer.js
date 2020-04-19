import React from 'react'

const Footer = () => (
  <div className="border-t h-12 text-center flex flex-row text-sm justify-between items-center px-2">
    <div>
      © {new Date().getFullYear()}, K. Noorse S.V.
    </div>
    <div className="hidden">
      Built with <a href="https://www.gatsbyjs.org">Gatsby</a>
    </div>
    <div>

      <div className="inline-block">
        {/*Add icon*/}
        <a href="https://www.gatsbyjs.org">G</a>
      </div>
      <div className="inline-block ml-2">
        {/*Github icon*/}
        GVDP
      </div>
    </div>
  </div>
)

export default Footer
