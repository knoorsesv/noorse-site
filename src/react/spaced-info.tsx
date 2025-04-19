import type { FC } from 'react'
import { EmailLink } from './links'

// todo: should this be a definition list?
export const SpacedInfo: FC<{
  items: { label: string; email?: string; value: string }[]
}> = ({ items }) => {
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
