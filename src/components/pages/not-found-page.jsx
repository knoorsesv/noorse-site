import React from 'react'
import { Seo, TextBlock, Title } from '../index'

export const NotFoundPage = ({ Link }) => {
  return (
    <>
      <Seo title="404: Not found" />
      <Title>Not found</Title>
      <TextBlock>
        De pagina die je zoekt bestaat niet.
        <p>
          <Link to={'/'}>Go Home</Link>
        </p>
      </TextBlock>
    </>
  )
}
