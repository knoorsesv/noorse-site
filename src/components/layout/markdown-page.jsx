import React from 'react'
import { Helmet } from 'react-helmet'
import { MarkDown, Title } from '../index'
import { Container } from './index'

export const MarkDownPage = ({ children, title }) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Container>
        <Title>{title}</Title>
        <MarkDown>{children}</MarkDown>
      </Container>
    </>
  )
}
