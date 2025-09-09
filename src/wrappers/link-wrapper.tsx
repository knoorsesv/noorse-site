import ctl from '@netlify/classnames-template-literals'
import type { FC, PropsWithChildren } from 'react'

export const LinkWrapper: FC<
  PropsWithChildren<{
    href: string
    className?: string
    activeClassName?: string
    isActive?: boolean
  }>
> = ({ href, children, className, activeClassName, isActive, ...props }) => {
  // const isActive = false
  // if (typeof window === 'object') {
  // todo: doesnt work because then the ssr differs fromt the client side
  //   isActive = window && window.location.href.includes(href)
  // }
  // const pathname = new URL(Astro.request.url).pathname;

  // todo: give this a default styling or create a basic Link component so all links are the same
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
