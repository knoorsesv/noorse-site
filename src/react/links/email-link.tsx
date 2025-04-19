import type { FC } from 'react'
import { Envelope } from '../icons/icons.tsx'
import { ExternalLink } from './external-link.tsx'

export const EmailLink: FC<{ address: string }> = ({ address }) => {
  return (
    <ExternalLink
      href={`mailto:${address}`}
      icon={false}
      textColor={'text-black'}
    >
      <Envelope />
      {address}
    </ExternalLink>
  )
}
