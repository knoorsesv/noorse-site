import React from 'react'
import { Clickable } from './a11y'
import Img from 'gatsby-image'

export const Card = ({ header, image, children, className, ...props }) => {
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
              fluid={image.fluid}
              alt={'Card Header Image'}
              imgStyle={{ objectFit: 'scale-down' }}
            />
          )}
          <h2 className={'text-center p-3 m-0 uppercase min-h-96p'}>
            {props.header}
          </h2>
        </div>
      )}
      {children && <div className={'w-full p-4'}>{children}</div>}
    </div>
  )
}

export const ClickableCard = ({ onClick, ...props }) => {
  return Clickable(Card, onClick, props)
}
