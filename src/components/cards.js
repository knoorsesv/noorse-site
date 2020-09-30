import React from 'react'
import { Clickable } from './a11y'
import Img from 'gatsby-image'

export const Card = (props) => {
  return (
    <div {...props} className={`${props.className} bg-white elevation-2 `}>
      {props.header && (
        <div className={``}>
          {props.image && (
            <Img
              fluid={props.image.fluid}
              alt={'Card Header Image'}
              imgStyle={{ objectFit: 'scale-down' }}
            />
          )}
          <h3 className={'text-center p-3 m-0 uppercase'}>{props.header}</h3>
        </div>
      )}
      {props.children && <div className={'w-full p-4'}>{props.children}</div>}
    </div>
  )
}

export const ClickableCard = ({ onClick, ...props }) => {
  return Clickable(Card, onClick, props)
}
