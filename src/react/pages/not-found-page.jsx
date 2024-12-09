import { TextBlock, Title } from '../index'
import { LinkWrapper } from '../../wrappers/link-wrapper.tsx'

export const NotFoundPage = () => {
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
