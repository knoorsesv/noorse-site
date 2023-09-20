import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../../layouts/layout'
import { Container } from '../layout'
import { Title } from '../index'

export const Page = ({ title, children, centered = true }) => {
  return (
    <Layout>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Container centered={centered}>
        <Title>{title}</Title>
        {children}
      </Container>
    </Layout>
  )
}
