import type { FC, ReactNode } from 'react'
import { ImageWrapper } from '../wrappers/image-wrapper.js'
import { ExternalLink } from './links/external-link.js'
import type { Sponsor } from './types/sponsor.js'

export const SponsorWithLogo: FC<{ sponsor: Sponsor; logoWidth?: string }> = ({
  sponsor,
  logoWidth = 'w-1/2',
}) => {
  return (
    <div className={`max-w-[30%] p-2 ${logoWidth}`} key={sponsor.naam}>
      <ConditionalWrapper
        condition={!!sponsor.websiteUrl}
        wrapper={(children) => (
          <ExternalLink href={sponsor.websiteUrl} styled={false} icon={false}>
            {children}
          </ExternalLink>
        )}
      >
        <ImageWrapper
          image={sponsor.logo}
          alt={`Logo ${sponsor.naam}`}
          loading="lazy"
          className="object-scale-down"
        />
      </ConditionalWrapper>
    </div>
  )
}

const ConditionalWrapper: FC<{
  condition: boolean
  wrapper: (children: ReactNode) => ReactNode
  children: ReactNode
}> = ({ condition, wrapper, children }) =>
  condition ? wrapper(children) : children
