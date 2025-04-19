import { TextBlock, Title } from '../index'
import { LinkWrapper } from '../../wrappers/link-wrapper.tsx'
import type { FC } from 'react'

export const NotFoundPage: FC = () => {
  return (
    <>
      {/* <Seo title="404: Not found" /> */}
      <Title>Not found</Title>
      <TextBlock>
        De pagina die je zoekt bestaat niet.
        <p>
          <LinkWrapper href={'/'}>Go Home</LinkWrapper>
        </p>
      </TextBlock>
    </>
  )
}
