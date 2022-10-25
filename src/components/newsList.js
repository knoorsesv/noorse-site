import React from 'react'
import { NewsCard } from './news-card'

export const NewsList = ({ children, NewsCardImage, shownNewsItems }) => {
  return (
    <section className={'flex flex-col flex-wrap medium:flex-row'}>
      {shownNewsItems.map((node) => (
        <div key={node.title} className={'mb-[10px] medium:w-1/2 medium:px-2'}>
          <NewsCard newsNode={node} NewsCardImage={NewsCardImage} />
        </div>
      ))}
      <div className={'my-4 flex w-full justify-center text-xl'}>
        {children}
      </div>
    </section>
  )
}
