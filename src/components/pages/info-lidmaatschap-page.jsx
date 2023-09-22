import React from 'react'
import { Helmet } from 'react-helmet'
import { Attachments, MarkDown, Title } from '../index'
import { Container } from '../layout'

export const InfoLidmaatschapPage = ({ content }) => {
  return (
    <>
      <Helmet>
        <title>Lid Worden</title>
        <meta property="og:title" content={`Lid Worden`} />
        <meta
          property="og:description"
          content={`Wil je lid worden van één van onze jeugd- of meisjesploegen? Hier vindt je alle info.`}
        />
      </Helmet>
      <Container>
        <Title>Lid Worden</Title>
        {content ? (
          <>
            <MarkDown>{content.body.body}</MarkDown>
            <section className={'prose'}>
              <Attachments attachments={content.attachment} />
            </section>
          </>
        ) : (
          <section>No content</section>
        )}
      </Container>
    </>
  )
}
