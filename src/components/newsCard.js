import { navigate } from 'gatsby-link'
import React from 'react'
import { Card } from './cards'

export const NewsCard = ({ newsNode }) => {
  // console.log(newsNode)
  const goToNews = () => {
    console.log('clicked')
    navigate(`/nieuws/${newsNode.title}`)
  }

  const keyDownHandler = (event) => {
    if (event.key === 'Enter') {
      goToNews()
    }
  }
  return (
    <Card
      header={newsNode.title}
      image={newsNode.image}
      onClick={goToNews}
      onKeyDown={keyDownHandler}
      role="link"
      tabIndex="0"
    >
      {newsNode.blurb && <div className={''}>{newsNode.blurb}</div>}
    </Card>
  )
}
