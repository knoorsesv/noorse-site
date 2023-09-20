import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../../layouts/layout'
import { MarkDown, Title } from '../index'
import { Container } from './index'

export const MarkDownPage = ({ children, title }) => {
  return (
    <Layout>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Container>
        <Title>{title}</Title>
        <MarkDown>{children}</MarkDown>
      </Container>
    </Layout>
  )
}
