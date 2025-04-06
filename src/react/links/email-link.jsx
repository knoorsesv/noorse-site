import { Envelope } from '../icons/icons.tsx'
import { ExternalLink } from './external-link.jsx'

export const EmailLink = ({ address }) => {
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
