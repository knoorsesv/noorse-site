import React from 'react'
import { Clickable } from './a11y'
import { GatsbyImage } from 'gatsby-plugin-image'
import ctl from '@netlify/classnames-template-literals'

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

  const titleHeaderClasses = ctl(
    `text-center p-3 m-0 uppercase break-normal ${
      headerHeight ? headerHeight : 'min-h-64p'
    }`
  )
  console.log(image)
  return (
    <article {...props} className={articleClasses}>
      {header && (
        <div>
          {image && (
            <GatsbyImage
              image={image.gatsbyImageData}
              style={{ height: '202px' }}
              alt={'Card Header Image'}
              imgStyle={{ objectFit: 'cover' }}
            />
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
        'flex justify-between mb-3 text-gray-darker-readable italic text-sm'
      }
    >
      {children}
    </div>
  )
}
export const ClickableCard = ({ onClick, ...props }) => {
  return Clickable(Card, onClick, props)
}
