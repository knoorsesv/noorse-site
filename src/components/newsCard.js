import { navigate } from 'gatsby-link'
import React from 'react'
import { ClickableCard } from './cards'

export const NewsCard = ({ newsNode }) => {
  let snippet
  if (!newsNode.blurb) {
    const firstParagraph = newsNode.body.json.content[0].content[0].value
    const endOfSecondSentence = firstParagraph.indexOf(
      '.',
      firstParagraph.indexOf('.') + 1
    )
    snippet = `${
      endOfSecondSentence > 0
        ? firstParagraph.substr(0, endOfSecondSentence)
        : firstParagraph
    }...`
  }

  const goToNews = () => {
    navigate(`/nieuws/${newsNode.title}`)
  }

  // todo: maybe max height on card corresponding to 2x small card?
  return (
    <ClickableCard
      header={newsNode.title}
      image={newsNode.image}
      className={'min-h-128p'}
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
      <div className={'text-center'}>{newsNode.blurb || snippet}</div>
    </ClickableCard>
  )
}
