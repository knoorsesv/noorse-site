import type { FC, PropsWithChildren } from 'react'
import { NewsCard } from './news-card.jsx'
import type { NewsItem } from './types/news'
import { createSnippetFromInhoud } from '../utils/snippet.js'
import { format } from 'date-fns'
import { LinkWrapper } from '../wrappers/link-wrapper.js'
import { ArrowRight } from './icons/icons.js'
import { Card } from './cards.js'

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

export const CompactNewsList: FC<
  PropsWithChildren<{ shownNewsItems: NewsItem[] }>
> = ({ shownNewsItems }) => {
  return (
    <Card
      containerClass={
        'flex flex-col items-start border-solid divide-y divide-gray-200 divide-y-2 grow'
      }
      padding="p-0"
    >
      {shownNewsItems.map((newsItem) => {
        const snippet =
          newsItem.blurb || createSnippetFromInhoud(newsItem.inhoud)
        const dateToShow = newsItem.publishDate || newsItem.createdAt

        return (
          <a
            key={newsItem.title}
            href={`/nieuws/${newsItem.title.replace('/', '-').toLowerCase()}`}
            className={'p-6 flex flex-col items-start gap-2 hover:bg-gray-100'}
          >
            <div className="flex justify-between items-center w-full">
              <div className="font-bold text-lg underline">
                {newsItem.title}
              </div>
              <div className="text-sm italic mx-2">
                {dateToShow && format(dateToShow, 'dd/MM/yy')}
              </div>
            </div>
            <div>{snippet}</div>
          </a>
        )
      })}
      <LinkWrapper
        className={
          ' text-black underline flex items-center gap-2 p-6 w-full hover:bg-gray-100'
        }
        href={'info/nieuws'}
      >
        Alle Nieuws <ArrowRight />
      </LinkWrapper>
    </Card>
  )
}
