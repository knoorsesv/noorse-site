import { navigate } from 'gatsby-link'
import contract from '../images/contract.jpg'
import React from 'react'
import { Card, CardHeader } from './cards'

export const NewsCard = (newsNode) => {
  const goToNews = () => {
    navigate(`/nieuws/${newsNode.title}`)
  }

  const keyDownHandler = (event) => {
    if (event.key === 'Enter') {
      goToNews()
    }
  }
  return (
    <Card
      onClick={goToNews}
      onKeyDown={keyDownHandler}
      role="link"
      tabIndex="0"
      key={newsNode.title}
    >
      {newsNode.title.includes('spelers') && (
        <div className={'card-image'}>
          <figure className={'image'}>
            <img src={contract} alt={'News header '} />
          </figure>
        </div>
      )}
      <CardHeader>{newsNode.title}</CardHeader>
      {newsNode.blurb && <div className={'card-content'}>{newsNode.blurb}</div>}
    </Card>
  )
}
