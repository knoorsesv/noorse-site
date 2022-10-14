import React from 'react'
import { Clickable } from './a11y'
import { GatsbyImage } from 'gatsby-plugin-image'
import ctl from '@netlify/classnames-template-literals'

// todo: type the input
// todo: try to get rid of custom classNames, make all cards the same
export const Card = ({
  header,
  image,
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
    ${headerClass}`
  )
  return (
    <article {...props} className={articleClasses}>
      {header && (
        <div>
          {/* added block class here to override .gatsby-image-wrapper-constrained display: inline-block, not sure if it's the best solution */}
          {image ? (
            <div className={'h-[200px] text-center'}>
              <GatsbyImage
                image={image.gatsbyImageData}
                alt={'Card Header Image'}
                loading="lazy"
              />
            </div>
          ) : (
            <></>
          )}
          <h2 className={titleHeaderClasses}> {header} </h2>
        </div>
      )}
      {children && (
        <div className={`${containerClass} w-full p-4`}>{children}</div>
      )}
    </article>
  )
}

export const SubHeader = ({ children }) => {
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
export const ClickableCard = ({ onClick, ...props }) => {
  // todo: this should just be an <a> tag
  return Clickable(Card, onClick, props)
}
