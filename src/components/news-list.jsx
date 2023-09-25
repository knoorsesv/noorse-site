import React from 'react'
import { NewsCard } from './news-card.jsx'

export const NewsList = ({ children, fallBackLogo, shownNewsItems }) => {
  return (
    <section
      className={'flex flex-col flex-wrap justify-between medium:flex-row'}
    >
      {shownNewsItems.map((node) => (
        <div
          key={node.title}
          className={'mb-[10px] medium:basis-1/2 medium:px-2 large:basis-1/3 '}
        >
          <NewsCard newsNode={node} fallBackLogo={fallBackLogo} />
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
