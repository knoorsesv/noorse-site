import ctl from '@netlify/classnames-template-literals'
import type { FC, PropsWithChildren } from 'react'

const Section: FC<PropsWithChildren<{ className?: string }>> & {
  Title: typeof SectionTitle
  TextContent: typeof SectionTextContent
  List: typeof SectionList
} = ({ children, className }) => {
  return (
    <section
      className={ctl(
        `${className} group mb-4 w-full px-6 pb-6 pt-4 medium:mb-2 medium:pb-2`
      )}
    >
      {children}
    </section>
  )
}

const SectionTitle: FC<PropsWithChildren> = ({ children }) => {
  const backgroundColorHeight = '16px'
  const secondBackgroundHeight = '3px'
  return (
    <div
      className={
        'mb-2 flex flex-col group-odd:items-start group-even:items-end'
      }
    >
      <h2 className={`relative mb-4 text-3xl uppercase`}>
        {children}
        <div
          style={{
            width: '140%',
            position: 'absolute',
            bottom: `3px`,
            visibility: 'visible',
            borderColor:
              'transparent transparent rgba(0,120,0, 0.3) transparent',
            borderWidth: `0 ${backgroundColorHeight} ${backgroundColorHeight} 0`,
            borderStyle: 'solid',
          }}
          className="group-even:right-0 group-even:-scale-x-100"
        />
        <div
          style={{
            width: '140%',
            position: 'absolute',
            bottom: `-3px`,
            visibility: 'visible',
            borderColor:
              'transparent transparent rgba(0,120,0, 0.3) transparent',
            borderWidth: `0 ${secondBackgroundHeight} ${secondBackgroundHeight} 0`,
            borderStyle: 'solid',
          }}
          className="group-even:right-0 group-even:-scale-x-100"
        />
      </h2>
    </div>
  )
}

const SectionTextContent: FC<PropsWithChildren> = ({ children }) => (
  <div className="my-4 text-center medium:my-8">{children}</div>
)

const SectionList: FC<PropsWithChildren> = ({ children }) => (
  <div className="flex w-full flex-col items-center large:max-w-[1024px] large:px-8">
    {children}
  </div>
)

Section.Title = SectionTitle
Section.TextContent = SectionTextContent
Section.List = SectionList

export { Section }
