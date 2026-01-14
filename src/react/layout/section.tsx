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
        `${className} group medium:mb-2 medium:pb-2 large:h-full mb-4 w-full px-6 pt-4 pb-6`
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
      <h2 className={`relative uppercase`}>
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
  <div className="medium:my-8 my-4 text-center">{children}</div>
)

const SectionList: FC<PropsWithChildren> = ({ children }) => (
  <div className="large:max-w-[1024px] large:px-8 large:grid large:grid-cols-2 large:gap-8 flex w-full flex-col items-center">
    {children}
  </div>
)

Section.Title = SectionTitle
Section.TextContent = SectionTextContent
Section.List = SectionList

export { Section }
