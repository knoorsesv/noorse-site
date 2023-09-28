import React from 'react'
import { NewsCard } from './news-card.jsx'

export const NewsList = ({ children, shownNewsItems }) => {
  return (
    <section
      className={'flex flex-col flex-wrap justify-between medium:flex-row'}
    >
      {shownNewsItems.map((newsItem) => (
        <div
          key={newsItem.title}
          className={'mb-[10px] medium:basis-1/2 medium:px-2 large:basis-1/3 '}
        >
          <NewsCard newsItem={newsItem} image={newsItem.image} />
        </div>
      ))}
      <div
        className={
          'my-4 flex items-center justify-center text-xl medium:basis-1/2 large:flex-grow'
        }
      >
        {children}
      </div>
    </section>
  )
}
