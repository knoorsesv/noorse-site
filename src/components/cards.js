import React from 'react'

export const Card = (props) => {
  return (
    <div className={'card mx-2 my-2 max-w-full'} {...props}>
      {props.children}
    </div>
  )
}

export const CardHeader = ({ children }) => {
  return (
    <header className={'card-header'}>
      <p className={'card-header-title'}>{children}</p>
    </header>
  )
}
