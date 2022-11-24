import React from 'react'
import ctl from '@netlify/classnames-template-literals'

const Section = ({ children, className }) => {
  return (
    <section
      className={ctl(`${className}
  mb-4
  bg-gray-light px-6 pt-4 pb-6 medium:mb-2 medium:pb-2
  `)}
    >
      {children}
    </section>
  )
}

const SectionTitle = ({ children }) => {
  const backgroundColorHeight = '16px'
  const secondBackgroundHeight = '3px'
  return (
    <div className={'mb-2 flex flex-col items-start'}>
      <h2 className={'mb-0 text-left text-3xl uppercase'}>
        {children}
        <div
          style={{
            width: '140%',
            position: 'relative',
            top: `-15px`,
            visibility: 'visible',
            borderColor:
              'transparent transparent rgba(0,120,0, 0.3) transparent',
            borderWidth: `0 ${backgroundColorHeight} ${backgroundColorHeight} 0`,
            borderStyle: 'solid',
          }}
        />
        <div
          style={{
            width: '140%',
            position: 'relative',
            top: `-12px`,
            visibility: 'visible',
            borderColor:
              'transparent transparent rgba(0,120,0, 0.3) transparent',
            borderWidth: `0 ${secondBackgroundHeight} ${secondBackgroundHeight} 0`,
            borderStyle: 'solid',
          }}
        />
      </h2>
    </div>
  )
}

Section.Title = SectionTitle

export { Section }
