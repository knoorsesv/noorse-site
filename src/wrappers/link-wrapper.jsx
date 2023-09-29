import ctl from '@netlify/classnames-template-literals'
import React from 'react'

export const LinkWrapper = ({
  href,
  children,
  className,
  activeClassName,
  ...props
}) => {
  // console.log('import.meta.env?.STORYBOOK', import.meta.env?.STORYBOOK)
  let isActive = false
  // if (typeof window === 'object') {
  // todo: doesnt work because then the ssr differs fromt the client side
  //   isActive = window && window.location.href.includes(href)
  // }
  return (
    <a
      href={href}
      {...props}
      className={ctl(`${className} ${isActive ? activeClassName : ''}`)}
    >
      {children}
    </a>
  )
}
