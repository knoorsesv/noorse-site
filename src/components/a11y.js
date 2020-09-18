import React from 'react'

export const Clickable = (Component, onClick, props) => {
  const keyDownHandler = (event) => {
    if (event.key === 'Enter') {
      onClick()
    }
  }
  return (
    <Component
      {...props}
      onClick={onClick}
      onKeyDown={keyDownHandler}
      role="link"
      tabIndex="0"
    >
      {props.children}
    </Component>
  )
}
