import type { FC, PropsWithChildren } from 'react'
import { Attachments, MarkDown, Title } from '../index'
import { Container } from './index'
// todo: contentful type shouldnt be defined in pure React component here
import type { AssetFields } from 'contentful'

export const MarkDownPage: FC<
  PropsWithChildren<{
    title: string
    content: string
    attachment?: (AssetFields | undefined)[]
    markdownClassNames?: string
  }>
> = ({ children, title, content, attachment, markdownClassNames }) => {
  return (
    <>
      {/* <Helmet>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        {description ? (
          <meta property="og:description" content={description} />
        ) : (
          <></>
        )}
      </Helmet> */}
      <Container>
        <Title>{title}</Title>
        {children || content ? (
          <MarkDown sectionClassNames={markdownClassNames}>
            {children || content}
          </MarkDown>
        ) : (
          <section>No content</section>
        )}
        {attachment ? (
          <section className="prose">
            <Attachments attachments={attachment} />
          </section>
        ) : (
          <></>
        )}
      </Container>
    </>
  )
}
