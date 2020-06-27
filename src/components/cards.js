import React from 'react'

export const Card = (props) => {
  return (
    <div
      {...props}
      className={`${props.className} elevation-2 border rounded-sm border-opacity-50 border-gray`}
    >
      {props.header && (
        <div className={`${props.children && 'border-b border-gray'}`}>
          {props.image && (
            <figure className={'image m-0'}>
              <img src={props.image.localFile.publicURL} alt={'News header '} />
            </figure>
          )}
          <h3 className={'text-center p-3 m-0'}>{props.header}</h3>
        </div>
      )}
      {props.children && <div className={'w-full p-4'}>{props.children}</div>}
    </div>
  )
}
