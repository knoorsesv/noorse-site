import ctl from '@netlify/classnames-template-literals'
import React from 'react'

export const Container = ({ children, centered = true }) => {
  const containerWrapperClasses = ctl(`
    flex flex-col ${centered ? 'items-center' : ''}
    pt-6 medium:mx-8 pb-20
    bg-gray-light
    min-h-[75vh] h-auto w-11/12 medium:w-5/6 large:w-3/4
    relative`)
  const childrenWrapper = ctl(`px-4 medium:px-10 large:px-20
                              pt-4
                              max-w-full`)

  return (
    <div id="content-wrapper" className={containerWrapperClasses}>
      <div className={childrenWrapper}>{children}</div>
    </div>
  )
}
