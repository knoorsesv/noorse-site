import type { FC, ReactNode } from 'react'
import { ImageWrapper } from '../wrappers/image-wrapper.js'
import { ExternalLink } from './links/external-link.js'
import type { Sponsor } from './types/sponsor.js'
import ctl from '@netlify/classnames-template-literals'

export const SponsorWithLogo: FC<{
  sponsor: Sponsor
  logoWidth?: string
  maxWidth?: string
}> = ({ sponsor, logoWidth = 'w-1/2', maxWidth = 'max-w-[30%]' }) => {
  return (
    <div className={ctl(` p-2 ${logoWidth} ${maxWidth}`)} key={sponsor.naam}>
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
          className="object-scale-down h-[100px]"
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
