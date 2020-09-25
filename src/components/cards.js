import React from 'react'
import { Clickable } from './a11y'

export const Card = (props) => {
  return (
    <div
      {...props}
      className={`${props.className} bg-white elevation-2 border rounded-md border-opacity-50 border-gray`}
    >
      {props.header && (
        <div className={``}>
          {props.image && (
            <figure className={'image m-0 w-full'}>
              <img
                src={props.image.localFile.publicURL}
                alt={'News Header Image'}
              />
            </figure>
          )}
          <h2 className={'text-center p-3 m-0'}>{props.header}</h2>
        </div>
      )}
      {props.children && <div className={'w-full p-4'}>{props.children}</div>}
    </div>
  )
}

export const ClickableCard = ({ onClick, ...props }) => {
  return Clickable(Card, onClick, props)
}
