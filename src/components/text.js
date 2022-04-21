import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import ctl from '@netlify/classnames-template-literals'

export const TextBlock = ({ children }) => {
  return (
    <div className={'mt-2 mb-4 font-light medium:mb-8 medium:px-6'}>
      {children}
    </div>
  )
}

export const List = ({ children }) => {
  return <ul className={'mb-6 list-inside list-disc'}>{children}</ul>
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
    `${styled && 'underline'} ${textColor || 'text-gray-dark'} ${className}`
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
      {icon && (
        <FontAwesomeIcon
          icon={faExternalLinkAlt}
          size={'sm'}
          className={'max-w-sm pl-1'}
        ></FontAwesomeIcon>
      )}
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
