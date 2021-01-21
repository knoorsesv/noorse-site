import React from 'react'

export const Section = ({ children, className }) => {
  return (
    <section
      className={`${className} 
  bg-gray-light
  px-6 pt-4 pb-6 md:pb-2 mb-4 md:mb-2
  `}
    >
      {children}
    </section>
  )
}
