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
  const isActive = window.location.href.includes(href)
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
