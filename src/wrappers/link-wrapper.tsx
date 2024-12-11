import ctl from '@netlify/classnames-template-literals'
import type { FC, PropsWithChildren } from 'react'

export const LinkWrapper: FC<
  PropsWithChildren<{
    href: string
    className?: string
    activeClassName?: string
  }>
> = ({ href, children, className, activeClassName, ...props }) => {
  const isActive = false
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
