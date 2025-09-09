import type { FC, PropsWithChildren } from 'react'
import { Attachments, MarkDown, Title } from '../index'
import { Container } from './index'
import { Helmet } from 'react-helmet'
import type { Attachment } from '../types/attachment'

export const MarkDownPage: FC<
  PropsWithChildren<{
    title: string
    description?: string
    attachment?: Attachment[]
    markdownClassNames?: string
    content: string
  }>
> = ({
  description,
  title,
  attachment,
  markdownClassNames,
  content,
  children,
}) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
      </Helmet>
      <Container>
        <Title>{title}</Title>
        {children}
        <MarkDown
          sectionClassNames={`${markdownClassNames} my-8`}
          content={content}
        />
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
