import React from 'react'

export const Card = ({ children }) => {
  return <div className={'card mx-2 my-2 max-w-full'}>{children}</div>
}

export const CardHeader = ({ children }) => {
  return (
    <header className={'card-header'}>
      <p className={'card-header-title'}>{children}</p>
    </header>
  )
}
