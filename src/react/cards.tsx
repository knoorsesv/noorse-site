import ctl from '@netlify/classnames-template-literals'
import type { FC, PropsWithChildren } from 'react'

// todo: try to get rid of custom classNames, make all cards the same
export const Card: FC<
  PropsWithChildren<
    {
      header?: string
      Image?: FC
      containerClass?: string
      headerHeight?: string
    } & React.HTMLProps<HTMLDivElement>
  >
> = ({
  header,
  Image,
  children,
  className,
  containerClass,
  headerHeight,
  ...props
}) => {
  const articleClasses = ctl(`${className}
  bg-white elevation-2
  m-auto w-full
  `)

  const headerClass = headerHeight === 'small' ? 'h-[32px]' : 'h-[88px]'
  const titleHeaderClasses = ctl(
    `text-center p-3 m-0
    uppercase break-normal
    text-black
    ${headerClass}`
  )
  return (
    <article {...props} className={articleClasses}>
      {header && (
        <div>
          {Image ? <Image /> : <></>}
          <h3 className={titleHeaderClasses}> {header} </h3>
        </div>
      )}
      {children && (
        <div className={`${containerClass} w-full p-4`}>{children}</div>
      )}
    </article>
  )
}

export const SubHeader: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div
      className={
        'mb-3 flex justify-between text-sm italic text-gray-darker-readable'
      }
    >
      {children}
    </div>
  )
}
