import React from 'react'

export const TextBlock = ({ children }) => {
  return (
    <div className={'mt-2 mb-4 sm:mb-8 font-light sm:px-6'}>{children}</div>
  )
}

export const List = ({ children }) => {
  return <ul className={'list-disc list-inside mb-6'}>{children}</ul>
}

export const ExternalLink = ({ children, url }) => {
  return (
    <a
      className={'text-gray-dark underline'}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  )
}

export const SpacedInfo = ({ items }) => {
  return items.map((item) => {
    return (
      <div className={'flex flex-row justify-between w-full'} key={item.label}>
        <span className={'text-left font-bold'}>{item.label}</span>
        <span className={'text-right'}>{item.value}</span>
      </div>
    )
  })
}
