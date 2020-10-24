import React from 'react'

export const Clickable = (Component, onClick, { className, ...props }) => {
  const keyDownHandler = (event) => {
    if (event.key === 'Enter') {
      onClick()
    }
  }
  return (
    <Component
      {...props}
      className={`${className} cursor-pointer`}
      onClick={onClick}
      onKeyDown={keyDownHandler}
      role="link"
      tabIndex="0"
    ></Component>
  )
}
