import React from 'react'
import ctl from '@netlify/classnames-template-literals'

export const Section = ({ children, className }) => {
  return (
    <section
      className={ctl(`${className}
  bg-gray-light
  px-6 pt-4 pb-6 medium:pb-2 mb-4 medium:mb-2
  `)}
    >
      {children}
    </section>
  )
}
