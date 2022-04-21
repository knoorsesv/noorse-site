import React from 'react'
import ctl from '@netlify/classnames-template-literals'

export const Section = ({ children, className }) => {
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
