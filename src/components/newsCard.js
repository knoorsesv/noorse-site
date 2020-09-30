import { navigate } from 'gatsby-link'
import React from 'react'
import { ClickableCard } from './cards'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'

export const NewsCard = ({ newsNode }) => {
  let snippet
  if (!newsNode.blurb) {
    const maxChars = 100
    const firstParagraph = newsNode.body.json.content[0].content[0].value
    const endOfSecondSentence = firstParagraph.indexOf(
      '.',
      firstParagraph.indexOf('.') + 1
    )
    snippet = `${
      endOfSecondSentence > 0
        ? firstParagraph.substr(0, maxChars)
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
          'flex justify-between mb-3 text-gray-darker-readable italic text-sm '
        }
      >
        {newsNode.category && (
          <div className={'text-left uppercase'}>{newsNode.category.naam}</div>
        )}
        <div className={'text-center'}>{newsNode.createdAt}</div>
      </div>
      <div className={'text-center h-64p'}>{newsNode.blurb || snippet}</div>
      <div className={'flex justify-end items-center w-full'}>
        <FontAwesomeIcon icon={faChevronCircleRight}></FontAwesomeIcon>
      </div>
    </ClickableCard>
  )
}
