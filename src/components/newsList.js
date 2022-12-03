import React from 'react'
import { NewsCard } from './news-card'

export const NewsList = ({ children, NewsCardImage, shownNewsItems }) => {
  return (
    <section
      className={'flex flex-col flex-wrap justify-between medium:flex-row'}
    >
      {shownNewsItems.map((node) => (
        <div
          key={node.title}
          className={'mb-[10px] medium:basis-1/2 medium:px-2 large:basis-1/3 '}
        >
          <NewsCard newsNode={node} NewsCardImage={NewsCardImage} />
        </div>
      ))}
      <div className={'my-4 flex w-full justify-center text-xl'}>
        {children}
      </div>
    </section>
  )
}
