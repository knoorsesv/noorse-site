import React from 'react'

// todo: remove this, should just be an <a tag
export const Clickable = (Component, onClick, { ...props }) => {
  const keyDownHandler = (event) => {
    if (event.key === 'Enter') {
      onClick()
    }
  }
  return (
    <Component
      {...props}
      className={`cursor-pointer`}
      onClick={onClick}
      onKeyDown={keyDownHandler}
      role="link"
      tabIndex="0"
    />
  )
}
