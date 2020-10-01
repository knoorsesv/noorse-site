import React from 'react'
import { Clickable } from './a11y'
import Img from 'gatsby-image'

export const Card = ({
  header,
  image,
  children,
  className,
  containerClass,
  ...props
}) => {
  return (
    <div
      {...props}
      className={`${className} 
      bg-white elevation-2 
      m-auto w-full
      `}
    >
      {header && (
        <div className={``}>
          {image && (
            <Img
              style={{ height: '202px' }}
              fluid={image.fluid}
              alt={'Card Header Image'}
              imgStyle={{ objectFit: 'cover' }}
            />
          )}
          <h2 className={'text-center p-3 m-0 uppercase min-h-64p'}>
            {header}
          </h2>
        </div>
      )}
      {children && (
        <div className={`${containerClass} w-full p-4`}>{children}</div>
      )}
    </div>
  )
}

export const ClickableCard = ({ onClick, ...props }) => {
  return Clickable(Card, onClick, props)
}
