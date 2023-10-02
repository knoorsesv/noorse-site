import { Attachments, MarkDown, Title } from '../index'
import { Container } from './index'

export const MarkDownPage = ({
  children,
  title,
  content,
  attachment,
}) => {
  // console.log(attachment)
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
          <MarkDown>{children || content}</MarkDown>
        ) : (
          <section>No content</section>
        )}
        {attachment ? (
          <section className={'prose'}>
            <Attachments attachments={attachment} />
          </section>
        ) : (
          <></>
        )}
      </Container>
    </>
  )
}
