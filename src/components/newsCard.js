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
      onClick={goToNews}
      onKeyDown={keyDownHandler}
      role="link"
      tabIndex="0"
    >
      {newsNode.image && (
        <figure className={'image mb-4'}>
          <img src={newsNode.image.localFile.publicURL} alt={'News header '} />
        </figure>
      )}
      {newsNode.blurb && <div className={''}>{newsNode.blurb}</div>}
    </Card>
  )
}
