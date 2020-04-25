import React from 'react'

const NoorseFooter = () => (
  <div>
    <div background={'dark-1'}
         pad={'large'}
         justify={'between'}
         direction={'row'}>
      <div direction={'row'}
           gap={'medium'} border={'between'}>
        <div>
          Logo
        </div>
        <div>
          Sponsors
        </div>
      </div>
      <div direction={'row'} gap={'medium'} border={'between'}>
        <div>
          Sitemap?
        </div>
        <div gap={'medium'}>
          <span weight={'bold'} size={'medium'} alignSelf={'end'}>
            Contact
          </span>
          <div align={'end'}>

            <span size={'small'}>
              Frans de Peuterstraat
            </span>
            <span size={'small'}>
              03/543.xx.xx
            </span>
          </div>
        </div>
      </div>
    </div>
    <div justify={'between'}
         direction={'row'}
         background={'dark-2'}
         pad={{ vertical: 'medium', horizontal: 'large' }}>
      <div direction={'column'} gap={'small'}>
        <span size={'small'}>
          © {new Date().getFullYear()}, K. Noorse S.V.
        </span>
        <span size={'small'}>
          Built with <a href="https://www.gatsbyjs.org">Gatsby</a>
        </span>
      </div>
      <div direction={'row'} gap={'medium'} align={'center'}>
        <i size={'medium'}/>
        <i size={'medium'}/>
      </div>
    </div>
  </div>
)

export default NoorseFooter
