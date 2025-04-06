import ctl from '@netlify/classnames-template-literals'
import { External } from '../icons/icons.tsx'
import type { ComponentProps, FC } from 'react'

export const ExternalLink: FC<
  ComponentProps<'a'> & {
    icon?: boolean
    styled?: boolean
    altText?: string
    textColor?: string
    href: string
  }
> = ({
  children,
  href,
  icon = true,
  styled = true,
  altText = '',
  textColor = '',
  className,
}) => {
  const linkClasses = ctl(
    `${styled && 'underline'} ${
      textColor || 'text-gray-dark'
    } ${className} inline-flex items-center`
  )

  // todo: too many properties here, aria-label is only necessary when there is only an icon, should be a separate component
  // todo: icon is a badly named boolean, should just be a child component
  return (
    <a
      className={linkClasses}
      href={href}
      aria-label={`${altText}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
      {icon && <External />}
    </a>
  )
}
