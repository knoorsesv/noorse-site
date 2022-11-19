import ctl from '@netlify/classnames-template-literals'
import React from 'react'
import { Envelope, External } from './icons/icons.jsx'

export const TextBlock = ({ children }) => {
  // todo: not needed probably if everything is used with tailwind prose classes
  return (
    <div className={'mt-2 mb-4 font-light medium:mb-8 medium:px-6'}>
      {children}
    </div>
  )
}

export const ExternalLink = ({
  children,
  url,
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

  return (
    <a
      className={linkClasses}
      href={url}
      aria-label={`${altText}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
      {icon && <External />}
    </a>
  )
}

export const EmailLink = ({ address }) => {
  return (
    <ExternalLink
      url={`mailto:${address}`}
      icon={false}
      textColor={'text-black'}
    >
      <Envelope />
      {address}
    </ExternalLink>
  )
}

export const SpacedInfo = ({ items }) => {
  return items.map((item) => {
    return (
      <div
        className={'flex w-full flex-row flex-wrap justify-between'}
        key={item.label}
      >
        <span className={'text-left font-bold'}>{item.label}</span>
        <span className={'overflow-hidden text-right'}>
          {item.email ? <EmailLink address={item.value} /> : item.value}
        </span>
      </div>
    )
  })
}
