import React from 'react'
import { EmailLink } from './links/email-link.jsx'

export const TextBlock = ({ children }) => {
  // todo: not needed probably if everything is used with tailwind prose classes
  return (
    <div className={'mt-2 mb-4 font-light medium:mb-8 medium:px-6'}>
      {children}
    </div>
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
