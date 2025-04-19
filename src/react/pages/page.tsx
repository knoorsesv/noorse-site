import { Helmet } from 'react-helmet'
import { Title } from '../index'
import { Container } from '../layout'
import type { FC, PropsWithChildren } from 'react'

export const Page: FC<
  PropsWithChildren<{ title: string; centered?: boolean }>
> = ({ title, children, centered = true }) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Container centered={centered}>
        <Title>{title}</Title>
        {children}
      </Container>
    </>
  )
}
