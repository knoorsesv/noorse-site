import type { FC } from 'react'
import { Attachments, MarkDown, Title } from '../index'
import { Container } from './index'
import { Helmet } from 'react-helmet'
import type { Attachment } from '../types/attachment'

export const MarkDownPage: FC<{
  title: string
  description?: string
  attachment?: Attachment[]
  markdownClassNames?: string
  content: string
}> = ({ description, title, attachment, markdownClassNames, content }) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
      </Helmet>
      <Container>
        <Title>{title}</Title>
        <MarkDown sectionClassNames={markdownClassNames} content={content} />
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
