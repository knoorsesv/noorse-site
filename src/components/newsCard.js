import { navigate } from 'gatsby-link'
import React from 'react'
import { Card } from './cards'

export const NewsCard = ({ newsNode }) => {
  let snippet
  if (!newsNode.blurb) {
    const firstParagraph = newsNode.body.json.content[0].content[0].value
    const endOfSecondSentence = firstParagraph.indexOf(
      '.',
      firstParagraph.indexOf('.') + 1
    )
    snippet = `${firstParagraph.substr(0, endOfSecondSentence)} ...`
  }

  const goToNews = () => {
    navigate(`/nieuws/${newsNode.title}`)
  }

  const keyDownHandler = (event) => {
    if (event.key === 'Enter') {
      goToNews()
    }
  }
  // todo: maybe max height on card corresponding to 2x small card?
  return (
    <Card
      header={newsNode.title}
      image={newsNode.image}
      className={'min-h-128p'}
      onClick={goToNews}
      onKeyDown={keyDownHandler}
      role="link"
      tabIndex="0"
    >
      <div className={'text-center'}>{newsNode.blurb || snippet}</div>
    </Card>
  )
}
