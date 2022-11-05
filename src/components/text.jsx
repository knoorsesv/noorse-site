import ctl from '@netlify/classnames-template-literals'
import React from 'react'

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
      {icon && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="ml-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          width="16px"
          height="16px"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          />
        </svg>
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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="mr-1"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
        width="16px"
        height="16px"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>

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
