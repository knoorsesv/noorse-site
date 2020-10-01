import { navigate } from 'gatsby-link'
import React from 'react'
import { ClickableCard } from './cards'

export const NewsCard = ({ newsNode }) => {
  const maxChars = 100
  let snippet = ''
  let paragraph = -1
  const firstContent = newsNode.body.json.content[0].content
  while (snippet.length < maxChars && paragraph++ < firstContent.length - 1) {
    const paragraphContent = firstContent[paragraph]
    let extraText
    if (paragraphContent.nodeType === 'text') {
      extraText = paragraphContent.value
    }

    if (paragraphContent.nodeType === 'hyperlink') {
      extraText = paragraphContent.content[0].value
    }
    snippet = (snippet + ' ' + extraText).substr(0, maxChars)
  }
  snippet += ' ...'

  const goToNews = () => {
    navigate(`/nieuws/${newsNode.title}`)
  }

  return (
    <ClickableCard
      header={newsNode.title}
      image={newsNode.image}
      containerClass={'min-h-128p'}
      onClick={goToNews}
    >
      <div
        className={
          'flex justify-between mb-3 text-gray-darker-readable italic text-sm'
        }
      >
        {newsNode.category && (
          <div className={'text-left uppercase'}>{newsNode.category.naam}</div>
        )}
        <div className={'text-center'}>{newsNode.createdAt}</div>
      </div>
      <div className={'text-center min-h-64p'}>{snippet}</div>
    </ClickableCard>
  )
}
