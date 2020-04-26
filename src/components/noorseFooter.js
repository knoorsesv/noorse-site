import React from 'react'

const NoorseFooter = () => (
  <footer className={'footer'}>
    <div className={'grid grid-cols-5'}>
      <div className={'col-start-1 col-end-1 flex flex-column'}>
        <div>
          Sponsors
        </div>
        <div>
          Logo?
        </div>
      </div>
      <div className={'col-start-3 col-end-6 flex items-start justify-between'}>
        <div>
          Sitemap?
        </div>
        <div className="is-divider-vertical"></div>
        <div className={'flex content-end flex-col content-end'}>
          <h1 className={'self-end'}>
            Contact
          </h1>
          <span className={'self-end'}>
              Frans de Peuterstraat
            </span>
          <span className={'self-end'}>
              03/543.xx.xx
            </span>
        </div>
      </div>
    </div>
    <div className={''}>
        <span size={'small'}>
          © {new Date().getFullYear()}, K. Noorse S.V.
        </span>
      <span size={'small'}>
          Built with <a href="https://www.gatsbyjs.org">Gatsby</a>
        </span>
      <div>
        <i size={'medium'}/>
        <i size={'medium'}/>
      </div>
    </div>
  </footer>
)

export default NoorseFooter
