import React from 'react'
import { Helmet } from 'react-helmet'
import { Attachments, MarkDown, Title } from '../index'
import { Container } from './index'

export const MarkDownPage = ({ children, title, description, attachment }) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        {description ? (
          <meta property="og:description" content={description} />
        ) : (
          <></>
        )}
      </Helmet>
      <Container>
        <Title>{title}</Title>
        {children ? (
          <MarkDown>{children}</MarkDown>
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
