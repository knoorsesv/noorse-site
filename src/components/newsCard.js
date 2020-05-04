import { navigate } from 'gatsby-link'
import contract from '../images/contract.jpg'
import React from 'react'

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
    <div
      className={'card mx-2 my-2 max-w-full'}
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
      <header className={'card-header'}>
        <p className={'card-header-title'} to={newsNode.title}>
          {newsNode.title}
        </p>
      </header>
      {newsNode.blurb && <div className={'card-content'}>{newsNode.blurb}</div>}
    </div>
  )
}
