import type { FC, PropsWithChildren } from 'react'
import { NewsCard } from './news-card.jsx'
import type { NewsItem } from './types/news'

export const NewsList: FC<
  PropsWithChildren<{ shownNewsItems: NewsItem[] }>
> = ({ children, shownNewsItems }) => {
  return (
    <section
      className={'medium:flex-row flex flex-col flex-wrap justify-between'}
    >
      {shownNewsItems.map((newsItem) => (
        <div
          key={newsItem.title}
          className={'medium:basis-1/2 medium:px-2 large:basis-1/3 mb-[10px]'}
        >
          <NewsCard newsItem={newsItem} />
        </div>
      ))}
      <div
        className={
          'medium:basis-1/2 large:flex-grow my-4 flex items-center justify-center text-xl'
        }
      >
        {children}
      </div>
    </section>
  )
}
