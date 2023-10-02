import { Helmet } from 'react-helmet'
import { Title } from '../index'
import { Container } from '../layout'

export const Page = ({ title, children, centered = true }) => {
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
