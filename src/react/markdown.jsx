import React from 'react'
import { marked } from 'marked'

export const MarkDown = ({ children }) => {
  return (
    <section
      className={'prose mb-4'}
      dangerouslySetInnerHTML={{
        __html: marked(children),
      }}
    ></section>
  )
}
